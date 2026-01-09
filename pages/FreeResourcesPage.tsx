import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  CheckCircle2,
  Calendar,
  Lock,
  PlayCircle,
  Clock,
  Info,
  Quote
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
    { id: '816394768', title: "Create an Ecosystem for Uncommon Results", type: 'vimeo' },
    { id: '816409798', title: "Do Not Claim You Care, Show You Care", type: 'vimeo' },
    { id: '816414705', title: "Using the Quantum Mind", type: 'vimeo' },
    { id: 'hoI5E1D5c3Y', title: "Think, Do, and BE as the Elephant", type: 'youtube' }
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
    // Load Vimeo API
    if (!document.getElementById('vimeo-api')) {
      const vScript = document.createElement('script');
      vScript.id = 'vimeo-api';
      vScript.src = "https://player.vimeo.com/api/player.js";
      vScript.async = true;
      document.body.appendChild(vScript);
    }

    // Load YouTube API
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
        setTimeout(initYouTube, 300); // Retry if YT isn't ready
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
                    <p className="text-amber-500 font-bold uppercase tracking-widest italic">The Architect of Transcendence</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <span className="flex items-center gap-2 text-amber-500 font-bold uppercase text-sm mb-4">
                <Award className="w-5 h-5" /> Visionary • Inventor • Consigliere
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-8">About Bruce Raymond Wright</h1>
              <div className="space-y-8 text-slate-300 text-lg leading-relaxed">
                <p className="font-semibold text-white text-xl">Bruce Raymond Wright isn’t just an advisor; he is a serial innovator and the inventor of the world’s first Macro Strategic Planning® methodology.</p>
                <p>Decades ago, Bruce realized the financial world was built on "minimum standards" and "conflicted interests." He chose a different path: <span className="text-amber-400 font-bold italic">Transcendence.</span></p>
                <p>After a meteoric rise at Associated Planners, Bruce liquidated his positions to build a holistic, "in-the-trenches" system designed for tangible, massive results.</p>
                <p>Bruce is the ultimate <span className="italic text-amber-500 font-bold">Consigliere</span> for discerning minds.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VAULT HEADER */}
      <section className="py-20 bg-slate-50 border-y border-slate-200 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex items-start gap-4 bg-amber-50 border border-amber-200 p-6 rounded-2xl shadow-sm max-w-4xl">
            <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-amber-900 font-bold text-lg">Welcome to your Resource Vault</h3>
              <p className="text-amber-800 leading-relaxed">
                Your first selected video is available for full viewing. 
                <span className="font-bold"> Please note:</span> Subsequent lessons are currently locked to a 30-second "Executive Summary" until you reserve your seat.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-6 text-slate-900 leading-tight">
              When you join the waitlist, you receive immediate access to:
            </h2>
            <button onClick={goToReservePage} className="px-6 py-3 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-all shadow-md text-sm uppercase tracking-wide">
              Get My Free Resources
            </button>
          </div>
        </div>
      </section>

      {/* 3. BOOK LIBRARY */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 font-serif uppercase tracking-widest">The Professional Library</h2>
          <div className
