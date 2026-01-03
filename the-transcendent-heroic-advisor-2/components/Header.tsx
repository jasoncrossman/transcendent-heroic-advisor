
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">THE TRANSCENDENT</span>
            <span className="text-xs uppercase tracking-[0.2em] text-amber-600 font-semibold">Heroic Advisor</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-amber-600 font-medium transition-colors text-sm">Course Home</Link>
            <Link to="/free-resources" className="text-slate-600 hover:text-amber-600 font-medium transition-colors text-sm">Free Resources</Link>
            <Link to="/purchase" className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-semibold rounded-full text-white bg-slate-900 hover:bg-slate-800 focus:outline-none transition-all shadow-sm">
              Reserve Your Place
            </Link>
          </nav>

          <div className="md:hidden">
             <Link to="/purchase" className="text-sm font-semibold text-amber-600">Reserve Seat</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
