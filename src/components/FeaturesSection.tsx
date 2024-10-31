import React from 'react';
import { Brain, MessageSquareText, Video, BarChart2, Target, FileText, BookOpen, Mic, Globe, Users } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: Brain,
    title: 'Customized Interview Questions',
    description: 'AI-generated questions based on your resume and job description'
  },
  {
    icon: MessageSquareText,
    title: 'Real-Time AI Feedback',
    description: 'Instant insights to improve your interview responses'
  },
  {
    icon: Video,
    title: 'Interactive Mock Interviews',
    description: 'Life-like interview simulations with AI interviewers'
  },
  {
    icon: BarChart2,
    title: 'Progress Analytics',
    description: 'Track improvements and identify areas for growth'
  },
  {
    icon: Target,
    title: 'Personalized Recommendations',
    description: 'Tailored strategies to enhance your performance'
  },
  {
    icon: FileText,
    title: 'Resume Optimization',
    description: 'AI-powered suggestions to perfect your resume'
  },
  {
    icon: BookOpen,
    title: 'Career Resources',
    description: 'Industry-specific training materials and guides'
  },
  {
    icon: Mic,
    title: 'Voice Analysis',
    description: 'Advanced speech pattern and communication feedback'
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Practice interviews in multiple languages'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Connect and learn from peers in your field'
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Powerful Features for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Interview Success
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to prepare for your next interview
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}