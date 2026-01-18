import React, { useState, useEffect } from 'react';
import { 
  Award, 
  PlayCircle, 
  Info, 
  Star, 
  RotateCcw,
  ExternalLink
} from 'lucide-react';

const FreeResourcesPage: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [flippedBooks, setFlippedBooks] = useState<Record<number, boolean>>({});

  const toggleBookFlip = (index: number) => {
    setFlippedBooks(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const books = [
    {
      title: "The Wright Exit Strategy",
      image: "/assets/images/book1.jpg",
      backText: "Discover how to achieve a tangible exit from your current business into your 'Ideal Life.' Bruce Wright provides the unbiased systems needed to secure measurable results and claim your Perfect Calendar™."
    },
    {
      title: "Transcendent Thought and Market Leadership",
      image: "/assets/images/book2.jpg",
      backText: "Transcending the status quo and ambiguity that separates you from greater cash flow and significance is possible. This book teaches you how to think and act in ways that transcend the competition."
    },
    {
      title: "30-Second Marketing Message",
      image: "/assets/images/book3.jpg",
      backText: "Learn to communicate your true value to attract higher-quality clients and position yourself as the obvious choice. Create a message that sparks curiosity and works for you long after the introduction."
    }
  ];

  const globalSparksVideos = [
    { id: 'hoI5E1D5c3Y', title: "Think, Do, and BE as the Elephant", type: 'youtube', featured: true },
    { id: '816394768', title: "Create an Ecosystem for Uncommon Results", type: 'vimeo' },
    { id: '816409798', title: "Do Not Claim You Care, Show You Care", type: 'vimeo' },
    { id: '816414705', title: "Using the Quantum Mind", type: 'vimeo' }
  ];

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
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="bg-slate-900 py-20 lg:py-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] max-w-sm mx-auto bg-slate-800 rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl">
                <img src="/assets/images/bruce.jpg" alt="Bruce Wright" className="w-full h-full object-cover grayscale" />
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
                <p className="font-semibold text-white text-xl">Bruce Raymond Wright is a serial innovator and the inventor of the world’s first Macro Strategic Planning® methodology.</p>
                <p>Decades ago, Bruce realized the financial world was built on "minimum standards" and "conflicted interests." He chose a different path: <span className="text-amber-400 font-bold italic">Transcendence.</span></p>
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
              <div key={i} className="flex flex-col items-center text-center">
                <div 
                  className="perspective-1000 w-full h-[500px] cursor-pointer group"
                  onClick={() => toggleBookFlip(i)}
                >
                  <div className={`relative w-full h-full transition-transform-700 preserve-3d ${flippedBooks[i] ? 'rotate-y-180' : ''}`}>
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden">
                      <div className="w-full h-full bg-slate-50 rounded-lg shadow-lg overflow-hidden border border-slate-100 p-10 flex items-center justify-center">
                        <img src={book.image} alt={book.title} className="max-w-full max-h-full object-contain rounded shadow-sm" />
                        <div className="absolute bottom-4 right-4 bg-slate-900/80 p-2 rounded-full text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          <RotateCcw className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                      <div className="w-full h-full bg-slate-900 text-white rounded-lg shadow-2xl p-8 flex flex-col items-center justify-center text-center border-2 border-amber-500/30">
                        <h4 className="text-amber-500 font-bold mb-4 uppercase tracking-widest text-xs">Summary</h4>
                        <p className="text-slate-200 text-sm leading-relaxed italic">"{book.backText}"</p>
                        <p className="mt-6 text-amber-500/50 font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">
                          <RotateCcw className="w-3 h-3" /> Click to flip back
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-lg mt-6 mb-1">{book.title}</h3>
                <p className="text-amber-600 font-black text-[10px] uppercase tracking-widest">Free With Enrollment</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VAULT SECTION */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex items-start gap-4 bg-white border border-amber-200 p-8 rounded-3xl shadow-sm max-w-4xl mx-auto">
            <Info className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-slate-900 font-bold text-xl mb-2 font-serif uppercase tracking-tight">Welcome to your Resource Vault</h3>
              <p className="text-slate-600 text-lg leading-relaxed">Explore these foundational lessons at your own pace. These resources introduce you to the principles of Macro Strategic Planning®.</p>
            </div>
          </div>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif uppercase tracking-widest mb-2">Mastery Through Video</h2>
            <p className="text-slate-500 font-medium italic">Complimentary insights from the Architect of Transcendence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {globalSparksVideos.map((v) => (
              <div 
                key={v.id} 
                className={`relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 ${v.featured && activeVideo !== v.id ? 'border-amber-500/50' : 'border-white'}`}
              >
                {activeVideo === v.id ? (
                  <iframe className="w-full h-full" src={v.type === 'youtube' ? `https://www.youtube.com/embed/${v.id}?autoplay=1` : `https://player.vimeo.com/video/${v.id}?autoplay=1`} allow="autoplay; fullscreen" allowFullScreen></iframe>
                ) : (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 text-center">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl"></div>
                    <div className="relative z-20 flex flex-col items-center">
                      {v.featured && (
                        <span className="flex items-center gap-1 text-amber-500 font-bold text-[10px] uppercase tracking-tighter mb-2 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                          <Star className="w-3 h-3 fill-amber-500" /> Essential Lesson
                        </span>
                      )}
                      <h4 className="text-white text-2xl font-bold mb-6 font-serif">{v.title}</h4>
                      <button onClick={() => setActiveVideo(v.id)} className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg">
                        <PlayCircle className="w-5 h-5" /> Play Lesson
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ADDED LINK SECTION WITH ICON */}
          <div className="max-w-4xl mx-auto text-center px-4">
            <p className="text-slate-600 text-lg leading-relaxed">
              Wright's straightforward teachings will open your eyes to new possibilities and show you exactly how to achieve tangible, measurable success in business and beyond!
              <br />
              <a 
                href="https://globalsparks.com/index.php/search-everything/academies/teachme-academy1/guruprograms/18-teach-me/656-the-wright-exit-strategy-special-edition-wealth-how-to-create-it-keep-it-use-it-with-expert-bruce-wright?atid=133&tmpl=component" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-500 font-bold hover:text-amber-400 transition-colors inline-flex items-center gap-2 mt-4"
              >
                The Wright Exit Strategy <ExternalLink className="w-4 h-4" />
              </a>
            </p>
          </div>

        </div>
      </section>

      {/* 4. FOOTER */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 font-serif">Reserve Your Place</h2>
          <button onClick={() => window.location.href='/#/purchase'} className="px-10 py-4 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 shadow-xl">
            Register & Unlock Vault
          </button>
        </div>
      </section>
    </div>
  );
};

export default FreeResourcesPage;
