"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HeartHandshake, Shield, Sparkles, Target, Users } from "lucide-react";
import SiteHeader from "@/components/site-header";

const timeline = [
  {
    title: "Origin of Ishikawaryu Ju-Jutsu",
    period: "Traditional Roots",
    description:
      "Ishikawaryu Ju-Jutsu is rooted in Japanese martial values focused on discipline, composure, and practical technique.",
  },
  {
    title: "Foundation of FIJI",
    period: "Early Development",
    description:
      "FIJI (Firman Ishikawaryu Ju-Jutsu Indonesia) was established to preserve tradition while making quality training accessible in Indonesia.",
  },
  {
    title: "Growth in Indonesia",
    period: "Community Expansion",
    description:
      "Programs expanded for children, teens, adults, women, and seniors with a consistent emphasis on safety and mentorship.",
  },
  {
    title: "Training Philosophy",
    period: "Character and Skill",
    description:
      "The academy combines technical training with respect, confidence, anti-bullying awareness, and mental resilience.",
  },
  {
    title: "Community Activities",
    period: "Events and Seminars",
    description:
      "FIJI continues to host social activities, seminars, and collaborative sessions that build a positive martial arts culture.",
  },
  {
    title: "Current Mission",
    period: "Today",
    description:
      "Empower all generations through structured Japanese Ju-Jutsu education that is strong, welcoming, and professionally guided.",
  },
];

const philosophyCards = [
  { title: "Discipline", icon: Target, description: "Consistent habits that shape strong mindset and responsible action." },
  { title: "Respect", icon: HeartHandshake, description: "Honor for self, instructors, and training partners in every session." },
  { title: "Self-Defense", icon: Shield, description: "Practical techniques for personal safety and situational awareness." },
  { title: "Confidence", icon: Sparkles, description: "Steady courage developed through structured progress and support." },
  { title: "Anti-Bullying", icon: Users, description: "Training that builds boundaries, empathy, and healthy social behavior." },
];

const mediaPlaceholders = [
  "[Training Activity Photo Placeholder]",
  "[Event Documentation Placeholder]",
  "[Seminar Video Placeholder]",
  "[Community Activities Placeholder]",
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const [activeMedia, setActiveMedia] = useState<string | null>(null);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="bg-[#111111] text-white">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,40,40,0.35),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
            <FadeInSection>
              <div className="rounded-3xl border border-white/10 bg-linear-to-br from-[#1F1F1F] to-[#111111] p-8 md:p-12">
                <p className="inline-flex rounded-full border border-[#C62828]/50 bg-[#C62828]/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-red-100">
                  [FIJI Logo Placeholder]
                </p>
                <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                  Preserving Tradition, Building Confidence, Empowering Generations
                </h1>
                <p className="mt-4 max-w-3xl text-white/80">
                  Discover the story and mission of FIJI (Firman Ishikawaryu Ju-Jutsu Indonesia), where Japanese martial arts values meet modern professional coaching.
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <FadeInSection>
            <h2 className="text-3xl font-bold md:text-4xl">Historical Timeline</h2>
            <p className="mt-4 max-w-3xl text-white/80">
              A brief journey through the roots, growth, and mission of FIJI in Indonesia.
            </p>
          </FadeInSection>

          <div className="mt-10 space-y-5">
            {timeline.map((item, idx) => (
              <FadeInSection key={item.title} delay={0.06 * idx}>
                <div className="rounded-2xl border border-white/10 bg-[#1C1C1C] p-6 transition hover:-translate-y-1 hover:border-[#C62828]/70">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-red-200">{item.period}</p>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-white/75">{item.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#181818]">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <FadeInSection>
              <h2 className="text-3xl font-bold md:text-4xl">Founder and Instructors</h2>
            </FadeInSection>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              <FadeInSection>
                <div className="rounded-2xl border border-white/10 bg-[#1B1B1B] p-5">
                  <div className="rounded-xl border border-dashed border-white/20 bg-[#252525] px-3 py-10 text-center text-sm text-white/60">
                    [Founder Photo Placeholder]
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Founder Profile</h3>
                  <p className="mt-2 text-sm text-white/75">Dedicated to preserving Japanese martial values while nurturing modern confidence and safety-oriented training.</p>
                </div>
              </FadeInSection>
              <FadeInSection delay={0.08}>
                <div className="rounded-2xl border border-white/10 bg-[#1B1B1B] p-5">
                  <div className="rounded-xl border border-dashed border-white/20 bg-[#252525] px-3 py-10 text-center text-sm text-white/60">
                    [Chief Instructors Placeholder]
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Chief Instructors</h3>
                  <p className="mt-2 text-sm text-white/75">Experienced mentors focused on technical detail, safe progressions, and positive student development.</p>
                </div>
              </FadeInSection>
              <FadeInSection delay={0.14}>
                <div className="rounded-2xl border border-white/10 bg-[#1B1B1B] p-5">
                  <div className="rounded-xl border border-dashed border-white/20 bg-[#252525] px-3 py-10 text-center text-sm text-white/60">
                    [Training Video Placeholder]
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Training Vision</h3>
                  <p className="mt-2 text-sm text-white/75">Building disciplined, respectful, and resilient students through community-centered martial arts education.</p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <FadeInSection>
            <h2 className="text-3xl font-bold md:text-4xl">Training Philosophy</h2>
          </FadeInSection>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {philosophyCards.map((item, idx) => (
              <FadeInSection key={item.title} delay={0.06 * idx}>
                <div className="h-full rounded-2xl border border-white/10 bg-[#1B1B1B] p-5">
                  <item.icon className="h-6 w-6 text-[#F1C40F]" />
                  <h3 className="mt-3 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/75">{item.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#181818]">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <FadeInSection>
              <h2 className="text-3xl font-bold md:text-4xl">Media Showcase</h2>
              <p className="mt-4 max-w-3xl text-white/80">Gallery placeholders for photos, event documentation, and seminar videos. Click any card to preview.</p>
            </FadeInSection>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {mediaPlaceholders.map((item, idx) => (
                <FadeInSection key={item} delay={0.05 * idx}>
                  <button
                    className="h-full w-full rounded-2xl border border-white/10 bg-[#1B1B1B] p-4 text-left transition hover:-translate-y-1 hover:border-[#C62828]/70"
                    onClick={() => setActiveMedia(item)}
                  >
                    <div className="rounded-xl border border-dashed border-white/20 bg-[#252525] px-3 py-10 text-center text-sm text-white/60">
                      {item}
                    </div>
                  </button>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {activeMedia && (
          <motion.div
            className="fixed inset-0 z-70 flex items-center justify-center bg-black/75 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveMedia(null)}
          >
            <motion.div
              className="w-full max-w-xl rounded-2xl border border-white/15 bg-[#171717] p-6"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <h3 className="text-xl font-semibold">Media Preview</h3>
              <div className="mt-4 rounded-xl border border-dashed border-white/25 bg-[#252525] px-3 py-14 text-center text-white/70">
                {activeMedia}
              </div>
              <button className="mt-5 rounded-full bg-[#C62828] px-5 py-2 text-sm font-semibold" onClick={() => setActiveMedia(null)}>
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="border-t border-white/10 bg-[#111111] px-5 py-8 text-center text-sm text-white/60">
        <p>FIJI Indonesia - Traditional Japanese martial arts with a modern, safe, and empowering learning environment.</p>
        <p className="mt-2">Copyright {year} FIJI (Firman Ishikawaryu Ju-Jutsu Indonesia). All rights reserved.</p>
      </footer>
    </div>
  );
}
