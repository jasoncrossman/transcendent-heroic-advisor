import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  CheckCircle2, 
  Mail, 
  Gift, 
  Phone, 
  PlayCircle, 
  Calendar 
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isVideoActive, setIsVideoActive] = useState(false);

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
            Welcome to our Quantum Mind Mastery Course for advisors and your associates. Each of the lessons taught will actually SHOW you how to implement Quantum Mind solutions, methods, ways, and means.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/purchase" className="w-full sm:w-auto px-10 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-full transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center group">
              Reserve Your Place <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">Mastery Through Doing</h2>
            <p className="text-lg text-slate-600 leading-relaxed italic">
              "We believe the best way to learn unique approaches to life and business is to have the inventor teach you by doing them with you."
            </p>
          </div>
          
          <div className="bg-amber-500 p-8 md:p-12 rounded-3xl border border-amber-600 shadow-2xl text-left transform hover:scale-[1.01] transition-all duration-300 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif">Quantum Alignment</h3>
            <p className="text-slate-900 font-medium text-lg leading-relaxed">
              Learn how to use Quantum Physics to achieve more of what you want. We don’t get what we want, we get what we are aligned with.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section with Blurred Cover Overlay */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-serif">
            Experience the Introductory Principles by Doing them with Bruce
          </h2>
          
          <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl mb-12 border-4 border-white group">
            
            {/* The Actual YouTube Video */}
            <iframe 
              className={`w-full h-full transition-opacity duration-700 ${isVideoActive ? 'opacity-100' : 'opacity-0'}`}
              src={`https://www.youtube.com/embed/WS1ccYNZJtU?autoplay=${isVideoActive ? 1 : 0}&rel=0`}
              title="Welcome Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>

            {/* The Blurred "Heroic Advisor" Cover */}
            {!isVideoActive && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
                <div className="absolute inset-0 bg-slate-800/40 backdrop-blur-2xl"></div>
                
                <div className="relative z-20 animate-in fade-in zoom-in duration-500">
                  <h3 className="text-white text-3xl md:text-5xl font-bold mb-6 font-serif tracking-tight">
                    The Transcendent <br/>
                    <span className="text-amber-500">Heroic Advisor</span>
                  </h3>
                  
                  <button 
                    onClick={() => setIsVideoActive(true)}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-10 py-4 rounded-full font-bold flex items-center gap-3 transition-all shadow-xl hover:scale-105 active:scale-95"
                  >
                    <PlayCircle className="w-6 h-6" /> Watch Introduction
                  </button>
                </div>
                
                <div className="absolute bottom-8 text-slate-300/60 text-xs font-bold uppercase tracking-widest">
                  Quantum Mind Mastery Series
                </div>
              </div>
            )}
          </div>

          <div className="max-w-4xl mx-auto text-left space-y-8">
            <p className="text-slate-700 text-xl font-medium leading-relaxed text-center">
              Receive immediate access to complimentary resources:
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <Gift className="w-6 h-6 text-amber-600" />
                </div>
                <p className="text-slate-600 text-lg">
                  Free Download: <strong className="text-slate-900">“Ten Steps to Your Magnetic Marketing Message”</strong>
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <p className="text-slate-600 text-lg">
                  <strong className="text-slate-900">Two Private Strategy Calls with Bruce</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reserve Place CTA Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Reserve Your Place</h2>
          <p className="text-xl text-slate-600 mb-10">
            Secure Early Riser pricing of <span className="font-bold text-amber-600 italic underline">$997.97</span> now.
          </p>
          
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-lg"
              >
                Get Free Resources & Secure My Seat
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
