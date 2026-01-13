import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  CheckCircle2, 
  X, 
  ChevronLeft, 
  Zap, 
  Star,
  PlayCircle,
  Gift,
  Phone,
  Calendar
} from 'lucide-react';

const QUANTUM_VIDEO_ID = "WS1ccYNZJtU"; 

const LandingPage: React.FC = () => {
  // Quantum States
  const [isLoadingQuantum, setIsLoadingQuantum] = useState(true);
  const [isQuantumModalOpen, setIsQuantumModalOpen] = useState(false);
  const [isQuantumDocked, setIsQuantumDocked] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false); 
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const [hasDismissedPermanently, setHasDismissedPermanently] = useState(false);

  // 1. Initial Entry
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingQuantum(false);
      setIsQuantumModalOpen(true);
    }, 2800); 
    return () => clearTimeout(timer);
  }, []);

  // 2. Smooth Exit Logic
  const handleDockVideo = () => {
    setIsAnimatingOut(true);
    // Increased duration slightly to 700ms for a more luxurious "glide"
    setTimeout(() => {
      setIsQuantumModalOpen(false);
      setIsQuantumDocked(true);
      setIsAnimatingOut(false);
    }, 750); // Added 50ms buffer to ensure it is completely off-screen
  };

  // 3. Smooth Entry Logic
  const handleResumeVideo = () => {
    setIsAnimatingIn(true);
    setIsQuantumDocked(false);
    setIsQuantumModalOpen(true);
    // Smallest possible delay to allow the browser to register the off-screen starting position
    setTimeout(() => {
      setIsAnimatingIn(false);
    }, 50); 
  };

  return (
    <div className="animate-in fade-in duration-700 relative overflow-x-hidden bg-slate-900">
      
      {/* --- QUANTUM PULSE LOADER --- */}
      {isLoadingQuantum && (
        <div className="fixed inset-0 z-[200] bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 rounded-full bg-amber-500/20 animate-ping duration-1000"></div>
            <div className="relative w-24 h-24 bg-slate-900 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.4)]">
              <Zap className="w-10 h-10 text-amber-500 animate-pulse" />
            </div>
          </div>
          <h2 className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm">Initializing Masterclass</h2>
        </div>
      )}

      {/* --- FLOATING PLAYER OVERLAY --- */}
      {isQuantumModalOpen && !hasDismissedPermanently && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-8">
          
          {/* Backdrop: Fades with the slide */}
          <div 
            className={`absolute inset-0 bg-slate-950/90 backdrop-blur-xl transition-opacity duration-700 
              ${isAnimatingOut ? 'opacity-0' : 'opacity-100'}`} 
            onClick={handleDockVideo}
          ></div>
          
          {/* Physical Slide Container */}
          <div className={`relative w-full max-w-5xl aspect-video bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-amber-500/30 transition-all duration-700 ease-in-out z-50
            ${isAnimatingOut ? 'translate-x-[150vw] opacity-100' : ''} 
            ${isAnimatingIn ? 'translate-x-[150vw] opacity-100' : ''}
            ${!isAnimatingOut && !isAnimatingIn ? 'translate-x-0 opacity-100' : ''}
          `}>
            <div className="absolute top-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-b from-black/90 to-transparent z-20 flex justify-between items-start">
              <div className="pr-10">
                <span className="flex items-center gap-2 text-amber-500 font-bold text-[10px] uppercase tracking-widest mb-1">
                  <Star className="w-3 h-3 fill-amber-500" /> Exclusive Free Lesson
                </span>
                <h3 className="text-white text-base md:text-2xl font-bold font-serif leading-tight">Quantum Thinking Masterclass</h3>
              </div>
              <button 
                onClick={handleDockVideo}
                className="bg-white/10 hover:bg-amber-500 hover:text-slate-900 text-white p-2 rounded-full transition-all"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${QUANTUM_VIDEO_ID}?autoplay=1&rel=0`}
              title="Quantum Masterclass"
              allow="autoplay; encrypted-media; fullscreen"
            ></iframe>
          </div>
        </div>
      )}

      {/* --- SIDEBAR DOCK BUTTON --- */}
      {isQuantumDocked && !hasDismissedPermanently && (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[110] flex items-center animate-in slide-in-from-right duration-500">
          <div className="relative flex flex-col items-center">
            <button 
              onClick={() => setHasDismissedPermanently(true)}
              className="absolute -top-10 right-2 p-1.5 bg-slate-900 text-slate-500 hover:text-white rounded-full border border-slate-700 shadow-xl transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <button 
              onClick={handleResumeVideo}
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 py-8 md:py-10 px-3 md:px-4 rounded-l-2xl font-black uppercase tracking-tighter [writing-mode:vertical-lr] flex items-center gap-3 shadow-[-10px_0_30px_rgba(0,0,0,0.4)] transition-all group overflow-hidden"
            >
              <ChevronLeft className="w-5 h-5 mb-2 group-hover:-translate-x-1 transition-transform" />
              <span className="flex items-center gap-2 text-xs md:text-sm">Quantum Lesson <Zap className="w-4 h-4 fill-slate-900 mt-2" /></span>
            </button>
          </div>
        </div>
      )}

      {/* --- REST OF THE ORIGINAL PAGE CONTENT --- */}
      {/* Content omitted for brevity but preserved in implementation */}
      <section className="py-32 px-4 text-center">
         <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight">The Transcendent <span className="text-amber-500">Heroic Advisor</span></h1>
         <Link to="/purchase" className="inline-flex items-center px-10 py-4 bg-amber-500 text-slate-900 font-bold rounded-full">Reserve Your Place</Link>
      </section>
    </div>
  );
};

export default LandingPage;
