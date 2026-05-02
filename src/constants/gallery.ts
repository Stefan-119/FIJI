/**
 * Gallery Items Configuration
 * Centralized media data for easy updates and scalability
 */

export type GalleryCategory =
  | "All"
  | "Kids Training"
  | "Women Self-Defense"
  | "Group Training"
  | "Events & Seminars"
  | "Private Classes"
  | "Community Activities";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  description?: string;
  image?: string;
  placeholder?: string;
}

// Photo Gallery Items
export const photoGalleryItems: GalleryItem[] = [
  {
    id: "kids-fundamentals",
    title: "Kids Fundamentals",
    category: "Kids Training",
    description: "Children learning basic techniques and building confidence",
    placeholder: "[Training Session Photo Placeholder]",
  },
  {
    id: "women-workshop",
    title: "Women Safety Workshop",
    category: "Women Self-Defense",
    description: "Practical self-defense training for women's empowerment",
    placeholder: "[Training Session Photo Placeholder]",
  },
  {
    id: "group-drill",
    title: "Group Technical Drill",
    category: "Group Training",
    description: "Team members practicing technical movements together",
    placeholder: "[Training Session Photo Placeholder]",
  },
  {
    id: "seminar-demo",
    title: "Seminar Demonstration",
    category: "Events & Seminars",
    description: "Expert demonstration at our community seminar",
    placeholder: "[Seminar Video Placeholder]",
  },
  {
    id: "private-session",
    title: "Private Coaching Session",
    category: "Private Classes",
    description: "One-on-one training with personalized instruction",
    placeholder: "[Training Session Photo Placeholder]",
  },
  {
    id: "community-day",
    title: "Community Sharing Day",
    category: "Community Activities",
    description: "Members sharing knowledge and building bonds",
    placeholder: "[Event Photo Placeholder]",
  },
  {
    id: "kids-partner",
    title: "Kids Partner Exercise",
    category: "Kids Training",
    description: "Children building teamwork through partner drills",
    placeholder: "[Training Session Photo Placeholder]",
  },
  {
    id: "instructor-defense",
    title: "Instructor-Led Defense Class",
    category: "Women Self-Defense",
    description: "Professional instruction in self-defense techniques",
    placeholder: "[Training Session Photo Placeholder]",
  },
  {
    id: "org-group",
    title: "Organization Group Session",
    category: "Group Training",
    description: "Corporate team training and bonding activity",
    placeholder: "[Event Photo Placeholder]",
  },
];

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Kids Training",
  "Women Self-Defense",
  "Group Training",
  "Events & Seminars",
  "Private Classes",
  "Community Activities",
];

export function getGalleryItemsByCategory(
  category: GalleryCategory
): GalleryItem[] {
  if (category === "All") return photoGalleryItems;
  return photoGalleryItems.filter((item) => item.category === category);
}
