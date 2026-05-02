"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SiteHeader from "@/components/site-header";

const categories = [
  "All",
  "Kids Training",
  "Women Self-Defense",
  "Group Training",
  "Events & Seminars",
  "Private Classes",
  "Community Activities",
] as const;

const galleryItems = [
  { title: "Kids Fundamentals", category: "Kids Training", placeholder: "[Training Session Photo Placeholder]" },
  { title: "Women Safety Workshop", category: "Women Self-Defense", placeholder: "[Training Session Photo Placeholder]" },
  { title: "Group Technical Drill", category: "Group Training", placeholder: "[Training Session Photo Placeholder]" },
  { title: "Seminar Demonstration", category: "Events & Seminars", placeholder: "[Seminar Video Placeholder]" },
  { title: "Private Coaching Session", category: "Private Classes", placeholder: "[Training Session Photo Placeholder]" },
  { title: "Community Sharing Day", category: "Community Activities", placeholder: "[Event Photo Placeholder]" },
  { title: "Kids Partner Exercise", category: "Kids Training", placeholder: "[Training Session Photo Placeholder]" },
  { title: "Instructor-Led Defense Class", category: "Women Self-Defense", placeholder: "[Training Session Photo Placeholder]" },
  { title: "Organization Group Session", category: "Group Training", placeholder: "[Event Photo Placeholder]" },
];

function FadeInSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const [activeItem, setActiveItem] = useState<(typeof galleryItems)[number] | null>(null);
  const year = useMemo(() => new Date().getFullYear(), []);

  const filteredItems =
    activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#111111] text-white">
      <SiteHeader />

      <main>
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <FadeInSection>
              <h1 className="text-4xl font-bold md:text-5xl">Gallery</h1>
              <p className="mt-4 max-w-3xl text-white/80">
                Organized media showcase for FIJI training sessions, seminars, and community activities.
              </p>
            </FadeInSection>

            <div className="mt-7 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeCategory === category
                      ? "bg-[#C62828] text-white"
                      : "border border-white/20 text-white/80 hover:border-[#C62828]"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, idx) => (
              <FadeInSection key={`${item.title}-${idx}`} delay={0.03 * idx}>
                <button
                  className="group h-full w-full rounded-2xl border border-white/10 bg-[#1B1B1B] p-4 text-left transition hover:-translate-y-1 hover:border-[#C62828]/70"
                  onClick={() => setActiveItem(item)}
                >
                  <div className="rounded-xl border border-dashed border-white/20 bg-[#252525] px-3 py-12 text-center text-sm text-white/60 transition group-hover:border-[#C62828]/60">
                    {item.placeholder}
                  </div>
                  <p className="mt-4 text-lg font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-white/70">{item.category}</p>
                </button>
              </FadeInSection>
            ))}
          </div>
        </section>
      </main>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="fixed inset-0 z-70 flex items-center justify-center bg-black/75 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              className="w-full max-w-2xl rounded-2xl border border-white/15 bg-[#171717] p-6"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <h3 className="text-xl font-semibold">{activeItem.title}</h3>
              <p className="mt-1 text-sm text-red-100">{activeItem.category}</p>
              <div className="mt-4 rounded-xl border border-dashed border-white/25 bg-[#252525] px-3 py-16 text-center text-white/70">
                {activeItem.placeholder}
              </div>
              <button className="mt-5 rounded-full bg-[#C62828] px-5 py-2 text-sm font-semibold" onClick={() => setActiveItem(null)}>
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="border-t border-white/10 bg-[#111111] px-5 py-8 text-center text-sm text-white/60">
        <p>FIJI Gallery - Structured documentation of training excellence, growth, and community spirit.</p>
        <p className="mt-2">Copyright {year} FIJI (Firman Ishikawaryu Ju-Jutsu Indonesia). All rights reserved.</p>
      </footer>
    </div>
  );
}
