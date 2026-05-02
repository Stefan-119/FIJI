"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  image?: string;
  placeholder?: string;
}

export default function Lightbox({
  isOpen,
  onClose,
  title,
  category,
  image,
  placeholder,
}: LightboxProps) {
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
            className="w-full max-w-3xl rounded-2xl border border-white/15 bg-[#171717] p-6"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="mt-1 text-sm text-red-300 font-medium">{category}</p>

            <div className="mt-6 rounded-xl border border-white/10 bg-[#252525] overflow-hidden">
              {image ? (
                <Image
                  src={image}
                  alt={title}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              ) : (
                <div className="w-full px-3 py-20 text-center text-white/70 border border-dashed border-white/20">
                  {placeholder || "[Image Placeholder]"}
                </div>
              )}
            </div>

            <button
              className="mt-6 rounded-full bg-[#C62828] hover:bg-[#A01F1F] px-6 py-2 text-sm font-semibold text-white transition"
              onClick={onClose}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
