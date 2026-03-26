"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden bg-[#141517]"
      data-navbar-theme="dark"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-10 md:px-10 md:py-12">
        <div className="flex flex-col gap-5 text-center md:gap-6 md:text-left">
          <p className="font-[family-name:seasonSans] text-center text-[0.95rem] leading-[1.3] tracking-[-0.16px] text-white md:text-[1rem]">
            © 2026 STRONGVAMPIREX
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 font-[family-name:seasonSans] text-[0.95rem] leading-[1.3] tracking-[-0.16px] text-white md:text-[1rem]">
            <Link
              href="https://www.instagram.com/strongvampirex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 underline underline-offset-4 hover:opacity-80"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3.5"
                  y="3.5"
                  width="17"
                  height="17"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
              </svg>
              <span>Instagram: @strongvampirex</span>
            </Link>

            <span aria-hidden="true">|</span>

            <Link
              href="https://www.tiktok.com/@gialayn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 underline underline-offset-4 hover:opacity-80"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4 4v10.1a3.9 3.9 0 1 1-3-3.8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.4 4c.8 1.6 2.2 2.7 4.1 2.9"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              <span>TikTok: @gialayn</span>
            </Link>
          </div>

          <p className="font-[family-name:seasonSans] text-center text-[0.95rem] leading-[1.3] tracking-[-0.16px] text-white md:text-[1rem]">
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:opacity-80"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              href="/terms-conditions"
              className="underline underline-offset-4 hover:opacity-80"
            >
              Terms & Conditions
            </Link>{" "}
            |{" "}
            <Link
              href="/return-refund"
              className="underline underline-offset-4 hover:opacity-80"
            >
              Refund Policy
            </Link>
          </p>

          <p className="font-[family-name:seasonSans] text-center  text-[0.95rem] leading-[1.3] tracking-[-0.16px] text-white/90 md:text-[1rem]">
            Disclaimer: Consult your physician before starting any exercise
            program.
          </p>
        </div>
      </div>
    </footer>
  );
}
