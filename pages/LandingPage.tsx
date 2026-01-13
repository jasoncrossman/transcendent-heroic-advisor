import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  CheckCircle2, 
  X, 
  ChevronLeft, 
  Zap, 
  Star,
  PlayCircle,
  Share2 
} from 'lucide-react';

const QUANTUM_VIDEO_ID = "9mxOlmaUyXA"; 

const LandingPage: React.FC = () => {
  const [isVideoActive, setIsVideoActive] = useState(false);
  
  // Quantum States
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

  // Share Logic
  const handleShare = async () => {
    const shareData = {
      title: 'The Transcendent Heroic Advisor',
      text: 'Experience the Quantum Thinking Masterclass for high-level advisors.',
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (err) { console.error("Error sharing:", err); }
  };

  // The Mechanism
  const handleDockVideo = () => {
    setIsAnimatingOut(true);
    setTimeout(() => setIsQuantumDocked(true), 350);
    setTimeout(() => {
      setIsQuantumModalOpen(false);
      setIsAnimatingOut(false);
    }, 750); 
  };

  const handleResumeVideo = () => {
    setIsQuantumDocked(false);
    setIsAnimatingIn(true);
    setIsQuantumModalOpen(true);
    setTimeout(() => setIsAnimatingIn(false), 50); 
  };

  return (
    <div className="animate-in fade-in duration-700 relative overflow-x-hidden bg-slate-900 min-h-screen">
      
      {/* --- REFINED GOLD SHARE BUTTON --- */}
      <div className="fixed top-6 right-6 z-[120]">
        <button 
          onClick={handleShare}
          className="flex items-center gap-2 bg-amber-500 text-slate-900 px-4 py-2.5 rounded-full hover:bg-amber-400 transition-all duration-300 shadow-[0_10px_30px_rgba(245,158,11,0.3)] active:scale-95 group border border-amber-600/20"
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
              <button onClick={handleDockVideo} className="bg-white/10 hover:bg-amber-500 hover:text-slate-900 text-white p-2 rounded-full transition-all group">
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
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[110] flex items-center animate-in slide-in-from-right duration-500 ease-out">
          <div className="relative flex flex-col items-center">
            <button onClick={() => setHasDismissedPermanently(true)} className="absolute -top-10 right-2 p-1.5 bg-slate-900 text-slate-500 hover:text-white rounded-full border border-slate-700 shadow-xl">
              <X className="w-4 h-4" />
            </button>
            <button 
              onClick={handleResumeVideo}
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 py-10 px-4 rounded-l-2xl font-black uppercase tracking-tighter [writing-mode:vertical-lr] flex items-center gap-3 shadow-[-15px_0_35px_rgba(245,158,11,0.2)] transition-all group"
            >
              <ChevronLeft className="w-5 h-5 mb-2 group-hover:-translate-x-1 transition-transform" />
              <span className="flex items-center gap-2 text-sm">Quantum Lesson <Zap className="w-4 h-4 fill-slate-900 mt-2" /></span>
            </button>
          </div>
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <section className="relative py-24 md:py-32 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920" alt="Hero" className="w-full h-full object-cover opacity-20 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900 to-slate-900"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold tracking-widest text-amber-400 uppercase border border-amber-400/30 rounded-full bg-amber-400/5">Launching Spring 2026</span>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight">The Transcendent <span className="text-amber-500">Heroic Advisor</span></h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">Mastery Course for advisors and associates. Beyond theory—we SHOW you how to be compelling.</p>
          <Link to="/purchase" className="inline-flex items-center px-10 py-4 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 transition-all shadow-lg group">
            Reserve Your Place <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="py-20 bg-white px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-serif uppercase tracking-tight">Mastery Through Doing</h2>
          <div className="bg-amber-500 p-8 md:p-12 rounded-3xl shadow-2xl text-left transform hover:scale-[1.01] transition-all">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif uppercase">Quantum Alignment</h3>
            <p className="text-slate-900 font-medium text-lg">We don’t get what we want, we get what we are aligned with. Grow into being what they need.</p>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif uppercase tracking-tight">Reserve Your Place</h2>
        <Link to="/purchase" className="inline-block px-12 py-5 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all text-lg shadow-2xl">Secure My Seat</Link>
      </section>

    </div>
  );
};

export default LandingPage;
