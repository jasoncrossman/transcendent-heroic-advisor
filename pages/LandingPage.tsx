import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  CheckCircle2, 
  Mail, 
  Gift, 
  Phone, 
  PlayCircle, 
  Calendar, 
  X, 
  ChevronLeft, 
  Zap, 
  Star 
} from 'lucide-react';

// REPLACE THIS ID WITH YOUR 45-MINUTE QUANTUM VIDEO ID
const QUANTUM_VIDEO_ID = "WS1ccYNZJtU"; 

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isVideoActive, setIsVideoActive] = useState(false);

  // New Quantum Video States
  const [isLoadingQuantum, setIsLoadingQuantum] = useState(true);
  const [isQuantumModalOpen, setIsQuantumModalOpen] = useState(false);
  const [isQuantumDocked, setIsQuantumDocked] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [hasDismissedPermanently, setHasDismissedPermanently] = useState(false);

  // Trigger loading sequence on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingQuantum(false);
      setIsQuantumModalOpen(true);
    }, 2800); 
    return () => clearTimeout(timer);
  }, []);

  // Smooth Docking Function
  const handleDockVideo = () => {
    setIsAnimatingOut(true);
    // Wait for the slide animation to finish before showing the side button
    setTimeout(() => {
      setIsQuantumModalOpen(false);
      setIsQuantumDocked(true);
      setIsAnimatingOut(false);
    }, 600); 
  };

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
            <p className="text-slate-400 font-serif italic">Quantum Thinking Masterclass...</p>
          </div>
        </div>
      )}

      {/* --- 2. FLOATING QUANTUM PLAYER WITH SLIDE ANIMATION --- */}
      {isQuantumModalOpen && !hasDismissedPermanently && (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 transition-all duration-700 ${isAnimatingOut ? 'pointer-events-none' : ''}`}>
          {/* Backdrop fades out during animation */}
          <div 
            className={`absolute inset-0 bg-slate-950/90 backdrop-blur-xl transition-opacity duration-500 ${isAnimatingOut ? 'opacity-0' : 'opacity-100'}`} 
            onClick={handleDockVideo}
          ></div>
          
          <div className={`relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(245,158,11,0.25)] border border-amber-500/30 transition-all duration-700 ease-in-out
            ${isAnimatingOut ? 'scale-[0.1] translate-x-[60%] opacity-0' : 'scale-100 translate-x-0 opacity-100'}
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
              title="Quantum Thinking Masterclass"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* --- 3. SIDEBAR DOCK BUTTON --- */}
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
              onClick={() => { setIsQuantumModalOpen(true); setIsQuantumDocked(false); }}
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 py-10 px-4 rounded-l-2xl font-black uppercase tracking-tighter [writing-mode:vertical-lr] flex items-center gap-3 shadow-[-10px_0_30px_rgba(0,0,0,0.4)] transition-all group overflow-hidden"
            >
              <ChevronLeft className="w-5 h-5 mb-2 group-hover:-translate-x-1 transition-transform" />
              <span className="flex items-center gap-2">Quantum Lesson <Zap className="w-4 h-4 fill-slate-900 mt-2" /></span>
            </button>
          </div>
        </div>
      )}

      {/* --- ORIGINAL PAGE CONTENT --- */}
      <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920" alt="Quantum Vision" className="w-full h-full object-cover opacity-20 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900 to-slate-900"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-amber-400 uppercase border border-amber-400/30 rounded-full bg-amber-400/5">Launching Spring 2026</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">The Transcendent <span className="gradient-gold">Heroic Advisor</span></h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed mb-10">Welcome to our Quantum Mind Mastery Course for advisors and their associates...</p>
          <Link to="/purchase" className="inline-flex px-10 py-4 bg-amber-500 text-slate-900 font-bold rounded-full transition-all shadow-lg shadow-amber-500/20 items-center group">
            Reserve Your Place <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">Mastery Through Doing</h2>
            <p className="text-lg text-slate-600 leading-relaxed italic">"We believe the best way to learn unique approaches to life and business is to have the inventor teach you by doing them with you..."</p>
          </div>
          <div className="bg-amber-500 p-8 md:p-12 rounded-3xl border border-amber-600 shadow-2xl text-left transform hover:scale-[1.01] transition-all duration-300 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif">Quantum Alignment</h3>
            <p className="text-slate-900 font-medium text-lg leading-relaxed">Learn how to use Quantum Physics to achieve more of what you want. We don’t get what we want, we get what we are aligned with.</p>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">Quantum thinking and doing elevate you into <span className="text-slate-900 font-bold uppercase tracking-tight">BEING</span> above and beyond the reach of the masses.</p>
        </div>
      </section>

      {/* Systems Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            <div className="flex flex-col justify-center text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Quantum Systems Produce Quantum Leaps</h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">This mastery course teaches proven SYSTEMS, methods, ways, and means that optimize Quantum Thinking...</p>
              <div className="space-y-4">
                {["Demonstrate how you are extraordinary.", "Become attractive to A-level referrals.", "Transcend fiduciary regulations.", "Deliver dazzling multidimensional wisdom."].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 w-5 h-5 text-amber-500" />
                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative"><img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" alt="System" className="w-full h-full object-cover rounded-2xl border border-slate-800" /></div>
          </div>
        </div>
      </section>

      {/* Introductory Principles Video */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-serif">Experience the Introductory Principles</h2>
          <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl mb-12">
            <iframe className={`w-full h-full transition-opacity duration-700 ${isVideoActive ? 'opacity-100' : 'opacity-30'}`} src={`https://www.youtube.com/embed/WS1ccYNZJtU?autoplay=${isVideoActive ? 1 : 0}&rel=0`} title="Welcome Video" allowFullScreen></iframe>
            {!isVideoActive && (
              <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-md bg-slate-900/10">
                <button onClick={() => setIsVideoActive(true)} className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all">
                  <PlayCircle className="w-5 h-5" /> Watch Introduction
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Reserve CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Reserve Your Place</h2>
          <Link to="/purchase" className="inline-block px-12 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-lg">Get Free Resources & Secure My Seat</Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
