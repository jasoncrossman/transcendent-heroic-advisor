import React, { useState, useEffect } from 'react';
import { 
  Award, CheckCircle2, Lock, PlayCircle, Clock, Info, Quote, Calendar, Mail, User, ArrowRight
} from 'lucide-react';

const FreeResourcesPage: React.FC = () => {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [lockedVideoId, setLockedVideoId] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  // Form State
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // This matches your Purchase Page Webhook
  const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/18380285/uwqwyud/";

  const handleCaptureAndRedirect = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Matching the payload structure from your Purchase Page
    const payload = {
      email: email,
      full_name: fullName,
      source: "Free Resources Lead Capture"
    };

    try {
      await fetch(ZAPIER_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      });
      // Redirect to Purchase Page after successful capture
      window.location.assign("https://transcendent-heroic-advisor.vercel.app/#/purchase");
    } catch (error) {
      console.error("Submission error:", error);
      window.location.assign("https://transcendent-heroic-advisor.vercel.app/#/purchase");
    }
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

  const handleVideoSelection = (id: string) => {
    globalSparksVideos.forEach(video => {
      if (video.id !== id && !video.comingSoon) {
        const iframe = document.getElementById(`vimeo-${video.id}`) as HTMLIFrameElement;
        if (iframe && (window as any).Vimeo) {
          const player = new (window as any).Vimeo.Player(iframe);
          player.pause();
        }
      }
    });
    setActiveVideo(id);
    setLockedVideoId(null);
  };

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
          player.on('play', () => { if (!selectedVideoId) setSelectedVideoId(video.id); });
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
  }, [selectedVideoId]);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      {/* 1. Bio Section */}
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
              <span className="flex items-center gap-2 text-amber-500 font-bold uppercase text-sm mb-4"><Award className="w-5 h-5" /> Visionary • Inventor • Consigliere</span>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-8">About Bruce Raymond Wright</h1>
              <div className="space-y-8 text-slate-300 text-lg leading-relaxed">
                <p className="font-semibold text-white text-xl">Bruce Raymond Wright is a serial innovator and the inventor of the world’s first Macro Strategic Planning® methodology.</p>
                <p>Decades ago, Bruce realized the financial world was built on "minimum standards." He chose a different path: <span className="text-amber-400 font-bold italic">Transcendence.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Resources Header */}
      <section className="py-20 bg-slate-50 border-y border-slate-200 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex items-start gap-4 bg-amber-50 border border-amber-200 p-6 rounded-2xl shadow-sm max-w-4xl">
            <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-amber-900 font-bold text-lg">Welcome to your Resource Vault</h3>
              <p className="text-amber-800 leading-relaxed">
                Your first selected video is available for full viewing. Subsequent lessons are locked to a 30-second summary until you complete enrollment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Books Section */}
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

      {/* 4. Mastery Video Section */}
      <section className="py-24 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-serif uppercase tracking-widest mb-2">Mastery Through Video</h2>
            <p className="text-slate-500 font-medium italic">Select one lesson for full access; preview the rest.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {globalSparksVideos.map((v, i) => (
              <div key={i} className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                {!v.comingSoon && (
                  <iframe id={`vimeo-${v.id}`} className={`w-full h-full transition-opacity duration-500 ${activeVideo === v.id ? 'opacity-100' : 'opacity-0'}`} src={`https://player.vimeo.com/video/${v.id}?badge=0&autopause=0&player_id=0&app_id=58479`} title={v.title} allow="autoplay; fullscreen" allowFullScreen></iframe>
                )}
                {activeVideo !== v.id && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center bg-slate-800/40 backdrop-blur-xl">
                    <h4 className="text-white text-2xl font-bold mb-4 font-serif">{v.title}</h4>
                    {v.comingSoon ? (
                       <span className="text-amber-500 font-bold uppercase tracking-[0.3em] animate-pulse">Coming Soon</span>
                    ) : (
                      <button onClick={() => handleVideoSelection(v.id)} className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-5 py-2 rounded-full font-bold flex items-center gap-2 transition-all text-sm mx-auto shadow-lg"><PlayCircle className="w-4 h-4" /> Play Lesson</button>
                    )}
                    {!v.comingSoon && (
                      <div className="absolute top-4 right-4">
                        {selectedVideoId === v.id ? (
                          <span className="bg-green-600/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase flex items-center gap-1 shadow-lg"><CheckCircle2 className="w-3 h-3"/> Unlocked</span>
                        ) : selectedVideoId && (
                          <span className="bg-amber-500/90 text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase flex items-center gap-1 shadow-lg"><Clock className="w-3 h-3"/> Preview</span>
                        ) }
                      </div>
                    )}
                  </div>
                )}
                {lockedVideoId === v.id && (
                  <div className="absolute inset-0 z-30 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8">
                    <Lock className="w-12 h-12 text-amber-500 mb-4" />
                    <h3 className="text-white text-xl font-bold mb-2 font-serif">Full Lesson Locked</h3>
                    <p className="text-slate-400 text-sm mb-6">Complete enrollment below to unlock full access.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final Quote */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center border-t border-slate-100 pt-20">
          <Quote className="w-12 h-12 text-slate-200 mx-auto mb-6" />
          <h3 className="text-2xl font-serif italic text-slate-800 mb-6">"The distance between where you are and where you want to be is measured solely by the quality of the frameworks you choose to adopt."</h3>
          <p className="text-amber-600 font-bold uppercase tracking-widest text-sm">— Bruce Raymond Wright</p>
        </div>
      </section>

      {/* 6. Lead Capture Form */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 font-serif">Complete Your Enrollment</h2>
          <p className="text-xl text-slate-300 mb-10 italic">Receive your full Resource Vault and secure your seat in the January cohort.</p>
          
          <form onSubmit={handleCaptureAndRedirect} className="max-w-md mx-auto mb-16 space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input required type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-amber-500 outline-none transition-all" />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input required type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-amber-500 outline-none transition-all" />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-amber-500 text-slate-900 font-bold rounded-xl hover:bg-amber-400 transition-all flex items-center justify-center gap-2 shadow-xl disabled:opacity-50">
              {isSubmitting ? 'Processing...' : 'Complete Enrollment'} <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 max-w-2xl mx-auto">
            <h4 className="text-amber-500 font-bold mb-3 flex items-center justify-center gap-2 uppercase tracking-widest"><Calendar className="w-5 h-5" /> Want to learn more?</h4>
            <p className="text-slate-200">To arrange a confidential “Due Diligence” call with Bruce Wright, click <a href="https://calendly.com/bwright-msdi/45-minute-consultation-re-30-second-msg" className="text-amber-400 font-bold underline">HERE</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeResourcesPage;
