"use client";

import { motion } from "framer-motion";
import { VideoOff } from "lucide-react";

interface EmptyVideoSectionStateProps {
  title?: string;
  message?: string;
}

export default function EmptyVideoSectionState({
  title = "No Videos Available Yet",
  message = "Video documentation will be added soon. Follow our YouTube channel for updates.",
}: EmptyVideoSectionStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center py-16 md:py-24"
    >
      <div className="rounded-2xl border border-white/10 bg-[#1B1B1B] p-10 text-center max-w-md">
        <div className="flex justify-center mb-5">
          <div className="rounded-full bg-white/5 p-4">
            <VideoOff className="h-10 w-10 text-white/40" />
          </div>
        </div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{message}</p>
      </div>
    </motion.div>
  );
}
