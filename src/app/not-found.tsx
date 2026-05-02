import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#111111] text-white flex items-center justify-center px-5">
      <div className="max-w-md w-full text-center">
        <div className="rounded-2xl border border-white/10 bg-[#1B1B1B] p-8 md:p-12">
          <div className="flex justify-center mb-6">
            <Search className="h-12 w-12 text-[#F1C40F]" />
          </div>

          <h1 className="text-5xl font-bold mb-2 text-[#C62828]">404</h1>

          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Page Not Found
          </h2>

          <p className="text-white/75 text-center mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C62828] px-6 py-3 font-semibold text-white transition hover:bg-[#A62020] active:scale-[0.98]"
          >
            <Home className="h-4 w-4" />
            Return to Home
          </Link>

          <p className="text-white/50 text-sm mt-8">
            Explore the dojo and find what you&apos;re looking for.
          </p>
        </div>
      </div>
    </div>
  );
}
