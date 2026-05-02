/**
 * Media Validation Utilities
 * Check availability of photos, videos, and content
 */

/**
 * Check if an image exists and is not just a placeholder
 */
export function isImageAvailable(image?: string): boolean {
  return Boolean(image && image.length > 0 && !image.includes("placeholder"));
}

/**
 * Check if a video URL is valid and not a placeholder
 */
export function isVideoAvailable(videoUrl?: string): boolean {
  return Boolean(
    videoUrl &&
      videoUrl.length > 0 &&
      !videoUrl.includes("placeholder") &&
      videoUrl.startsWith("https://")
  );
}

/**
 * Check if any items have real content (not just placeholders)
 */
export function hasAvailableContent<T extends { image?: string; thumbnail?: string }>(
  items: T[]
): boolean {
  // Check if either an image OR a thumbnail is available for any item
  return items.some((item) => 
    isImageAvailable(item.image) || isImageAvailable(item.thumbnail)
  );
}

/**
 * Filter items to only those with available content
 */
export function filterAvailableItems<T extends { image?: string }>(
  items: T[]
): T[] {
  return items.filter((item) => isImageAvailable(item.image));
}

/**
 * Get validation status for content
 */
export interface ContentValidation {
  hasImages: boolean;
  hasVideos: boolean;
  totalItems: number;
  availableItems: number;
}

export function validateGalleryContent(
  items: Array<{ image?: string }>
): ContentValidation {
  return {
    hasImages: items.some((item) => isImageAvailable(item.image)),
    hasVideos: false, // Videos are handled separately
    totalItems: items.length,
    availableItems: items.filter((item) => isImageAvailable(item.image))
      .length,
  };
}

export function validateVideoContent(
  items: Array<{ videoUrl?: string }>
): ContentValidation {
  return {
    hasImages: false,
    hasVideos: items.some((item) => isVideoAvailable(item.videoUrl)),
    totalItems: items.length,
    availableItems: items.filter((item) =>
      isVideoAvailable(item.videoUrl)
    ).length,
  };
}
