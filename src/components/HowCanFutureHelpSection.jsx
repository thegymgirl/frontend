'use client';

import { useState, useEffect } from 'react';

const TABS = [
  {
    id: 0,
    title: 'Real-Time Adjustments',
    description: 'Your program adapts instantly to keep you moving. Report injuries or update preferences at any time.',
    image: 'https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_3840/f_auto/q_auto/v1/https://future.co/images/homepage/value-props/workout-adaptation-screen-blue.png?_a=BAVMn6B00',
    mobileImage: 'https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_1920/f_auto/q_auto/v1/https://future.co/images/homepage/value-props/value-prop-blue-desktop.jpg?_a=BAVMn6B00',
  },
  {
    id: 1,
    title: 'Personalized Workout Plans',
    description: 'Set your fitness goals and receive a personalized plan that matches your body and abilities.',
    image: 'https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_3840/f_auto/q_auto/v1/https://future.co/images/homepage/value-props/personalized-workouts-screen-blue.png?_a=BAVMn6B00',
    mobileImage: 'https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_1920/f_auto/q_auto/v1/https://future.co/images/homepage/value-props/value-prop-blue-desktop.jpg?_a=BAVMn6B00',
  },
  {
    id: 2,
    title: 'In-Workout Coaching',
    description: 'Get real-time guidance, cues, and adjustments to help you perform at your absolute best.',
    image: 'https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_3840/f_auto/q_auto/v1/https://future.co/images/homepage/value-props/workout-coaching-screen-blue.png?_a=BAVMn6B00',
    mobileImage: 'https://res.cloudinary.com/future-web3/image/fetch/c_limit,w_1920/f_auto/q_auto/v1/https://future.co/images/homepage/value-props/value-prop-blue-desktop.jpg?_a=BAVMn6B00',
  },
];

export default function HowCanFutureHelpSection() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % TABS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section
      className="relative flex w-full items-center justify-center overflow-hidden bg-white backdrop-blur-[7.201px] px-6 py-16 md:pt-10 md:pb-10"
      aria-label="How Future coaching works"
      data-navbar-theme="hybrid"
    >
      <div className="flex h-full w-full origin-top items-center overflow-hidden">
        <div className="mx-auto flex min-h-screen w-full max-w-[1649px] items-center gap-4 py-4">
          {/* Left Panel - Tabs */}
          <div className="relative flex h-[calc(100vh-2rem)] max-h-[1031px] w-[573px] shrink-0 flex-col items-center overflow-hidden rounded-[50px] px-5 py-10 shadow-[0_1px_8px_0_rgba(0,0,0,0.12)]">
            {/* Background Glass Effect */}
            <div
              className="liquid-glass-effect absolute inset-0 z-0 isolate overflow-hidden pointer-events-none rounded-[50px] backdrop-blur-[3px]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 z-[1] pointer-events-none rounded-[50px] bg-white/20"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 z-[2] shadow-[inset_1px_1px_1px_0px_rgba(255,255,255,0.4),inset_-1px_-1px_1px_0px_rgba(255,255,255,0.2)] pointer-events-none rounded-[50px]"
              aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10 flex h-full w-full flex-col items-center">
              <p
                className="font-[family-name:seasonSans] text-[17px] leading-[1.3] tracking-[-0.17px] text-[#272a2b] opacity-50"
                id="value-props-heading"
              >
                How Can Future Help?
              </p>

              {/* Tab List */}
              <div
                className="flex flex-1 w-full flex-col items-center justify-center gap-[11px]"
                role="tablist"
                aria-labelledby="value-props-heading"
              >
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    id={`value-prop-tab-${tab.id}`}
                    aria-selected={activeTab === tab.id}
                    aria-controls={`value-prop-tabpanel-${tab.id}`}
                    tabIndex={activeTab === tab.id ? 0 : -1}
                    onClick={() => handleTabClick(tab.id)}
                    className="font-[family-name:seasonMix] text-left text-[30px] font-[420] leading-[1.15] tracking-[-0.3px] text-[#272a2b] hover:opacity-100 transition-opacity duration-300"
                    style={{
                      opacity: activeTab === tab.id ? 1 : 0.2,
                    }}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="/quiz"
                className="group relative flex items-center justify-center gap-1 overflow-hidden cursor-pointer font-[family-name:seasonSans] font-[550] text-[15px] md:text-lg leading-[1.1] whitespace-nowrap h-[44px] md:h-[52px] py-1.5 rounded-2xl shadow-[0_0_2px_0_rgba(0,0,0,0.10),0_1px_8px_0_rgba(0,0,0,0.12)] transition-[color,box-shadow,opacity] duration-200 !text-white px-10 hover:shadow-[0_0_2px_0_rgba(var(--persona-primary-rgb,255,121,73),1),0_1px_13px_0_rgba(var(--persona-primary-rgb,255,121,73),1)]"
              >
                <div
                  className="liquid-glass-effect absolute inset-0 z-0 isolate overflow-hidden pointer-events-none rounded-2xl backdrop-blur-[3px]"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 z-[1] pointer-events-none rounded-2xl bg-[rgba(var(--persona-primary-rgb,255,121,73),0.95)]"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 z-[2] shadow-[inset_1px_1px_1px_0px_rgba(255,255,255,0.4),inset_-1px_-1px_1px_0px_rgba(255,255,255,0.2)] pointer-events-none rounded-2xl"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center">Get Early Access</span>
              </a>
            </div>
          </div>

          {/* Right Panel - Content */}
          <div className="relative h-[calc(100vh-2rem)] max-h-[1031px] flex flex-1 items-center justify-center overflow-hidden rounded-[50px] bg-[rgba(142,142,142,0.42)]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                alt="Future app interface background"
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="object-cover object-top w-full h-full"
                src={TABS[activeTab].mobileImage}
              />
            </div>

            {/* Tab Panels */}
            {TABS.map((tab) => (
              <div
                key={tab.id}
                role="tabpanel"
                id={`value-prop-tabpanel-${tab.id}`}
                aria-labelledby={`value-prop-tab-${tab.id}`}
                aria-hidden={activeTab !== tab.id}
                className={activeTab === tab.id ? 'relative z-10 flex flex-col items-center gap-4 px-4 xl:flex-row justify-center xl:items-center transition-all duration-500 opacity-100' : 'hidden'}
              >
                {/* Phone Mockup */}
                <div className="flex-shrink-0" aria-label="Feature visualization">
                  <div className="relative" style={{ opacity: activeTab === tab.id ? 1 : 0 }}>
                    <div className="relative flex h-[565px] w-[290px] flex-col overflow-hidden rounded-[33.7px]">
                      <div className="absolute inset-0">
                        <img
                          alt={tab.title}
                          loading="lazy"
                          decoding="async"
                          className="object-cover object-[50%_50%] w-full h-full"
                          src={tab.image}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description Text */}
                <div className="max-w-[430px]">
                  <p
                    className="text-center font-[family-name:seasonMix] text-[30px] font-[420] leading-[1.15] tracking-[-0.3px] !text-white xl:text-left transition-opacity duration-500"
                    style={{
                      opacity: activeTab === tab.id ? 1 : 0,
                      transform: activeTab === tab.id ? 'none' : 'translateY(10px)',
                    }}
                  >
                    {tab.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-black"
        aria-hidden="true"
        style={{ opacity: 0 }}
      />
    </section>
  );
}
