'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function SuccessPage() {
  useEffect(() => {
    // Clean up localStorage
    setTimeout(() => {
      localStorage.removeItem('quizAnswers')
      localStorage.removeItem('generatedProgram')
    }, 1000)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full text-center">
        
        {/* Success Animation */}
        <div className="w-32 h-32 mx-auto mb-8 bg-green-500/20 rounded-full flex items-center justify-center animate-pulse">
          <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Main Headline - Single line AND centered */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            Welcome to StrongVampirex Coaching! 🎉
          </h1>
        </div>

        <p className="text-xl text-gray-400 mb-12">
          Your payment was successful. Let's get you started.
        </p>

        {/* What Happens Next */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-10 border border-gray-800 mb-12 text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            What Happens Next
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#DC143C] w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                1
              </div>
              <div>
                <div className="font-bold text-lg mb-2">Expect a Text Within 24 Hours</div>
                <div className="text-gray-400">
                  Your programs will be delivered via text. Save my number!
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#DC143C] w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                2
              </div>
              <div>
                <div className="font-bold text-lg mb-2">Start Your Program</div>
                <div className="text-gray-400">
                  Follow your nutrition and training plan. Text anytime with questions!
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#DC143C] w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                3
              </div>
              <div>
                <div className="font-bold text-lg mb-2">Weekly Check-Ins</div>
                <div className="text-gray-400">
                  Every week, send your weight, measurements, and progress pics. We'll make adjustments to your plan if needed.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Reminder */}
        <div className="bg-[#DC143C]/10 border border-[#DC143C]/30 rounded-xl p-6 mb-12">
          <div className="text-2xl mb-2">Notice</div>
          <p className="text-lg font-bold mb-2">All coaching happens via text</p>
          <p className="text-gray-400 text-sm">
            No apps to download. Just simple SMS coaching that fits your life.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/"
          className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-10 rounded-full transition"
        >
          Back to Home
        </Link>

        {/* Final Message */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-2xl font-bold text-[#DC143C]">
            Let's get you the body you've always wanted.
          </p>
        </div>
      </div>
    </div>
  )
}
