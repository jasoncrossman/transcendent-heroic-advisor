import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, CheckCircle2, Mail, Gift, Phone, PlayCircle, Calendar, Lock, Clock } from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [lockedVideoId, setLockedVideoId] = useState<string | null>(null);

  const videoData = [
    { id: '816394768', title: 'Create an Ecosystem for Uncommon Results' },
    { id: '816409798', title: 'Do Not Claim You Care, Show You Care' },
    { id: '816414705', title: 'Using the Quantum Mind' }
  ];

  useEffect(() => {
    // Plan B: Load the Vimeo Script manually so we don't need npm install
    const script = document.createElement('script');
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      videoData.forEach(video => {
        const iframe = document.getElementById(`vimeo-${video.id}`) as HTMLIFrameElement;
        if (iframe && window.Vimeo) {
          const player = new window.Vimeo.Player(iframe);

          player.on('play', () => {
            if (!selectedVideoId) {
              setSelectedVideoId(video.id);
            }
          });

          player.on('timeupdate', (data: { seconds: number }) => {
            // Logic: If a choice was made, and this isn't it, stop at 30 seconds
            if (selectedVideoId && selectedVideoId !== video.id && data.seconds >= 30) {
              player.pause();
              setLockedVideoId(video.id);
            }
          });
        }
      });
    };

    return () => { document.body.removeChild(script); };
  }, [selectedVideoId]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/purchase');
  };

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
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
            The Transcendent <span className="gradient-gold">Heroic Advisor</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed mb-10">
            Welcome to our Quantum Mind Mastery Course for advisors and your associates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/purchase" className="w-full sm:w-auto px-10 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-full transition-all shadow-lg flex items-center justify-center group">
              Reserve Your Place <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Video Hub Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Choose Your Free Mastery Lesson</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Select one lesson to view in full. The remaining lessons will offer a 30-second preview.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoData.map((video) => (
              <div key={video.id} className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-xl aspect-video">
                <iframe
                  id={`vimeo-${video.id}`}
                  src={`https://player.vimeo.com/video/${video.id}?badge=0&autopause=0&player_id=0&app_id=58479`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                ></iframe>
                
                {lockedVideoId === video.id && (
                  <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 animate-in fade-in">
                    <Lock className="w-12 h-12 text-amber-500 mb-4" />
                    <h3 className="text-white text-xl font-bold mb-2">Preview Ended</h3>
                    <p className="text-slate-300 mb-6 text-sm">To view the full lesson, reserve your space today.</p>
                    <Link to="/purchase" className="px-6 py-3 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400">
                      Unlock Full Access
                    </Link>
                  </div>
                )}

                <div className="absolute top-4 right-4 pointer-events-none">
                  {selectedVideoId === video.id ? (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Full Access Unlocked
                    </span>
                  ) : selectedVideoId && (
                    <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 30s Preview
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Elephant Placeholder */}
            <div className="relative bg-slate-800 rounded-3xl overflow-hidden shadow-xl aspect-video flex items-center justify-center border-2 border-dashed border-slate-700">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&q=80&w=800')] opacity-20 grayscale blur-md"></div>
              <div className="relative z-10 text-center px-6">
                <h3 className="text-white text-2xl font-bold mb-2 font-serif">The Elephant in the Room</h3>
                <p className="text-amber-400 font-bold text-sm uppercase tracking-widest animate-pulse">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Quantum Systems Produce Quantum Leaps</h2>
              <div className="space-y-4">
                {[
                  "Demonstrate how you are extraordinary, priceless, and irreplaceable.",
                  "Become far more attractive to A-level referrals.",
                  "Transcend fiduciary regulations.",
                  "Deliver dazzling multidimensional wisdom.",
                  "Create an ecosystem of like-minded advisors."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
                alt="Performance" 
                className="w-full h-full object-cover rounded-2xl border border-slate-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 font-serif">Reserve Your Place</h2>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>
              <button type="submit" className="w-full py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 shadow-lg">
                Get Free Resources & Secure My Seat
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

// Define global type for Vimeo Window object
declare global {
  interface Window {
    Vimeo: any;
  }
}

export default LandingPage;
