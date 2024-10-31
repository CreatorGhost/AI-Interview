import React from 'react';
import { 
  Brain, 
  Target, 
  Heart, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter,
  Github
} from 'lucide-react';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300',
    bio: 'Former tech lead with a passion for AI and education.'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300',
    bio: 'AI researcher with 10+ years experience in machine learning.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300',
    bio: 'Product strategist focused on user-centered design.'
  }
];

const values = [
  {
    icon: Brain,
    title: 'Innovation',
    description: 'Pushing boundaries in AI technology'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Committed to delivering the best results'
  },
  {
    icon: Heart,
    title: 'User-Focused',
    description: 'Your success is our priority'
  },
  {
    icon: Users,
    title: 'Inclusivity',
    description: 'Making interview prep accessible to all'
  }
];

const milestones = [
  { year: '2021', event: 'Company Founded' },
  { year: '2022', event: 'Launch of AI Interview Platform' },
  { year: '2023', event: 'Reached 100,000 Users' },
  { year: '2024', event: 'Advanced Analytics Release' }
];

export function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  InterviewAI
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-indigo-100/50 -rotate-1"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Revolutionizing interview preparation through AI-powered solutions that help candidates succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600">
                We're on a mission to democratize interview preparation by leveraging cutting-edge AI technology. 
                Our goal is to help job seekers build confidence and succeed in their career journeys.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-10 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                alt="Team collaboration"
                className="relative rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className="w-1/2 flex items-center gap-8">
                    <div className={`${
                      index % 2 === 0 ? 'order-none' : 'order-last'
                    } bg-white p-6 rounded-xl shadow-lg border border-indigo-100`}>
                      <div className="font-bold text-indigo-600">{milestone.year}</div>
                      <div className="text-gray-600">{milestone.event}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <div className="text-indigo-600 mb-2">{member.role}</div>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-block p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl mb-4">
                  {React.createElement(value.icon, { 
                    className: "w-8 h-8 text-indigo-600" 
                  })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-indigo-600" />
                <a href="mailto:contact@interviewai.com" className="text-gray-600 hover:text-indigo-600">
                  contact@interviewai.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-indigo-600" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-indigo-600">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-indigo-600" />
                <span className="text-gray-600">
                  123 Tech Street, Silicon Valley, CA 94025
                </span>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="#" className="p-2 text-indigo-600 hover:text-indigo-700">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="p-2 text-indigo-600 hover:text-indigo-700">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="p-2 text-indigo-600 hover:text-indigo-700">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl h-[400px]">
              {/* Add your map component here */}
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
