import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Lock, 
  PlayCircle, 
  Clock, 
  Info,
  Share2,
  Zap,
  ChevronRight,
  X,
  ChevronLeft,
  Star
} from 'lucide-react';

const QUANTUM_VIDEO_ID = "WS1ccYNZJtU"; 

const FreeResourcesPage: React.FC = () => {
  // --- STATE MANAGEMENT ---
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [lockedVideoId, setLockedVideoId] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  // Quantum Popup & Loader States
  const [isLoadingQuantum, setIsLoadingQuantum] = useState(true);
  const [isQuantumModalOpen, setIsQuantumModalOpen] = useState(false);
  const [isQuantumDocked, setIsQuantumDocked] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false); 
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const [hasDismissedPermanently, setHasDismissedPermanently] = useState(false);
  
  const vimeoPlayerRef = useRef<any>(null);
  const ytPlayerRef = useRef<any>(null);
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // --- DATA ---
  const globalSparksVideos = [
    { id: '816394768', title: "Create an Ecosystem for Uncommon Results", type: 'vimeo' },
    { id: '816409798', title: "Do Not Claim You Care, Show You Care", type: 'vimeo' },
    { id: '816414705', title: "Using the Quantum Mind", type: 'vimeo' },
    { id: 'hoI5E1D5c3Y', title: "Think, Do, and BE as the Elephant", type: 'youtube' }
  ];

  const books = [
    { title: "The Wright Exit Strategy", image: "/assets/images/book1.jpg", description: "Wealth: How to Create It, Keep It, and Use It." },
    { title: "Transcendent Thought 1.0", image: "/assets/images/book2.jpg", description: "How to Lead Any Profession, Anywhere in the World." },
    { title: "30-Second Marketing Message", image: "/assets/images/book3.jpg", description: "Transform your industry presence with this framework." }
  ];

  // --- QUANTUM MECHANISMS ---
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

  const handleShare = async () => {
    const shareData = {
      title: 'The Transcendent Heroic Advisor',
      text: 'Experience the Quantum Thinking Masterclass for high-level advisors.',
      url: window.location.href,
    };
    try {
      if (navigator.share) { await navigator.share(shareData); } 
      else { await navigator.clipboard.writeText(window.location.href); alert("Link copied!"); }
    } catch (err) { console.error(err); }
  };

  const goToReservePage = () => {
    window.location.href = 'https://transcendent-heroic-advisor.vercel.app/#/purchase';
  };

  const handleVideoSelection = (id: string) => {
    if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
    setActiveVideo(id);
    setLockedVideoId(null);
  };

  // --- INITIAL ENTRY & SCRIPT LOADING ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingQuantum(false);
      setIsQuantumModalOpen(true);
    }, 2800);

    if (!document.getElementById('vimeo-api')) {
      const vScript = document.createElement('script');
      vScript.id = 'vimeo-api'; vScript.src = "https://player.vimeo.com/api/player.js";
      vScript.async = true; document.body.appendChild(vScript);
    }
    if (!document.getElementById('youtube-api')) {
      const yScript = document.createElement('script');
      yScript.id = 'youtube-api'; yScript.src = "https://www.youtube.com/iframe_api";
      yScript.async = true; document.body.appendChild(yScript);
    }
    return () => { clearTimeout(timer); if (checkIntervalRef.current) clearInterval(checkIntervalRef.current); };
  }, []);

  // Player Init & Lock Logic
  useEffect(() => {
    if (!activeVideo) return;
    const currentVideo = globalSparksVideos.find(v => v.id === activeVideo);
    if (!currentVideo) return;

    const initVimeo = () => {
      const iframe = document.getElementById(`vimeo-${activeVideo}`) as HTMLIFrameElement;
      if (iframe && (window as any).Vimeo) {
        const player = new (window as any).Vimeo.Player(iframe);
        vimeoPlayerRef.current = player;
        player.on('play', () => { if (!selectedVideoId) setSelectedVideoId(activeVideo); });
        player.on('timeupdate', (data: { seconds: number }) => {
          if (selectedVideoId && selectedVideoId !== activeVideo && data.seconds >= 30) {
            player.pause(); setLockedVideoId(activeVideo);
          }
        });
      }
    };

    const initYouTube = () => {
      if ((window as any).YT && (window as any).YT.Player && document.getElementById(`yt-${activeVideo}`)) {
        ytPlayerRef.current = new (window as any).YT.Player(`yt-${activeVideo}`, {
          events: {
            'onStateChange': (event: any) => {
              if (event.data === (window as any).YT.PlayerState.PLAYING) {
                if (!selectedVideoId) setSelectedVideoId(activeVideo);
                if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
                checkIntervalRef.current = setInterval(() => {
                  const currentTime = event.target.getCurrentTime();
                  if (selectedVideoId && selectedVideoId !== activeVideo && currentTime >= 30) {
                    event.target.pauseVideo(); setLockedVideoId(activeVideo);
                    if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
                  }
                }, 500);
              }
            }
          }
        });
      }
    };

    const timer = setTimeout(() => {
      if (currentVideo.type === 'vimeo') initVimeo();
      if (currentVideo.type === 'youtube') initYouTube();
    }, 400);

    return () => { clearTimeout(timer); if (checkIntervalRef.current) clearInterval(checkIntervalRef.current); };
  }, [activeVideo, selectedVideoId]);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 overflow-x-hidden relative">
      
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
          <h2 className="text-amber-500 font-bold tracking-[0.4em] uppercase text-sm">Initializing Vault</h2>
        </div>
      )}

      {/* --- FLOATING QUANTUM OVERLAY --- */}
      {isQuantumModalOpen && !hasDismissedPermanently && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-8">
          <div className={`absolute inset-0 bg-slate-950/90 backdrop-blur-xl transition-opacity duration-700 ${(isAnimatingOut || isAnimatingIn) ? 'opacity-0' : 'opacity-100'}`} onClick={handleDockVideo}></div>
          <div className={`relative w-full max-w-5xl aspect-video bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(245,158,11,0.3)] border border-amber-500/30 transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) z-50 ${isAnimatingOut || isAnimatingIn ? 'translate-x-[150vw]' : 'translate-x-0'}`}>
            <div className="absolute top-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-b from-black/95 to-transparent z-[60] flex justify-between items-start">
              <div className="pr-10">
                <span className="flex items-center gap-2 text-amber-500 font-bold text-[10px] uppercase tracking-widest mb-1"><Star className="w-3 h-3 fill-amber-500" /> Exclusive Preview</span>
                <h3 className="text-white text-base md:text-2xl font-bold font-serif leading-tight">Becoming A Transcendent Heroic Advisor</h3>
              </div>
              <button onClick={handleDockVideo} className="bg-white/10 hover:bg-amber-500 hover:text-slate-900 text-white p-2 rounded-full transition-all group active:scale-90"><X className="w-5 h-5 md:w-6 md:h-6" /></button>
            </div>
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${QUANTUM_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`} title="Quantum Masterclass" allow="autoplay; encrypted-media; fullscreen" allowFullScreen></iframe>
          </div>
        </div>
      )}

      {/* --- SIDEBAR DOCK BUTTON --- */}
      {isQuantumDocked && !hasDismissedPermanently && (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[110] flex items-center animate-in slide-in-from-right duration-500 ease-out">
          <div className="relative flex flex-col items-center">
            <button onClick={() => setHasDismissedPermanently(true)} className="absolute -top-10 right-2 p-1.5 bg-slate-900 text-slate-500 hover:text-white rounded-full border border-slate-700 shadow-xl transition-colors"><X className="w-4 h-4" /></button>
            <button onClick={handleResumeVideo} className="bg-amber-500 hover:bg-amber-400 text-slate-900 py-10 px-4 rounded-l-2xl font-black uppercase tracking-tighter [writing-mode:vertical-lr] flex items-center gap-3 shadow-[-15px_0_35px_rgba(245,158,11,0.2)] transition-all group">
              <ChevronLeft className="w-5 h-5 mb-2 group-hover:-translate-x-1 transition-transform" />
              <span className="flex items-center gap-2 text-sm">Quantum Lesson <Zap className="w-4 h-4 fill-slate-900 mt-2" /></span>
            </button>
          </div>
        </div>
      )}

      {/* 1. HERO & BIO */}
      <section className="bg-slate-900 py-20 lg:py-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] max-w-sm mx-auto bg-slate-800 rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl">
                <img src="/assets/images/bruce.jpg" alt="Bruce Wright" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 p-6 text-center">
                    <p className="text-amber-500 font-bold uppercase tracking-widest italic text-[10px]">The Architect of Transcendence</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <span className="flex items-center gap-2 text-amber-500 font-bold uppercase text-xs mb-4 tracking-widest"><Award className="w-5 h-5" /> Visionary • Inventor • Consigliere</span>
              <h1 className="text-4xl md:text-6xl font-bold font-serif mb-8 tracking-tight">About Bruce Raymond Wright</h1>
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed mb-10">
                <p className="font-semibold text-white text-xl">Bruce Raymond Wright isn’t just an advisor; he is a serial innovator and the inventor of Macro Strategic Planning®.</p>
                <p>Decades ago, Bruce realized the financial world was built on "minimum standards." He chose a different path: <span className="text-amber-400 font-bold italic">Transcendence.</span></p>
              </div>
              <button onClick={goToReservePage} className="inline-flex items-center px-10 py-2.5 bg-amber-500 text-slate-900 text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-amber-400 transition-all shadow-lg group">
                Reserve Your Place <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VAULT INFO BAR */}
      <section className="py-12 bg-slate-50 border-y border-slate-200 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-4 bg-amber-50 border border-amber-200 p-6 rounded-2xl shadow-sm max-w-4xl mx-auto">
            <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-amber-900 font-bold text-lg">Your Resource Vault</h3>
              <p className="text-amber-800 leading-relaxed text-sm">Your first selected video is available for full viewing. <span className="font-bold">Subsequent lessons</span> are preview-only until you reserve your seat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BOOK LIBRARY */}
      <section className="py-24 bg-white px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-16 font-serif uppercase tracking-[0.3em]">The Professional Library</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {books.map((book, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[3/4] mb-6 bg-slate-50 rounded-xl shadow-lg group-hover:shadow-2xl transition-all p-4 border border-slate-100">
                  <img src={book.image} alt={book.title} className="max-h-full mx-auto object-contain" />
                </div>
                <h3 className="font-bold text-lg mb-2">{book.title}</h3>
                <p className="text-slate-500 text-sm px-6">{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VIDEO GRID & HIDDEN LINK LOGIC */}
      <section className="py-24 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-serif uppercase tracking-[0.3em] mb-16">Mastery Through Video</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {globalSparksVideos.map((v) => (
              <div key={v.id} className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                {activeVideo === v.id && (
                  v.type === 'youtube' ? (
                    <iframe id={`yt-${v.id}`} className="w-full h-full" src={`https://www.youtube.com/embed/${v.id}?enablejsapi=1&autoplay=1&rel=0`} allow="autoplay; encrypted-media" allowFullScreen></iframe>
                  ) : (
                    <iframe id={`vimeo-${v.id}`} className="w-full h-full" src={`https://player.vimeo.com/video/${v.id}?autoplay=1`} allow="autoplay; fullscreen" allowFullScreen></iframe>
                  )
                )}
                {activeVideo !== v.id && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 text-center">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-500"></div>
                    <div className="relative z-20">
                      <h4 className="text-white text-xl font-bold mb-6 font-serif">{v.title}</h4>
                      <button onClick={() => handleVideoSelection(v.id)} className="bg-amber-500 text-slate-900 px-8 py-2.5 rounded-full font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-amber-400 transition-all shadow-xl">
                        <PlayCircle className="w-4 h-4" /> Play Lesson
                      </button>
                    </div>
                    <div className="absolute top-4 right-4">
                      {selectedVideoId === v.id ? (
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-[9px] font-bold uppercase flex items-center gap-1 shadow-lg border border-white/20"><CheckCircle2 className="w-3 h-3"/> Unlocked</span>
                      ) : selectedVideoId && (
                        <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-[9px] font-bold uppercase flex items-center gap-1 shadow-lg"><Clock className="w-3 h-3"/> Preview</span>
                      )}
                    </div>
                  </div>
                )}
                {lockedVideoId === v.id && (
                  <div className="absolute inset-0 z-30 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-500">
                    <Lock className="w-10 h-10 text-amber-500 mb-4" />
                    <h3 className="text-white text-lg font-bold mb-2 font-serif uppercase tracking-widest">Full Lesson Locked</h3>
                    <p className="text-slate-400 text-xs mb-6 max-w-xs">Reserve your place to unlock the full library.</p>
                    <button onClick={goToReservePage} className="px-8 py-2.5 bg-amber-500 text-slate-900 font-black uppercase text-[10px] tracking-widest rounded-full hover:bg-amber-400 transition-all shadow-xl border border-amber-600/20">Unlock Full Access</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <section className="py-24 bg-slate-900 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 font-serif uppercase tracking-[0.2em]">Ready to Ascend?</h2>
          <button onClick={goToReservePage} className="px-12 py-2.5 bg-amber-500 text-slate-900 text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-amber-400 transition-all shadow-2xl mb-12 border border-amber-600/20">Register & Unlock Vault</button>
          <div className="text-slate-500 text-[10px] uppercase tracking-widest tracking-widest">© {new Date().getFullYear()} The Transcendent Heroic Advisor. All Rights Reserved.</div>
        </div>
      </section>
    </div>
  );
};

export default FreeResourcesPage;
