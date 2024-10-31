import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How does the AI generate personalized interview questions?',
    answer: 'Our AI analyzes your uploaded resume and job descriptions to create tailored interview questions that closely match the specific requirements and skills needed for the roles you are targeting.'
  },
  {
    question: 'What type of feedback will I receive from the AI?',
    answer: 'You\'ll receive real-time feedback focusing on the quality of your responses, tips on improving your delivery, and insights on how to better align your answers with job expectations.'
  },
  {
    question: 'Can I access the platform on any device?',
    answer: 'Yes, our platform is fully responsive and can be accessed on any device, including smartphones, tablets, and desktop computers, providing you flexibility to practice anytime, anywhere.'
  },
  {
    question: 'What are the subscription options available?',
    answer: 'We offer various subscription plans tailored to different preparation needs, from single job practice sessions to comprehensive monthly packages, each equipped with full access to all features.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Questions
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to know about our AI interview platform
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'py-4' : 'py-0 h-0'
                }`}
              >
                <p className={`text-gray-600 ${openIndex === index ? 'block' : 'hidden'}`}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}