import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, CheckCircle2, PlayCircle, X, Zap, ChevronLeft, Share } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [isVideoActive, setIsVideoActive] = useState(false); 
  const [showPulse, setShowPulse] = useState(true); 
  const [isModalOpen, setIsModalOpen] = useState(false);     
  const [isDocked, setIsDocked] = useState(false); 

  // Simulation: Progress of the video (0 to 100)
  const [progress, setProgress] = useState(35); 

  const cleanVideoSrc = "https://www.youtube.com/embed/9mxOlmaUyXA?si=_8yRGElGNOU_6Asc&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPulse(false);
      setIsModalOpen(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseMaster = () => {
    setIsModalOpen(false);
    setIsDocked(true);
  };

  const handleRestoreMaster = () => {
    setIsVideoActive(false); 
    setIsDocked(false);
    setIsModalOpen(true);
  };

  const handlePlayIntro = () => {
    handleCloseMaster(); 
    setIsVideoActive(true);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-900">
      
      {/* --- PHASE 1: PULSE OVERLAY --- */}
      {showPulse && (
        <div className="fixed inset-0 z-[200] bg-slate-950 flex flex-col items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-amber-500/20 animate-ping duration-1000"></div>
            <div className="relative w-24 h-24 bg-slate-900 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.4)]">
              <Zap className="w-10 h-10 text-amber-500 animate-pulse" />
            </div>
          </div>
          <h2 className="mt-8 text-amber-500 font-bold tracking-[0.3em] uppercase text-sm">Initializing Heroics</h2>
        </div>
      )}

      {/* --- PHASE 2: MASTER VIDEO APPARATUS --- */}
      <div className={`fixed inset-0 z-[150] flex items-center justify-center p-4 transition-all duration-700 
        ${isModalOpen ? 'bg-slate-900/95 backdrop-blur-sm pointer-events-auto' : 'bg-transparent backdrop-blur-none pointer-events-none'}`}>
        
        <div className={`relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-amber-500/20 transition-all duration-700 ease-in-out
            ${isModalOpen ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-[120%] opacity-0 scale-95'}`}>
          
          <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 pointer-events-none">
            <span className="text-white/90 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] drop-shadow-md bg-slate-900/60 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
              The Transcendent Heroic Advisor
            </span>
          </div>

          <button onClick={handleCloseMaster} className="absolute top-4 right-4 z-20 p-2 bg-amber-500 text-slate-900 rounded-full hover:scale-110 transition-transform shadow-lg">
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          {isModalOpen && (
            <iframe 
              className="w-full h-full"
              src={`${cleanVideoSrc}&autoplay=1`}
              title="Master Suite Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>

      {/* --- PHASE 3 & 4: GOLD DOCK TAB WITH PROGRESS BAR --- */}
      <button 
        onClick={handleRestoreMaster}
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-[140] bg-amber-500 hover:bg-amber-400 text-slate-900 py-10 px-3 rounded-l-2xl font-bold flex flex-col items-center gap-3 shadow-[-10px_0_30px_rgba(0,0,0,0.3)] transition-all duration-700 ease-in-out group
          ${isDocked && !isModalOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
        
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        
        <span className="[writing-mode:vertical-lr] tracking-widest uppercase text-[10px] font-black">
          Quantum Lesson
        </span>
        
        <div className="relative mt-2">
            <PlayCircle className="w-5 h-5" />
            {/* Tiny indicator that video is "paused/ready" in the dock */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-slate-900 rounded-full animate-pulse"></div>
        </div>

        {/* --- VERTICAL PROGRESS BAR --- */}
        <div className="w-1.5 h-20 bg-slate-900/20 rounded-full mt-4 overflow-hidden flex flex-col-reverse">
            <div 
                className="w-full bg-slate-900 transition-all duration-1000" 
                style={{ height: `${progress}%` }}
            ></div>
        </div>
      </button>

      {/* --- MAIN PAGE CONTENT --- */}
      <div className="bg-white">
        {/* Hero Section placeholder */}
        <div className="h-screen bg-slate-900 flex items-center justify-center">
            <h1 className="text-white text-4xl font-serif">Main Content Area</h1>
        </div>

        {/* INLINE VIDEO SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 font-serif">Experience the Introductory Principles</h2>
            <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
              {isVideoActive ? (
                <>
                  <button onClick={() => setIsVideoActive(false)} className="absolute top-4 right-4 z-20 p-1.5 bg-black/50 text-white rounded-full hover:bg-black transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                  <iframe className="w-full h-full" src={`${cleanVideoSrc}&autoplay=1`} allowFullScreen></iframe>
                </>
              ) : (
                <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-md bg-slate-900/10">
                  <button onClick={handlePlayIntro} className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-3 rounded-full font-bold flex items-center gap-2 shadow-xl hover:scale-105 transition-all">
                    <PlayCircle className="w-5 h-5" /> Watch Introduction
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
