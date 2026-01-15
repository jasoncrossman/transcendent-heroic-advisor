import React from 'react';
import { Shield, PlayCircle, Download, Zap, Lock } from 'lucide-react';

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
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-500 uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Mastery Member
            </span>
          </div>
        </div>
      </nav>

      {/* --- HERO HEADER --- */}
      <header className="relative bg-slate-900 py-16 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920" 
            alt="Background" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">The Mastery Vault</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Welcome to your private training environment. Your Quantum Mind Mastery tools, methods, and frameworks are initialized below.
          </p>
        </div>
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT SIDE: MEMBERSPACE CONTENT INJECTION */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 min-h-[600px] relative overflow-hidden">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <PlayCircle className="w-6 h-6 text-amber-500" />
                <h2 className="text-2xl font-bold text-slate-900 font-serif">Curriculum & Video Lessons</h2>
              </div>
              
              {/* MemberSpace will inject the content library inside this area */}
              <div id="memberspace-content-area" className="flex flex-col items-center justify-center h-full text-center py-20">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 animate-pulse">
                  <Lock className="w-8 h-8 text-slate-300" />
                </div>
                <p className="text-slate-400 font-medium italic">Synchronizing your exclusive mastery resources...</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: TOOLS & QUICK LINKS */}
          <div className="space-y-6">
            <div className="bg-amber-500 rounded-3xl p-8 shadow-lg shadow-amber-500/10">
              <Shield className="w-8 h-8 text-slate-900 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">Member Support</h3>
              <p className="text-slate-900/80 text-sm leading-relaxed mb-6">
                Need assistance with your implementation? Our team is available to ensure your Quantum Leap is seamless.
              </p>
              <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all">
                Contact Mastery Support
              </button>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 font-serif flex items-center gap-2">
                <Download className="w-5 h-5 text-amber-500" /> Quick Assets
              </h3>
              <ul className="space-y-4">
                {["Implementation Guide (PDF)", "Quantum Framework Map", "Marketing Message Worksheet"].map((item, i) => (
                  <li key={i} className="flex items-center justify-between group cursor-pointer">
                    <span className="text-slate-600 text-sm group-hover:text-amber-600 transition-colors">{item}</span>
                    <Download className="w-4 h-4 text-slate-300 group-hover:text-amber-500" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center text-slate-400 text-xs border-t border-slate-200">
        <p>© 2026 MSDI & Bruce Raymond Wright. All Rights Reserved.</p>
        <p className="mt-2 tracking-widest uppercase">The Transcendent Heroic Advisor</p>
      </footer>
    </div>
  );
};

export default AcademyPage;
