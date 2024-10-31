import React from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { Play, ArrowRight, Target, Zap, Users } from 'lucide-react';
import { FeaturesSection } from './components/FeaturesSection';
import { FAQSection } from './components/FAQSection';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';
import { AuthSection } from './components/AuthSection';
import { AboutUs } from './pages/AboutUs';
import { InteractiveTourSection } from './components/InteractiveTourSection';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source 
              src="https://player.vimeo.com/progressive_redirect/playback/848332516/rendition/720p/file.mp4?loc=external" 
              type="video/mp4" 
            />
          </video>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/80 backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-10 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight [text-wrap:balance]">
                  Ace Your Interviews with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                    AI-Powered Precision
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-xl">
                  Personalized Questions, Real-Time Feedback, Expert Coaching
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <button className="group flex items-center justify-center px-8 py-4 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 transform hover:-translate-y-1">
                  <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                  <span className="font-semibold">Start Practicing Now</span>
                </button>
                <button className="group flex items-center justify-center px-8 py-4 text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  <span className="font-semibold">See How It Works</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <div className="grid sm:grid-cols-3 gap-8 pt-4">
                {[
                  { icon: Target, title: 'Tailored Questions', desc: 'Customized for your field' },
                  { icon: Zap, title: 'Instant Feedback', desc: 'Real-time improvements' },
                  { icon: Users, title: 'Realistic Practice', desc: 'True-to-life scenarios' }
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start space-x-3 text-white/90">
                    <div className="flex-shrink-0 p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="text-sm text-white/70">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Decorative Element */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* Interactive Tour Section */}
      <InteractiveTourSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Pricing Section */}
      <PricingSection />
    </>
  );
}

function App() {
  const [showAuth, setShowAuth] = React.useState(false);
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link 
                to="/" 
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
              >
                InterviewAI
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link 
                  to="/about" 
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  About Us
                </Link>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Pricing
                </button>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setShowAuth(true)}
                className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
              >
                Sign In
              </button>
              <button
                onClick={() => setShowAuth(true)}
                className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      {showAuth && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-md">
            <button
              onClick={() => setShowAuth(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-200"
            >
              Close
            </button>
            <AuthSection onClose={() => setShowAuth(false)} />
          </div>
        </div>
      )}

      {/* Routes */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;