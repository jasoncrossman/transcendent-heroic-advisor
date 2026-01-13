import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  X, 
  ChevronLeft, 
  Zap, 
  Star,
  PlayCircle
} from 'lucide-react';

const QUANTUM_VIDEO_ID = "WS1ccYNZJtU"; 

const LandingPage: React.FC = () => {
  // States
  const [isLoadingQuantum, setIsLoadingQuantum] = useState(true);
  const [isQuantumModalOpen, setIsQuantumModalOpen] = useState(false);
  const [isQuantumDocked, setIsQuantumDocked] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false); 
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const [hasDismissedPermanently, setHasDismissedPermanently] = useState(false);

  // Initial Entry
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingQuantum(false);
      setIsQuantumModalOpen(true);
    }, 2800); 
    return () => clearTimeout(timer);
  }, []);

  // THE MECHANISM: Synchronized Slide & Appear
  const handleDockVideo = () => {
    setIsAnimatingOut(true);

    // 1. Halfway through the slide (300ms), make the button appear
    setTimeout(() => {
      setIsQuantumDocked(true);
    }, 300);

    // 2. Once the video is fully off-screen (750ms), unmount the modal
    setTimeout(() => {
      setIsQuantumModalOpen(false);
      setIsAnimatingOut(false);
    }, 750); 
  };

  const handleResumeVideo = () => {
    setIsAnimatingIn(true);
    // Button vanishes immediately to "become" the video
    setIsQuantumDocked(false); 
    setIsQuantumModalOpen(true);
    
    setTimeout(() => {
      setIsAnimatingIn(false);
    }, 50); 
  };

  return (
    <div className="animate-in fade-in duration-700 relative overflow-x-hidden bg-slate-900 min-h-screen">
      
      {/* --- QUANTUM PULSE LOADER --- */}
      {isLoadingQuantum && (
        <div className="fixed inset-0 z-[200] bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 rounded-full bg-amber-500/20 animate-ping duration-1000"></div>
            <div className="relative w-24 h-24 bg-slate-900 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.4)]">
              <Zap className="w-10 h-10 text-amber-500 animate-pulse" />
            </div>
          </div>
          <h2 className="text-amber-500 font-bold tracking-[0.4em] uppercase text-sm">Initializing Heroics</h2>
        </div>
      )}

      {/* --- FLOATING PLAYER OVERLAY --- */}
      {isQuantumModalOpen && !hasDismissedPermanently && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-8">
          <div 
            className={`absolute inset-0 bg-slate-950/90 backdrop-blur-xl transition-opacity duration-700 
              ${isAnimatingOut ? 'opacity-0' : 'opacity-100'}`} 
            onClick={handleDockVideo}
          ></div>
          
          <div className={`relative w-full max-w-5xl aspect-video bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(245,158,11,0.3)] border border-amber-500/30 transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) z-50
            ${isAnimatingOut || isAnimatingIn ? 'translate-x-[150vw]' : 'translate-x-0'}
          `}>
            <div className="absolute top-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-b from-black/95 to-transparent z-20 flex justify-between items-start">
              <div className="pr-10">
                <span className="flex items-center gap-2 text-amber-500 font-bold text-[10px] uppercase tracking-widest mb-1">
                  <Star className="w-3 h-3 fill-amber-500" /> Exclusive Preview
                </span>
                <h3 className="text-white text-base md:text-2xl font-bold font-serif leading-tight">Becoming A Transcendent Heroic Advisor</h3>
              </div>
              <button onClick={handleDockVideo} className="bg-white/10 hover:bg-amber-500 hover:text-slate-900 text-white p-2 rounded-full transition-all">
                <X className="w-5 h-6 md:w-6 md:h-6" />
              </button>
            </div>
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${QUANTUM_VIDEO_ID}?autoplay=1&rel=0`} title="Masterclass" allow="autoplay; fullscreen"></iframe>
          </div>
        </div>
      )}

      {/* --- SIDEBAR DOCK BUTTON (The Mechanism Component) --- */}
      {isQuantumDocked && !hasDismissedPermanently && (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[110] flex items-center animate-in slide-in-from-right duration-[400ms] ease-out">
          <div className="relative flex flex-col items-center">
            <button 
              onClick={() => setHasDismissedPermanently(true)}
              className="absolute -top-10 right-2 p-1.5 bg-slate-900 text-slate-500 hover:text-white rounded-full border border-slate-700 shadow-xl transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <button 
              onClick={handleResumeVideo}
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 py-8 md:py-10 px-3 md:px-4 rounded-l-2xl font-black uppercase tracking-tighter [writing-mode:vertical-lr] flex items-center gap-3 shadow-[-15px_0_35px_rgba(245,158,11,0.2)] transition-all group overflow-hidden"
            >
              <ChevronLeft className="w-5 h-5 mb-2 group-hover:-translate-x-1 transition-transform" />
              <span className="flex items-center gap-2 text-xs md:text-sm">Quantum Lesson <Zap className="w-4 h-4 fill-slate-900 mt-2" /></span>
            </button>
          </div>
        </div>
      )}

      {/* --- ORIGINAL CONTENT SECTION --- */}
      <section className="relative py-32 px-4 text-center">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-8">The Transcendent <span className="text-amber-500">Heroic Advisor</span></h1>
        <Link to="/purchase" className="inline-flex items-center px-10 py-4 bg-amber-500 text-slate-900 font-bold rounded-full">Reserve Your Place</Link>
      </section>
    </div>
  );
};

export default LandingPage;
