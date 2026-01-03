
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-slate-800 pb-12">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">The Transcendent Heroic Advisor</h3>
            <p className="max-w-md text-slate-400">
              Elevating advisors into BEING above and beyond the reach of the masses. Mastery of the Quantum Mind.
            </p>
          </div>
          <div className="md:text-right">
            <h4 className="text-white font-semibold mb-4 text-lg">Personal Consultation & Direct Inquiry</h4>
            <div className="space-y-1">
              <p className="font-medium text-amber-400">Melinda Mordue</p>
              <a href="mailto:mmordue@macrostrategicdesign.com" className="block hover:text-white transition-colors">mmordue@macrostrategicdesign.com</a>
              <a href="tel:805-527-7516" className="block hover:text-white transition-colors">805-527-7516</a>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Macro Strategic Design. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
