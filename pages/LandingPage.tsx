import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, CheckCircle2, Mail, Gift, Phone, PlayCircle, Calendar, X, Zap, ChevronLeft, Share } from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isVideoActive, setIsVideoActive] = useState(false);

  // --- QUANTUM VIDEO SUITE LOGIC ---
  const [showPulse, setShowPulse] = useState(true); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isDocked, setIsDocked] = useState(false); 
  const [hasStartedFloatingVideo, setHasStartedFloatingVideo] = useState(false);
  
  // Track video progress (in seconds)
  const [videoTime, setVideoTime] = useState(0);

  // --- SHARE LOGIC ---
  const handleShare = async () => {
    const shareData = {
      title: 'The Transcendent Heroic Advisor',
      text: 'Experience the Quantum Mind Mastery Course for Professionals.',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.log('Share failed', err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPulse(false);
      setIsModalOpen(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseVideo = () => {
    setIsModalOpen(false);
    setIsDocked(true);
  };

  const handleRestoreVideo = () => {
    setIsDocked(false);
    setIsModalOpen(true);
  };

  const handlePermanentDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDocked(false);
    setHasStartedFloatingVideo(false);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* --- GOLDEN SHARE ARROW --- */}
      <div className="fixed top-6 right-6 z-[100] flex flex-col items-center gap-1 group">
        <button 
          onClick={handleShare}
          className="p-3 bg-slate-900/80 backdrop-blur-md border border-amber-500/30 rounded-full text-amber-500 hover:bg-amber-500 hover:text-slate-900 transition-all shadow-lg shadow-amber-500/10 active:scale-90"
        >
          <Share className="w-5 h-5" />
        </button>
        <span className="text-[9px] font-black uppercase tracking-widest text-amber-500/80 opacity-0 group-hover:opacity-100 transition-opacity">
          Share
        </span>
      </div>
      
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

      {/* --- PHASE 2: FLOATING VIDEO POPUP (THE APPARATUS) --- */}
      <div className={`fixed inset-0 z-[150] flex items-center justify-center p-4 transition-all duration-700 ${isModalOpen ? 'bg-slate-900/95 backdrop-blur-sm pointer-events-auto' : 'bg-transparent backdrop-blur-none pointer-events-none'}`}>
        <div 
          className={`relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-amber-500/20 transition-all duration-700 ease-in-out
            ${isModalOpen 
              ? 'translate-x-0 opacity-100 scale-100' 
              : 'translate-x-[110%] md:translate-x-[120%] opacity-0 scale-95'}`}
        >
          {/* VIDEO TITLE OVERLAY */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 pointer-events-none">
            <span className="text-white/90 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] drop-shadow-md bg-slate-900/60 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
              The Transcendent Heroic Advisor
            </span>
          </div>

          <button 
            onClick={handleCloseVideo}
            className="absolute top-4 right-4 z-40 p-2 bg-amber-500 text-slate-900 rounded-full hover:scale-110 transition-transform shadow-lg pointer-events-auto"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          {/* HEROIC POSTER COVER */}
          {!hasStartedFloatingVideo ? (
            <div 
              className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-slate-900/90 cursor-pointer group"
              onClick={() => setHasStartedFloatingVideo(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90"></div>
              <h2 className="relative z-10 text-white text-2xl md:text-5xl font-bold text-center px-8 mb-10 tracking-tight leading-tight drop-shadow-2xl">
                Learn How to Become a <br/>
                <span className="text-amber-500 uppercase tracking-widest text-lg md:text-3xl">Transcendent Heroic Advisor</span>
              </h2>
              <div className="relative z-10 flex flex-col items-center gap-4 group-hover:scale-110 transition-transform duration-500">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-amber-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.5)]">
                  <PlayCircle className="w-10 h-10 md:w-12 md:h-12 text-slate-900 fill-slate-900" />
                </div>
                <span className="text-amber-500 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">Begin Your Journey</span>
              </div>
            </div>
          ) : (
            isModalOpen && (
              <iframe 
                className="w-full h-full" 
                src={`https://www.youtube.com/embed/9mxOlmaUyXA?si=_8yRGElGNOU_6Asc&autoplay=1&modestbranding=1&rel=0&start=${videoTime}`} 
                title="The Transcendent Heroic Advisor" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen 
              ></iframe>
            )
          )}
        </div>
      </div>

      {/* --- PHASE 3 & 4: GOLD DOCK TAB WITH EXIT --- */}
      <div className={`fixed right-0 top-1/2 -translate-y-1/2 z-[140] flex items-start transition-all duration-700 ease-in-out
          ${isDocked && !isModalOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
        
        <button 
          onClick={handlePermanentDismiss}
          className="bg-slate-900 text-amber-500 p-1.5 rounded-full -mr-3 -mt-3 relative z-10 border border-amber-500/40 shadow-xl hover:bg-amber-500 hover:text-slate-900 transition-all active:scale-75"
        >
          <X className="w-3 h-3" />
        </button>

        <button 
          onClick={handleRestoreVideo} 
          className="bg-amber-500 hover:bg-amber-400 text-slate-900 py-8 md:py-10 px-3 rounded-l-2xl font-bold flex flex-col items-center gap-3 shadow-[-10px_0_30px_rgba(0,0,0,0.3)] transition-all group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="[writing-mode:vertical-lr] tracking-widest uppercase text-[10px] font-black">
            Quantum Lesson
          </span>
          <PlayCircle className="w-5 h-5 mt-2" />
        </button>
      </div>

      {/* --- PAGE CONTENT --- */}
      <div className="animate-in fade-in duration-700">
        <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920" 
              className="w-full h-full object-cover opacity-20 grayscale"
              alt="Quantum Background"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900 to-slate-900"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-amber-400 uppercase border border-amber-400/30 rounded-full bg-amber-400/5">
              Launching Spring 2026
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
              The Transcendent <span className="gradient-gold">Heroic Advisor</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed mb-10">
              Welcome to our Quantum Mind Mastery Course for advisors and their associates. Each lesson goes beyond theory to SHOW you exactly how to implement Quantum Mind solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/purchase" className="w-full sm:w-auto px-10 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-full transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center group">
                Reserve Your Place <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">Mastery Through Doing</h2>
              <p className="text-lg text-slate-600 leading-relaxed italic">
                "We believe the best way to learn unique approaches to life and business is to have the inventor teach you by doing them with you."
              </p>
            </div>
            
            <div className="bg-amber-500 p-8 md:p-12 rounded-3xl border border-amber-600 shadow-2xl text-left transform hover:scale-[1.01] transition-all duration-300 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif">Quantum Alignment</h3>
              <p className="text-slate-900 font-medium text-lg leading-relaxed">
                Learn how to use Quantum Physics to achieve more of what you want. We don’t get what we want, we get what we are aligned with.
              </p>
            </div>
          </div>
        </section>

        {/* SWAPPED VIDEO SECTION (Bottom) */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-serif">
              Experience the Introductory Principles
            </h2>
            <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
              <iframe 
                className={`w-full h-full transition-opacity duration-700 ${isVideoActive ? 'opacity-100' : 'opacity-30'}`}
                src={`https://www.youtube.com/embed/WS1ccYNZJtU?si=gEKaMXAA_M8UQyvk&autoplay=${isVideoActive ? 1 : 0}`}
                title="Introduction Video"
                allowFullScreen
              ></iframe>
              {!isVideoActive && (
                <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-md bg-slate-900/10">
                  <button onClick={() => setIsVideoActive(true)} className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-3 rounded-full font-bold flex items-center gap-2">
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
