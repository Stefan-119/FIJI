"use client";

import Link from "next/link";
import { Home, AlertTriangle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-[#111111] text-white">
        <div className="min-h-screen flex items-center justify-center px-5">
          <div className="max-w-md w-full">
            <div className="rounded-2xl border border-white/10 bg-[#1B1B1B] p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <AlertTriangle className="h-12 w-12 text-[#C62828]" />
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
                Critical Error
              </h1>

              <p className="text-white/75 text-center mb-4">
                A critical error occurred. The application encountered a serious problem and needs to restart.
              </p>

              {process.env.NODE_ENV === "development" && (
                <div className="mt-4 p-4 rounded-lg bg-[#2A2A2A] border border-[#C62828]/30">
                  <p className="text-xs font-mono text-[#F1C40F] mb-2">
                    Debug Info:
                  </p>
                  <p className="text-xs text-white/60 font-mono wrap-break-word">
                    {error.message}
                  </p>
                </div>
              )}

              <div className="flex flex-col gap-3 mt-8">
                <button
                  onClick={reset}
                  className="rounded-full bg-[#C62828] px-6 py-3 font-semibold text-white transition hover:bg-[#A62020] active:scale-[0.98]"
                >
                  Restart Application
                </button>

                <Link
                  href="/"
                  className="flex items-center justify-center gap-2 rounded-full border border-[#F1C40F] px-6 py-3 font-semibold text-[#F1C40F] transition hover:bg-[#F1C40F] hover:text-[#111111] active:scale-[0.98]"
                >
                  <Home className="h-4 w-4" />
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
