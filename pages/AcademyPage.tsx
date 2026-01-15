import React from 'react';
import { PlayCircle, Zap, Shield, ChevronRight, Mail } from 'lucide-react';

const AcademyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* --- PREMIUM NAVIGATION --- */}
      <nav className="bg-slate-900 text-white p-6 border-b border-amber-500/20 shadow-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-amber-500" />
            <span className="text-xl font-bold tracking-tight uppercase">
              Heroic <span className="text-amber-500">Academy</span>
            </span>
          </div>
          <div className="px-4 py-1 rounded-full border border-amber-500/30 bg-amber-500/10">
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-500">Mastery Member</span>
          </div>
        </div>
      </nav>

      {/* --- HERO HEADER --- */}
      <header className="relative bg-slate-900 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920" 
            alt="Quantum Vision" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">The Mastery Vault</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Welcome back. Your Quantum Mind Mastery tools and frameworks are initialized and ready for your review.
          </p>
        </div>
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT SIDE: MEMBERSPACE CONTENT DOCK */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 min-h-[500px] flex flex-col">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <PlayCircle className="w-6 h-6 text-amber-500" />
                <h2 className="text-2xl font-bold text-slate-900 font-serif">Your Curriculum</h2>
              </div>
              
              {/* This specific ID tells MemberSpace where to inject your videos */}
              <div id="ms-content-library" className="flex-grow flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-slate-200" />
                </div>
                <p className="text-slate-400 font-medium italic">Synchronizing your exclusive mastery resources...</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: TOOLS */}
          <div className="space-y-6">
            <div className="bg-amber-500 rounded-3xl p-8 shadow-lg">
              <Mail className="w-8 h-8 text-slate-900 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">Implementation Support</h3>
              <p className="text-slate-900/80 text-sm mb-6 leading-relaxed">
                Need help with a specific multidimensional framework? Reach out to the Heroic support team.
              </p>
              <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm">
                Message Support
              </button>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 font-serif">Vault Quick Links</h3>
              <div className="space-y-4">
                {["Core Strategy Guide", "Quantum Alignment Map"].map((link, i) => (
                  <div key={i} className="flex items-center justify-between text-slate-600 text-sm hover:text-amber-600 cursor-pointer">
                    <span>{link}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AcademyPage;
