export default function WorkoutCards() {
  return (
    <div className="flex flex-col gap-[clamp(8px,2svh,16px)]" data-workout-cards>
      {/* Workout Card 1 */}
      <div className="flex w-full xs:min-w-[300px] md:min-w-[357px] items-start gap-1.5 rounded-xl bg-[rgba(0,0,0,0.2)] p-[clamp(10px,2svh,16px)] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.04)] backdrop-blur-[32px]">
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <div className="flex items-start gap-1.5">
            <div className="min-w-0 flex-1">
              <p className="text-[clamp(0.875rem,2.2svh,1.063rem)] font-semibold leading-[1.3] tracking-[-0.43px] !text-white">
                Strength training
              </p>
            </div>
            <div className="flex h-6 shrink-0 items-center justify-end text-[#d1d1d1]">
              <ChevronRight />
            </div>
          </div>
          <div className="flex items-center gap-1 !text-white/70">
            <span className="font-[family-name:seasonSans] text-[clamp(0.75rem,1.8svh,1rem)] leading-[1.25]">
              1 hr
            </span>
            <span className="text-[clamp(0.75rem,1.8svh,1rem)] leading-[1.3] tracking-[-0.31px] !text-white">
              •
            </span>
            <span className="font-[family-name:seasonSans] text-[clamp(0.75rem,1.8svh,1rem)] leading-[1.25]">
              Farnsworth Park Gym
            </span>
          </div>
        </div>
      </div>

      {/* Workout Card 2 */}
      <div className="flex w-full xs:min-w-[300px] md:min-w-[357px] items-start gap-1.5 rounded-xl bg-[rgba(0,0,0,0.2)] p-[clamp(10px,2svh,16px)] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.04)] backdrop-blur-[32px]">
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <div className="flex items-start gap-1.5">
            <div className="min-w-0 flex-1">
              <p className="text-[clamp(0.875rem,2.2svh,1.063rem)] font-semibold leading-[1.3] tracking-[-0.43px] !text-white">
                Quick Total Body HIIT
              </p>
            </div>
            <div className="flex h-6 shrink-0 items-center justify-end text-[#d1d1d1]">
              <ChevronRight />
            </div>
          </div>
          <div className="flex items-center gap-1 !text-white/70">
            <span className="font-[family-name:seasonSans] text-[clamp(0.75rem,1.8svh,1rem)] leading-[1.25]">
              15 min
            </span>
            <span className="text-[clamp(0.75rem,1.8svh,1rem)] leading-[1.3] tracking-[-0.31px] !text-white">
              •
            </span>
            <span className="font-[family-name:seasonSans] text-[clamp(0.75rem,1.8svh,1rem)] leading-[1.25]">
              Home
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Chevron Right Icon Component
function ChevronRight() {
  return (
    <svg
      width="8"
      height="13"
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7.0915 6.29376C7.0915 6.3856 7.07216 6.47262 7.03349 6.55479C6.99965 6.63214 6.9489 6.70465 6.88122 6.77232L1.13849 12.3918C1.00797 12.5223 0.848449 12.5876 0.659925 12.5876C0.539076 12.5876 0.427895 12.5586 0.326382 12.5006C0.224869 12.4425 0.145109 12.3628 0.0871014 12.2613C0.0290939 12.1646 9.02172e-05 12.0534 9.02172e-05 11.9277C9.02172e-05 11.7489 0.0629316 11.5918 0.188614 11.4564L5.46729 6.29376L0.188614 1.1311C0.0629316 0.995747 9.02172e-05 0.838644 9.02172e-05 0.659788C9.02172e-05 0.534105 0.0290939 0.422924 0.0871014 0.326245C0.145109 0.224732 0.224869 0.144972 0.326382 0.0869643C0.427895 0.0289569 0.539076 -4.68455e-05 0.659925 -4.68455e-05C0.848449 -4.68455e-05 1.00797 0.0627945 1.13849 0.188477L6.88122 5.8152C6.9489 5.88287 6.99965 5.9578 7.03349 6.03998C7.07216 6.11732 7.0915 6.20191 7.0915 6.29376Z"
        fill="currentColor"
      />
    </svg>
  );
}
