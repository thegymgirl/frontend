'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard } from 'swiper/modules';
import Lottie from 'lottie-react';
import fireAnimation from '../data/fire.json';
import 'swiper/css';

const PERSONAS = [
  {
    name: 'Julia',
    goal: "Julia's goal is to improve total-body strength after pregnancy.",
    topImage: 'https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_3840/f_auto/q_90/v1/https://future.co/images/homepage/personas/persona-top-orange.jpg?_a=BAVMn6B00',
    bottomImage: 'https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_3840/f_auto/q_90/v1/https://future.co/images/homepage/personas/persona-bottom-orange.jpg?_a=BAVMn6B00',
    orbVideo: 'https://future.co/images/homepage/glassy-orb/orb-blue.webm',
    orbFallback: 'https://future.co/images/homepage/glassy-orb/static-orb-orange.png',
    rgb: '255, 121, 73',
    color: 'orange',
  },
  {
    name: 'Jeremy',
    goal: "Jeremy's goal is to supplement his trail running with conditioning.",
    topImage: 'https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_3840/f_auto/q_90/v1/https://future.co/images/homepage/personas/persona-top-blue.jpg?_a=BAVMn6B00',
    bottomImage: 'https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_3840/f_auto/q_90/v1/https://future.co/images/homepage/personas/persona-bottom-blue.jpg?_a=BAVMn6B00',
    orbVideo: 'https://future.co/images/homepage/glassy-orb/orb-blue.webm',
    orbFallback: 'https://future.co/images/homepage/glassy-orb/static-orb-blue.png',
    rgb: '133, 174, 255',
    color: 'blue',
  },
  {
    name: 'Shay',
    goal: "Shay's goal is to crush her 2nd HYROX competition next month.",
    topImage: 'https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_3840/f_auto/q_90/v1/https://future.co/images/homepage/personas/persona-top-green.jpg?_a=BAVMn6B00',
    bottomImage: 'https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_3840/f_auto/q_90/v1/https://future.co/images/homepage/personas/persona-bottom-green.jpg?_a=BAVMn6B00',
    orbVideo: 'https://future.co/images/homepage/glassy-orb/orb-green.webm',
    orbFallback: 'https://future.co/images/homepage/glassy-orb/static-orb-green.png',
    rgb: '161, 196, 119',
    color: 'green',
  },
  {
    name: 'Daniel',
    goal: 'Daniel\'s goal is to build lean muscle before his wedding.',
    topImage: 'https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_3840/f_auto/q_90/v1/https://future.co/images/homepage/personas/persona-top-purple.jpg?_a=BAVMn6B00',
    bottomImage: 'https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_3840/f_auto/q_90/v1/https://future.co/images/homepage/personas/persona-bottom-purple.jpg?_a=BAVMn6B00',
    orbVideo: 'https://future.co/images/homepage/glassy-orb/orb-blue.webm',
    orbFallback: '/images/homepage/blurred-orb/orb-blue.gif',
    rgb: '172, 113, 204',
    color: 'purple',
  },
];

