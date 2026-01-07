import React, { useState, useEffect } from 'react';
import { 
  Award, 
  Star, 
  Zap, 
  BookOpen, 
  Phone, 
  Video, 
  CheckCircle2,
  Calendar,
  Lock,
  PlayCircle,
  Clock
} from 'lucide-react';

const FreeResourcesPage: React.FC = () => {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [lockedVideoId, setLockedVideoId] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const goToReservePage = () => {
    window.location.href = 'https://transcendent-heroic-advisor.vercel.app/#/purchase';
  };

  const books = [
    {
      title: "The Wright Exit Strategy",
      image: "/assets/images/book1.jpg",
      description: "Wealth: How to Create It, Keep It, and Use It. A masterwork on fiduciary excellence."
    },
    {
      title: "Transcendent Thought and Market Leadership 1.0",
      image: "/assets/images/book2.jpg",
      description: "How to Lead Any Profession, Anywhere in the World. The definitive guide to professional dominance."
    },
    {
      title: "Ten Steps to Creating Your Dynamic and Magnetic 30-Second Marketing Message",
      image: "/assets/images/book3.jpg",
      description: "Transform your industry presence with this magnetic communication framework."
    }
  ];

  const globalSparksVideos = [
    { id: '816394768', title: "Create an Ecosystem for Uncommon Results" },
    { id: '816409798', title: "Do Not Claim You Care, Show You Care" },
    { id: '816414705', title: "Using the Quantum Mind" },
    { id: 'elephant', title: "Think, Do, and BE as the Elephant", comingSoon: true }
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      globalSparksVideos.forEach(video => {
        if (video.comingSoon) return;
        const iframe = document.getElementById(`vimeo-${video.id}`) as HTMLIFrameElement;
        if (iframe && (window as any).Vimeo) {
          const player = new (window as any).Vimeo.Player(iframe);
          
          player.on('play', () => {
            if (!selectedVideoId) setSelectedVideoId(video.id);
          });

          player.on('timeupdate', (data: { seconds: number }) => {
            if (selectedVideoId && selectedVideoId !== video.id && data.seconds >= 30) {
              player.pause();
              setLockedVideoId(video.id);
            }
          });
        }
      });
    };
    return () => { if (document.body.contains(script)) document.body.removeChild(script); };
  }, [selectedVideoId, activeVideo]);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      {/* 1. Bio Section */}
      <section className="bg-slate-900 py-20 lg:py-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 relative group">
              <div className="relative aspect-[3/4] max-w-sm mx-auto bg-slate-800 rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl">
                <img 
                  src="/assets/images/bruce.jpg" 
                  alt="Bruce Wright" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                />
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
              <div className="flex flex-wrap gap-4 mt-12">
                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center gap-3">
                  <Star className="text-amber-500 w-5 h-5 fill-current" />
                  <span className="text-sm font-semibold uppercase tracking-tight">100-Year Legacy Architect</span>
                </div>
                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center gap-3">
                  <Zap className="text-amber-500 w-5 h-5" />
                  <span className="text-sm font-semibold uppercase tracking-tight">Conflict-Free Innovator</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Simplified Waitlist Resources Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-6 text-slate-900 leading-tight">
              When you join the waitlist, you receive immediate access to:
            </h2>
            <button onClick={goToReservePage} className="px-6 py-3 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-all shadow-md text-sm uppercase tracking-wide">
              Get My Free Resources
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <BookOpen className="w-8 h-8 text-amber-600 mb-4 mx-auto" />
              <h3 className="font-bold mb-2">The Professional Library</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <Phone className="w-8 h-8 text-amber-600 mb-4 mx-auto" />
              <h3 className="font-bold mb-2">Private Strategic Access</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <Video className="w-8 h-8 text-amber-600 mb-4 mx-auto" />
              <h3 className="font-bold mb-2">Core Video Lessons</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Books Section */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 font-serif">The Professional Library</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {books.map((book, i) => (
              <div key={i} className="text-center group">
                <div className="relative aspect-[3/4] mb-6 bg-slate-50 rounded-lg shadow-lg group-hover:shadow-xl transition-all p-4">
                  <img src={book.image} alt={book.title} className="max-h-full mx-auto object-contain" />
                </div>
                <h3 className="font-bold text-lg mb-2">{book.title}</h3>
                <p className="text-slate-500 text-sm">{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mastery Video Section - UPDATED WITH BLURRED COVERS */}
      <section className="py-24 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16 font-serif">Mastery Through Video</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {globalSparksVideos.map((v, i) => (
              <div key={i} className="space-y-4">
                <div className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                  {/* The Actual Video (Only shows if clicked or "active") */}
                  {!v.comingSoon && (
                    <iframe 
                      id={`vimeo-${v.id}`}
                      className={`w-full h-full transition-opacity duration-500 ${activeVideo === v.id ? 'opacity-100' : 'opacity-0'}`}
                      src={`https://player.vimeo.com/video/${v.id}?badge=0&autopause=0&player_id=0&app_id=58479`}
                      title={v.title} 
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}

                  {/* Blurred Cover Overlay */}
                  {activeVideo !== v.id && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
                      <div className="absolute inset-0 bg-slate-800/40 backdrop-blur-xl"></div>
                      <div className="relative z-20">
                        <h4 className="text-white text-2xl font-bold mb-4 font-serif">{v.title}</h4>
                        {v.comingSoon ? (
                           <span className="text-amber-500 font-bold uppercase tracking-[0.3em] animate-pulse">Coming Soon</span>
                        ) : (
                          <button 
                            onClick={() => setActiveVideo(v.id)}
                            className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-2 rounded-full font-bold flex items-center gap-2 transition-all"
                          >
                            <PlayCircle className="w-5 h-5" /> Play Lesson
                          </button>
                        )}
                      </div>
                      {/* Status Tags */}
                      {!v.comingSoon && (
                        <div className="absolute top-4 right-4">
                          {selectedVideoId === v.id ? (
                            <span className="bg-green-600/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Unlocked</span>
                          ) : selectedVideoId && (
                            <span className="bg-amber-500/90 text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase flex items-center gap-1"><Clock className="w-3 h-3"/> Preview</span>
                          ) }
                        </div>
                      )}
                    </div>
                  )}

                  {/* 30 Second Lock Overlay */}
                  {lockedVideoId === v.id && (
                    <div className="absolute inset-0 z-30 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 animate-in fade-in">
                      <Lock className="w-12 h-12 text-amber-500 mb-4" />
                      <h3 className="text-white text-xl font-bold mb-2 font-serif">Full Lesson Locked</h3>
                      <p className="text-slate-400 text-sm mb-6">Reserve your place to unlock the full library.</p>
                      <button onClick={goToReservePage} className="px-8 py-3 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 transition-all">
                        Unlock Full Access
                      </button>
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-slate-800 px-2">{v.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA Section */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 font-serif">Reserve Your Place</h2>
          <p className="text-xl text-slate-300 mb-10">Tuition: <span className="text-amber-500 font-bold">$997.97</span></p>
          <button onClick={goToReservePage} className="px-10 py-4 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 transition-all shadow-xl mb-12">
            Get My Free Resources
          </button>

          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 max-w-2xl w-full mx-auto">
            <h4 className="text-amber-500 font-bold mb-3 flex items-center justify-center gap-2 uppercase tracking-widest">
              <Calendar className="w-5 h-5" /> Want to learn more?
            </h4>
            <p className="text-slate-200">
              To arrange a confidential “Due Diligence” call with Bruce Wright, click{' '}
              <a href="https://calendly.com/bwright-msdi/45-minute-consultation-re-30-second-msg" target="_blank" rel="noopener noreferrer" className="text-amber-400 font-bold underline hover:text-amber-300">
                HERE
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeResourcesPage;
