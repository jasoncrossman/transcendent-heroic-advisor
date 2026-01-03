import React from 'react';
import { Sparkles, Award, Star, ArrowRight, Brain, Zap, Target } from 'lucide-react';

const FreeResourcesPage: React.FC = () => {
  const bruceImage = "/assets/images/bruce.jpg";

  return (
    <div className="bg-white min-h-screen">
      {/* Bio Section */}
      <section className="bg-slate-900 py-20 lg:py-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] max-w-sm mx-auto bg-slate-800 rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl">
                <img src={bruceImage} alt="Bruce Wright" className="w-full h-full object-cover grayscale" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 p-6 text-center">
                   <p className="text-amber-500 font-bold uppercase tracking-widest italic">The Architect of Transcendence</p>
                </div>
              </div>
            </div>
            
            {/* Text Content with Forced Spacing */}
            <div className="lg:col-span-7">
              <span className="flex items-center gap-2 text-amber-500 font-bold uppercase text-sm mb-4">
                <Award className="w-5 h-5" /> Visionary • Inventor • Consigliore
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-10 text-white">About Bruce Raymond Wright</h1>
              
              {/* This space-y-10 forces large gaps between paragraphs */}
              <div className="space-y-10 text-slate-300 text-lg leading-relaxed">
                <p className="font-semibold text-white text-xl leading-tight">
                  Bruce Raymond Wright isn’t just an advisor; he is a serial innovator and the inventor of the world’s first Macro Strategic Planning® methodology.
                </p>

                <p>
                  Decades ago, Bruce realized that the financial world was built on a foundation of "minimum standards" and "conflicted interests." He chose a different path: <span className="text-amber-400 font-bold italic">Transcendence.</span>
                </p>

                <p>
                  After a meteoric rise as a Managing Partner and leader at the Associated Planners conglomerate, Bruce did the unthinkable: he liquidated his positions to build something the world had never seen. Driven by a request from senior aerospace leaders, he engineered a holistic, "in-the-trenches" system designed for tangible, massive results.
                </p>

                <p>
                  Bruce is the ultimate <span className="italic text-amber-500 font-bold">consigliore</span> for the world’s most discerning minds—from rocket scientists and celebrities to visionary entrepreneurs. As a pure client advocate, he operates a 100% win-win, conflict-free model. He doesn't just plan for the next quarter; he architects <span className="italic text-amber-500 font-bold">100-Year Legacies</span>, turning complex chaos into elegant, synergistic written plans that activate the Law of Alignment.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-12">
                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center gap-3">
                  <Star className="text-amber-500 w-5 h-5 fill-current" />
                  <span className="text-sm font-semibold uppercase text-white">100-Year Legacy Architect</span>
                </div>
                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center gap-3">
                  <Zap className="text-amber-500 w-5 h-5" />
                  <span className="text-sm font-semibold uppercase text-white">Conflict-Free Innovator</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Footer / CTA */}
      <section className="py-24 bg-slate-50 text-center">
        <h2 className="text-3xl font-bold mb-6 font-serif">Reserve Your Place</h2>
        <p className="text-xl text-slate-600 mb-10">The Mastery Course | Spring 2026</p>
        <button className="px-10 py-4 bg-amber-500 text-slate-900 font-bold rounded-full shadow-lg">
          Join the January Cohort
        </button>
      </section>
    </div>
  );
};

export default FreeResourcesPage;
