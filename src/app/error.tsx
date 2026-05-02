"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, Home, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      // Logging the error object directly first makes it clickable/expandable
      console.error("[FIJI Error Boundary] Original Error:", error);

      console.error("[FIJI Error Boundary] Details:", {
        message: error.message || "No message",
        stack: error.stack,
        digest: error.digest,
        timestamp: new Date().toISOString(),
      });
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-[#111111] text-white flex items-center justify-center px-5">
      <div className="max-w-md w-full">
        <div className="rounded-2xl border border-white/10 bg-[#1B1B1B] p-8 md:p-12">
          <div className="flex justify-center mb-6">
            <AlertCircle className="h-12 w-12 text-[#C62828]" />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Something Went Wrong
          </h1>

          <p className="text-white/75 text-center mb-2">
            We encountered an unexpected error while processing your request.
          </p>

          {process.env.NODE_ENV === "development" && (
            <div className="mt-6 p-4 rounded-lg bg-[#2A2A2A] border border-[#C62828]/30">
              <p className="text-xs font-mono text-[#F1C40F] mb-2">
                Development Debug Info:
              </p>
              <p className="text-xs text-white/60 font-mono wrap-break-word">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-white/50 font-mono mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}

          <div className="flex flex-col gap-3 mt-8">
            <button
              onClick={reset}
              className="flex items-center justify-center gap-2 rounded-full bg-[#C62828] px-6 py-3 font-semibold text-white transition hover:bg-[#A62020] active:scale-[0.98]"
            >
              <RotateCcw className="h-4 w-4" />
              Try Again
            </button>

            <Link
              href="/"
              className="flex items-center justify-center gap-2 rounded-full border border-[#F1C40F] px-6 py-3 font-semibold text-[#F1C40F] transition hover:bg-[#F1C40F] hover:text-[#111111] active:scale-[0.98]"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>

        <p className="text-center text-white/40 text-sm mt-6">
          If this problem persists, please contact us.
        </p>
      </div>
    </div>
  );
}
