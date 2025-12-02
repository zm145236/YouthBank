import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/80 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
          <span className="font-bold text-xl tracking-tight">ELLIPX</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            TRADE TODAY
          </button>
          <button className="text-sm font-medium hover:opacity-70 transition-opacity border border-gray-300 px-6 py-2 rounded-full">
            SIGN UP
          </button>
          <button className="p-2 border border-gray-200 rounded-full hover:bg-gray-100 transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
        
        {/* Mobile Menu Icon */}
         <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};