export default function PersonasSlideCarousel() {
  const carouselRef = useRef(null);

  return (
    <section
      ref={carouselRef}
      className="relative z-10 flex flex-col items-center py-2 md:py-4 lg:pt-15"
      data-navbar-theme="dark"
      aria-label="Fitness personas carousel"
    >
      <div className="h-[calc(100dvh-16px)] w-full py-2">
        <Swiper
          modules={[Keyboard]}
          spaceBetween={16}
          slidesPerView={1}
          centeredSlides={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          keyboard={{
            enabled: true,
          }}
          loop={true}
          role="region"
          aria-roledescription="carousel"
        >
          {PERSONAS.map((persona, index) => (
            <SwiperSlide key={index} className="swiper-slide-active-content !h-full !w-[353px] md:!w-[600px] lg:!w-[900px]">
              <div
                className="relative flex h-full w-full flex-col gap-1 md:gap-4 transition-opacity duration-300"
                style={{ '--persona-slide-rgb': persona.rgb }}
              >
                {/* Top Section */}
                <div className="relative w-full overflow-hidden rounded-[10px] md:rounded-xl">
                  <Image
                    src={persona.topImage}
                    alt={`${persona.name} - fitness persona`}
                    loading="lazy"
                    width={1920}
                    height={1080}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 600px, 900px"
                  />
                  {/* Dark Overlay */}
                  <div className="persona-overlay absolute inset-0 bg-black" />

                  {/* Text Overlay */}
                  <div className="slide-text-overlay absolute inset-0 flex flex-col items-center justify-end px-5 pb-5 md:px-6 md:pb-10">
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-[seasonMix] text-[34px] leading-[1.1] tracking-[-0.34px] !text-white md:text-[clamp(40px,7svh,60px)] md:tracking-[-0.6px] lg:text-[clamp(56px,9svh,84px)] lg:tracking-[-0.84px]">
                        Fitness for
                      </span>
                      <div className="relative overflow-hidden rounded-2xl px-4 py-2 shadow-[0_7px_22px_0_rgba(19,19,19,0.05)] md:rounded-[22px] md:px-6 md:py-4">
                        <div
                          className="absolute inset-0 opacity-15"
                          style={{
                            background: 'linear-gradient(135deg, #ff6b35, #a1c477, #a855f7)',
                          }}
                          aria-hidden="true"
                        />
                        <div
                          className="absolute inset-0 z-2 shadow-[inset_1px_1px_1px_0px_rgba(255,255,255,0.4),inset_-1px_-1px_1px_0px_rgba(255,255,255,0.2)] pointer-events-none rounded-2xl md:rounded-[22px]"
                          aria-hidden="true"
                        />
                        <span className="relative z-10 font-[seasonMix] text-[clamp(24px,5svh,34px)] leading-[1.1] tracking-[-0.34px] !text-white md:text-[clamp(40px,7svh,60px)] md:tracking-[-0.6px] lg:text-[clamp(56px,9svh,84px)] lg:tracking-[-0.84px]">
                          {persona.name}
                        </span>
                      </div>
                    </div>
                    <p className="mt-4 max-w-78 text-center font-[seasonSans] text-xl font-[550] leading-[1.1] !text-white md:mt-10 md:max-w-258.75 md:text-[23px]">
                      {persona.goal}
                    </p>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="relative w-full overflow-hidden rounded-[10px] md:rounded-xl" >
                  <Image
                    src={persona.bottomImage}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    width={1920}
                    height={1080}
                    className="h-full w-full object-cover object-[50%_10%]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 600px, 900px"
                  />
                  {/* Dark Overlay */}
                  <div className="persona-overlay absolute inset-0 bg-black" />

                  {/* Orb and Button */}
                  <div className="slide-video-overlay absolute inset-0 flex items-end justify-center pb-23 md:pb-25">
                    <div className="relative size-16">
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
                  </div>

                  {/* Join Waitlist Button */}
                  <div className="slide-button-overlay absolute bottom-6 left-1/2 z-20 -translate-x-1/2 pointer-events-none">
                    <a
                      href="/quiz"
                      className="group relative flex items-center justify-center gap-1 overflow-hidden cursor-pointer font-[seasonSans] font-[550] text-[15px] md:text-lg leading-[1.1] h-11 md:h-13 py-1.5 rounded-2xl shadow-[0_0_2px_0_rgba(0,0,0,0.10),0_1px_8px_0_rgba(0,0,0,0.12)] transition-[color,box-shadow,opacity] duration-200 !text-white px-10 hover:shadow-[0_0_2px_0_rgba(var(--persona-slide-rgb),1),0_1px_13px_0_rgba(var(--persona-slide-rgb),1)] whitespace-nowrap"
                    >
                      <div
                        className="liquid-glass-effect absolute inset-0 z-0 isolate overflow-hidden pointer-events-none rounded-2xl backdrop-blur-[3px]"
                        aria-hidden="true"
                      />
                      <div
                        className="absolute inset-0 z-1 pointer-events-none rounded-2xl"
                        style={{ backgroundColor: `rgba(var(--persona-slide-rgb), 0.95)` }}
                        aria-hidden="true"
                      />
                      <div
                        className="absolute inset-0 z-2 shadow-[inset_1px_1px_1px_0px_rgba(255,255,255,0.4),inset_-1px_-1px_1px_0px_rgba(255,255,255,0.2)] pointer-events-none rounded-2xl"
                        aria-hidden="true"
                      />
                      <span className="relative z-10 flex items-center">Join Waitlist</span>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Overlay background */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-black" aria-hidden="true" style={{ opacity: 1 }} />
    </section>
  );
}
