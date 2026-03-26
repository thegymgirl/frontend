import Image from "next/image";

export default function AboutMeSection() {
  return (
    <div className="relative z-20 mx-auto w-full max-w-[1100px] px-4 pb-16 pt-16 md:px-6 md:pb-20">
      <section
        className="relative overflow-hidden rounded-[28px] bg-white/85 px-6 py-10 shadow-[0_7px_22px_0_rgba(19,19,19,0.05)] backdrop-blur-[3px] md:px-12 md:py-14"
        aria-label="About me"
      >
        <div className="pointer-events-none absolute left-3 bottom-6 size-20 overflow-hidden rounded-full md:left-6 md:bottom-8 lg:size-40.5 md:block">
          <Image
            src="/images/homepage/blurred-orb/90.jpg"
            alt=""
            aria-hidden="true"
            fill
            sizes="190px"
            className="object-cover"
          />
        </div>

        <div className="pointer-events-none absolute md:block right-3 bottom-6 size-20 overflow-hidden rounded-full md:right-6 md:bottom-8 lg:size-40.5">
          <Image
            src="/images/homepage/blurred-orb/100.jpg"
            alt=""
            aria-hidden="true"
            fill
            sizes="190px"
            className="object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto flex max-w-[780px] flex-col items-center gap-5 text-center md:gap-6">
          <p className="font-[family-name:seasonMix] text-[1.75rem] leading-[1.1] tracking-[-0.34px] text-[#272a2b] md:text-[2.5rem]">
            About Me
          </p>

          <div className="flex flex-col gap-3">
            <p className="font-[family-name:seasonSans] text-[1rem] leading-[1.70] tracking-[-0.16px] text-[#272a2b] md:text-[1.063rem]">
              {`I'm Gia. I lost 50 pounds and became a nationally qualified bodybuilder—completely natural, no shortcuts.`}
            </p>
            <p className="font-[family-name:seasonSans] text-[1rem] leading-[1.70] tracking-[-0.16px] text-[#272a2b] md:text-[1.063rem]">
              I spend my free time reading research on training, nutrition, and longevity, then use that knowledge to build your programs. Evidence-based methods that actually work.
            </p>
            <p className="font-[family-name:seasonSans] text-[1rem] leading-[1.70] tracking-[-0.16px] text-[#272a2b] md:text-[1.063rem]">
              {`You'll get the same approach I used to transform myself. Custom programs, weekly accountability, and real results.`} 
            </p>
            <p className="font-[family-name:seasonSans] text-[1rem] leading-[1.70] tracking-[-0.16px] text-[#272a2b] md:text-[1.063rem]">
              {`Let's get you looking good, feeling confident, and living healthy.`}
            </p>
            {/* <p className="font-[family-name:seasonSans] text-[1rem] leading-[1.70] tracking-[-0.16px] text-[#272a2b] md:text-[1.063rem]">
              {`Let's`} get you looking good, feeling confident, and living
              healthy.
            </p> */}
          </div>

          <a
            href="/quiz"
            className="group relative mt-1 flex h-[44px] items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-2xl px-10 py-1.5 font-[family-name:seasonSans] font-[550] text-[15px] leading-[1.1] !text-white shadow-[0_0_2px_0_rgba(0,0,0,0.10),_0_1px_8px_0_rgba(0,0,0,0.12)] transition-[color,box-shadow,opacity] duration-200 md:h-[52px] md:text-lg hover:shadow-[0_0_2px_0_rgba(var(--persona-primary-rgb),1),_0_1px_13px_0_rgba(var(--persona-primary-rgb),1)]"
          >
            <div className="liquid-glass-effect absolute inset-0 z-0 isolate overflow-hidden pointer-events-none rounded-2xl backdrop-blur-[3px]" />
            <div className="absolute inset-0 z-[1] pointer-events-none rounded-2xl bg-[rgba(var(--persona-primary-rgb),0.95)]" />
            <div className="absolute inset-0 z-[2] shadow-[inset_1px_1px_1px_0px_rgba(255,255,255,0.4),inset_-1px_-1px_1px_0px_rgba(255,255,255,0.2)] pointer-events-none rounded-2xl" />
            <span className="relative z-10 flex items-center">
              {`LET'S`} GET STARTED
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
