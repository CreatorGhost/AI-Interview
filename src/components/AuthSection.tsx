import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';

interface AuthSectionProps {
  onClose?: () => void;
}

export function AuthSection({ onClose }: AuthSectionProps) {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mx-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          {isSignIn ? 'Welcome Back' : 'Create Account'}
        </h2>
        <p className="text-gray-600 mt-2">
          {isSignIn
            ? 'Enter your credentials to access your account'
            : 'Get started with your free account'}
        </p>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {!isSignIn && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="email"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
