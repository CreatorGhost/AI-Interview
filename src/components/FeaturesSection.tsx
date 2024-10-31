import React, { useState } from 'react';
import { Brain, MessageSquareText, Video, BarChart2, Target, FileText, BookOpen, Mic, Globe, Users } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { FeatureModal } from './FeatureModal';

const features = [
  {
    icon: Brain,
    title: 'Customized Interview Questions',
    description: 'AI-generated questions based on your resume and job description',
    details: [
      'Deep analysis of your resume and job requirements',
      'Industry-specific question generation',
      'Adaptive difficulty based on your responses',
      'Continuous learning from interview patterns'
    ]
  },
  {
    icon: MessageSquareText,
    title: 'Real-Time AI Feedback',
    description: 'Instant insights to improve your interview responses',
    details: [
      'Advanced speech pattern analysis',
      'Communication feedback',
      'Continuous improvement suggestions',
      'Real-time feedback loop'
    ]
  },
  {
    icon: Video,
    title: 'Interactive Mock Interviews',
    description: 'Life-like interview simulations with AI interviewers',
    details: [
      'Customizable interview scenarios',
      'Realistic AI interviewers',
      'Interactive feedback',
      'Practice in a controlled environment'
    ]
  },
  {
    icon: BarChart2,
    title: 'Progress Analytics',
    description: 'Track improvements and identify areas for growth',
    details: [
      'Detailed progress tracking',
      'Area-specific analysis',
      'Continuous improvement suggestions',
      'Data-driven decision-making'
    ]
  },
  {
    icon: Target,
    title: 'Personalized Recommendations',
    description: 'Tailored strategies to enhance your performance',
    details: [
      'Customized training materials',
      'Industry-specific strategies',
      'Continuous learning',
      'Personalized feedback'
    ]
  },
  {
    icon: FileText,
    title: 'Resume Optimization',
    description: 'AI-powered suggestions to perfect your resume',
    details: [
      'Deep analysis of your resume',
      'Industry-specific suggestions',
      'Continuous improvement',
      'AI-powered resume builder'
    ]
  },
  {
    icon: BookOpen,
    title: 'Career Resources',
    description: 'Industry-specific training materials and guides',
    details: [
      'Comprehensive training materials',
      'Industry-specific guides',
      'Continuous learning',
      'Interactive learning platform'
    ]
  },
  {
    icon: Mic,
    title: 'Voice Analysis',
    description: 'Advanced speech pattern and communication feedback',
    details: [
      'Advanced speech pattern analysis',
      'Communication feedback',
      'Continuous improvement suggestions',
      'Real-time feedback loop'
    ]
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Practice interviews in multiple languages',
    details: [
      'Multi-language practice',
      'Realistic interview simulations',
      'Continuous learning',
      'Language-specific feedback'
    ]
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Connect and learn from peers in your field',
    details: [
      'Peer-to-peer learning',
      'Interactive community',
      'Continuous learning',
      'Real-time feedback'
    ]
  }
];

export function FeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-gradient-to-b from-indigo-50/40 to-purple-50/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-gradient-to-t from-indigo-50/40 to-purple-50/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for{' '}
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Interview Success
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-indigo-100/50 -rotate-1"></span>
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to prepare for your next interview, powered by cutting-edge AI technology
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              onClick={() => setSelectedFeature(feature)}
              className="cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>

        {/* Feature Details Modal */}
        {selectedFeature && (
          <FeatureModal
            feature={selectedFeature}
            onClose={() => setSelectedFeature(null)}
          />
        )}
      </div>
    </section>
  );
}