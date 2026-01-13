import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  X, 
  ChevronLeft, 
  Zap, 
  Star,
  Share2
} from 'lucide-react';

const QUANTUM_VIDEO_ID = "WS1ccYNZJtU"; 

const LandingPage: React.FC = () => {
  // --- STATES ---
  const [isLoadingQuantum, setIsLoadingQuantum] = useState(true);
  const [isQuantumModalOpen, setIsQuantumModalOpen] = useState(false);
  const [isQuantumDocked, setIsQuantumDocked] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false); 
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const [hasDismissedPermanently, setHasDismissedPermanently] = useState(false);

  // --- INITIAL ENTRY ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingQuantum(false);
      setIsQuantumModalOpen(true);
    }, 2800); 
    return () => clearTimeout(timer);
  }, []);

  // --- MECHANISMS ---
  const handleDockVideo = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsQuantumDocked(true);
    }, 350);
    setTimeout(() => {
      setIsQuantumModalOpen(false);
      setIsAnimatingOut(false);
    }, 750); 
  };

  const handleResumeVideo = () => {
    setIsQuantumDocked(false);
    setIsAnimatingIn(true);
    setIsQuantumModalOpen(true);
    setTimeout(() => {
      setIsAnimatingIn(false);
    }, 50); 
  };

  const handleShare = async () => {
    const shareData = {
      title: 'The Transcendent Heroic Advisor',
      text: 'Experience the Quantum Thinking Masterclass.',
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied!");
      }
    } catch (err) { console.error(err); }
  };

  return (
    <div className="animate-in fade-in duration-700 relative overflow-x-hidden bg-slate-900 min-h-screen">
      
      {/* --- GOLD SHARE BUTTON --- */}
      <div className="fixed top-6 right-6 z-[120]">
        <button 
          onClick={handleShare}
          className="flex items-center gap-2 bg-amber-500 text-slate-900 px-5 py-2.5 rounded-full hover:bg-amber-400 transition-all shadow-[0_10px_30px_rgba(245,158,11,0.3)] active:scale-95 group border border-amber-600/20"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.15em] hidden md:inline">Share Heroics</span>
          <Share2 className="w-4 h-4" />
        </button>
      </div>

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
              ${(isAnimatingOut || isAnimatingIn) ? 'opacity-0' : 'opacity-100'}`} 
            onClick={handleDockVideo}
          ></div>
          
          <div className={`relative w-full max-w-5xl aspect-video bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(245,158,11,0.3)] border border-amber-500/30 transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) z-50
            ${isAnimatingOut || isAnimatingIn ? 'translate-x-[150vw]' : 'translate-x-0'}
          `}>
            <div className="absolute top-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-b from-black/95 to-transparent z-[60] flex justify-between items-start">
              <div className="pr-10">
                <span className="flex items-center gap-2 text-amber-500 font-bold text-[10px] uppercase tracking-widest mb-1">
                  <Star className="w-3 h-3 fill-amber-500" /> Exclusive Preview
                </span>
                <h3 className="text-white text-base md:text-2xl font-bold font-serif leading-tight">Becoming A Transcendent Heroic Advisor</h3>
              </div>
              
              <button 
                onClick={handleDockVideo} 
                className="bg-white/10 hover:bg-amber-500 hover:text-slate-900 text-white p-2 rounded-full transition-all group active:scale-90"
                aria-label="Minimize video"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            <iframe 
              className="w-full h-full" 
              src={`https://www.youtube.com/embed/${QUANTUM_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`} 
              title="Becoming A Transcendent Heroic Advisor" 
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* --- SIDEBAR DOCK BUTTON --- */}
      {isQuantumDocked && !hasDismissedPermanently && (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[110] flex items-center animate-in slide-in-from-right duration-[500ms] ease-out">
          <div className="relative flex flex-col items-center">
            <button 
              onClick={() => setHasDismissedPermanently(true)}
              className="absolute -top-10 right-2 p-1.5 bg-slate-900 text-slate-500 hover:text-white rounded-full border border-slate-700 shadow-xl transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <button 
              onClick={handleResumeVideo}
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 py-10 px-4 rounded-l-2xl font-black uppercase tracking-tighter [writing-mode:vertical-lr] flex items-center gap-3 shadow-[-15px_0_35px_rgba(245,158,11,0.2)] transition-all group overflow-hidden"
            >
              <ChevronLeft className="w-5 h-5 mb-2 group-hover:-translate-x-1 transition-transform" />
              <span className="flex items-center gap-2 text-sm">Quantum Lesson <Zap className="w-4 h-4 fill-slate-900 mt-2" /></span>
            </button>
          </div>
        </div>
      )}

      {/* --- MAIN PAGE CONTENT --- */}
      <section className="relative py-32 px-4 text-center">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          The Transcendent <span className="text-amber-500">Heroic Advisor</span>
        </h1>
        <Link 
          to="/purchase" 
          className="inline-flex items-center px-10 py-2.5 bg-amber-500 text-slate-900 font-black uppercase text-[11px] tracking-[0.2em] rounded-full hover:bg-amber-400 transition-all shadow-[0_10px_30px_rgba(245,158,11,0.3)] group"
        >
          Reserve Your Place <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
      
      {/* ... other original sections remain ... */}
    </div>
  );
};

export default LandingPage;
