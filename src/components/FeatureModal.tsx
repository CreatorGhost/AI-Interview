import React from 'react';
import { X, LucideIcon } from 'lucide-react';

interface FeatureModalProps {
  feature: {
    icon: LucideIcon;
    title: string;
    description: string;
    details: string[];
  };
  onClose: () => void;
}

export function FeatureModal({ feature, onClose }: FeatureModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all">
        <div className="absolute top-4 right-4">
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
              <feature.icon className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
          </div>

          <p className="text-gray-600 mb-8">{feature.description}</p>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
            <ul className="space-y-3">
              {feature.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-indigo-600"></div>
                  <span className="text-gray-600">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
