"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface VideoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  videoUrl: string;
}

export default function VideoLightbox({
  isOpen,
  onClose,
  title,
  description,
  videoUrl,
}: VideoLightboxProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-4xl rounded-2xl border border-white/15 bg-[#171717] p-6"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{description}</p>
              </div>
              <button
                className="rounded-full p-2 hover:bg-white/10 transition"
                onClick={onClose}
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-[#252525] overflow-hidden aspect-video">
              <iframe
                src={videoUrl}
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
