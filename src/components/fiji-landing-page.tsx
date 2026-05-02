"use client";

import Link from "next/link";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarClock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  UserRound,
  Users,
  Shield,
} from "lucide-react";
import SiteHeader from "@/components/site-header";
import {
  benefits,
  programs,
  gallerySlides,
  scheduleRows,
  testimonials,
  faqs,
} from "@/constants/programs";

const FadeInSection = memo(function FadeInSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
});

export default function FijiLandingPage() {
  const [openFaq, setOpenFaq] = useState(-1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    program: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitted">("idle");

  const year = useMemo(() => new Date().getFullYear(), []);

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formStatus !== "idle") {
      setFormStatus("idle");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inquiryMessage = [
      "Halo FIJI Indonesia, saya ingin mendaftar latihan.",
      `Nama: ${formData.fullName}`,
      `Phone/WhatsApp: ${formData.phone}`,
      `Program: ${formData.program}`,
      `Pesan: ${formData.message || "-"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/6281200000000?text=${encodeURIComponent(inquiryMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setFormStatus("submitted");
  };

  const scrollToSlide = useCallback((index: number) => {
    const container = carouselRef.current;
    const nextElement = container?.children[index] as HTMLElement | undefined;
    if (container && nextElement) {
      container.scrollTo({ left: nextElement.offsetLeft, behavior: "smooth" });
    }
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth >= 1024) {
        // Desktop (lg)
        setVisibleItems(3);
      } else if (window.innerWidth >= 768) {
        // Tablet (md)
        setVisibleItems(2);
      } else {
        setVisibleItems(1);
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  // Total scrollable dots = Total items - visible items + 1
  const totalDots = gallerySlides.length - visibleItems + 1;

  useEffect(() => {
    const timer = window.setInterval(() => {
      const container = carouselRef.current;
      if (!container) return;

      // Use the totalDots calculation to decide when to loop back
      const isAtEnd = currentSlide >= totalDots - 1;
      const nextIndex = isAtEnd ? 0 : currentSlide + 1;

      scrollToSlide(nextIndex);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [currentSlide, scrollToSlide, totalDots]);

  return (
    <div className="bg-[#111111] text-white">
      <SiteHeader />

      <main>
        <section
          id="hero"
          className="relative overflow-hidden border-b border-white/10"
        >
          {/* Overlay should not steal pointer events from hero CTAs */}
          <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(198,40,40,0.30),transparent_60%)]" />

          <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:px-8 md:py-24">
            <FadeInSection>
              <p className="mb-4 inline-block rounded-full border border-[#C62828]/50 bg-[#C62828]/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-100">
                Japanese Martial Arts Community
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                Build Confidence, Discipline, and Self-Defense Through Japanese
                Ju-Jutsu
              </h1>
              <p className="mt-4 max-w-xl text-base text-white/80 md:text-lg">
                Martial arts training for all ages from children to seniors with
                a safe and supportive learning atmosphere.
              </p>
              {/* Keep CTAs above decorative layers */}
              <div className="mt-8 flex flex-wrap gap-3 relative z-20">
                <a
                  href="#programs"
                  className="cursor-pointer rounded-full bg-[#C62828] px-5 py-3 font-semibold transition hover:-translate-y-0.5 hover:bg-[#A62020] active:scale-95"
                >
                  Join Training
                </a>
                <a
                  href="#contact"
                  className="cursor-pointer rounded-full border border-[#F1C40F] px-5 py-3 font-semibold text-[#F1C40F] transition hover:bg-[#F1C40F] hover:text-[#111111] active:scale-95"
                >
                  Contact Us
                </a>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-linear-to-br from-[#1B1B1B] to-[#151515] p-6 shadow-2xl shadow-black/40">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/10 bg-[#242424] p-4">
                    <Users className="mb-3 h-6 w-6 text-[#2ECC71]" />
                    <p className="text-sm font-semibold">All Ages Welcome</p>
                    <p className="mt-1 text-xs text-white/70">
                      Kids, teens, adults, and seniors.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#242424] p-4">
                    <Shield className="mb-3 h-6 w-6 text-[#3498DB]" />
                    <p className="text-sm font-semibold">Practical Safety</p>
                    <p className="mt-1 text-xs text-white/70">
                      Real-world self-defense and awareness.
                    </p>
                  </div>
                  <div className="col-span-2 rounded-xl border border-[#C62828]/40 bg-[#C62828]/15 p-4">
                    <p className="text-sm font-semibold">FIJI Mission</p>
                    <p className="mt-2 text-sm text-red-100/90">
                      We build confidence, discipline, respect, and positive
                      community through Japanese Ju-Jutsu.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20"
        >
          <FadeInSection>
            <h2 className="text-3xl font-bold md:text-4xl">About FIJI</h2>
            <p className="mt-4 max-w-3xl text-white/80">
              FIJI stands for Firman Ishikawaryu Ju-Jutsu Indonesia, a martial
              arts organization inspired by traditional Japanese Ju-Jutsu
              values: discipline, respect, self-control, and safety. Our classes
              are family-friendly, goal-oriented, and built to help each member
              become stronger in both body and mind.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold transition hover:border-[#C62828] hover:text-red-100"
            >
              Learn More
            </Link>
          </FadeInSection>

          <FadeInSection delay={0.12}>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-[#1A1A1A] p-5">
                <UserRound className="mb-3 h-6 w-6 text-[#C62828]" />
                <h3 className="font-semibold">Founder & Instructors</h3>
                <p className="mt-2 text-sm text-white/70">
                  Experienced coaches who emphasize safe progression, strong
                  fundamentals, and mentorship.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#1A1A1A] p-5">
                <Dumbbell className="mb-3 h-6 w-6 text-[#F1C40F]" />
                <h3 className="font-semibold">Martial Philosophy</h3>
                <p className="mt-2 text-sm text-white/70">
                  Train with humility and purpose while developing physical
                  ability, focus, and composure.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#1A1A1A] p-5">
                <Users className="mb-3 h-6 w-6 text-[#2ECC71]" />
                <h3 className="font-semibold">Community Atmosphere</h3>
                <p className="mt-2 text-sm text-white/70">
                  Supportive classes that help students grow together regardless
                  of age and background.
                </p>
              </div>
            </div>
          </FadeInSection>
        </section>

        <section
          id="benefits"
          className="border-y border-white/10 bg-[#181818]"
        >
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <FadeInSection>
              <h2 className="text-3xl font-bold md:text-4xl">
                Why Train at FIJI
              </h2>
              <p className="mt-4 max-w-3xl text-white/80">
                FIJI training is more than competition. We focus on health,
                confidence, anti-bullying values, and practical self-defense for
                everyday life.
              </p>
            </FadeInSection>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {benefits.map((benefit, idx) => (
                <FadeInSection key={benefit.title} delay={0.1 + idx * 0.06}>
                  <div className="h-full rounded-xl border border-white/10 bg-[#222222] p-5 transition hover:-translate-y-1 hover:border-[#C62828]/70">
                    <div
                      className={`mb-4 inline-flex rounded-lg p-2 ${benefit.accent}`}
                    >
                      <benefit.icon className="h-5 w-5 text-[#111111]" />
                    </div>
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-white/75">
                      {benefit.description}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        <section
          id="programs"
          className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20"
        >
          <FadeInSection>
            <h2 className="text-3xl font-bold md:text-4xl">
              Programs for Everyone
            </h2>
            <p className="mt-4 max-w-3xl text-white/80">
              Structured classes for children, youth, adults, seniors, women,
              and organizations with private and group options.
            </p>
          </FadeInSection>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, idx) => (
              <FadeInSection key={program.title} delay={0.06 * idx}>
                <div className="h-full rounded-2xl border border-white/10 bg-[#1C1C1C] p-5 shadow-lg shadow-black/20 transition hover:-translate-y-1.5 hover:border-[#C62828]/70">
                  <div className="rounded-xl border border-dashed border-white/20 bg-[#252525] px-3 py-5 text-center text-xs text-white/60">
                    {program.placeholder}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">
                    {program.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-red-100/80">
                    {program.subtitle}
                  </p>
                  <p className="mt-2 text-sm text-white/75">
                    {program.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-block rounded-full border border-white/25 px-4 py-2 text-sm font-semibold transition hover:border-[#C62828] hover:text-red-100"
                  >
                    Enroll Now
                  </a>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>

        <section className="border-y border-[#C62828]/30 bg-linear-to-r from-[#260C0C] to-[#1A1A1A]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-2 md:items-center md:px-8 md:py-20">
            <FadeInSection>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-200">
                Women Self-Defense Program
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Train Practical Defense with Confidence
              </h2>
              <p className="mt-4 text-white/85">
                Learn practical self-defense techniques and develop confidence
                in everyday life. This beginner-friendly program includes
                real-life scenarios, private coaching options, and a safe
                training environment.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex rounded-full bg-[#C62828] px-5 py-3 font-semibold transition hover:bg-[#A62020]"
              >
                Book Women Program
              </a>
            </FadeInSection>
            <FadeInSection delay={0.12}>
              <div className="grid gap-4">
                <div className="rounded-xl border border-white/15 bg-black/25 p-4">
                  Beginner-friendly curriculum and supportive coaching.
                </div>
                <div className="rounded-xl border border-white/15 bg-black/25 p-4">
                  Private and small-group sessions available.
                </div>
                <div className="rounded-xl border border-white/15 bg-black/25 p-4">
                  Focus on awareness, boundaries, and practical movement.
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section
          id="gallery"
          className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20"
        >
          <FadeInSection>
            <h2 className="text-3xl font-bold md:text-4xl">Training Gallery</h2>
            <p className="mt-4 max-w-3xl text-white/80">
              Highlights from classes, seminars, and community activities. Visit
              the full gallery page for categories and expanded media.
            </p>
          </FadeInSection>

          <div className="mt-8">
            <div
              ref={carouselRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              onScroll={(event) => {
                const target = event.currentTarget;
                const cardWidth = target.firstElementChild?.clientWidth ?? 0;
                const gap = 16; // your gap-4

                // Calculate index based on scroll position
                const nextIndex = Math.round(
                  target.scrollLeft / (cardWidth + gap),
                );

                // Only update if the index actually changed to avoid state loops
                if (nextIndex !== currentSlide) {
                  setCurrentSlide(nextIndex);
                }
              }}
            >
              {gallerySlides.map((slide) => (
                <div
                  key={slide.title}
                  className="min-w-full snap-start rounded-2xl border border-white/10 bg-[#1C1C1C] p-6 md:min-w-[calc(50%-8px)] lg:min-w-[calc(33.333%-11px)]"
                >
                  <div className="rounded-xl border border-dashed border-white/20 bg-[#262626] px-3 py-12 text-center text-sm text-white/60">
                    {slide.placeholder}
                  </div>
                  <p className="mt-4 text-lg font-semibold">{slide.title}</p>
                  <p className="mt-2 text-sm text-white/75">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  className="rounded-full border border-white/20 p-2 transition hover:border-[#C62828]"
                  aria-label="Previous gallery slide"
                  onClick={() => {
                    // If at the very start, wrap to the last possible index
                    const nextIndex =
                      currentSlide === 0
                        ? gallerySlides.length - 1
                        : currentSlide - 1;
                    scrollToSlide(nextIndex);
                  }}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  className="rounded-full border border-white/20 p-2 transition hover:border-[#C62828]"
                  aria-label="Next gallery slide"
                  onClick={() => {
                    const container = carouselRef.current;
                    if (container) {
                      // Check if we are physically at the end of the scroll track
                      const isAtEnd =
                        Math.ceil(
                          container.scrollLeft + container.offsetWidth,
                        ) >= container.scrollWidth;

                      // If at end, wrap to 0. Otherwise, go to next index.
                      const nextIndex = isAtEnd ? 0 : currentSlide + 1;
                      scrollToSlide(nextIndex);
                    }
                  }}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-2">
                {Array.from({ length: totalDots }).map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => scrollToSlide(idx)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      currentSlide === idx
                        ? "bg-[#C62828]"
                        : "bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

              <Link
                href="/gallery"
                className="rounded-full border border-white/25 px-4 py-2 text-sm font-semibold transition hover:border-[#C62828]"
              >
                Open Gallery Page
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#181818]">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <FadeInSection>
              <h2 className="text-3xl font-bold md:text-4xl">Testimonials</h2>
            </FadeInSection>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {testimonials.map((item, idx) => (
                <FadeInSection key={item.name} delay={0.1 + idx * 0.08}>
                  <div className="h-full rounded-xl border border-white/10 bg-[#212121] p-5">
                    <div className="mb-3 flex gap-1 text-[#F1C40F]">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                    <p className="text-sm text-white/85">
                      &quot;{item.quote}&quot;
                    </p>
                    <p className="mt-4 font-semibold">{item.name}</p>
                    <p className="text-xs text-white/60">{item.role}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        <section
          id="schedule"
          className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20"
        >
          <FadeInSection>
            <h2 className="text-3xl font-bold md:text-4xl">
              Schedule & Pricing
            </h2>
            <p className="mt-4 max-w-3xl text-white/80">
              Flexible weekly sessions with clear options for private and group
              training.
            </p>
          </FadeInSection>

          <div className="mt-8 overflow-hidden rounded-xl border border-white/10">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-[#1A1A1A]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Day</th>
                  <th className="px-4 py-3 font-semibold">Kids</th>
                  <th className="px-4 py-3 font-semibold">Teen & Adult</th>
                  <th className="px-4 py-3 font-semibold">Women Class</th>
                </tr>
              </thead>
              <tbody>
                {scheduleRows.map((row) => (
                  <tr
                    key={row.day}
                    className="border-t border-white/10 bg-[#202020]"
                  >
                    <td className="px-4 py-3 font-medium">{row.day}</td>
                    <td className="px-4 py-3 text-white/80">{row.kids}</td>
                    <td className="px-4 py-3 text-white/80">{row.teenAdult}</td>
                    <td className="px-4 py-3 text-white/80">{row.women}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-[#1B1B1B] p-5">
              <CalendarClock className="mb-3 h-5 w-5 text-[#F1C40F]" />
              <h3 className="font-semibold">Group Membership</h3>
              <p className="mt-2 text-sm text-white/70">
                Affordable recurring plans for regular classes and progression
                tracking.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#1B1B1B] p-5">
              <UserRound className="mb-3 h-5 w-5 text-[#2ECC71]" />
              <h3 className="font-semibold">Private Coaching</h3>
              <p className="mt-2 text-sm text-white/70">
                One-on-one sessions focused on specific self-defense and fitness
                goals.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#1B1B1B] p-5">
              <Users className="mb-3 h-5 w-5 text-[#3498DB]" />
              <h3 className="font-semibold">Community Training</h3>
              <p className="mt-2 text-sm text-white/70">
                Special schedules for schools, organizations, and private
                groups.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#181818]">
          <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
            <FadeInSection>
              <h2 className="text-3xl font-bold md:text-4xl">
                Frequently Asked Questions
              </h2>
            </FadeInSection>
            <div className="mt-8 space-y-3">
              {faqs.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <FadeInSection key={item.q} delay={0.06 * idx}>
                    <button
                      className="w-full rounded-xl border border-white/10 bg-[#1F1F1F] px-4 py-4 text-left"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    >
                      <span className="flex items-center justify-between gap-3 font-semibold">
                        {item.q}
                        <ChevronDown
                          className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`}
                        />
                      </span>
                      {isOpen && (
                        <p className="mt-3 text-sm text-white/75">{item.a}</p>
                      )}
                    </button>
                  </FadeInSection>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20"
        >
          <FadeInSection>
            <h2 className="text-3xl font-bold md:text-4xl">
              Start Your Martial Arts Journey Today
            </h2>
            <p className="mt-4 max-w-3xl text-white/80">
              Join FIJI Indonesia and experience Japanese martial arts training
              that is professional, safe, and empowering.
            </p>
          </FadeInSection>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <FadeInSection>
              <div className="rounded-xl border border-white/10 bg-[#1B1B1B] p-5">
                <h3 className="text-lg font-semibold">Contact Information</h3>
                <div className="mt-4 space-y-3 text-sm text-white/75">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#2ECC71]" /> WhatsApp: +62
                    812-0000-0000
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#3498DB]" /> Training Hall:
                    Jakarta, Indonesia
                  </p>
                  <p className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-[#F1C40F]" /> Instagram /
                    Facebook: @fiji.indonesia
                  </p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block rounded-full border border-white/25 px-4 py-2 text-sm font-semibold transition hover:border-white"
                >
                  Open Google Maps
                </a>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <form
                className="rounded-xl border border-white/10 bg-[#1B1B1B] p-5"
                onSubmit={handleSubmit}
              >
                <h3 className="text-lg font-semibold">Training Registration</h3>
                <div className="mt-4 grid gap-3">
                  <input
                    className="rounded-lg border border-white/15 bg-[#242424] px-3 py-2 text-sm outline-none ring-red-500/70 placeholder:text-white/35 focus:ring-2"
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    className="rounded-lg border border-white/15 bg-[#242424] px-3 py-2 text-sm outline-none ring-red-500/70 placeholder:text-white/35 focus:ring-2"
                    type="text"
                    name="phone"
                    placeholder="Phone / WhatsApp"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <select
                    className="rounded-lg border border-white/15 bg-[#242424] px-3 py-2 text-sm outline-none ring-red-500/70 focus:ring-2"
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      Select Program
                    </option>
                    <option>Kids Class</option>
                    <option>Teen Class</option>
                    <option>Adult Training</option>
                    <option>Senior Training</option>
                    <option>Women Self-Defense</option>
                    <option>Private Class</option>
                    <option>Group Class</option>
                  </select>
                  <textarea
                    className="min-h-24 rounded-lg border border-white/15 bg-[#242424] px-3 py-2 text-sm outline-none ring-red-500/70 placeholder:text-white/35 focus:ring-2"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 rounded-full bg-[#C62828] px-5 py-2.5 text-sm font-semibold transition hover:bg-[#A62020]"
                >
                  Send Inquiry
                </button>
                {formStatus === "submitted" && (
                  <p className="mt-3 text-sm text-green-300">
                    Inquiry prepared and opened in WhatsApp. Please send the
                    message to complete registration.
                  </p>
                )}
              </form>
            </FadeInSection>
          </div>
        </section>
      </main>

      <a
        href="https://wa.me/6281200000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-[#111111] shadow-lg transition hover:brightness-95"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>

      <footer className="border-t border-white/10 bg-[#111111] px-5 py-8 text-center text-sm text-white/60">
        <p>
          FIJI Indonesia - Ju-Jutsu Indonesia | Japanese martial arts |
          Self-defense training | Anti-bullying martial arts | Women
          self-defense
        </p>
        <p className="mt-2">
          Copyright {year} FIJI (Firman Ishikawaryu Ju-Jutsu Indonesia). All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}
