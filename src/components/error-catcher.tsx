"use client";

import { useEffect, ReactNode } from "react";
import { errorLogger } from "@/lib/error-logger";

/**
 * Global error catcher that silently logs network and CORS errors
 * Prevents unhandled promise rejections from breaking the app
 */
export default function ErrorCatcher({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Catch unhandled promise rejections (including fetch failures)
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      const error =
        reason instanceof Error ? reason : new Error(String(reason));

      // Log CORS errors silently
      if (
        error.message.includes("CORS") ||
        error.message.includes("cross-origin") ||
        error.message.includes("Failed to fetch")
      ) {
        errorLogger.log(error, "network", {
          type: "Unhandled promise rejection (likely CORS)",
        });

        // Prevent the error from being logged to console in production
        if (process.env.NODE_ENV !== "development") {
          event.preventDefault();
        }
      }
    };

    // Catch global errors
    const handleError = (event: ErrorEvent) => {
      if (
        event.error?.message?.includes("CORS") ||
        event.error?.message?.includes("cross-origin") ||
        event.error?.message?.includes("XMLHttpRequest")
      ) {
        errorLogger.logCorsError("Unknown external resource", window.location.origin);

        // Prevent the error from crashing the app in production
        if (process.env.NODE_ENV !== "development") {
          event.preventDefault();
        }
      }
    };

    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
      window.removeEventListener("error", handleError);
    };
  }, []);

  return <>{children}</>;
}
