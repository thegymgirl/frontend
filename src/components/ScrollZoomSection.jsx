"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import fireAnimation from "../data/fire.json";

export default function ScrollZoomSection() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [scale, setScale] = useState(0.7);
  const minScale = 0.7;

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !contentRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // progress = 0 when section starts entering viewport (rect.top = viewportHeight)
      // progress = 1 when section top reaches viewport top (rect.top = 0)
      const enterProgress = Math.max(
        0,
        Math.min(1, (viewportHeight - rect.top) / viewportHeight),
      );

      // Ease-out for smoother feel near the end
      const easedProgress = 1 - Math.pow(1 - enterProgress, 2);
      const newScale = minScale + (1 - minScale) * easedProgress;
      setScale(newScale);

      // Optional: Fade out chat bubbles as you zoom in
      const chatBubbles =
        contentRef.current.querySelectorAll("[data-chat-bubble]");
      const workoutContent = contentRef.current.querySelectorAll(
        "[data-workout-cards]",
      );
      const centerText = contentRef.current.querySelector("[data-center-text]");

      if (enterProgress < 0.5) {
        // Show chat bubbles, hide center text
        chatBubbles.forEach((bubble) => {
          bubble.style.opacity = "1";
          bubble.style.transform = "translateY(0)";
        });
        if (centerText) {
          centerText.style.opacity = "0";
          centerText.style.transform = "translateY(-40px)";
        }
        if (workoutContent.length > 0) {
          workoutContent[0].style.opacity = "0";
        }
      } else {
        // Hide chat bubbles, show center text
        chatBubbles.forEach((bubble) => {
          bubble.style.opacity = "0";
          bubble.style.transform = "translateY(-40px)";
        });
        if (centerText) {
          centerText.style.opacity = "1";
          centerText.style.transform = "translateY(0)";
        }
        if (workoutContent.length > 0) {
          workoutContent[0].style.opacity = "1";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative -mt-[3vh] w-full bg-black overflow-hidden px-5"
    >
      <div className="relative w-full">
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-visible">
          <div
            ref={contentRef}
            className="relative z-10 flex h-screen w-screen flex-col items-center overflow-hidden will-change-transform"
            style={{
              borderRadius: "50px",
              transform: `scale(${scale})`,
              opacity: 1,
              transformOrigin: "top center",
            }}
          >
            {/* Background Image */}
            <div className="pointer-events-none absolute inset-0">
              <Image
                alt="asdsad"
                aria-hidden="true"
                fill
                className="absolute inset-0 object-cover object-top"
                sizes="(max-width: 768px) 200vw, 3298px"
                src="/images/homepage/blurred-orb/3.jpg"
              />
              <div
                className="absolute inset-0 bg-black"
                style={{ opacity: 0.2 }}
              />
            </div>

            {/* Top Orb */}
            <div className="absolute inset-0 z-10 flex w-full flex-col items-center justify-center px-5">
              <div className="pointer-events-none absolute top-6 size-16 transition-all duration-700 ease-out lg:top-10 translate-y-0 opacity-100">
                <div className="relative h-full w-full">
                  <Lottie
                    animationData={fireAnimation}
                    loop
                    autoplay
                    style={{ width: "100%", height: "100%", mixBlendMode: "screen" }}
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-black/25" />
                  <div className="pointer-events-auto absolute inset-0 z-10 flex items-end justify-center pb-8 md:pb-12">
                    <Link
                      href="/quiz"
                      className="pointer-events-auto group relative flex items-center justify-center gap-1 overflow-hidden cursor-pointer font-[family-name:seasonSans] font-[550] text-[15px] md:text-lg leading-[1.1] whitespace-nowrap h-[44px] md:h-[52px] py-1.5 rounded-2xl shadow-[0_0_2px_0_rgba(0,0,0,0.10),_0_1px_8px_0_rgba(0,0,0,0.12)] transition-[color,box-shadow,opacity] duration-200 !text-white px-10 hover:shadow-[0_0_2px_0_rgba(var(--persona-primary-rgb,255,121,73),1),_0_1px_13px_0_rgba(var(--persona-primary-rgb,255,121,73),1)]"
                    >
                      <div className="liquid-glass-effect absolute inset-0 z-0 isolate overflow-hidden pointer-events-none rounded-2xl backdrop-blur-[3px]" />
                      <div className="absolute inset-0 z-[1] pointer-events-none rounded-2xl bg-[rgba(var(--persona-primary-rgb,255,121,73),0.95)]" />
                      <div className="absolute inset-0 z-[2] shadow-[inset_1px_1px_1px_0px_rgba(255,255,255,0.4),inset_-1px_-1px_1px_0px_rgba(255,255,255,0.2)] pointer-events-none rounded-2xl" />
                      <span className="relative z-10 flex items-center">JOIN NOW</span>
                    </Link>
                  </div>
              {/* Chat Bubbles (visible when zoomed out) */}
              {/* <ChatBubbles /> */}

              {/* Center Text (visible when zoomed in) */}
              {/* <div className="absolute inset-x-0 top-0 flex h-full items-center justify-center">
                <div className="w-[362px] px-0 lg:w-[1200px]" data-center-text>
                  <p className="text-center font-[family-name:seasonMix] text-[2.125rem] tracking-[-0.34px] lg:tracking-[-0.84px] leading-[1.1] font-[420] !text-white lg:text-[5.25rem]">
                    <span className="inline-block transition-all duration-[400ms] ease-out translate-y-0 opacity-100">
                      Responsive,&nbsp;
                    </span>
                    <span className="inline-block transition-all duration-[400ms] ease-out translate-y-0 opacity-100">
                      data-driven&nbsp;
                    </span>
                    <span className="inline-block transition-all duration-[400ms] ease-out translate-y-0 opacity-100">
                      training&nbsp;
                    </span>
                    <span className="inline-block transition-all duration-[400ms] ease-out translate-y-0 opacity-100">
                      that&nbsp;
                    </span>
                    <span className="inline-block transition-all duration-[400ms] ease-out translate-y-0 opacity-100">
                      evolves&nbsp;
                    </span>
                    <span className="inline-block transition-all duration-[400ms] ease-out translate-y-0 opacity-100">
                      with&nbsp;
                    </span>
                    <span className="inline-block transition-all duration-[400ms] ease-out translate-y-0 opacity-100">
                      every&nbsp;
                    </span>
                    <span className="inline-block transition-all duration-[400ms] ease-out translate-y-0 opacity-100">
                      workout.
                    </span>
                  </p>
                </div>
              </div> */}
            </div>

            {/* Bottom Button - visible when zoomed in */}
            {/* <div className="absolute bottom-6 z-20 transition-all duration-700 ease-out lg:bottom-10 translate-y-0 opacity-100">
              <a
                className="group relative flex items-center justify-center gap-1 overflow-hidden cursor-pointer font-[family-name:seasonSans] font-[550] text-[15px] md:text-lg leading-[1.1] whitespace-nowrap h-[44px] md:h-[52px] py-1.5 rounded-2xl shadow-[0_0_2px_0_rgba(0,0,0,0.10),_0_1px_8px_0_rgba(0,0,0,0.12)] transition-[color,box-shadow,opacity] duration-200 !text-white px-10 hover:shadow-[0_0_2px_0_rgba(172,113,204,1),_0_1px_13px_0_rgba(172,113,204,1)]"
                href="/quiz"
              >
                <div
                  className="absolute inset-0 z-[1] pointer-events-none rounded-2xl bg-[rgba(172,113,204,0.95)]"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 z-[2] shadow-[inset_1px_1px_1px_0px_rgba(255,255,255,0.4),inset_-1px_-1px_1px_0px_rgba(255,255,255,0.2)] pointer-events-none rounded-2xl"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center">
                  Get Early Access
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
