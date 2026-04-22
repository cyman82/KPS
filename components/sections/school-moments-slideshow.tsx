"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type MediaItem = {
  src: string;
  type: "image" | "video";
  alt: string;
};

type SchoolMomentsSlideshowProps = {
  mediaItems: MediaItem[];
};

export function SchoolMomentsSlideshow({ mediaItems }: SchoolMomentsSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    if (mediaItems.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % mediaItems.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [mediaItems.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    const current = containerRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((videoRef, index) => {
      if (!videoRef) {
        return;
      }

      if (index === activeIndex) {
        videoRef.play().catch(() => undefined);
      } else {
        videoRef.pause();
      }
    });
  }, [activeIndex]);

  function goNext() {
    setActiveIndex((current) => (current + 1) % mediaItems.length);
  }

  function goPrev() {
    setActiveIndex((current) => (current - 1 + mediaItems.length) % mediaItems.length);
  }

  if (mediaItems.length === 0) {
    return (
      <div className="rounded-[2rem] border border-school.saffron/25 bg-school.cream px-6 py-16 text-center text-school.gray shadow-soft">
        School moments will appear here once media is added.
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="group relative mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border border-school.saffron/20 bg-white shadow-panel transition duration-500 hover:-translate-y-1 hover:shadow-premium">
        <div className="relative h-[22rem] w-full sm:h-[28rem] lg:h-[34rem]">
          {mediaItems.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={item.src}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                  isActive ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 90vw, 1100px"
                    priority={isActive}
                    className="h-full w-full object-cover object-center"
                  />
                ) : (
                  <video
                    ref={(element) => {
                      videoRefs.current[index] = element;
                    }}
                    src={item.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                    className="h-full w-full object-cover object-center"
                  />
                )}
              </div>
            );
          })}

          {mediaItems.length > 1 ? (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/45 sm:left-5"
              >
                <span className="text-xl leading-none">&lt;</span>
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/45 sm:right-5"
              >
                <span className="text-xl leading-none">&gt;</span>
              </button>
            </>
          ) : null}
        </div>
      </div>

      {mediaItems.length > 1 ? (
        <div className="mt-5 flex items-center justify-center gap-2.5">
          {mediaItems.map((item, index) => (
            <button
              key={`${item.src}-dot`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-school.red"
                  : "w-2.5 bg-school.saffron/45 hover:bg-school.saffron/70"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
