/**
 * Programs Configuration
 * Centralized programs data for easy updates and scalability
 */

import type { LucideIcon } from "lucide-react";
import {
  HeartPulse,
  Sparkles,
  Shield,
  Dumbbell,
  Users,
} from "lucide-react";

export interface Program {
  title: string;
  subtitle: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
  placeholder?: string;
}

export const programs: Program[] = [
  {
    title: "Kids Class",
    subtitle: "3-12 years",
    description:
      "Fun structured movement, confidence building, and anti-bullying character growth.",
    image: "/assets/images/programs/kids-class.jpg",
    placeholder: "[Kids Training Icon Placeholder]",
  },
  {
    title: "Teen Class",
    subtitle: "13-17 years",
    description:
      "Athletic discipline, focus, and practical self-defense fundamentals for youth development.",
    image: "/assets/images/programs/teen-class.jpg",
    placeholder: "[Teen Class Icon Placeholder]",
  },
  {
    title: "Adult Training",
    subtitle: "18+ years",
    description:
      "Strength, mobility, stress release, and realistic techniques for daily safety and fitness.",
    image: "/assets/images/programs/adult-training.jpg",
    placeholder: "[Adult Training Icon Placeholder]",
  },
  {
    title: "Senior Training",
    subtitle: "50+ years",
    description:
      "Low-impact training focused on balance, flexibility, stability, and healthy longevity.",
    image: "/assets/images/programs/senior-training.jpg",
    placeholder: "[Senior Training Icon Placeholder]",
  },
  {
    title: "Women Self-Defense",
    subtitle: "All levels",
    description:
      "Empowering sessions with practical scenarios, awareness skills, and confidence coaching.",
    image: "/assets/images/programs/women-defense.jpg",
    placeholder: "[Women Self-Defense Icon Placeholder]",
  },
  {
    title: "Private Class",
    subtitle: "Customized",
    description:
      "One-on-one coaching tailored to personal goals, pace, and technical priorities.",
    image: "/assets/images/programs/private-class.jpg",
    placeholder: "[Private Class Icon Placeholder]",
  },
  {
    title: "Group Class",
    subtitle: "All ages",
    description:
      "Structured team sessions for schools, communities, and organizations with shared goals.",
    image: "/assets/images/programs/group-class.jpg",
    placeholder: "[Group Class Icon Placeholder]",
  },
];

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}

export const benefits: Benefit[] = [
  {
    title: "Health & Fitness",
    description:
      "Improve endurance, flexibility, coordination, and full-body strength.",
    icon: HeartPulse,
    accent: "bg-[#F1C40F]",
  },
  {
    title: "Confidence & Discipline",
    description:
      "Build focus, emotional control, respect, and resilient character.",
    icon: Sparkles,
    accent: "bg-[#2ECC71]",
  },
  {
    title: "Self-Defense & Safety",
    description:
      "Learn practical defense, anti-bullying awareness, and risk prevention.",
    icon: Shield,
    accent: "bg-[#3498DB]",
  },
];

export interface GallerySlide {
  title: string;
  description: string;
  image?: string;
  placeholder?: string;
}

export const gallerySlides: GallerySlide[] = [
  {
    title: "Kids Training",
    description:
      "Foundational movement, focus drills, and confident learning atmosphere.",
    image: "/assets/images/gallery/kids-training.jpg",
    placeholder: "[Kids Training Placeholder]",
  },
  {
    title: "Self-Defense Seminar",
    description:
      "Practical safety training with realistic scenario-based techniques.",
    image: "/assets/images/gallery/self-defense-seminar.jpg",
    placeholder: "[Self-Defense Seminar Placeholder]",
  },
  {
    title: "Group Technique Class",
    description:
      "Collaborative partner drills with technical correction and mentorship.",
    image: "/assets/images/gallery/group-technique.jpg",
    placeholder: "[Group Technique Placeholder]",
  },
  {
    title: "Community Activities",
    description:
      "Shared events that strengthen character, teamwork, and positive values.",
    image: "/assets/images/gallery/community-activities.jpg",
    placeholder: "[Community Activity Placeholder]",
  },
];

export interface ScheduleRow {
  day: string;
  kids: string;
  teenAdult: string;
  women: string;
}

export const scheduleRows: ScheduleRow[] = [
  {
    day: "Monday",
    kids: "16:00 - 17:00",
    teenAdult: "19:00 - 20:30",
    women: "20:30 - 21:15",
  },
  {
    day: "Wednesday",
    kids: "16:00 - 17:00",
    teenAdult: "19:00 - 20:30",
    women: "20:30 - 21:15",
  },
  {
    day: "Friday",
    kids: "16:00 - 17:00",
    teenAdult: "19:00 - 20:30",
    women: "20:30 - 21:15",
  },
  {
    day: "Saturday",
    kids: "09:00 - 10:00",
    teenAdult: "10:30 - 12:00",
    women: "12:00 - 12:45",
  },
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Parent of Kids Student",
    role: "Family Program",
    quote:
      "My child became more disciplined and confident after just a few months at FIJI.",
  },
  {
    name: "Women Participant",
    role: "Self-Defense Program",
    quote:
      "The instructors are patient and professional. I feel safer and much stronger now.",
  },
  {
    name: "Adult Trainee",
    role: "Evening Class",
    quote:
      "Training here improved my fitness, mindset, and consistency in daily life.",
  },
];

export interface FAQ {
  q: string;
  a: string;
}

export const faqs: FAQ[] = [
  {
    q: "Is FIJI beginner-friendly?",
    a: "Yes. Our classes are designed for complete beginners and advanced students with safe progressions.",
  },
  {
    q: "Can women join private self-defense sessions?",
    a: "Absolutely. We provide women-only friendly options, private coaching, and real-life scenario drills.",
  },
  {
    q: "What should I bring to my first class?",
    a: "Bring comfortable training clothes, water, and a positive mindset. Uniform guidance is provided after registration.",
  },
];
