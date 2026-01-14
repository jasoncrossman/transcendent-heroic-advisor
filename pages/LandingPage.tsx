import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, CheckCircle2, PlayCircle, X, Zap, ChevronLeft, Share } from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  
  // --- STATE MANAGEMENT ---
  const [showPulse, setShowPulse] = useState(true); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isDocked, setIsDocked] = useState(false); 
  const [isMasterVideoPlaying, setIsMasterVideoPlaying] = useState(false); // Controls the Poster vs Video
  const [isVideoActive, setIsVideoActive] = useState(false); // Bottom Intro Video

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
    } catch (err) { console.log('Share failed', err); }
  };

  // Initial Sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPulse(false);
      setIsModalOpen(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  // Master Video Handlers
  const handleCloseVideo = () => {
    setIsModalOpen(false);
    setIsDocked(true);
    setIsMasterVideoPlaying(false); // Reset to poster when hidden
  };

  const handleRestoreVideo = () => {
    setIsVideoActive(false); // Silence bottom video
    setIsDocked(false);
    setIsModalOpen(true);
  };

  const handlePermanentDismiss = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setIsDocked(false);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950">

      {/* --- GOLDEN SHARE ARROW --- */}
      <div className="fixed top-6 right-6 z-[100] flex flex-col items-center gap-1 group">
        <button onClick={handleShare} className="p-3 bg-slate-900/80 backdrop-blur-md border border-amber-500/30 rounded-full text-amber-500 hover:bg-amber-500 hover:text-slate-900 transition-all shadow-lg active:scale-90">
          <Share className="w-5 h-5" />
        </button>
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

      {/* --- PHASE 2: MASTER VIDEO APPARATUS --- */}
      <div className={`fixed inset-0 z-[150] flex items-center justify-center p-4 transition-all duration-700 ${isModalOpen ? 'bg-slate-900/95 backdrop-blur-sm pointer-events-auto' : 'bg-transparent backdrop-blur-none pointer-events-none'}`}>
        <div className={`relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-amber-500/20 transition-all duration-700 ease-in-out
            ${isModalOpen ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-[120%] opacity-0 scale-95'}`}>
          
          <button onClick={handleCloseVideo} className="absolute top-4 right-4 z-30 p-2 bg-amber-500 text-slate-900 rounded-full hover:scale-110 transition-transform shadow-lg">
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {!isMasterVideoPlaying ? (
            /* HEROIC POSTER OVERLAY */
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-900/40 backdrop-blur-md group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
              <h2 className="relative z-10 text-white text-2xl md:text-4xl font-bold text-center px-6 mb-8 tracking-tight drop-shadow-2xl">
                Learn How to Become a <br/>
                <span className="text-amber-500 uppercase tracking-widest text-lg md:text-2xl">Transcendent Heroic Advisor</span>
              </h2>
              <button 
                onClick={() => setIsMasterVideoPlaying(true)}
                className="relative z-10 flex flex-col items-center gap-4 group transition-transform hover:scale-105"
              >
                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.5)] group-hover:bg-amber-400 transition-colors">
                  <PlayCircle className="w-10 h-10 text-slate-900" />
                </div>
                <span className="text-amber-500 font-black uppercase tracking-[0.4em] text-[10px]">Begin Your Journey</span>
              </button>
            </div>
          ) : (
            /* THE VIDEO */
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/9mxOlmaUyXA?si=_8yRGElGNOU_6Asc&autoplay=1&modestbranding=1&rel=0"
              title="The Transcendent Heroic Advisor"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>

      {/* --- PHASE 3 & 4: GOLD DOCK TAB WITH EXIT --- */}
      <div className={`fixed right-0 top-1/2 -translate-y-1/2 z-[140] flex items-start transition-all duration-700 ease-in-out
          ${isDocked && !isModalOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
        
        <button 
          onClick={handlePermanentDismiss}
          className="bg-amber-600/20 hover:bg-amber-500 text-amber-500 hover:text-slate-900 p-1 rounded-full -mr-2 -mt-2 relative z-10 border border-amber-500/30 backdrop-blur-md transition-all"
        >
          <X className="w-3 h-3" />
        </button>

        <button onClick={handleRestoreVideo} className="bg-amber-500 hover:bg-amber-400 text-slate-900 py-10 px-3 rounded-l-2xl font-bold flex flex-col items-center gap-3 shadow-[-10px_0_30px_rgba(0,0,0,0.3)] group">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="[writing-mode:vertical-lr] tracking-widest uppercase text-[10px] font-black">Quantum Lesson</span>
          <PlayCircle className="w-5 h-5 mt-2" />
        </button>
      </div>

      {/* --- CONTENT --- */}
      <div className="animate-in fade-in duration-700">
        <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden min-h-[80vh] flex items-center">
          <div className="absolute inset-0 z-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover grayscale" alt="Background"/>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
             <span className="px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-amber-400 uppercase border border-amber-400/30 rounded-full bg-amber-400/5">Launching Spring 2026</span>
             <h1 className="text-4xl md:text-7xl font-bold text-white mb-8">The Transcendent <span className="text-amber-500">Heroic Advisor</span></h1>
             <p className="max-w-2xl mx-auto text-slate-300 text-lg mb-10">Master the Quantum Mind solutions that make you deeply trusted by high-net-worth individuals.</p>
          </div>
        </section>

        {/* Intro Video Section */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 font-serif">Experience the Introductory Principles</h2>
            <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
              <iframe 
                className={`w-full h-full transition-opacity duration-700 ${isVideoActive ? 'opacity-100' : 'opacity-30'}`}
                src={`https://www.youtube.com/embed/9mxOlmaUyXA?si=_8yRGElGNOU_6Asc&autoplay=${isVideoActive ? 1 : 0}&modestbranding=1`}
                allowFullScreen
              ></iframe>
              {!isVideoActive && (
                <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-md bg-slate-900/10">
                  <button onClick={() => { handleCloseVideo(); setIsVideoActive(true); }} className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all hover:scale-105">
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
