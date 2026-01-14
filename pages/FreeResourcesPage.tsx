import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  CheckCircle2,
  Calendar,
  Lock,
  PlayCircle,
  Clock,
  Info,
  Star
} from 'lucide-react';

const FreeResourcesPage: React.FC = () => {
  // --- STATE MANAGEMENT ---
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [lockedVideoId, setLockedVideoId] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  const vimeoPlayerRef = useRef<any>(null);
  const ytPlayerRef = useRef<any>(null);
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // --- DATA ---
  const globalSparksVideos = [
    { 
      id: 'hoI5E1D5c3Y', 
      title: "Think, Do, and BE as the Elephant", 
      type: 'youtube',
      featured: true 
    },
    { 
      id: '816394768', 
      title: "Create an Ecosystem for Uncommon Results", 
      type: 'vimeo' 
    },
    { 
      id: '816409798', 
      title: "Do Not Claim You Care, Show You Care", 
      type: 'vimeo' 
    },
    { 
      id: '816414705', 
      title: "Using the Quantum Mind", 
      type: 'vimeo' 
    }
  ];

  const books = [
    {
      title: "The Wright Exit Strategy",
      image: "/assets/images/book1.jpg",
      description: "Wealth: How to Create It, Keep It, and Use It. A masterwork on fiduciary excellence."
    },
    {
      title: "Transcendent Thought 1.0",
      image: "/assets/images/book2.jpg",
      description: "How to Lead Any Profession, Anywhere in the World. The definitive guide to professional dominance."
    },
    {
      title: "30-Second Marketing Message",
      image: "/assets/images/book3.jpg",
      description: "Transform your industry presence with this magnetic communication framework."
    }
  ];

  // --- NAVIGATION ---
  const goToReservePage = () => {
    window.location.href = 'https://transcendent-heroic-advisor.vercel.app/#/purchase';
  };

  const handleVideoSelection = (id: string) => {
    if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
    setActiveVideo(id);
    setLockedVideoId(null);
  };

  // --- SCRIPT LOADING ---
  useEffect(() => {
    if (!document.getElementById('vimeo-api')) {
      const vScript = document.createElement('script');
      vScript.id = 'vimeo-api';
      vScript.src = "https://player.vimeo.com/api/player.js";
      vScript.async = true;
      document.body.appendChild(vScript);
    }

    if (!document.getElementById('youtube-api')) {
      const yScript = document.createElement('script');
      yScript.id = 'youtube-api';
      yScript.src = "https://www.youtube.com/iframe_api";
      yScript.async = true;
      document.body.appendChild(yScript);
    }

    return () => {
      if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
    };
  }, []);

  // --- PLAYER INITIALIZATION & LOCK LOGIC ---
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
            player.pause();
            setLockedVideoId(activeVideo);
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
                    event.target.pauseVideo();
                    setLockedVideoId(activeVideo);
                    if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
                  }
                }, 500);
              }
            }
          }
        });
      } else {
        setTimeout(initYouTube, 300);
      }
    };

    const timer = setTimeout(() => {
      if (currentVideo.type === 'vimeo') initVimeo();
      if (currentVideo.type === 'youtube') initYouTube();
    }, 400);

    return () => {
      clearTimeout(timer);
      if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
    };
  }, [activeVideo, selectedVideoId]);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="bg-slate-900 py-20 lg:py-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] max-w-sm mx-auto bg-slate-800 rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl">
                <img src="/assets/images/bruce.jpg" alt="Bruce Wright" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 p-6 text-center">
                    <p className="text-amber-500 font-bold uppercase tracking-widest italic text-xs">The Architect of Transcendence</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <span className="flex items-center gap-2 text-amber-500 font-bold uppercase text-sm mb-4">
                <Award className="w-5 h-5" /> Visionary • Inventor • Consigliere
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-8">About Bruce Raymond Wright</h1>
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p className="font-semibold text-white text-xl">Bruce Raymond Wright isn’t just an advisor; he is a serial innovator and the inventor of the world’s first Macro Strategic Planning® methodology.</p>
                <p>Decades ago, Bruce realized the financial world was built on "minimum standards" and "conflicted interests." He chose a different path: <span className="text-amber-400 font-bold italic">Transcendence.</span></p>
                <p>Bruce is the ultimate <span className="italic text-amber-500 font-bold">Consigliere</span> for discerning minds.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BOOK LIBRARY */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 font-serif uppercase tracking-widest">The Professional Library</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {books.map((book, i) => (
              <div key={i} className="text-center group">
                <div className="relative aspect-[3/4] mb-6 bg-slate-50 rounded-lg shadow-lg group-hover:shadow-xl transition-all p-4">
                  <img src={book.image} alt={book.title} className="max-h-full mx-auto object-contain" />
                </div>
                <h3 className="font-bold text-lg mb-2">{book.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VAULT SECTION (INSTRUCTIONS MOVED HERE) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Instructions Box: Now contextually linked to the videos below */}
          <div className="mb-12 flex items-start gap-4 bg-white border border-amber-200 p-8 rounded-3xl shadow-sm max-w-4xl mx-auto">
            <Info className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-slate-900 font-bold text-xl mb-2 font-serif uppercase tracking-tight">Welcome to your Resource Vault</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Your first selected video is available for full viewing. 
                <span className="text-amber-600 font-bold"> Subsequent lessons</span> are preview-only until you reserve your seat.
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif uppercase tracking-widest mb-2">Mastery Through Video</h2>
            <p className="text-slate-500 font-medium italic">Select one lesson for full access; preview the rest.</p>
          </div>
          
          {/* 4. VIDEO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {globalSparksVideos.map((v) => (
              <div 
                key={v.id} 
                className={`relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 ${v.featured && activeVideo !== v.id ? 'border-amber-500/50' : 'border-white'}`}
              >
                {activeVideo === v.id && (
                  v.type === 'youtube' ? (
                    <iframe
                      id={`yt-${v.id}`}
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${v.id}?enablejsapi=1&autoplay=1&rel=0`}
                      title={v.title}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <iframe 
                      id={`vimeo-${v.id}`}
                      className="w-full h-full"
                      src={`https://player.vimeo.com/video/${v.id}?autoplay=1`}
                      title={v.title} 
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    ></iframe>
                  )
                )}

                {activeVideo !== v.id && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 text-center">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl"></div>
                    <div className="relative z-20 flex flex-col items-center">
                      {v.featured && (
                        <span className="flex items-center gap-1 text-amber-500 font-bold text-[10px] uppercase tracking-tighter mb-2 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                          <Star className="w-3 h-3 fill-amber-500" /> Essential Lesson
                        </span>
                      )}
                      <h4 className="text-white text-2xl font-bold mb-6 font-serif">{v.title}</h4>
                      <button 
                        onClick={() => handleVideoSelection(v.id)}
                        className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg"
                      >
                        <PlayCircle className="w-5 h-5" /> Play Lesson
                      </button>
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      {selectedVideoId === v.id ? (
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase flex items-center gap-1 shadow-lg">
                          <CheckCircle2 className="w-3 h-3"/> Unlocked
                        </span>
                      ) : selectedVideoId && (
                        <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase flex items-center gap-1 shadow-lg">
                          <Clock className="w-3 h-3"/> Preview
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {lockedVideoId === v.id && (
                  <div className="absolute inset-0 z-30 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8">
                    <Lock className="w-12 h-12 text-amber-500 mb-4" />
                    <h3 className="text-white text-xl font-bold mb-2 font-serif">Full Lesson Locked</h3>
                    <p className="text-slate-400 text-sm mb-6 max-w-xs">Reserve your place to unlock the full library.</p>
                    <button onClick={goToReservePage} className="px-8 py-3 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 transition-all shadow-xl">
                      Unlock Full Access
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL FOOTER */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 font-serif">Reserve Your Place</h2>
          <button onClick={goToReservePage} className="px-10 py-4 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 transition-all shadow-xl mb-12">
            Register & Unlock Vault
          </button>
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} The Transcendent Heroic Advisor. All Rights Reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeResourcesPage;
