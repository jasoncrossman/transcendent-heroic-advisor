import React from 'react';
import { Link } from 'react-router-dom';
import { Play, BookOpen, Sparkles, Award, Star, ArrowRight, Brain, Zap, Target } from 'lucide-react';

const FreeResourcesPage: React.FC = () => {
  const books = [
    {
      title: "The Wright Exit Strategy",
      subtitle: "Wealth; How to Create It, Keep It, and Use It",
      image: "/assets/images/book1.jpg",
      description: "Wealth: How to Create It, Keep It, and Use It. A masterwork on fiduciary excellence."
    },
    {
      title: "Transcendent Thought and Market Leadership 1.0",
      subtitle: "How to Lead Any Profession, Anywhere in the World",
      image: "/assets/images/book2.jpg",
      description: "How to Lead Any Profession, Anywhere in the World. The definitive guide to professional dominance."
    },
    {
      title: "Ten Steps to Creating Your Dynamic and Magnetic 30-Second Marketing Message",
      subtitle: "Graphic Resource Guide",
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
    <div className="bg-white animate-in fade-in duration-700">
      {/* Bruce Wright Bio Section */}
      <section className="bg-slate-900 py-20 lg:py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <Sparkles className="w-full h-full text-amber-400" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 relative group">
              <div className="absolute inset-0 bg-amber-500/20 blur-3xl group-hover:bg-amber-500/30 transition-all rounded-full"></div>
              <div className="relative aspect-[3/4] max-w-sm mx-auto bg-slate-800 rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl">
                <img 
                  src={bruceImage} 
                  alt="Bruce Raymond Wright" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 p-6 text-center">
                   <p className="text-amber-500 font-bold text-lg uppercase tracking-widest italic">Bruce Raymond Wright</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="flex items-center gap-2 text-amber-500 font-bold tracking-widest uppercase text-sm">
                  <Award className="w-5 h-5" /> The Visionary Behind the Method
                </span>
                <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight">About Bruce Raymond Wright</h1>
              </div>
              
              <div className="prose prose-invert prose-lg text-slate-300">
                <p className="leading-relaxed">
                  Bruce Raymond Wright is an accomplished innovator, inventor, and strategic advisor whose career spans financial services, corporate leadership, and holistic strategic planning.
                </p>
                <p className="leading-relaxed">
                  Wright founded Macro Strategic Design, Inc., pioneering the world’s first comprehensive Macro and Micro Strategic Planning® methodology—an elegant, field-tested system focused on real-world results.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                 <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center gap-3">
                   <Star className="text-amber-500 w-5 h-5 fill-current" />
                   <span className="text-sm font-semibold">Best Selling Author</span>
                 </div>
                 <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center gap-3">
                   <BookOpen className="text-amber-500 w-5 h-5" />
                   <span className="text-sm font-semibold">Conflict-Free Advisor</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Professional Library</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Included with your enrollment are Bruce Wright's definitive works on market leadership and strategic planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {books.map((book, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center">
                <div className="relative aspect-[3/4] w-full max-w-[280px] bg-slate-50 rounded-lg overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 mb-8 border-r-4 border-slate-200 p-4 flex items-center justify-center">
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif px-4 leading-tight">{book.title}</h3>
                <p className="text-slate-500 text-sm px-4 leading-relaxed">{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Whole Brain / Whole Being Section - REFINED COLORS */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="bg-slate-800/40 backdrop-blur-sm p-10 rounded-3xl border border-slate-700 hover:border-amber-500/50 transition-all duration-500 group shadow-2xl">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500/20 transition-colors">
                <Brain className="w-10 h-10 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif text-amber-50">Whole Brain vs. Fractional Brain</h3>
              <p className="text-slate-400 leading-relaxed">
                Move beyond the simplistic left/right brain model. We help you overcome "fractional brain" planning—familiar patterns that ignore facts—to activate complete, high-effort results.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-slate-800/40 backdrop-blur-sm p-10 rounded-3xl border border-slate-700 hover:border-amber-500/50 transition-all duration-500 group shadow-2xl">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500/20 transition-colors">
                <Zap className="w-10 h-10 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif text-amber-50">Whole Being Perspective</h3>
              <p className="text-slate-400 leading-relaxed">
                We integrate spiritual insight and values into vision and planning. Whether through a 500-year legacy or holistic visioning, we reveal insights far beyond conventional financial planning.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-slate-800/40 backdrop-blur-sm p-10 rounded-3xl border border-slate-700 hover:border-amber-500/50 transition-all duration-500 group shadow-2xl">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500/20 transition-colors">
                <Target className="w-10 h-10 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif text-amber-50">Invitation to Transcend</h3>
              <p className="text-slate-400 leading-relaxed">
                Activate the Law of Alignment. When awareness and operating models align, resistance decreases and progress becomes faster, revealing possibilities previously unimaginable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Mastery Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">Mastery Through Video</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Experience selected video lessons from <span className="font-bold text-slate-900">"The Wright Exit Strategy"</span>. 
              These are direct demonstrations of the Transcendent Heroic Advisor framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {globalSparksVideos.map((video, idx) => (
              <div key={idx} className="space-y-4">
                <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h4 className="text-lg font-bold text-slate-800 text-center">{video.title}</h4>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-amber-50 rounded-3xl border border-amber-100 italic text-amber-900 text-center text-lg">
            "Teaching by telling isn’t as effective as DOING. These videos show you the 'how' behind the 'what'."
          </div>
        </div>
      </section>

      {/* Reserve Place CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Reserve Your Place</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            The Transcendent Heroic Advisor Mastery Course will be available in the Spring of 2026.
            <br/>
            <span className="font-bold text-amber-500 mt-2 block italic underline">Secure Early Riser pricing of $997.97 now.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://your-purchase-server.com/january-cohort" className="w-full sm:w-auto px-12 py-5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-full transition-all shadow-xl flex items-center justify-center group">
              Join the January Cohort <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeResourcesPage;
