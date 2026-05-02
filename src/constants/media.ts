/**
 * Media Configuration
 * Centralized settings for media handling and optimization
 */

export interface MediaConfig {
  youtube: {
    channelUrl: string;
    playlistUrl: string;
  };
  optimization: {
    imageLazyLoad: boolean;
    imageOptimization: boolean;
    videoLazyLoad: boolean;
  };
  gallery: {
    itemsPerPage: number;
    animationDuration: number;
  };
}

export const mediaConfig: MediaConfig = {
  youtube: {
    channelUrl: "https://www.youtube.com/@fiji-channel",
    playlistUrl: "https://www.youtube.com/playlist?list=PLxxxxxxxxxx",
  },
  optimization: {
    imageLazyLoad: true,
    imageOptimization: true,
    videoLazyLoad: true,
  },
  gallery: {
    itemsPerPage: 12,
    animationDuration: 300,
  },
};

// Asset paths configuration
export const assetPaths = {
  images: {
    gallery: "/assets/images/gallery",
    programs: "/assets/images/programs",
    instructors: "/assets/images/instructors",
    events: "/assets/images/events",
    training: "/assets/images/training",
    hero: "/assets/images/hero",
  },
  icons: {
    programs: "/assets/icons/programs",
    ui: "/assets/icons/ui",
    social: "/assets/icons/social",
  },
  videos: {
    documentation: "/assets/videos/documentation",
    training: "/assets/videos/training",
  },
  logos: "/assets/logos",
};

// Image optimization defaults
export const imageDefaults = {
  quality: 80,
  formats: ["webp", "jpg"],
  sizes: {
    thumbnail: "300px",
    card: "400px",
    hero: "1200px",
  },
};
