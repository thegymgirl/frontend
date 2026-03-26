"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const GOALS = [
  " fat loss",
  "getting stronger",
  "building muscle",
  "healthy lifestyle",
  "athletes",
];

export default function HeroSection() {
  const [currentGoal, setCurrentGoal] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [containerWidth, setContainerWidth] = useState("auto");
  const measureRef = useRef(null);

  useEffect(() => {
    if (measureRef.current) {
      const textWidth = measureRef.current.offsetWidth;
      setContainerWidth(textWidth);
    }
  }, [currentGoal]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentGoal((prev) => (prev + 1) % GOALS.length);
        setIsVisible(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-black text-white">
      {/* Banner with image and text overlay */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:min-h-dvh overflow-hidden">
        <Image
          alt="STRONGVAMPIREX Coaching Banner"
          src="/images/homepage/blurred-orb/3.jpg"
          fill
          sizes="100vw"
          className=" object-cover object-top"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Banner text content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
          <div className="text-center max-w-[900px]">
            <h1 className="font-[family-name:seasonSans] font-bold pt-[90px] md:mt-0 text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-[420] leading-tight tracking-[-0.5px] text-[#ffffff] mb-4 md:mb-6">
              STRONGVAMPIREX COACHING
            </h1>
            <p className="font-[family-name:seasonSans] text-[1rem] md:text-[1.25rem] leading-relaxed tracking-[-0.17px] text-[#ffffff] mb-4 md:mb-6">
              Custom programs, weekly check-ins, and ongoing support—all via
              text.
            </p>
            <p className="font-[family-name:seasonSans] text-[1rem] md:text-[1.125rem] leading-relaxed tracking-[-0.17px] text-[#ffffff] mb-6 md:mb-8">
              Nationally qualified bodybuilder
            </p>
            <p className="font-[family-name:seasonSans] text-[1.25rem] md:text-[1.5rem] gap-2 flex-col sm:flex-row flex items-center font-[550] tracking-[-0.17px] text-[#FFD700] mb-8 md:mb-10 ">
              <span>$150/month for first 100 members</span> <span>(Regular price $200/month)</span>
            </p>
            <Link
              href="/quiz"
              className="group relative inline-flex items-center justify-center gap-1 overflow-hidden cursor-pointer font-[family-name:seasonSans] font-[550] text-[15px] md:text-lg leading-[1.1] whitespace-nowrap h-[44px] md:h-[52px] py-1.5 rounded-2xl shadow-[0_0_2px_0_rgba(0,0,0,0.10),_0_1px_8px_0_rgba(0,0,0,0.12)] transition-[color,box-shadow,opacity] duration-200 !text-white px-10 hover:shadow-[0_0_2px_0_rgba(var(--persona-primary-rgb,255,121,73),1),_0_1px_13px_0_rgba(var(--persona-primary-rgb,255,121,73),1)]"
            >
              <div className="liquid-glass-effect absolute inset-0 z-0 isolate overflow-hidden pointer-events-none rounded-2xl backdrop-blur-[3px]" />
              <div className="absolute inset-0 z-[1] pointer-events-none rounded-2xl bg-[rgba(var(--persona-primary-rgb,255,121,73),0.95)]" />
              <div className="absolute inset-0 z-[2] shadow-[inset_1px_1px_1px_0px_rgba(255,255,255,0.4),inset_-1px_-1px_1px_0px_rgba(255,255,255,0.2)] pointer-events-none rounded-2xl" />
              <span className="relative z-10 flex items-center">
                {`LET'S`} GET STARTED
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="relative flex gap-6 lg:gap-8 w-full flex-col items-center z-10 pb-10 md:pb-24 lg:pb-32">
        <div className="relative flex w-full max-w-[1044px] flex-col items-center gap-5 lg:gap-10 px-6 lg:pt-[100px] pt-10">
          
          <div className="flex w-full flex-col items-center gap-4 lg:gap-6">
            
            <div className="relative size-[16vw] min-h-[175px] min-w-[175px] max-h-[360px] max-w-[360px]">
              <Lottie
                animationData={fireAnimation}
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
                aria-hidden="true"
              />
            </div>

            
            <h2 className="text-center font-[family-name:seasonMix] capitalize font-[420] text-[1.825rem] leading-none tracking-[-0.5px] text-[#ffffff] sm:text-[2.5rem] md:text-[3rem] lg:text-[2.25rem]">
              Text-based coaching from a nationally qualified bodybuilder
            </h2>
          </div>

          
          <div className="flex flex-col items-center gap-6 lg:gap-8">
            <div className="flex flex-col items-center gap-1">
              <Link
                href="/quiz"
                className="group relative flex items-center justify-center gap-1 overflow-hidden cursor-pointer font-[family-name:seasonSans] font-[550] text-[15px] md:text-lg leading-[1.1] whitespace-nowrap h-[44px] md:h-[52px] py-1.5 rounded-2xl shadow-[0_0_2px_0_rgba(0,0,0,0.10),_0_1px_8px_0_rgba(0,0,0,0.12)] transition-[color,box-shadow,opacity] duration-200 !text-white px-10 hover:shadow-[0_0_2px_0_rgba(var(--persona-primary-rgb,255,121,73),1),_0_1px_13px_0_rgba(var(--persona-primary-rgb,255,121,73),1)]"
              >
                <div className="liquid-glass-effect absolute inset-0 z-0 isolate overflow-hidden pointer-events-none rounded-2xl backdrop-blur-[3px]" />
                <div className="absolute inset-0 z-[1] pointer-events-none rounded-2xl bg-[rgba(var(--persona-primary-rgb,255,121,73),0.95)]" />
                <div className="absolute inset-0 z-[2] shadow-[inset_1px_1px_1px_0px_rgba(255,255,255,0.4),inset_-1px_-1px_1px_0px_rgba(255,255,255,0.2)] pointer-events-none rounded-2xl" />
                <span className="relative z-10 flex items-center">
                  {`LET'S`} GET STARTED
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
