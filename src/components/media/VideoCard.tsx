"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import { isImageAvailable, isVideoAvailable } from "@/lib/media-validation";

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail?: string;
  videoUrl?: string;
  placeholder?: string;
  onClick: () => void;
}

export default function VideoCard({
  title,
  description,
  thumbnail,
  videoUrl,
  placeholder,
  onClick,
}: VideoCardProps) {
  const hasThumbnail = isImageAvailable(thumbnail);
  const hasVideo = isVideoAvailable(videoUrl);

  return (
    <motion.button
      className="group h-full w-full rounded-2xl border border-white/10 bg-[#1B1B1B] p-4 text-left transition hover:-translate-y-1 hover:border-[#C62828]/70"
      onClick={onClick}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      disabled={!hasVideo}
    >
      <div className="relative rounded-xl border border-white/10 bg-[#252525] overflow-hidden">
        {hasThumbnail && thumbnail ? (
          <>
            <Image
              src={thumbnail}
              alt={title}
              width={400}
              height={225}
              className="h-48 w-full object-cover transition group-hover:scale-105"
              priority={false}
            />
            {hasVideo && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/20">
                <Play className="h-12 w-12 fill-white text-white drop-shadow-lg" />
              </div>
            )}
          </>
        ) : (
          <>
            <div className="h-48 w-full px-3 py-12 text-center text-sm text-white/60 border border-dashed border-white/20 flex items-center justify-center transition group-hover:border-[#C62828]/60">
              {placeholder || "Video not available right now"}
            </div>
            {hasVideo && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Play className="h-12 w-12 fill-white/40 text-white/40" />
              </div>
            )}
          </>
        )}
      </div>
      <p className="mt-4 text-lg font-semibold text-white">{title}</p>
      <p className="mt-1 text-sm text-white/70 line-clamp-2">{description}</p>
    </motion.button>
  );
}
