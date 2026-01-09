import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, CheckCircle2, Calendar, Lock, PlayCircle, Clock, Info, Quote 
} from 'lucide-react';

const FreeResourcesPage: React.FC = () => {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [lockedVideoId, setLockedVideoId] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  const vimeoPlayerRef = useRef<any>(null);
  const ytPlayerRef = useRef<any>(null);
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const globalSparksVideos = [
    { id: '816394768', title: "Create an Ecosystem for Uncommon Results", type: 'vimeo' },
    { id: '816409798', title: "Do Not Claim You Care, Show You Care", type: 'vimeo' },
    { id: '816414705', title: "Using the Quantum Mind", type: 'vimeo' },
    { id: 'hoI5E1D5c3Y', title: "Think, Do, and BE as the Elephant", type: 'youtube' }
  ];

  const books = [
    { title: "The Wright Exit Strategy", image: "/assets/images/book1.jpg", description: "Wealth: How to Create It, Keep It, and Use It." },
    { title: "Transcendent Thought 1.0", image: "/assets/images/book2.jpg", description: "How to Lead Any Profession, Anywhere in the World." },
    { title: "30-Second Marketing Message", image: "/assets/images/book3.jpg", description: "Transform your industry presence." }
  ];

  const goToReservePage = () => {
    window.location.href = 'https://transcendent-heroic-advisor.vercel.app/#/purchase';
  };

  const handleVideoSelection = (id: string) => {
    if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
    setLockedVideoId(null);
    setActiveVideo(id);
  };

  // 1. Script Loading Logic
  useEffect(() => {
    // Vimeo Script
    if (!document.getElementById('vimeo-script')) {
      const vScript = document.createElement('script');
      vScript.id = 'vimeo-script';
      vScript.src = "https://player.vimeo.com/api/player.js";
      document.body.appendChild(vScript);
    }

    // YouTube Script
    if (!document.getElementById('youtube-script')) {
      const yScript = document.createElement('script');
      yScript.id = 'youtube-script';
      yScript.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(yScript);
    }

    return () => {
      if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
    };
  }, []);

  // 2. Video Initialization Logic
  useEffect(() => {
    if (!activeVideo) return;
    const currentVideo = globalSparksVideos.find(v => v.id === activeVideo);
    if (!currentVideo) return;

    const initVimeo = () => {
      const iframe = document.getElementById(`vimeo-${activeVideo}`) as HTMLIFrameElement;
      if (iframe && (window as any).Vimeo) {
        const player = new (window as any).Vimeo.Player(iframe);
        vimeoPlayerRef.current = player;
        
        player.on('play', () => {
          if (!selectedVideoId) setSelectedVideoId(activeVideo);
        });

        player.on('timeupdate', (data: { seconds: number }) => {
          // If a free video was already chosen and it's NOT this one
          if (selectedVideoId && selectedVideoId !== activeVideo && data.seconds >= 30) {
            player.pause();
            setLockedVideoId(activeVideo);
          }
        });
      }
    };

    const initYouTube = () => {
      const elementId = `yt-${activeVideo}`;
      if ((window as any).YT && (window as any).YT.Player && document.getElementById(elementId)) {
        ytPlayerRef.current = new (window as any).YT.Player(elementId, {
          events: {
            onStateChange: (event: any) => {
              if (event.data === (window as any).YT.PlayerState.PLAYING) {
                // Set initial free choice
                if (!selectedVideoId) setSelectedVideoId(activeVideo);

                // Check time every 500ms
                if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
                checkIntervalRef.current = setInterval(() => {
                  const currentTime = event.target.getCurrentTime();
                  if (selectedVideoId && selectedVideoId !== activeVideo && currentTime >= 30) {
                    event.target.pauseVideo();
                    setLockedVideoId(activeVideo);
                    clearInterval(checkIntervalRef.current!);
                  }
                }, 500);
              }
            },
          },
        });
      } else {
        // Retry if API not ready
        setTimeout(initYouTube, 250);
      }
    };

    // Small delay to ensure React has rendered the iframe into the DOM
    const initTimeout = setTimeout(() => {
      if (currentVideo.type === 'vimeo') initVimeo();
      if (currentVideo.type === 'youtube') initYouTube();
    }, 400);

    return () => {
      clearTimeout(initTimeout);
      if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
    };
  }, [activeVideo, selectedVideoId]);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      {/* ... Hero Section remains the same ... */}
      <section className="bg-slate-900 py-20 text-white text-center">
         <h1 className="text-4xl font-serif mb-4">About Bruce Raymond Wright</h1>
         <p className="text-amber-500 uppercase tracking-widest font-bold">The Architect of Transcendence</p>
      </section>

      <section className="py-24 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-serif uppercase mb-2">Mastery Through Video</h2>
            <p className="text-slate-500 italic">Select one lesson for full access; preview the rest.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {globalSparksVideos.map((v) => (
              <div key={v.id} className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                
                {/* Video Player Display */}
                {activeVideo === v.id && (
                  v.type === 'youtube' ? (
                    <iframe
                      id={`yt-${v.id}`}
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${v.id}?enablejsapi=1&autoplay=1&rel=0&showinfo=0`}
                      title={v.title}
                      frameBorder="0"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <iframe 
                      id={`vimeo-${v.id}`}
                      className="w-full h-full"
                      src={`https://player.vimeo.com/video/${v.id}?autoplay=1&api=1`}
                      title={v.title} 
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    ></iframe>
                  )
                )}

                {/* Cover Overlay */}
                {activeVideo !== v.id && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6">
                    <div className="absolute inset-0 bg-slate-800/60 backdrop-blur-md"></div>
                    <div className="relative z-20">
                      <h4 className="text-white text-2xl font-bold mb-4 font-serif">{v.title}</h4>
                      <button 
                        onClick={() => handleVideoSelection(v.id)}
                        className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-2 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg"
                      >
                        <PlayCircle className="w-5 h-5" /> Play Lesson
                      </button>
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      {selectedVideoId === v.id ? (
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase flex items-center gap-1 shadow-lg"><CheckCircle2 className="w-3 h-3"/> Unlocked</span>
                      ) : selectedVideoId && (
                        <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase flex items-center gap-1 shadow-lg"><Clock className="w-3 h-3"/> Preview</span>
                      ) }
                    </div>
                  </div>
                )}

                {/* Lock Overlay */}
                {lockedVideoId === v.id && (
                  <div className="absolute inset-0 z-30 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8">
                    <Lock className="w-12 h-12 text-amber-500 mb-4" />
                    <h3 className="text-white text-xl font-bold mb-2">Full Lesson Locked</h3>
                    <p className="text-slate-400 text-sm mb-6">You've used your one free full-length lesson. Reserve your place to unlock the library.</p>
                    <button onClick={goToReservePage} className="px-8 py-3 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 transition-all">
                      Unlock Full Access
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ... Rest of components (Library, Footer) remain the same ... */}
    </div>
  );
};

export default FreeResourcesPage;
