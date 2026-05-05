'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

// const API_URL = 'https://backend-production-a4994.up.railway.app'
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://backend-production-a4994.up.railway.app'
export default function SignupPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: '+1'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Validate
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      setError('Please fill in all fields')
      setLoading(false)
      return
    }

    // Validate email
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email')
      setLoading(false)
      return
    }

    // Validate phone (basic)
    const phoneDigits = formData.phone.replace(/\D/g, '')
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      setError('Please enter a valid phone number')
      setLoading(false)
      return
    }

    const fullPhone = `${formData.countryCode}${phoneDigits}`

    try {
      // Get quiz answers from localStorage
      const quizAnswersRaw = localStorage.getItem('quizAnswers')
      console.log('🔍 Raw Quiz Answers from LocalStorage:', quizAnswersRaw)
      
      const quizAnswers = quizAnswersRaw ? JSON.parse(quizAnswersRaw) : {}
      console.log('📋 Parsed Quiz Answers:', quizAnswers)

      const payload = {
        email: formData.email,
        phone: fullPhone,
        first_name: formData.firstName,
        last_name: formData.lastName,
        tier: 'founding',
        quiz_data: {
          goal: quizAnswers.goal,
          gender_identity: quizAnswers.gender,
          experience_level: quizAnswers.experience,
          training_frequency: quizAnswers.frequency,
          equipment_access: quizAnswers.equipment,
          physique_category: quizAnswers.physique,
          injuries: quizAnswers.injuries,
          current_weight: quizAnswers.weight,
          target_weight: quizAnswers.weight
        }
      }
      
      console.log('🚀 Sending Payload to Backend:', payload)

      // Create checkout session
      const response = await fetch(`${API_URL}/api/create-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        throw new Error('Failed to create checkout session')
      }

      const data = await response.json()
      
      // Save user data to localStorage
      localStorage.setItem('pendingSignup', JSON.stringify({
        ...formData,
        phone: fullPhone
      }))

      // Redirect to Stripe checkout
      window.location.href = data.checkout_url

    } catch (err) {
      console.error('Signup error:', err)
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Start Your Transformation
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Join StrongVampireX Coaching today
          </p>
          
          {/* Pricing */}
          <div className="inline-block bg-gray-900 rounded-lg px-8 py-4 border border-gray-800">
            <div className="text-3xl font-bold text-[#DC143C] mb-1">$150/month</div>
            <div className="text-sm text-gray-400">Founding member rate</div>
            <div className="text-xs text-gray-500 mt-1">(Regular: $200/month)</div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-[#DC143C] focus:outline-none"
                placeholder="Gia"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-[#DC143C] focus:outline-none"
                placeholder="Layn"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-[#DC143C] focus:outline-none"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <div className="flex gap-2">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="w-32 px-2 py-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-[#DC143C] focus:outline-none appearance-none cursor-pointer"
              >
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+61">🇦🇺 +61</option>
                <option value="+1">🇨🇦 +1</option>
                <option value="+92">🇵🇰 +92</option>
                <option value="+971">🇦🇪 +971</option>
                <option value="+966">🇸🇦 +966</option>
                <option value="+353">🇮🇪 +353</option>
                <option value="+64">🇳🇿 +64</option>
              </select>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-[#DC143C] focus:outline-none"
                placeholder="(555) 123-4567"
                required
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              We'll text you your program and check-ins here
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 text-red-500">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#DC143C] hover:opacity-90 disabled:opacity-50 text-white font-bold py-4 rounded-full text-lg transition"
          >
            {loading ? 'Processing...' : 'Continue to Payment'}
          </button>

          <div className="text-center text-sm text-gray-500">
            <p>Secure payment processed by Stripe</p>
            <p className="mt-2">Cancel anytime • 14-day refund policy</p>
          </div>
        </form>

        {/* Back button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => router.push('/preview')}
            className="text-gray-400 hover:text-white transition"
          >
            ← Back to preview
          </button>
        </div>
      </div>
    </div>
  )
}
