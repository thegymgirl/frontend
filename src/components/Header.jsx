'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-6 z-50 mx-auto w-full max-w-[1689px] px-6">
      <div className="relative flex min-h-13 items-center justify-between rounded-[20px] px-4 md:min-h-16 lg:pl-6 lg:pr-1.5">
        {/* Glass morphism background */}
        <div className="absolute inset-0">
          <div className="liquid-glass-effect absolute inset-0 z-0 isolate overflow-hidden pointer-events-none rounded-[20px] backdrop-blur-[3px]" />
          <div className="absolute inset-0 z-[1] pointer-events-none rounded-[20px] bg-[rgba(255,255,255,0.15)]" />
          <div className="absolute inset-0 z-[2] shadow-[inset_1px_1px_1px_0px_rgba(255,255,255,0.4),inset_-1px_-1px_1px_0px_rgba(255,255,255,0.2)] pointer-events-none rounded-[20px]" />
        </div>

        {/* Logo */}
        <Link href="/" className="relative z-10 shrink-0" aria-label="Future home">
          <svg width="24" height="32" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto transition-colors duration-300">
            <path d="M17.25 0V3.88412C2.60188 6.80118 3.2238 10.0756 3.2238 10.0756C3.12537 12.435 14.0011 9.97235 14.0011 9.97235V13.1171C3.48075 17.0956 2.87713 24 2.87713 24H0.478308C1.23088 17.8518 6.15568 14.3321 6.15568 14.3321C0.245744 14.4776 -0.00685558 10.7338 0.00446782 10.0791C0.00446782 10.0791 -0.747231 3.29382 17.25 0Z" fill="black" />
          </svg>
        </Link>

        {/* Desktop Navigation */}
        <div className="relative z-10 flex items-center">
          <div className="hidden items-center gap-6 lg:flex">
            <Link href="/pro" className="font-[family-name:seasonSans] text-[0.938rem] font-[550] leading-[1.1] transition-all duration-300 hover:opacity-100 lg:text-[1.125rem] whitespace-nowrap text-[#272A2B] opacity-50">
              Future Pro
            </Link>
            <Link href="/blog" className="font-[family-name:seasonSans] text-[0.938rem] font-[550] leading-[1.1] transition-all duration-300 hover:opacity-100 lg:text-[1.125rem] whitespace-nowrap text-[#272A2B] opacity-50">
              Blog
            </Link>
            <Link href="/quiz" className="group relative flex items-center justify-center gap-1 overflow-hidden cursor-pointer font-[family-name:seasonSans] font-[550] md:text-lg whitespace-nowrap md:h-[52px] py-1.5 rounded-2xl shadow-[0_0_2px_0_rgba(0,0,0,0.10),_0_1px_8px_0_rgba(0,0,0,0.12)] transition-[color,box-shadow,opacity] duration-200 text-[#272A2B] px-5 hover:!text-white h-11 text-[15px] lg:h-[52px] lg:text-lg">
              <div className="liquid-glass-effect absolute inset-0 z-0 isolate overflow-hidden pointer-events-none rounded-2xl backdrop-blur-[3px]" />
              <div className="absolute inset-0 z-[1] pointer-events-none rounded-2xl bg-[rgba(255,255,255,0.95)] transition-colors duration-200 group-hover:group-not-disabled:bg-[rgba(39,42,43,0.95)]" />
              <div className="absolute inset-0 z-[2] shadow-[inset_1px_1px_1px_0px_rgba(255,255,255,0.4),inset_-1px_-1px_1px_0px_rgba(255,255,255,0.2)] pointer-events-none rounded-2xl" />
              <span className="relative z-10 flex items-center">Join Waitlist</span>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <Link href="/quiz" className="group relative flex items-center justify-center gap-1 overflow-hidden cursor-pointer font-[family-name:seasonSans] font-[550] md:text-lg whitespace-nowrap md:h-[52px] py-1.5 rounded-2xl shadow-[0_0_2px_0_rgba(0,0,0,0.10),_0_1px_8px_0_rgba(0,0,0,0.12)] transition-[color,box-shadow,opacity] duration-200 text-[#272A2B] px-5 hover:!text-white h-11 text-[15px]">
              <div className="liquid-glass-effect absolute inset-0 z-0 isolate overflow-hidden pointer-events-none rounded-2xl backdrop-blur-[3px]" />
              <div className="absolute inset-0 z-[1] pointer-events-none rounded-2xl bg-[rgba(255,255,255,0.95)] transition-colors duration-200 group-hover:group-not-disabled:bg-[rgba(39,42,43,0.95)]" />
              <div className="absolute inset-0 z-[2] shadow-[inset_1px_1px_1px_0px_rgba(255,255,255,0.4),inset_-1px_-1px_1px_0px_rgba(255,255,255,0.2)] pointer-events-none rounded-2xl" />
              <span className="relative z-10 flex items-center">Join Waitlist</span>
            </Link>
            <button
              type="button"
              className="flex items-center justify-center"
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 5H20M4 12H20M4 19H20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
