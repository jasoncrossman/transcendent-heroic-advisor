import React from 'react';
import { 
  Award, 
  Star, 
  ArrowRight, 
  Zap, 
  BookOpen, 
  Phone, 
  Video, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';

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

  const globalSparksVideos = [
    { title: "Create an Ecosystem for Uncommon Results", url: "https://www.youtube.com/embed/WS1ccYNZJtU" },
    { title: "Do Not Claim You Care, Show You Care", url: "https://www.youtube.com/embed/WS1ccYNZJtU" },
    { title: "Using the Quantum Mind", url: "https://www.youtube.com/embed/WS1ccYNZJtU" },
    { title: "Think, Do, and BE as the Elephant", url: "https://www.youtube.com/embed/WS1ccYNZJtU" }
  ];

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
                <Award className="w-5 h-5" /> Visionary • Inventor • Consigliore
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-8">About Bruce Raymond Wright</h1>
              
              <div className="space-y-8 text-slate-300 text-lg leading-relaxed">
                <p className="font-semibold text-white text-xl">Bruce Raymond Wright isn’t just an advisor; he is a serial innovator and the inventor of the world’s first Macro Strategic Planning® methodology.</p>
                <p>Decades ago, Bruce realized the financial world was built on "minimum standards" and "conflicted interests." He chose a different path: <span className="text-amber-400 font-bold italic">Transcendence.</span></p>
                <p>After a meteoric rise at Associated Planners, Bruce liquidated his positions to build a holistic, "in-the-trenches" system designed for tangible, massive results.</p>
                <p>Bruce is the ultimate <span className="italic text-amber-500 font-bold">consigliore</span> for discerning minds. He architects <span className="italic text-amber-500 font-bold">100-Year Legacies</span>, turning complex chaos into elegant, synergistic written plans.</p>
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

      {/* 2. Introductory Principles & Immediate Resources Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              <Clock className="w-4 h-4" /> Your Fast-Action Starter Kit
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-slate-900">Experience the Principles by Doing them with Bruce</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              When you join the waitlist for the <span className="text-slate-900 font-bold">Transcendent Heroic Advisor Mastery Course</span>, you will receive <span className="text-amber-600 font-bold italic underline">immediate access</span> to these foundational resources:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Resource 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-transparent hover:border-amber-500 transition-all relative group">
              <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded uppercase flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Instant Download
              </div>
              <BookOpen className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Marketing Framework</h3>
              <p className="text-slate-600 mb-6">“Ten Steps to Creating Your Dynamic and Magnetic 30-Second Marketing Message”</p>
              <div className="bg-slate-100 aspect-[4/3] rounded-lg flex items-center justify-center text-slate-400 text-sm italic group-hover:bg-slate-200 transition-colors">
                [Graphic Available]
              </div>
            </div>

            {/* Resource 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-transparent hover:border-amber-500 transition-all relative group">
              <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded uppercase flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Schedule Now
              </div>
              <Phone className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Private Strategic Calls</h3>
              <p className="text-slate-600">Two highly confidential 45-minute calls with Bruce to demonstrate Quantum Thinking applied to your specific practice.</p>
            </div>

            {/* Resource 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-transparent hover:border-amber-500 transition-all relative group">
              <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded uppercase flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Instant Stream
              </div>
              <Video className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Core Video Lessons</h3>
              <p className="text-slate-600 mb-4 text-sm font-semibold italic">From "The Wright Exit Strategy"</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-amber-500 shrink-0 mt-1" /> Create an Ecosystem for Uncommon Results</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-amber-500 shrink-0 mt-1" /> Do Not Claim You Care, Show You Care</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-amber-500 shrink-0 mt-1" /> Using the Quantum Mind</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-amber-500 shrink-0 mt-1" /> Think, Do, and BE the Elephant</li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              These lessons are a direct demonstration of the <span className="font-bold">Quantum Thinking</span> and ways of doing and <span className="font-bold italic">BEING</span> that deliver the <span className="text-amber-600 font-bold uppercase tracking-tight">Transcendent Heroic Advisor</span> framework.
            </p>
            <div className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg">
              Full Mastery Course Launching Spring 2026
            </div>
          </div>
        </div>
      </section>

      {/* 3. Books Section (Professional Library) */}
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

      {/* 4. Mastery Section (Original Videos) */}
      <section className="py-24 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16 font-serif">Mastery Through Video</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {globalSparksVideos.map((v, i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <iframe 
                    className="w-full h-full" 
                    src={v.url} 
                    title={v.title} 
                    frameBorder="0" 
                    allowFullScreen
                  ></iframe>
                </div>
                <h4 className="font-bold text-slate-800">{v.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA Section */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 font-serif">Reserve Your Place</h2>
          <p className="text-xl text-slate-300 mb-4">
            The Transcendent Heroic Advisor Mastery Course | <span className="text-white font-bold">Spring 2026</span>
          </p>
          <p className="text-amber-500 text-2xl font-bold mb-10">Tuition: $997.97</p>
          
          <div className="space-y-6">
            <button className="px-12 py-5 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 transition-all shadow-xl hover:scale-105 transform active:scale-95">
              Join the Waitlist & Get My Free Resources
            </button>
            <p className="text-slate-400 text-sm italic">
              * By joining the waitlist today, you receive immediate access to the Marketing Framework, Strategy Calls, and Video Modules.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeResourcesPage;
