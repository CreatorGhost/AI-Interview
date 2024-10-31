import React, { useState, useEffect } from 'react';
import { FileText, Target, BarChart2, X, ChevronRight, ChevronLeft } from 'lucide-react';

interface TourStep {
  title: string;
  description: string;
  icon: React.ElementType;
  animation: string;
  interaction?: React.ReactNode;
}

const tourSteps: TourStep[] = [
  {
    title: 'Generate Interview Questions',
    description: 'Upload a job description and get AI-generated interview questions tailored to the role.',
    icon: FileText,
    animation: 'fade-right',
    interaction: (
      <div className="mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-white/20 rounded w-3/4"></div>
          <div className="h-4 bg-white/20 rounded w-1/2"></div>
          <div className="h-8 bg-indigo-500/30 rounded-lg w-32 mt-4"></div>
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
      <div className="mt-4 flex flex-wrap gap-2">
        {['JavaScript', 'React', 'Node.js', 'Python'].map((skill) => (
          <button
            key={skill}
            className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 hover:bg-white/20 transition-colors"
          >
            {skill}
          </button>
        ))}
      </div>
    )
  },
  {
    title: 'Track Your Progress',
    description: 'Get detailed analytics and insights about your interview performance over time.',
    icon: BarChart2,
    animation: 'fade-left',
    interaction: (
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[75, 85, 90].map((score, i) => (
          <div key={i} className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
            <div className="text-2xl font-bold">{score}%</div>
            <div className="text-xs text-white/70">Session {i + 1}</div>
          </div>
        ))}
      </div>
    )
  }
];

export function TourGuide() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasSeenTour, setHasSeenTour] = useState(false);

  useEffect(() => {
    const tourSeen = localStorage.getItem('tourSeen');
    if (!tourSeen) {
      setIsOpen(true);
      localStorage.setItem('tourSeen', 'true');
    }
    setHasSeenTour(!!tourSeen);
  }, []);

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsOpen(false);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!isOpen) return (
    <button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-4 right-4 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
      title="Take the tour"
    >
      <Target className="w-5 h-5" />
    </button>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl mx-4">
        <div className="absolute -top-12 right-0 flex items-center gap-4">
          <div className="text-white/70 text-sm">
            Step {currentStep + 1} of {tourSteps.length}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 p-3 bg-white/10 rounded-xl">
              {React.createElement(tourSteps[currentStep].icon, { className: "w-6 h-6" })}
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">{tourSteps[currentStep].title}</h3>
              <p className="text-white/80">{tourSteps[currentStep].description}</p>
              {tourSteps[currentStep].interaction}
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                currentStep === 0
                  ? 'text-white/50 cursor-not-allowed'
                  : 'hover:bg-white/10'
              }`}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <button
              onClick={nextStep}
              className="flex items-center gap-2 px-4 py-2 bg-white text-indigo-600 rounded-lg hover:bg-white/90 transition-colors"
            >
              {currentStep === tourSteps.length - 1 ? 'Finish' : 'Next'}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
