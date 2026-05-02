"use client";

import { motion } from "framer-motion";
import { ImageOff } from "lucide-react";

interface EmptyGalleryStateProps {
  title?: string;
  message?: string;
}

export default function EmptyGalleryState({
  title = "No Photos Available Yet",
  message = "Gallery photos will be added soon. Check back later for training session documentation.",
}: EmptyGalleryStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center py-20 md:py-32"
    >
      <div className="rounded-2xl border border-white/10 bg-[#1B1B1B] p-12 text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-white/5 p-4">
            <ImageOff className="h-12 w-12 text-white/40" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-3 text-white/70">{message}</p>
      </div>
    </motion.div>
  );
}
