"use client";

import { motion } from "framer-motion";
import { Video, ArrowRight } from "lucide-react";

interface YouTubeCTAProps {
  youtubeUrl: string;
  title?: string;
  description?: string;
}

export default function YouTubeCTA({
  youtubeUrl,
  title = "Watch Full Documentation on YouTube",
  description = "Access our complete library of training videos, seminars, and instructional content",
}: YouTubeCTAProps) {
  return (
    <motion.a
      href={youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block mt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="rounded-2xl border border-white/10 bg-linear-to-r from-[#C62828]/10 to-[#C62828]/5 p-8 md:p-12 hover:border-[#C62828]/50 transition group cursor-pointer">
        <div className="flex items-center gap-4 md:gap-6">
          <div className="shrink-0">
            <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-xl bg-[#C62828] group-hover:scale-110 transition">
              <Video className="h-8 w-8 md:h-10 md:w-10 text-white fill-white" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {title}
            </h3>
            <p className="mt-2 text-sm md:text-base text-white/70">
              {description}
            </p>
          </div>
          <div className="shrink-0">
            <ArrowRight className="h-6 w-6 md:h-8 md:w-8 text-[#C62828] group-hover:translate-x-2 transition" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}
