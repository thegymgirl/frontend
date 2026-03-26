'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const API_URL = 'https://backend-production-a4994.up.railway.app'

export default function PreviewPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const savedProgram = localStorage.getItem('generatedProgram')
    if (!savedProgram) {
      router.push('/quiz')
    }
  }, [router])

  const handleStartNow = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_URL}/api/create-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: '',
          phone: '',
          first_name: '',
          last_name: '',
          tier: 'founding'
        })
      })

      if (!response.ok) {
        throw new Error('Failed to create checkout session')
      }

      const data = await response.json()
      window.location.href = data.checkout_url

    } catch (err) {
      console.error('Checkout error:', err)
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          You're a Perfect Fit!
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-10">
          Let's get you started.
        </p>

        <div className="mb-8">
          <div className="w-56 h-56 mx-auto rounded-full border-4 border-[#DC143C] overflow-hidden">
            <Image 
              src="/gia-photo.jpg" 
              alt="Gia" 
              width={224}
              height={224}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 text-red-500 mb-6 max-w-md mx-auto">
            {error}
          </div>
        )}

        <button
          onClick={handleStartNow}
          disabled={loading}
          className="bg-[#DC143C] hover:opacity-90 disabled:opacity-50 text-white font-bold py-5 px-20 rounded-full text-xl transition mb-6 uppercase tracking-wide"
        >
          {loading ? 'Loading...' : "LET'S GO"}
        </button>

        <div className="mb-8">
          <div className="text-sm font-bold text-[#DC143C] uppercase tracking-wide mb-2">
            SALE - First 100 Spots
          </div>
          <div className="text-2xl font-bold text-gray-400 mb-1">
            $150<span className="text-lg">/month</span>
          </div>
          <div className="text-sm text-gray-500">Regular price $200/month</div>
        </div>

        <div className="text-sm text-gray-500 space-y-2">
          <p>🔒 Secure payment via Stripe</p>
          <p>Cancel anytime • 14-day refund policy</p>
          <p className="mt-4">🔥 <span className="text-white font-bold">80</span> people already waiting</p>
        </div>

        <div className="mt-12">
          <button
            onClick={() => router.push('/quiz')}
            className="text-gray-400 hover:text-white transition text-sm"
          >
            ← Retake quiz
          </button>
        </div>
      </div>
    </div>
  )
}
