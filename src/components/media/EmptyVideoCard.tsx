"use client";

import { VideoOff } from "lucide-react";

interface EmptyVideoCardProps {
  message?: string;
  showIcon?: boolean;
}

export default function EmptyVideoCard({
  message = "Video not available right now",
  showIcon = true,
}: EmptyVideoCardProps) {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-[#1B1B1B] p-4">
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-[#252525] px-3 py-12 h-48">
        {showIcon && <VideoOff className="h-8 w-8 text-white/40 mb-3" />}
        <p className="text-center text-sm text-white/60">{message}</p>
      </div>
      <div className="mt-4 h-6 bg-white/5 rounded animate-pulse" />
      <div className="mt-2 h-4 bg-white/5 rounded w-3/4 animate-pulse" />
    </div>
  );
}
