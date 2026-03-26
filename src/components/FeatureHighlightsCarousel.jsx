"use client";

import { useEffect, useRef } from "react";

const FEATURE_CARDS = [
  {
    id: "accountability",
    title: "WEEKLY ACCOUNTABILITY",
    description:
      "Send weekly updates—weight, measurements, progress pics. Get plan adjustments based on your results. Real accountability that keeps you on track.",
    image: "/images/homepage/blurred-orb/120.jpg",
  },
  {
    id: "programs",
    title: "PROGRAMS THAT ACTUALLY WORK",
    description:
      "I lost 50 pounds and became nationally qualified with this system. Evidence-based training and nutrition that actually works.",
    image: "/images/homepage/blurred-orb/130.jpg",
  },
  {
    id: "text-coaching",
    title: "TEXT COACHING, ANYTIME",
    description:
      "Get your custom program and ongoing support via text. Ask questions, get guidance, stay motivated—all through simple SMS.",
    image: "/images/homepage/blurred-orb/110.jpg",
  },
  {
    id: "built-for-you",
    title: "BUILT FOR YOU",
    description:
      "Custom-designed for your goals, experience, and equipment. Built specifically for your body—not a cookie-cutter plan.",
    image: "/images/homepage/blurred-orb/140.jpg",
  },
];

export default function FeatureHighlightsCarousel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;

      const totalWidth = scrollContainer.scrollWidth / 3;

      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }

      scrollContainer.style.transform = `translate3d(-${scrollPosition}px, 0, 0)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section className="relative z-10 pb-10 md:pb-16" data-navbar-theme="light">
      <div
        className="w-full overflow-hidden"
        aria-label="Carousel highlighting Future's features"
      >
        <div
          ref={scrollRef}
          className="flex gap-4"
          style={{ willChange: "transform" }}
        >
          {/* Render cards twice for infinite loop */}
          {[...FEATURE_CARDS, ...FEATURE_CARDS, ...FEATURE_CARDS].map(
            (card, index) => (
              <article
                key={`${card.id}-${index}`}
                className="relative w-[calc(100vw-20px)] sm:w-[calc(100vw-316px)] md:w-[44vw] md:min-w-[33vw] lg:min-w-[33vw] xl:min-w-[33vw] 2xl:min-w-[33vw] 3xl:min-w-[30vw] 4xl:min-w-[26vw] md:max-w-[618px] lg:max-w-[618px] xl:max-w-[618px] 2xl:max-w-[618px] 3xl:max-w-[680px] 4xl:max-w-[760px] shrink-0 h-[500px] md:h-[540px] xl:h-[580px] 2xl:h-[580px] 3xl:h-[620px] 4xl:h-[660px] rounded-[20px] overflow-hidden bg-center bg-cover shadow-[0px_7.229px_21.686px_0px_rgba(19,19,19,0.18)]"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.48), rgba(0,0,0,0.48)), url(${card.image})`,
                }}
              >
                <header className="absolute inset-0 z-10 flex flex-col justify-end gap-3 p-6 md:p-10 text-white text-left">
                  <h3 className="font-[family-name:seasonMix] text-[24px] md:text-[42px] font-[420] leading-[1.1] tracking-[-0.24px] md:tracking-[-0.42px] max-w-[16ch]">
                    {card.title}
                  </h3>
                  <p className="font-[family-name:seasonSans] text-balance text-[15px] md:text-[22px] font-normal leading-[1.3] tracking-[-0.16px] md:tracking-[-0.22px] w-full max-w-[34ch]">
                    {card.description}
                  </p>
                </header>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
