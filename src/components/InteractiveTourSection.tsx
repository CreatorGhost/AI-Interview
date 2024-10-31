import React, { useState } from 'react';
import { FileText, Target, BarChart2, ChevronRight, ChevronLeft } from 'lucide-react';

const tourSteps = [
  {
    title: 'Generate Interview Questions',
    description: 'Upload a job description and get AI-generated interview questions tailored to the role.',
    icon: FileText,
    animation: 'fade-right',
    interaction: (
      <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
        <div className="border border-indigo-100 rounded-xl bg-white p-6">
          <div className="space-y-4">
            <div className="h-32 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center">
              <FileText className="w-12 h-12 text-indigo-600" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-100 rounded w-3/4"></div>
              <div className="h-4 bg-gray-100 rounded w-1/2"></div>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Generate Questions
            </button>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Practice Based on Skills',
    description: 'Select your skill set to receive customized practice questions that help you improve.',
    icon: Target,
    animation: 'fade-up',
    interaction: (
      <div className="mt-6 bg-white p-6 rounded-xl border border-indigo-100">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'AWS'].map((skill) => (
              <button
                key={skill}
                className="px-4 py-2 rounded-full text-sm font-medium border border-indigo-200 hover:bg-indigo-50 transition-colors"
              >
                {skill}
              </button>
            ))}
          </div>
          <div className="h-24 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center">
            <Target className="w-12 h-12 text-indigo-600" />
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Track Your Progress',
    description: 'Get detailed analytics and insights about your interview performance over time.',
    icon: BarChart2,
    animation: 'fade-left',
    interaction: (
      <div className="mt-6 bg-white p-6 rounded-xl border border-indigo-100">
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {[75, 85, 90].map((score, i) => (
              <div key={i} className="text-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-indigo-600">{score}%</div>
                <div className="text-sm text-gray-600">Session {i + 1}</div>
              </div>
            ))}
          </div>
          <div className="h-24 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center">
            <BarChart2 className="w-12 h-12 text-indigo-600" />
          </div>
        </div>
      </div>
    )
  }
];

export function InteractiveTourSection() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-indigo-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It{' '}
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Works
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-indigo-100/50 -rotate-1"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a tour of our key features and discover how we can help you ace your next interview
          </p>
        </div>

        {/* Tour Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-xl p-8 border border-indigo-100">
            {/* Step Navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex items-center space-x-4">
                {tourSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentStep === index
                        ? 'bg-indigo-600 w-8'
                        : 'bg-indigo-200 hover:bg-indigo-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Current Step Content */}
            <div className={`animate-${tourSteps[currentStep].animation}`}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                  {React.createElement(tourSteps[currentStep].icon, { 
                    className: "w-8 h-8 text-indigo-600" 
                  })}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tourSteps[currentStep].title}
                  </h3>
                  <p className="text-gray-600">
                    {tourSteps[currentStep].description}
                  </p>
                  {tourSteps[currentStep].interaction}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-colors ${
                  currentStep === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                disabled={currentStep === 0}
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>
              <button
                onClick={() => setCurrentStep(Math.min(tourSteps.length - 1, currentStep + 1))}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-colors ${
                  currentStep === tourSteps.length - 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
                disabled={currentStep === tourSteps.length - 1}
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
