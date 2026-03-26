'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const API_URL = 'https://backend-production-a4994.up.railway.app'

export default function GeneratingPage() {
  const router = useRouter()
  const [status, setStatus] = useState('Analyzing your goals and experience...')
  const [error, setError] = useState(null)

  useEffect(() => {
    const generateProgram = async () => {
      try {
        // Get quiz answers from localStorage
        const quizData = localStorage.getItem('quizAnswers')
        if (!quizData) {
          router.push('/quiz')
          return
        }

        const answers = JSON.parse(quizData)

        // Update status
        setStatus('Selecting optimal exercises...')

        // Call backend to generate program
        const response = await fetch(`${API_URL}/api/generate-program`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            goal: answers.goal,
            gender: answers.gender,
            experience: answers.experience,
            training_frequency: answers.frequency,
            equipment: answers.equipment,
            dream_physique: answers.physique || 'general_fitness',
            injuries: answers.injuries || '',
            current_weight: answers.weight
          })
        })

        if (!response.ok) {
          throw new Error('Failed to generate program')
        }

        setStatus('Calculating nutrition targets...')

        const program = await response.json()

        // Save program to localStorage
        localStorage.setItem('generatedProgram', JSON.stringify(program))

        setStatus('Building your program...')

        // Wait a bit for effect, then redirect
        setTimeout(() => {
          router.push('/preview')
        }, 1000)

      } catch (err) {
        console.error('Error generating program:', err)
        setError('Something went wrong. Please try again.')
        
        // Redirect back to quiz after showing error
        setTimeout(() => {
          router.push('/quiz')
        }, 3000)
      }
    }

    generateProgram()
  }, [router])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-12">
          {/* Animated loading spinner */}
          <div className="w-24 h-24 mx-auto mb-8">
            <div className="w-full h-full rounded-full border-4 border-gray-800 border-t-[#DC143C] animate-spin"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {error ? 'Oops!' : 'Generating Your Custom Program'}
          </h1>
          
          {error ? (
            <div className="space-y-4 text-red-500 text-lg">
              <p>{error}</p>
              <p className="text-gray-500 text-base">Redirecting you back to the quiz...</p>
            </div>
          ) : (
            <div className="space-y-4 text-gray-400 text-lg">
              <p className={status.includes('Analyzing') ? 'text-[#DC143C]' : 'opacity-100'}>
                {status.includes('Analyzing') ? '⚡' : '✓'} Analyzing your goals and experience...
              </p>
              <p className={status.includes('Selecting') ? 'text-[#DC143C]' : status.includes('Calculating') || status.includes('Building') ? 'opacity-100' : 'opacity-50'}>
                {status.includes('Selecting') ? '⚡' : status.includes('Calculating') || status.includes('Building') ? '✓' : ''} Selecting optimal exercises...
              </p>
              <p className={status.includes('Calculating') ? 'text-[#DC143C]' : status.includes('Building') ? 'opacity-100' : 'opacity-50'}>
                {status.includes('Calculating') ? '⚡' : status.includes('Building') ? '✓' : ''} Calculating nutrition targets...
              </p>
              <p className={status.includes('Building') ? 'text-[#DC143C]' : 'opacity-25'}>
                {status.includes('Building') ? '⚡' : ''} Building your program...
              </p>
            </div>
          )}
        </div>

        {!error && (
          <p className="text-gray-500">
            This will only take a few seconds...
          </p>
        )}
      </div>
    </div>
  )
}
