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
  const [isVideoActive, setIsVideoActive] = useState(false);
  
  // Quantum States
  const [isLoadingQuantum, setIsLoadingQuantum] = useState(true);
  const [isQuantumModalOpen, setIsQuantumModalOpen] = useState(false);
  const [isQuantumDocked, setIsQuantumDocked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // Controls the "Slide"
  const [hasDismissedPermanently, setHasDismissedPermanently] = useState(false);

  // 1. Initial Entry Trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingQuantum(false);
      setIsQuantumModalOpen(true);
    }, 2800); 
    return () => clearTimeout(timer);
  }, []);

  // 2. Logic: Slide from Center to Side
  const handleDockVideo = () => {
    setIsAnimating(true); // Triggers the CSS translate-x
    setTimeout(() => {
      setIsQuantumModalOpen(false);
      setIsQuantumDocked(true);
      setIsAnimating(false); // Reset for next use
    }, 600); // Matches the duration-600 in the JSX
  };

  // 3. Logic: Slide from Side to Center
  const handleResumeVideo = () => {
    // Stage 1: Put the modal in the "Off-screen" position while it's still hidden
    setIsAnimating(true); 
    setIsQuantumDocked(false);
    
    // Stage 2: Show the modal and immediately trigger the slide-in
    setIsQuantumModalOpen(true);
    setTimeout(() => {
      setIsAnimating(false); // Transitions from translate-x-[120%] to 0
    }, 50); 
  };

  return (
    <div className="animate-in fade-in duration-700 relative overflow-x-hidden bg-slate-900">
      
      {/* --- QUANTUM PULSE LOADER --- */}
      {isLoadingQuantum && (
        <div className="fixed inset-0 z-[200] bg-slate-950 flex flex-col items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-amber-500/20 animate-ping duration-1000"></div>
            <div className="relative w-24 h-24 bg-slate-900 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.4)]">
              <Zap className="w-10 h-10 text-amber-500 animate-pulse" />
            </div>
          </div>
          <div className="mt-8 text-center text-white tracking-[0.3em] uppercase text-sm">Initializing Masterclass</div>
        </div>
      )}

      {/* --- FLOATING PLAYER OVERLAY --- */}
      {isQuantumModalOpen && !hasDismissedPermanently && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          
          {/* Backdrop: Fades out during the slide to reveal the site */}
          <div 
            className={`absolute inset-0 bg-slate-950/90 backdrop-blur-xl transition-opacity duration-500 
              ${isAnimating ? 'opacity-0' : 'opacity-100'}`} 
            onClick={handleDockVideo}
          ></div>
          
          {/* The Video Container: Physical Slide Logic */}
          <div className={`relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(245,158,11,0.25)] border border-amber-500/30 transition-transform duration-[600ms] ease-in-out
            ${isAnimating ? 'translate-x-[120%]' : 'translate-x-0'}
          `}>
            <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/90 to-transparent z-20 flex justify-between items-start">
              <div>
                <span className="flex items-center gap-2 text-amber-500 font-bold text-[10px] uppercase tracking-widest mb-1">
                  <Star className="w-3 h-3 fill-amber-500" /> Exclusive Free Lesson
                </span>
                <h3 className="text-white text-xl md:text-2xl font-bold font-serif">Quantum Thinking Masterclass</h3>
              </div>
              <button 
                onClick={handleDockVideo}
                className="bg-white/10 hover:bg-amber-500 hover:text-slate-900 text-white p-2 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${QUANTUM_VIDEO_ID}?autoplay=1&rel=0`}
              title="Quantum Masterclass"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* --- SIDEBAR DOCK BUTTON --- */}
      {isQuantumDocked && !hasDismissedPermanently && (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[110] flex items-center animate-in slide-in-from-right duration-500">
          <div className="relative flex flex-col items-center">
            {/* Minimalist Close X */}
            <button 
              onClick={() => setHasDismissedPermanently(true)}
              className="absolute -top-10 right-2 p-1.5 bg-slate-900 text-slate-500 hover:text-white rounded-full border border-slate-700 shadow-xl transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Vertical Tab: No "White Ghosting" Fix Applied */}
            <button 
              onClick={handleResumeVideo}
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 py-10 px-4 rounded-l-2xl font-black uppercase tracking-tighter [writing-mode:vertical-lr] flex items-center gap-3 shadow-[-10px_0_30px_rgba(0,0,0,0.4)] transition-all group overflow-hidden"
            >
              <ChevronLeft className="w-5 h-5 mb-2 group-hover:-translate-x-1 transition-transform" />
              <span className="flex items-center gap-2">Quantum Lesson <Zap className="w-4 h-4 fill-slate-900 mt-2" /></span>
            </button>
          </div>
        </div>
      )}

      {/* --- MAIN PAGE CONTENT (Reverted to your original structure) --- */}
      <section className="relative py-32 px-4 text-center">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-amber-400 uppercase border border-amber-400/30 rounded-full">Launching Spring 2026</span>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight">The Transcendent <span className="text-amber-500">Heroic Advisor</span></h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed mb-10">Welcome to our Quantum Mind Mastery Course for advisors and their associates...</p>
          <Link to="/purchase" className="inline-flex items-center px-10 py-4 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 transition-all group">
            Reserve Your Place <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Mastery Section */}
      <section className="py-20 bg-white px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif uppercase">Mastery Through Doing</h2>
        <div className="max-w-4xl mx-auto bg-amber-500 p-8 md:p-12 rounded-3xl shadow-2xl text-left mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif">Quantum Alignment</h3>
          <p className="text-slate-900 font-medium text-lg">We don’t get what we want, we get what we are aligned with. Grow yourself into being what they need someone to be in their lives.</p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-slate-50 border-t text-center px-4">
        <h2 className="text-4xl font-bold text-slate-900 mb-10 font-serif">Reserve Your Place</h2>
        <Link to="/purchase" className="inline-block px-12 py-4 bg-slate-900 text-white font-bold rounded-full">Secure My Seat</Link>
      </section>

    </div>
  );
};

export default LandingPage;
