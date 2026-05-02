"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Users,
  Target,
  Heart,
  Zap,
  Trophy,
  Shield,
  Clock,
} from "lucide-react";
import SiteHeader from "@/components/site-header";

const programs = [
  {
    title: "Kids Beginner Class",
    subtitle: "Ages 3-12",
    description:
      "Foundational movement, confidence building, and fun learning in a safe environment. Focus on basic techniques and character development.",
    benefits: ["Coordination", "Confidence", "Discipline", "Anti-bullying"],
    icon: Users,
    schedule: "Mon, Wed, Fri 16:00-17:00 | Sat 09:00-10:00",
  },
  {
    title: "Teen Discipline Program",
    subtitle: "Ages 13-17",
    description:
      "Athletic training combined with mental discipline. Building practical self-defense skills while developing focus and respect.",
    benefits: ["Self-defense", "Focus", "Fitness", "Leadership"],
    icon: Target,
    schedule: "Mon, Wed, Fri 19:00-20:30 | Sat 10:30-12:00",
  },
  {
    title: "Adult Self-Defense",
    subtitle: "Ages 18+",
    description:
      "Practical techniques for real-world safety. Strength, mobility, and confidence training designed for working professionals.",
    benefits: ["Strength", "Safety", "Stress relief", "Community"],
    icon: Shield,
    schedule: "Mon, Wed, Fri 19:00-20:30 | Sat 10:30-12:00",
  },
  {
    title: "Women Self-Defense",
    subtitle: "All Ages",
    description:
      "Empowering women with practical defense skills and awareness. Scenario-based training in a supportive, women-only environment.",
    benefits: ["Empowerment", "Awareness", "Confidence", "Safety skills"],
    icon: Heart,
    schedule: "Mon, Wed, Fri 20:30-21:15 | Sat 12:00-12:45",
  },
  {
    title: "Senior Wellness Training",
    subtitle: "Ages 50+",
    description:
      "Low-impact training focused on balance, flexibility, and healthy aging. Maintain vitality and join an active community.",
    benefits: ["Balance", "Flexibility", "Longevity", "Social connection"],
    icon: Zap,
    schedule: "Custom scheduling available",
  },
  {
    title: "Private Coaching",
    subtitle: "Personalized",
    description:
      "One-on-one coaching tailored to your goals, pace, and priorities. Flexible scheduling and customized progression.",
    benefits: ["Personalization", "Flexibility", "Intensive focus", "Faster progress"],
    icon: Trophy,
    schedule: "By appointment",
  },
  {
    title: "Group Training",
    subtitle: "Organizations & Schools",
    description:
      "Structured team sessions for companies, schools, and communities. Building teamwork while developing practical skills.",
    benefits: ["Team building", "Leadership", "Fitness", "Bonding"],
    icon: Users,
    schedule: "Customizable",
  },
  {
    title: "Beginner-Friendly Program",
    subtitle: "All Ages",
    description:
      "Perfect entry point for those new to martial arts. No prior experience needed—we'll teach you from the ground up.",
    benefits: ["Welcoming", "Progressive", "Supportive", "Accessible"],
    icon: Clock,
    schedule: "Multiple times available",
  },
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

export default function ProgramsPage() {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);
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
                  Training Programs
                </p>
                <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                  Training Programs for Everyone
                </h1>
                <p className="mt-4 max-w-3xl text-white/80">
                  FIJI offers specialized martial arts training for all ages and fitness levels. Find the program that fits your goals and join our growing community of disciplined practitioners.
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <FadeInSection>
            <h2 className="text-3xl font-bold md:text-4xl">Our Programs</h2>
            <p className="mt-4 max-w-3xl text-white/80">
              Whether you&apos;re a complete beginner or looking to advance your skills, we have a program designed for you.
            </p>
          </FadeInSection>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {programs.map((program, idx) => {
              const isExpanded = expandedProgram === program.title;
              return (
                <FadeInSection key={program.title} delay={0.05 * idx}>
                  <motion.div
                    className="group rounded-2xl border border-white/10 bg-[#1B1B1B] p-6 cursor-pointer transition hover:border-[#C62828]/50"
                    onClick={() =>
                      setExpandedProgram(
                        isExpanded ? null : program.title
                      )
                    }
                    animate={{
                      borderColor: isExpanded
                        ? "rgba(198, 40, 40, 0.5)"
                        : "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <program.icon className="h-6 w-6 text-[#F1C40F] mb-3" />
                        <h3 className="text-lg font-semibold">{program.title}</h3>
                        <p className="text-sm text-white/60 mt-1">
                          {program.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-white/75">
                      {program.description}
                    </p>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 overflow-hidden"
                        >
                          <div className="pt-4 border-t border-white/10 space-y-3">
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-widest text-[#F1C40F] mb-2">
                                Key Benefits
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {program.benefits.map((benefit) => (
                                  <span
                                    key={benefit}
                                    className="text-xs rounded-full border border-[#C62828]/50 bg-[#C62828]/10 px-3 py-1 text-white/80"
                                  >
                                    {benefit}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <p className="text-xs font-semibold uppercase tracking-widest text-[#F1C40F] mb-1">
                                Schedule
                              </p>
                              <p className="text-xs text-white/70 flex items-start gap-2">
                                <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                                {program.schedule}
                              </p>
                            </div>

                            <button className="w-full rounded-full bg-[#C62828] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#A62020] active:scale-[0.98]">
                              Learn More
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </FadeInSection>
              );
            })}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#181818]">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <FadeInSection>
              <h2 className="text-3xl font-bold md:text-4xl">Why Choose FIJI?</h2>
            </FadeInSection>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Expert Instructors",
                  desc: "Experienced coaches dedicated to your progress and safety",
                },
                {
                  title: "All Ages Welcome",
                  desc: "Programs tailored for kids, teens, adults, and seniors",
                },
                {
                  title: "Safe Environment",
                  desc: "Emphasis on proper technique and injury prevention",
                },
                {
                  title: "Community Focus",
                  desc: "Build lasting friendships and grow together",
                },
                {
                  title: "Flexible Scheduling",
                  desc: "Classes throughout the week to fit your lifestyle",
                },
                {
                  title: "Proven Results",
                  desc: "Confidence, discipline, and practical skills you can use",
                },
              ].map((item, idx) => (
                <FadeInSection key={item.title} delay={0.06 * idx}>
                  <div className="rounded-xl border border-white/10 bg-[#1B1B1B] p-5">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{item.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <FadeInSection>
            <div className="rounded-2xl border border-white/10 bg-linear-to-br from-[#1B1B1B] to-[#111111] p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="text-white/80 mb-6 max-w-2xl">
                Choose the program that resonates with you and join FIJI today. Our welcoming community and experienced instructors are ready to guide you.
              </p>
              <Link
                href="/#contact"
                className="inline-flex rounded-full bg-[#C62828] px-6 py-3 font-semibold text-white transition hover:bg-[#A62020] active:scale-[0.98]"
              >
                Join Training
              </Link>
            </div>
          </FadeInSection>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#111111] px-5 py-8 text-center text-sm text-white/60">
        <p>FIJI Programs - Training excellence for all ages and skill levels.</p>
        <p className="mt-2">Copyright {year} FIJI (Firman Ishikawaryu Ju-Jutsu Indonesia). All rights reserved.</p>
      </footer>
    </div>
  );
}
