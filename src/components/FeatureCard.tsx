import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative p-8 bg-white rounded-2xl transition-all duration-300 hover:shadow-xl border border-gray-100">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      {/* Content */}
      <div className="relative">
        <div className="mb-6 inline-block">
          <div className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-indigo-600" />
          </div>
        </div>
        
        <h3 className="font-semibold text-xl text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
          {description}
        </p>

        {/* Learn More Indicator */}
        <div className="mt-4 text-sm font-medium text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
          Click to learn more →
        </div>
      </div>
    </div>
  );
}