"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SiteHeader from "@/components/site-header";
import GalleryCard from "@/components/media/GalleryCard";
import VideoCard from "@/components/media/VideoCard";
import Lightbox from "@/components/media/Lightbox";
import VideoLightbox from "@/components/media/VideoLightbox";
import MediaGrid from "@/components/media/MediaGrid";
import YouTubeCTA from "@/components/media/YouTubeCTA";
import EmptyGalleryState from "@/components/media/EmptyGalleryState";
import EmptyVideoSectionState from "@/components/media/EmptyVideoSectionState";
import {
  photoGalleryItems,
  galleryCategories,
  getGalleryItemsByCategory,
  type GalleryCategory,
} from "@/constants/gallery";
import {
  videoDocumentationItems,
  videoDocumentationConfig,
} from "@/constants/videos";
import {
  validateGalleryContent,
  validateVideoContent,
} from "@/lib/media-validation";

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
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [activeGalleryItem, setActiveGalleryItem] = useState<
    (typeof photoGalleryItems)[number] | null
  >(null);
  const [activeVideoItem, setActiveVideoItem] = useState<
    (typeof videoDocumentationItems)[number] | null
  >(null);

  const year = useMemo(() => new Date().getFullYear(), []);

  const filteredItems = getGalleryItemsByCategory(activeCategory);
  const galleryValidation = validateGalleryContent(photoGalleryItems);
  const videoValidation = validateVideoContent(videoDocumentationItems);

  return (
    <div className="bg-[#111111] text-white">
      <SiteHeader />

      <main>
        {/* Header Section */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <FadeInSection>
              <h1 className="text-4xl font-bold md:text-5xl">Gallery</h1>
              <p className="mt-4 max-w-3xl text-white/80">
                Organized media showcase for FIJI training sessions, seminars,
                and community activities.
              </p>
            </FadeInSection>

            <div className="mt-7 flex flex-wrap gap-2">
              {galleryCategories.map((category) => (
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

        {/* Photo Gallery Section */}
        <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          {galleryValidation.hasImages ? (
            <MediaGrid columns="3">
              {filteredItems.map((item, idx) => (
                <FadeInSection key={`${item.id}-${idx}`} delay={0.03 * idx}>
                  <GalleryCard
                    title={item.title}
                    category={item.category}
                    image={item.image}
                    placeholder={item.placeholder}
                    onClick={() => setActiveGalleryItem(item)}
                  />
                </FadeInSection>
              ))}
            </MediaGrid>
          ) : (
            <EmptyGalleryState />
          )}
        </section>

        {/* Video Documentation Section */}
        <section className="border-t border-white/10 mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <FadeInSection>
            <h2 className="text-3xl font-bold md:text-4xl">
              {videoDocumentationConfig.sectionTitle}
            </h2>
            <p className="mt-4 mb-8 max-w-3xl text-white/80">
              Explore our curriculum through recorded sessions and technical
              demonstrations.
            </p>
          </FadeInSection>

          {videoValidation.hasVideos ? (
            <>
              <MediaGrid columns="3">
                {videoDocumentationItems.map((video, idx) => (
                  <FadeInSection key={`${video.id}-${idx}`} delay={0.03 * idx}>
                    <VideoCard
                      title={video.title}
                      description={video.description}
                      thumbnail={video.thumbnail}
                      videoUrl={video.videoUrl}
                      placeholder={video.placeholder}
                      onClick={() => setActiveVideoItem(video)}
                    />
                  </FadeInSection>
                ))}
              </MediaGrid>

              <FadeInSection delay={0.2}>
                <YouTubeCTA
                  youtubeUrl={videoDocumentationConfig.youtubeChannelUrl}
                />
              </FadeInSection>
            </>
          ) : (
            <>
              <EmptyVideoSectionState />
              <FadeInSection delay={0.1}>
                <YouTubeCTA
                  youtubeUrl={videoDocumentationConfig.youtubeChannelUrl}
                />
              </FadeInSection>
            </>
          )}
        </section>
      </main>

      {/* Lightboxes */}
      <Lightbox
        isOpen={activeGalleryItem !== null}
        onClose={() => setActiveGalleryItem(null)}
        title={activeGalleryItem?.title || ""}
        category={activeGalleryItem?.category || ""}
        image={activeGalleryItem?.image}
        placeholder={activeGalleryItem?.placeholder}
      />

      <VideoLightbox
        isOpen={activeVideoItem !== null}
        onClose={() => setActiveVideoItem(null)}
        title={activeVideoItem?.title || ""}
        description={activeVideoItem?.description || ""}
        videoUrl={activeVideoItem?.videoUrl || ""}
      />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#111111] px-5 py-8 text-center text-sm text-white/60">
        <p>
          FIJI Gallery - Structured documentation of training excellence,
          growth, and community spirit.
        </p>
        <p className="mt-2">
          Copyright {year} FIJI (Firman Ishikawaryu Ju-Jutsu Indonesia). All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}
