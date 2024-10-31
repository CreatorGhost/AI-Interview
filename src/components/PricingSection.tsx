import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: '1 Custom Job',
    price: 20,
    features: [
      'Unlimited Mock Interviews',
      'AI-Generated Answers',
      'AI-Powered Feedback',
      '7-Day Money-Back Guarantee'
    ],
    popular: true,
    savings: null
  },
  {
    name: '5 Custom Jobs',
    price: 25,
    features: [
      'Everything in Basic Plan',
      'Multiple Job Profiles',
      'Advanced Analytics',
      'Priority Support'
    ],
    popular: false,
    savings: 75
  },
  {
    name: '20 Custom Jobs',
    price: 50,
    features: [
      'Everything in Pro Plan',
      'Custom Interview Scenarios',
      'Voice Analysis',
      'Resume Review'
    ],
    popular: false,
    savings: 87,
    suggested: true
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Transparent
            </span>{' '}
            Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your interview preparation needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.suggested
                  ? 'bg-gradient-to-b from-indigo-50 to-white border-2 border-indigo-600'
                  : 'bg-white border border-gray-200'
              } shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              {(plan.popular || plan.suggested) && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
                    {plan.popular ? 'Popular' : 'Suggested'}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  {plan.savings && (
                    <span className="ml-2 text-sm text-green-600 font-medium">
                      Save {plan.savings}%
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.suggested
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                }`}
              >
                Try Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}