import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';

export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-white to-indigo-50/20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-50 to-purple-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Logo and Description */}
            <div>
              <Link 
                to="/"
                className="inline-block text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4"
              >
                InterviewAI
              </Link>
              <p className="text-gray-600 max-w-md">
                Revolutionizing interview preparation with AI-powered solutions. 
                Practice smarter, succeed faster.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                Quick Links
                <ArrowRight className="w-4 h-4 text-indigo-600" />
              </h3>
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <Link 
                    to="/about" 
                    className="group flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('features')}
                    className="group flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('pricing')}
                    className="group flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Pricing
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                Connect With Us
                <div className="h-px flex-1 bg-gradient-to-r from-indigo-100 to-transparent ml-4"></div>
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all duration-300"
                >
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6 text-gray-600 group-hover:text-indigo-600 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all duration-300"
                >
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6 text-gray-600 group-hover:text-indigo-600 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all duration-300"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6 text-gray-600 group-hover:text-indigo-600 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </a>
                <a
                  href="mailto:contact@interviewai.com"
                  className="group relative p-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all duration-300"
                >
                  <span className="sr-only">Email</span>
                  <Mail className="h-6 w-6 text-gray-600 group-hover:text-indigo-600 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay Updated</h3>
              <p className="text-gray-600 mb-4">Get the latest updates and news directly in your inbox.</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} InterviewAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}