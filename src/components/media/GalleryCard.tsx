"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { isImageAvailable } from "@/lib/media-validation";

interface GalleryCardProps {
  title: string;
  category: string;
  image?: string;
  placeholder?: string;
  onClick: () => void;
}

export default function GalleryCard({
  title,
  category,
  image,
  placeholder,
  onClick,
}: GalleryCardProps) {
  const hasImage = isImageAvailable(image);

  return (
    <motion.button
      className="group h-full w-full rounded-2xl border border-white/10 bg-[#1B1B1B] p-4 text-left transition hover:-translate-y-1 hover:border-[#C62828]/70"
      onClick={onClick}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      disabled={!hasImage}
    >
      <div className="relative rounded-xl border border-white/10 bg-[#252525] overflow-hidden">
        {hasImage && image ? (
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="h-48 w-full object-cover transition group-hover:scale-105"
            priority={false}
          />
        ) : (
          <div className="h-48 w-full px-3 py-12 text-center text-sm text-white/60 border border-dashed border-white/20 flex items-center justify-center transition group-hover:border-[#C62828]/60">
            {placeholder || "Photo not available right now"}
          </div>
        )}
      </div>
      <p className="mt-4 text-lg font-semibold text-white">{title}</p>
      <p className="mt-1 text-sm text-white/70">{category}</p>
    </motion.button>
  );
}
