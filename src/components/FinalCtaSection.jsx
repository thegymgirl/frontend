"use client";

import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import fireAnimation from "../data/fire.json";

export default function FinalCtaSection() {
  return (
    <section className="relative z-10 flex flex-col items-center pt-8 pb-10 md:pt-[86px] md:pb-16">
      <div className="relative flex w-full max-w-[1044px] flex-col items-center gap-4 px-4 md:gap-10">
        {/* Orb */}
        <div className="relative size-[400px]">
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

        {/* Heading text */}
        <p className="max-w-[400px] text-center font-[seasonMix] font-[420] text-[24px] leading-[1.15] tracking-[-0.24px] text-[#fff] md:max-w-[670px] md:text-[30px] md:tracking-[-0.3px]">
          {`Get the body you've always wanted—with coaching from someone who's done it.`}
        </p>

        {/* Button */}
        <div>
          <Link
            href="/quiz"
            className="group relative mt-1 flex h-[44px] items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-2xl px-10 py-1.5 font-[family-name:seasonSans] font-[550] text-[15px] leading-[1.1] !text-white shadow-[0_0_2px_0_rgba(0,0,0,0.10),_0_1px_8px_0_rgba(0,0,0,0.12)] transition-[color,box-shadow,opacity] duration-200 md:h-[52px] md:text-lg hover:shadow-[0_0_2px_0_rgba(var(--persona-primary-rgb),1),_0_1px_13px_0_rgba(var(--persona-primary-rgb),1)]"
          >
            <div className="liquid-glass-effect absolute inset-0 z-0 isolate overflow-hidden pointer-events-none rounded-2xl backdrop-blur-[3px]"></div>
            <div className="absolute inset-0 z-[1] pointer-events-none rounded-2xl bg-[rgba(var(--persona-primary-rgb),0.95)]"></div>
            <div className="absolute inset-0 z-[2] shadow-[inset_1px_1px_1px_0px_rgba(255,255,255,0.4),inset_-1px_-1px_1px_0px_rgba(255,255,255,0.2)] pointer-events-none rounded-2xl"></div>
            <span className="relative z-10 flex items-center">
              GET EARLY ACCESS
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
