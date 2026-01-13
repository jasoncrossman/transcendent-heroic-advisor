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
    }, 2800); // Duration for the Quantum Pulse animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="animate-in fade-in duration-700 relative overflow-x-hidden">
      
      {/* --- 1. QUANTUM PULSE LOADER --- */}
      {isLoadingQuantum && (
        <div className="fixed inset-0 z-[150] bg-slate-950 flex flex-col items-center justify-center">
          <div className="relative">
            {/* Concentric Pulse Rings */}
            <div className="absolute inset-0 rounded-full bg-amber-500/20 animate-ping duration-1000"></div>
            <div className="absolute inset-0 rounded-full bg-amber-500/10 animate-pulse duration-700 delay-150"></div>
            
            <div className="relative w-24 h-24 bg-slate-900 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.4)]">
              <Zap className="w-10 h-10 text-amber-500 animate-pulse" />
            </div>
          </div>
          <div className="mt-8 text-center">
            <h2 className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-2">Initializing</h2>
            <p className="text-slate-400 font-serif italic">Quantum Thinking Masterclass...</p>
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
          
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(245,158,11,0.25)] border border-amber-500/30 animate-in zoom-in slide-in-from-bottom-10 duration-700">
            {/* Header Overlay */}
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
                className="bg-white/10 hover:bg-amber-500 hover:text-slate-900 text-white p-2 rounded-full transition-all group"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${QUANTUM_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
              title="Quantum Thinking Masterclass"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            ></iframe>

            {/* Bottom Insight Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-md z-20 text-center border-t border-white/10">
              <p className="text-white/80 text-sm">
                "We don't get what we want, we get what we are <span className="text-amber-500 font-bold uppercase italic">aligned with</span>."
              </p>
            </div>
          </div>
        </div>
      )}

      {/* --- 3. SIDEBAR DOCK BUTTON --- */}
      {isQuantumDocked && !hasDismissedPermanently && (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[110] flex items-center animate-in slide-in-from-right duration-500">
          <div className="relative flex flex-col items-center">
            {/* Close Button */}
            <button 
              onClick={() => setHasDismissedPermanently(true)}
              className="absolute -top-10 right-2 p-1.5 bg-slate-900 text-slate-500 hover:text-white rounded-full border border-slate-700 shadow-xl transition-colors group"
            >
              <X className="w-4 h-4" />
            </button>

            {/* The Vertical Tab */}
            <button 
              onClick={() => { setIsQuantumModalOpen(true); setIsQuantumDocked(false); }}
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 py-10 px-4 rounded-l-2xl font-black uppercase tracking-tighter [writing-mode:vertical-lr] flex items-center gap-3 shadow-[-10px_0_30px_rgba(245,158,11,0.2)] transition-all group overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <ChevronLeft className="w-5 h-5 mb-2 group-hover:-translate-x-1 transition-transform relative z-10" />
              <span className="relative z-10 flex items-center gap-2">
                Quantum Lesson <Zap className="w-4 h-4 fill-slate-900 mt-2" />
              </span>
            </button>
          </div>
        </div>
      )}

      {/* --- MAIN PAGE CONTENT --- */}

      <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920" 
            alt="Quantum Vision" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900 to-slate-900"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-amber-400 uppercase border border-amber-400/30 rounded-full bg-amber-400/5">
            Launching Spring 2026
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
            The Transcendent <span className="gradient-gold text-amber-500">Heroic Advisor</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed mb-10">
            Welcome to our Quantum Mind Mastery Course. Each lesson goes beyond theory to SHOW you exactly how to implement solutions that make you naturally compelling.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/purchase" className="w-full sm:w-auto px-10 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-full transition-all shadow-lg flex items-center justify-center group">
              Reserve Your Place <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">Mastery Through Doing</h2>
          <p className="text-lg text-slate-600 leading-relaxed italic mb-12">
            "Teaching by telling isn’t as effective as actually APPLYING the details directly with the inventor."
          </p>
          <div className="bg-amber-500 p-8 rounded-3xl text-left shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Quantum Alignment</h3>
            <p className="font-medium">
              If you desire greater connection with the people you want as loyal clients, you must grow yourself into being what they need someone to be in their lives.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-10 font-serif">Reserve Your Place</h2>
          <Link 
            to="/purchase"
            className="inline-block px-12 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-lg"
          >
            Get Free Resources & Secure My Seat
          </Link>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
