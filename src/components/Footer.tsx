import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navigation = {
  product: [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Blog', href: '#' }
  ],
  support: [
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
    { name: 'Contact', href: '#' }
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' }
  ],
  social: [
    { name: 'Github', icon: Github, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Email', icon: Mail, href: '#' }
  ]
};

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
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Pricing
                </button>
              </li>
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} InterviewAI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500 transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}