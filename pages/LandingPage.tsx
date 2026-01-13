import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  CheckCircle2, 
  Gift, 
  Phone, 
  PlayCircle, 
  Calendar, 
  X, 
  ChevronLeft,
  Star,
  Zap
} from 'lucide-react';

// REPLACE THIS ID WITH YOUR 45-MINUTE QUANTUM VIDEO ID
const QUANTUM_VIDEO_ID = "WS1ccYNZJtU"; 

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isVideoActive, setIsVideoActive] = useState(false);
  
  // Quantum States
  const [isLoadingQuantum, setIsLoadingQuantum] = useState(true);
  const [isQuantumModalOpen, setIsQuantumModalOpen] = useState(false);
  const [isQuantumDocked, setIsQuantumDocked] = useState(false);
  const [hasDismissedPermanently, setHasDismissedPermanently] = useState(false);

  // Trigger loading sequence on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingQuantum(false);
      setIsQuantumModalOpen(true);
    }, 2800); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="animate-in fade-in duration-700 relative overflow-x-hidden">
      
      {/* --- 1. QUANTUM PULSE LOADER --- */}
      {isLoadingQuantum && (
        <div className="fixed inset-0 z-[150] bg-slate-950 flex flex-col items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-amber-500/20 animate-ping duration-1000"></div>
            <div className="absolute inset-0 rounded-full bg-amber-500/10 animate-pulse duration-700 delay-150"></div>
            <div className="relative w-24 h-24 bg-slate-900 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.4)]">
              <Zap className="w-10 h-10 text-amber-500 animate-pulse" />
            </div>
          </div>
          <div className="mt-8 text-center text-white">
            <h2 className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-2">Initializing</h2>
            <p className="font-serif italic text-slate-400">Quantum Thinking Masterclass...</p>
          </div>
        </div>
      )}

      {/* --- 2. FLOATING QUANTUM PLAYER --- */}
      {isQuantumModalOpen && !hasDismissedPermanently && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-1000" 
            onClick={() => { setIsQuantumModalOpen(false); setIsQuantumDocked(true); }}
          ></div>
          
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(245,158,11,0.25)] border border-amber-500/30 animate-in zoom-in duration-700">
            <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/90 to-transparent z-20 flex justify-between items-start">
              <div>
                <span className="flex items-center gap-2 text-amber-500 font-bold text-[10px] uppercase tracking-widest mb-1">
                  <Star className="w-3 h-3 fill-amber-500" /> Exclusive Preview
                </span>
                <h3 className="text-white text-xl md:text-2xl font-bold font-serif">
                  Quantum Thinking & Your Business
                </h3>
              </div>
              <button 
                onClick={() => { setIsQuantumModalOpen(false); setIsQuantumDocked(true); }}
                className="bg-white/10 hover:bg-amber-500 hover:text-slate-900 text-white p-2 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${QUANTUM_VIDEO_ID}?autoplay=1&rel=0`}
              title="Quantum Thinking Masterclass"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* --- 3. FIXED SIDEBAR DOCK BUTTON (White Box Fix) --- */}
      {isQuantumDocked && !hasDismissedPermanently && (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[110] flex items-center animate-in slide-in-from-right duration-500">
          <div className="relative flex flex-col items-center">
            {/* Close Button */}
            <button 
              onClick={() => setHasDismissedPermanently(true)}
              className="absolute -top-10 right-2 p-1.5 bg-slate-900 text-slate-500 hover:text-white rounded-full border border-slate-700 shadow-xl transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* The Vertical Tab - Fixed overflow and removed the white background div */}
            <button 
              onClick={() => { setIsQuantumModalOpen(true); setIsQuantumDocked(false); }}
              className="relative bg-amber-500 hover:bg-amber-400 text-slate-900 py-10 px-4 rounded-l-2xl font-black uppercase tracking-tighter [writing-mode:vertical-lr] flex items-center gap-3 shadow-[-10px_0_30px_rgba(0,0,0,0.4)] transition-all group border-y border-l border-amber-600/20"
            >
              <ChevronLeft className="w-5 h-5 mb-2 group-hover:-translate-x-1 transition-transform" />
              <span className="flex items-center gap-2">
                Quantum Lesson <Zap className="w-4 h-4 fill-slate-900 mt-2" />
              </span>
            </button>
          </div>
        </div>
      )}

      {/* --- MAIN PAGE CONTENT --- */}
      <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920" alt="Quantum" className="w-full h-full object-cover opacity-20 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900 to-slate-900"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-amber-400 uppercase border border-amber-400/30 rounded-full bg-amber-400/5">Launching Spring 2026</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">The Transcendent <span className="text-amber-500">Heroic Advisor</span></h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-300 mb-10 leading-relaxed">Experience a masterclass that goes beyond theory to show you how to implement Quantum Mind solutions.</p>
          <Link to="/purchase" className="inline-flex items-center px-10 py-4 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 transition-all shadow-lg group">
            Reserve Your Place <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Simple Philosophy Segment */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-serif">Quantum Alignment</h2>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm text-left">
            <p className="text-slate-700 text-lg leading-relaxed">
              We believe the best way to learn unique approaches is to have the inventor teach you by doing them with you. Quantum thinking elevates you into <span className="text-amber-600 font-bold">BEING</span> what high-net-worth clients need.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-slate-950 text-center border-t border-slate-900">
        <h2 className="text-3xl font-bold text-white mb-8 font-serif">Ready to transcend?</h2>
        <Link to="/purchase" className="inline-block px-12 py-4 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 transition-all">
          Secure Your Seat Now
        </Link>
      </footer>
    </div>
  );
};

export default LandingPage;
