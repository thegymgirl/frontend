'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function QuizPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({
    goal: '',
    gender: '',
    experience: '',
    frequency: 0,
    equipment: '',
    physique: '',
    injuries: '',
    weight: 0,
    nutrition_approach: '' // NEW
  })

  const handleAnswer = (field, value) => {
    setAnswers({ ...answers, [field]: value })
  }

  const nextStep = () => {
    if (step < 9) {
      setStep(step + 1)
    } else {
      // Save to localStorage and go to loading page
      localStorage.setItem('quizAnswers', JSON.stringify(answers))
      router.push('/analyzing')
    }
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const isStepComplete = () => {
    switch(step) {
      case 1: return !!answers.goal
      case 2: return !!answers.gender
      case 3: return !!answers.experience
      case 4: return answers.frequency > 0
      case 5: return !!answers.equipment
      case 6: return !!answers.physique
      case 7: return true // injuries is optional
      case 8: return answers.weight > 0
      case 9: return !!answers.nutrition_approach // NEW
      default: return false
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full">
        {/* Progress bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">Question {step} of 9</span>
            <span className="text-sm text-gray-500">{Math.round((step/9)*100)}%</span>
          </div>
          <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
            <div 
              className="h-full transition-all duration-300"
              style={{
                width: `${(step/9)*100}%`,
                backgroundColor: '#DC143C'
              }}
            />
          </div>
        </div>

        {/* Question 1: Goal */}
        {step === 1 && (
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">What's your main goal?</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { value: 'fat_loss', label: 'Fat Loss', desc: 'Lose weight, get lean' },
                { value: 'muscle_building', label: 'Muscle Building', desc: 'Build size and strength' },
                { value: 'athletic_performance', label: 'Athletic Performance', desc: 'Improve for your sport' }
              ].map(option => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer('goal', option.value)}
                  className={`p-6 rounded-lg border-2 transition text-left ${
                    answers.goal === option.value 
                      ? 'border-[#DC143C] bg-[#DC143C]/10' 
                      : 'border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <div className="font-bold text-xl mb-2">{option.label}</div>
                  <div className="text-gray-400 text-sm">{option.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Question 2: Gender */}
        {step === 2 && (
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">What's your gender identity?</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { value: 'female', label: 'Female' },
                { value: 'male', label: 'Male' },
                { value: 'non_binary', label: 'Non-Binary' }
              ].map(option => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer('gender', option.value)}
                  className={`p-6 rounded-lg border-2 transition ${
                    answers.gender === option.value 
                      ? 'border-[#DC143C] bg-[#DC143C]/10' 
                      : 'border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <div className="font-bold text-xl">{option.label}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Question 3: Experience */}
        {step === 3 && (
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">How long have you been training?</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { value: 'beginner', label: 'Beginner', desc: 'Less than 1 year' },
                { value: 'intermediate', label: 'Intermediate', desc: '1-3 years' },
                { value: 'advanced', label: 'Advanced', desc: '3+ years' }
              ].map(option => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer('experience', option.value)}
                  className={`p-6 rounded-lg border-2 transition text-left ${
                    answers.experience === option.value 
                      ? 'border-[#DC143C] bg-[#DC143C]/10' 
                      : 'border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <div className="font-bold text-xl mb-2">{option.label}</div>
                  <div className="text-gray-400 text-sm">{option.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Question 4: Frequency */}
        {step === 4 && (
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">How many days per week can you train?</h2>
            <div className="grid grid-cols-5 gap-4">
              {[2, 3, 4, 5, 6].map(num => (
                <button
                  key={num}
                  onClick={() => handleAnswer('frequency', num)}
                  className={`p-6 rounded-lg border-2 transition ${
                    answers.frequency === num 
                      ? 'border-[#DC143C] bg-[#DC143C]/10' 
                      : 'border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <div className="font-bold text-3xl">{num}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Question 5: Equipment */}
        {step === 5 && (
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">What equipment do you have?</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { value: 'full_gym', label: 'Full Gym', desc: 'Commercial or home gym' },
                { value: 'dumbbells_only', label: 'Dumbbells Only', desc: 'Just dumbbells at home' },
                { value: 'bodyweight_only', label: 'Bodyweight Only', desc: 'No equipment' }
              ].map(option => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer('equipment', option.value)}
                  className={`p-6 rounded-lg border-2 transition text-left ${
                    answers.equipment === option.value 
                      ? 'border-[#DC143C] bg-[#DC143C]/10' 
                      : 'border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <div className="font-bold text-xl mb-2">{option.label}</div>
                  <div className="text-gray-400 text-sm">{option.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Question 6: Physique (VISUAL) */}
        {step === 6 && (
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">What's your dream physique?</h2>
            
            {answers.gender === 'female' && (
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { value: 'bikini', label: 'Bikini', desc: 'Rounded glutes, toned upper body' },
                  { value: 'wellness', label: 'Wellness', desc: 'Thick legs, athletic build' },
                  { value: 'figure', label: 'Figure', desc: 'Balanced muscle, V-taper' },
                  { value: 'womens_physique', label: 'Physique', desc: 'Muscular all over' },
                  { value: null, label: 'General Fitness', desc: 'Just want to look good' }
                ].map(option => (
                  <button
                    key={option.value || 'general'}
                    onClick={() => handleAnswer('physique', option.value)}
                    className={`p-6 rounded-lg border-2 transition text-left ${
                      answers.physique === option.value 
                        ? 'border-[#DC143C] bg-[#DC143C]/10' 
                        : 'border-gray-800 hover:border-gray-700'
                    }`}
                  >
                    <div className="h-48 bg-gray-900 rounded mb-4 flex items-center justify-center text-gray-600 text-sm">
                      [PHOTO: {option.label}]
                    </div>
                    <div className="font-bold text-xl mb-2">{option.label}</div>
                    <div className="text-gray-400 text-sm">{option.desc}</div>
                  </button>
                ))}
              </div>
            )}

            {answers.gender === 'male' && (
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { value: 'classic', label: 'Classic Physique', desc: 'Aesthetic, balanced proportions' },
                  { value: 'mens_physique', label: 'Men\'s Physique', desc: 'Big upper body, beach-ready' },
                  { value: 'bodybuilding', label: 'Bodybuilding', desc: 'Maximum size everywhere' },
                  { value: null, label: 'General Fitness', desc: 'Just want to look good' }
                ].map(option => (
                  <button
                    key={option.value || 'general'}
                    onClick={() => handleAnswer('physique', option.value)}
                    className={`p-6 rounded-lg border-2 transition text-left ${
                      answers.physique === option.value 
                        ? 'border-[#DC143C] bg-[#DC143C]/10' 
                        : 'border-gray-800 hover:border-gray-700'
                    }`}
                  >
                    <div className="h-48 bg-gray-900 rounded mb-4 flex items-center justify-center text-gray-600 text-sm">
                      [PHOTO: {option.label}]
                    </div>
                    <div className="font-bold text-xl mb-2">{option.label}</div>
                    <div className="text-gray-400 text-sm">{option.desc}</div>
                  </button>
                ))}
              </div>
            )}

            {answers.gender === 'non_binary' && (
              <div className="text-center text-gray-400 py-8">
                <p>Select the physique style that best matches your goals:</p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  {[
                    { value: 'athletic', label: 'Athletic Build', desc: 'Balanced, functional strength' },
                    { value: 'lean', label: 'Lean Aesthetic', desc: 'Toned, defined physique' },
                    { value: 'strong', label: 'Strong Build', desc: 'Emphasis on strength and power' },
                    { value: null, label: 'General Fitness', desc: 'Just want to feel good' }
                  ].map(option => (
                    <button
                      key={option.value || 'general'}
                      onClick={() => handleAnswer('physique', option.value)}
                      className={`p-6 rounded-lg border-2 transition text-left ${
                        answers.physique === option.value 
                          ? 'border-[#DC143C] bg-[#DC143C]/10' 
                          : 'border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      <div className="font-bold text-xl mb-2">{option.label}</div>
                      <div className="text-gray-400 text-sm">{option.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Question 7: Injuries */}
        {step === 7 && (
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Any injuries I should know about?</h2>
            <textarea
              value={answers.injuries}
              onChange={(e) => handleAnswer('injuries', e.target.value)}
              placeholder="e.g., 'Bad left knee' or type 'None'"
              className="w-full p-6 rounded-lg bg-gray-900 border-2 border-gray-800 focus:border-[#DC143C] focus:outline-none text-lg resize-none"
              rows={4}
            />
            <p className="text-gray-500 text-sm">If you have serious medical conditions, I'll recommend seeing a doctor first.</p>
          </div>
        )}

        {/* Question 8: Weight */}
        {step === 8 && (
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">What's your current weight?</h2>
            <div className="max-w-md">
              <input
                type="number"
                value={answers.weight || ''}
                onChange={(e) => handleAnswer('weight', parseInt(e.target.value))}
                placeholder="Weight in lbs"
                className="w-full p-6 rounded-lg bg-gray-900 border-2 border-gray-800 focus:border-[#DC143C] focus:outline-none text-2xl text-center"
              />
              <p className="text-gray-500 text-sm mt-2 text-center">We'll use this to calculate your nutrition targets</p>
            </div>
          </div>
        )}

        {/* Question 9: Nutrition Approach (NEW) */}
        {step === 9 && (
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">How do you want to approach your nutrition?</h2>
            <div className="space-y-4">
              {[
                { 
                  value: 'simple', 
                  label: 'Keep It Simple', 
                  desc: 'Give me portion guidelines and basic rules - no tracking' 
                },
                { 
                  value: 'flexible', 
                  label: 'Flexible Tracking', 
                  desc: 'I\'ll hit my protein goal and stay within my calorie range, but won\'t obsess over exact carb/fat split' 
                },
                { 
                  value: 'all_in', 
                  label: 'All In', 
                  desc: 'I want precise macros and I\'ll track everything to the gram' 
                }
              ].map(option => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer('nutrition_approach', option.value)}
                  className={`w-full p-6 rounded-lg border-2 transition text-left ${
                    answers.nutrition_approach === option.value 
                      ? 'border-[#DC143C] bg-[#DC143C]/10' 
                      : 'border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <div className="font-bold text-xl mb-2">{option.label}</div>
                  <div className="text-gray-400 text-sm">{option.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <button
            onClick={prevStep}
            className={`px-6 py-3 rounded-lg transition ${
              step === 1 
                ? 'text-gray-600 cursor-not-allowed' 
                : 'text-gray-400 hover:text-white'
            }`}
            disabled={step === 1}
          >
            ← Back
          </button>
          
          <button
            onClick={nextStep}
            disabled={!isStepComplete()}
            className={`px-8 py-4 rounded-full font-bold transition ${
              isStepComplete()
                ? 'bg-[#DC143C] hover:opacity-90'
                : 'bg-gray-800 text-gray-600 cursor-not-allowed'
            }`}
          >
            {step === 9 ? 'Generate My Program' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  )
}
