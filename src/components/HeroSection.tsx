import { useLocation, useNavigate } from 'react-router-dom';

export function HeroSection() {
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
    <div className="relative min-h-[90vh] flex items-center">
      {/* ... other hero content ... */}
      <div className="flex flex-col sm:flex-row gap-6">
        <button 
          onClick={() => scrollToSection('features')}
          className="group flex items-center justify-center px-8 py-4 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
        >
          <span className="font-semibold">See Features</span>
        </button>
        <button 
          onClick={() => scrollToSection('pricing')}
          className="group flex items-center justify-center px-8 py-4 text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all duration-300"
        >
          <span className="font-semibold">View Pricing</span>
        </button>
      </div>
      {/* ... other hero content ... */}
    </div>
  );
} 