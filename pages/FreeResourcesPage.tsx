import React from 'react';
import { Sparkles, Award, Star, ArrowRight, Brain, Zap, Target } from 'lucide-react';

const FreeResourcesPage: React.FC = () => {
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

  const bruceImage = "/assets/images/bruce.jpg";

  const globalSparksVideos = [
    { title: "Create an Ecosystem for Uncommon Results", url: "https://www.youtube.com/embed/WS1ccYNZJtU" },
    { title: "Do Not Claim You Care, Show You Care", url: "https://www.youtube.com/embed/WS1ccYNZJtU" },
    { title: "Using the Quantum Mind", url: "https://www.youtube.com/embed/WS1ccYNZJtU" },
    { title: "Think, Do, and BE as the Elephant", url: "https://www.youtube.com/embed/WS1ccYNZJtU" }
  ];

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      
      {/* Bruce Wright Bio Section */}
      <section className="bg-slate-900 py-20 lg:py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <Sparkles className="w-full h-full text-amber-400" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Professional Image */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute inset-0 bg-amber-500/20 blur-3xl group-hover:bg-amber-500/30 transition-all rounded-full"></div>
              <div className="relative aspect-[3/4] max-w-sm mx-auto bg-slate-800 rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl">
                <img 
                  src={bruceImage} 
                  alt="Bruce Raymond Wright" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 p-6 text-center">
                   <p className="text-amber-500 font-bold text-lg uppercase tracking-widest italic">The Architect of Transcendence</p>
                </div>
              </div>
            </div>
            
            {/* Right: Content with FORCED spacing */}
            <div className="lg:col-span-7">
              <div className="mb-10">
                <span className="flex items-center gap-2 text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">
                  <Award className="w-5 h-5" /> Visionary • Inventor • Consigliore
                </span>
                <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight text-white mb-8">About Bruce Raymond Wright</h1>
              </div>
              
              {/* This space-y-8 class forces a gap between every <p> tag */}
              <div className="space-y-8 text-slate-300 text-lg leading-relaxed max-w-none">
                <p className="font-semibold text-white text-xl">
                  Bruce Raymond Wright isn’t just an advisor; he is a serial innovator and the inventor of the world’s first Macro Strategic Planning® methodology.
                </p>

                <p>
                  Decades ago, Bruce realized that the financial world was built on a foundation of "minimum standards" and "conflicted interests." He chose a different path: <span className="text-amber-400 font-bold italic text-shadow-sm">Transcendence.</span>
                </p>

                <p>
                  After a meteoric rise as a Managing Partner and leader at the Associated Planners conglomerate, Bruce did the unthinkable: he liquidated his positions to build something the world had never seen. Driven by a request from senior aerospace leaders, he engineered a holistic, "in-the-trenches" system designed for tangible, massive results.
                </p>

                <p>
                  Bruce is the ultimate <span className="italic text-amber-500 font-bold">consigliore</span> for the world’s most discerning minds—from rocket scientists and celebrities to visionary entrepreneurs. As a pure client advocate, he operates a 100% win-win, conflict-free model. He doesn't just plan for the next quarter; he architects <span className="italic text-amber-500 font-bold">100-Year Legacies</span>, turning complex chaos into elegant, synergistic written plans that activate the Law of Alignment.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-12">
                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center gap-3 shadow-lg">
                  <Star className="text-amber-500 w-5 h-5 fill-current" />
                  <span className="text-sm font-semibold tracking-tight uppercase text-white">100-Year Legacy Architect</span>
                </div>
                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center gap-3 shadow-lg">
                  <Zap className="text-amber-500 w-5 h-5" />
                  <span className="text-sm font-semibold tracking-tight uppercase text-white">Conflict-Free Innovator</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-serif text-shadow-sm">The Professional Library</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Included with your enrollment are Bruce Wright's definitive works on market leadership and strategic planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {books.map((book, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center">
                <div className="relative aspect-[3/4] w-full max-w-[280px] bg-slate-50 rounded-lg overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 mb-8 border-r-4 border-slate-200 p-4 flex items-center justify-center">
                  <img src={book.image} alt={book.title} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif px-4 leading-tight">{book.title}</h3>
                <p className="text-slate-500 text-sm px-4 leading-relaxed">{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-
