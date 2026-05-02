/**
 * Video Documentation Configuration
 * Centralized video content data for the gallery
 */

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  videoUrl: string;
  duration?: string;
  placeholder?: string;
}

export const videoDocumentationItems: VideoItem[] = [
  {
    id: "kids-intro",
    title: "Kids Program Introduction",
    description: "Overview of our kids training program and benefits",
    videoUrl: "https://www.youtube.com/embed/placeholder1",
    duration: "3:45",
    placeholder: "[Kids Program Video Placeholder]",
  },
  {
    id: "women-defense",
    title: "Women Self-Defense Fundamentals",
    description: "Essential self-defense techniques for personal safety",
    videoUrl: "https://www.youtube.com/embed/placeholder2",
    duration: "8:20",
    placeholder: "[Self-Defense Video Placeholder]",
  },
  {
    id: "instructor-tips",
    title: "Training Tips from Our Instructors",
    description: "Expert advice for improving your technique and consistency",
    videoUrl: "https://www.youtube.com/embed/placeholder3",
    duration: "5:30",
    placeholder: "[Instructor Tips Video Placeholder]",
  },
  {
    id: "community-event",
    title: "Community Event Highlights",
    description: "Recap of our recent training event and member activities",
    videoUrl: "https://www.youtube.com/embed/placeholder4",
    duration: "6:15",
    placeholder: "[Event Highlights Video Placeholder]",
  },
  {
    id: "beginner-guide",
    title: "Beginner's Guide to FIJI Training",
    description: "Everything you need to know before your first class",
    videoUrl: "https://www.youtube.com/embed/placeholder5",
    duration: "4:50",
    placeholder: "[Beginner Guide Video Placeholder]",
  },
];

export interface VideoDocumentationConfig {
  youtubeChannelUrl: string;
  youtubePlaylistUrl: string;
  sectionTitle: string;
  sectionDescription: string;
}

export const videoDocumentationConfig: VideoDocumentationConfig = {
  youtubeChannelUrl: "https://www.youtube.com/@fiji-channel",
  youtubePlaylistUrl:
    "https://www.youtube.com/playlist?list=PLxxxxxxxxxx",
  sectionTitle: "Video Documentation",
  sectionDescription:
    "Watch selected training videos and tutorials. Visit our YouTube channel for the complete library.",
};
