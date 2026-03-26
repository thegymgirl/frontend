'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const API_URL = 'https://backend-production-a4994.up.railway.app'

export default function AnalyzingPage() {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState('Analyzing your responses...')
  const [programGenerated, setProgramGenerated] = useState(false)

  useEffect(() => {
    // Get quiz answers
    const savedAnswers = localStorage.getItem('quizAnswers')
    if (!savedAnswers) {
      router.push('/quiz')
      return
    }

    const answers = JSON.parse(savedAnswers)

    // Start progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval)
          return prev
        }
        return prev + 2
      })
    }, 50)

    // Update status messages
    setTimeout(() => setStatus('Calculating nutrition targets...'), 1000)
    setTimeout(() => setStatus('Building your workout plan...'), 2000)
    setTimeout(() => setStatus('Personalizing your program...'), 3000)

    // Generate program in background
    const generateProgram = async () => {
      try {
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
            dream_physique: answers.physique,
            injuries: (answers.healthConditions || []).join(', '),
            current_weight: answers.weight
          })
        })

        if (!response.ok) {
          throw new Error('Failed to generate program')
        }

        const data = await response.json()
        
        // Save program
        localStorage.setItem('generatedProgram', JSON.stringify(data))
        
        // Complete progress
        setProgress(100)
        setProgramGenerated(true)
        
        // Wait a moment then redirect
        setTimeout(() => {
          router.push('/preview')
        }, 500)

      } catch (err) {
        console.error('Error:', err)
        setStatus('Oops! Something went wrong')
        setTimeout(() => router.push('/quiz'), 2000)
      }
    }

    generateProgram()

    return () => clearInterval(progressInterval)
  }, [router])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated logo or icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-4 border-4 border-gray-800 border-t-[#DC143C] rounded-full animate-spin"></div>
        </div>

        {/* Status */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {status}
        </h1>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="h-3 bg-gray-900 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#DC143C] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-sm text-gray-500 mt-2">{progress}%</div>
        </div>

        {/* Loading messages */}
        <div className="space-y-2 text-gray-400">
          <p className={progress > 20 ? 'text-white' : ''}>✓ Quiz completed</p>
          <p className={progress > 40 ? 'text-white' : ''}>✓ Analyzing your goals</p>
          <p className={progress > 60 ? 'text-white' : ''}>✓ Calculating macros</p>
          <p className={progress > 80 ? 'text-white' : ''}>✓ Building workout plan</p>
          {programGenerated && <p className="text-[#DC143C] font-bold">✓ Your program is ready!</p>}
        </div>
      </div>
    </div>
  )
}
