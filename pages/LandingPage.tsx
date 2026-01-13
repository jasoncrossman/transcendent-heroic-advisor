import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  CheckCircle2, 
  Mail, 
  Gift, 
  Phone, 
  PlayCircle, 
  Calendar, 
  X, 
  ChevronLeft, 
  Zap, 
  Star 
} from 'lucide-react';

// REPLACE THIS ID WITH YOUR 45-MINUTE QUANTUM VIDEO ID
const QUANTUM_VIDEO_ID = "WS1ccYNZJtU"; 

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isVideoActive, setIsVideoActive] = useState(false);

  // New Quantum Video States
  const [isLoadingQuantum, setIsLoadingQuantum] = useState(true);
  const [isQuantumModalOpen, setIsQuantumModalOpen] = useState(false);
  const [isQuantumDocked, setIsQuantumDocked] = useState(false);
  const [hasDismissedPermanently, setHasDismissedPermanently] = useState(false);

  // Logic to trigger the Quantum Entry
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingQuantum(false);
      setIsQuantumModalOpen(true);
    }, 2800); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="animate-in fade-in duration-700 relative overflow-x-hidden">
      
      {/* --- 1. QUANTUM PULSE LOADER (Initial Entry Only) --- */}
      {isLoadingQuantum && (
        <div className="fixed inset-0 z-[150] bg-slate-950 flex flex-col items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-amber-500/20 animate-ping duration-1000"></div>
            <div className="absolute inset-0 rounded-full bg-amber-500/10 animate-pulse duration-700 delay-150"></div>
            <div className="relative w-24 h-24 bg-slate-900 border-2 border-amber-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.4)]">
              <Zap className="w-10 h-10 text-amber-500 animate-pulse" />
            </div>
          </div>
          <div className="mt-8 text-center">
            <h2 className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-2">Initializing</h2>
            <p className="text-slate-400 font-serif italic">Quantum Thinking Masterclass...</p>
          </div>
        </div>
      )}

      {/* --- 2. FLOATING QUANTUM PLAYER OVERLAY --- */}
      {isQuantumModalOpen && !hasDismissedPermanently && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-1000" 
            onClick={() => { setIsQuantumModalOpen(false); setIsQuantumDocked(true); }}
          ></div>
          
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(245,158,11,0.25)] border border-amber-500/30 animate-in zoom-in duration-700">
            <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/90 to-transparent z-20 flex justify-between items-start">
              <div>
                <span className="flex items-center gap-2 text-amber-500 font-bold text-[10px] uppercase tracking-widest mb-1">
                  <Star className="w-3 h-3 fill-amber-500" /> Exclusive Free Lesson
                </span>
                <h3 className="text-white text-xl md:text-2xl font-bold font-serif">Quantum Thinking Masterclass</h3>
              </div>
              <button 
                onClick={() => { setIsQuantumModalOpen(false); setIsQuantumDocked(true); }}
                className="bg-white/10 hover:bg-amber-500 hover:text-slate-900 text-white p-2 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${QUANTUM_VIDEO_ID}?autoplay=1&rel=0`}
              title="Quantum Thinking Masterclass"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* --- 3. SIDEBAR DOCK BUTTON (WITH WHITE-BOX FIX) --- */}
      {isQuantumDocked && !hasDismissedPermanently && (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[110] flex items-center animate-in slide-in-from-right duration-500">
          <div className="relative flex flex-col items-center">
            <button 
              onClick={() => setHasDismissedPermanently(true)}
              className="absolute -top-10 right-2 p-1.5 bg-slate-900 text-slate-500 hover:text-white rounded-full border border-slate-700 shadow-xl"
            >
              <X className="w-4 h-4" />
            </button>
            <button 
              onClick={() => { setIsQuantumModalOpen(true); setIsQuantumDocked(false); }}
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 py-10 px-4 rounded-l-2xl font-black uppercase tracking-tighter [writing-mode:vertical-lr] flex items-center gap-3 shadow-[-10px_0_30px_rgba(0,0,0,0.4)] transition-all group overflow-hidden"
            >
              <ChevronLeft className="w-5 h-5 mb-2 group-hover:-translate-x-1 transition-transform" />
              <span className="flex items-center gap-2">Quantum Lesson <Zap className="w-4 h-4 fill-slate-900 mt-2" /></span>
            </button>
          </div>
        </div>
      )}

      {/* --- ORIGINAL PAGE CONTENT STARTS HERE --- */}

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
            Welcome to our Quantum Mind Mastery Course for advisors and their associates. Each lesson goes beyond theory to SHOW you exactly how to implement Quantum Mind solutions, methods, and frameworks that make you naturally compelling and deeply trusted by high-net-worth individuals.
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
              "We believe the best way to learn unique approaches to life and business is to have the inventor teach you by doing them with you. Teaching by telling isn’t as effective as actually APPLYING the details directly with the inventor."
            </p>
          </div>
          
          <div className="bg-amber-500 p-8 md:p-12 rounded-3xl border border-amber-600 shadow-2xl text-left transform hover:scale-[1.01] transition-all duration-300 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif">Quantum Alignment</h3>
            <p className="text-slate-900 font-medium text-lg leading-relaxed">
              Learn how to use Quantum Physics to achieve more of what you want. We don’t get what we want, we get what we are aligned with. If you desire greater connection with the people you want as loyal clients, you must grow yourself into being what they need someone to be in their lives, that they lack right now.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Quantum thinking and doing elevate you into <span className="text-slate-900 font-bold uppercase tracking-tight">BEING</span> above and beyond the reach of the masses of ordinary advisors… who offer similar engagement, conversations, and solutions. There are no competitive advantages in being ordinary or similar to others.
            </p>
          </div>
        </div>
      </section>

      {/* Systems Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Quantum Systems Produce Quantum Leaps in Performance</h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                This mastery course teaches proven SYSTEMS, methods, ways, and means that optimize Quantum Thinking beyond Fiduciary Standards of Care above federal and state regulations. While many advisors struggle to COMPLY with government standards, we will SHOW YOU how to transcend them in ways that dazzle discerning highly affluent people and ATTRACT them to become your loyal long-term clients.          
              </p>
              
              <p className="text-amber-400 font-semibold text-lg mb-2 leading-relaxed italic">
                The Transcendent Heroic Advisor Mastery Course provides an array of practical, well-proven thinking and behavioral shifts that help grow you into what people need, but don't know how to ask for… YET.
              </p>

              <p className="text-white font-bold text-lg mb-6 leading-relaxed">
                As you learn our methods, ways, and means by DOING them properly, you will:
              </p>
              
              <div className="space-y-4">
                {[
                  "Demonstrate how you are extraordinary, priceless, and irreplaceable.",
                  "Become far more attractive to A-level referrals… without asking for them.",
                  "Transcend fiduciary regulations in ways that matter most to clients.",
                  "Consistently deliver dazzling multidimensional wisdom that your competitors do not offer… and cannot even imagine.",
                  "Create an entire ecosystem of like-minded transcendent advisors that bring dynamic execution of details to clients. Helping YOU to bring clients into alignment with who, what, and where they would rather be now and next."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/30">
                      <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    </div>
                    <p className="text-slate-300 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[500px] lg:min-h-full">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
                alt="System Performance" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-amber-500/5 border border-slate-800"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-500 p-6 rounded-2xl hidden md:block z-10">
                <p className="text-slate-900 font-bold text-xl leading-tight">Beyond Compliance.<br/>Into Transcendence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Original Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-serif">
            Experience the Introductory Principles by Doing them with Bruce
          </h2>
          <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl mb-12">
            
            <iframe 
              className={`w-full h-full transition-opacity duration-700 ${isVideoActive ? 'opacity-100' : 'opacity-30'}`}
              src={`https://www.youtube.com/embed/WS1ccYNZJtU?autoplay=${isVideoActive ? 1 : 0}&rel=0`}
              title="Welcome Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>

            {!isVideoActive && (
              <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-md bg-slate-900/10">
                <button 
                  onClick={() => setIsVideoActive(true)}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all shadow-xl hover:scale-105 active:scale-95"
                >
                  <PlayCircle className="w-5 h-5" /> Watch Introduction
                </button>
              </div>
            )}
          </div>

          <div className="max-w-4xl mx-auto text-left space-y-8">
            <p className="text-slate-700 text-xl font-medium leading-relaxed">
              To demonstrate these ideas in action, you will receive immediate access to the following complimentary resources:
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <Gift className="w-6 h-6 text-amber-600" />
                </div>
                <p className="text-slate-600 text-lg">
                  Free Download of <strong className="text-slate-900">“Ten Steps to Creating Your Dynamic and Magnetic 30-Second Marketing Message”</strong>
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <p className="text-slate-600 text-lg">
                  <strong className="text-slate-900">Two highly confidential 45-minute calls with Bruce</strong> to create your emotionally and intellectually captivating “Ideal Introduction” and 30-second messages.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="text-slate-900 font-bold text-lg mb-4 flex items-center gap-2">
                  <PlayCircle className="w-5 h-5 text-amber-600" /> Plus, selected video lessons from "The Wright Exit Strategy; Wealth, How to Create It, Keep It, and Use It" including:
                </p>
                <ul className="space-y-3 pl-7">
                  <li className="text-slate-600 list-disc">How to Create an Effective Ecosystem for Uncommon Results</li>
                  <li className="text-slate-600 list-disc">Do Not Claim You Care, Show You Care</li>
                  <li className="text-slate-600 list-disc">Using Quantum Mind to Achieve Exceptional Outcomes Unavailable Through Competitors</li>
                </ul>
              </div>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">
              These lessons are a direct demonstration of the Quantum Thinking and ways of doing and BEING that deliver the Transcendent Heroic Advisor framework.
            </p>
            
            <p className="text-slate-900 text-xl font-bold border-l-4 border-amber-500 pl-4">
              Make your Quantum Leap ahead of competitors today before this course becomes available to advisors everywhere in the spring of 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Reserve Place CTA Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Reserve Your Place</h2>
          <p className="text-xl text-slate-600 mb-10">
            The Transcendent Heroic Advisor Mastery Course will be available to everyone in the Spring of 2026.
            <br/>
            <span className="font-bold text-amber-600 mt-2 block italic underline">Secure Early Riser pricing of $997.97 now.</span>
          </p>
          
          <div className="max-w-md mx-auto">
              <Link 
                to="/purchase"
                className="block w-full py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-lg active:scale-[0.98] text-center"
              >
                Get Free Resources & Secure My Seat
              </Link>
              
              <div className="space-y-6 pt-10">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-left">
                  <h4 className="text-slate-900 font-bold mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-600" /> Want to learn more?
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    To arrange a confidential “Due Diligence” call with Bruce Raymond Wright, click{' '}
                    <a 
                      href="https://calendly.com/bwright-msdi/45-minute-consultation-re-30-second-msg" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-amber-600 font-bold underline hover:text-amber-700"
                    >
                      HERE
                    </a>
                  </p>
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">
                    Zooms available beginning at 1:00 p.m. Pacific Mon - Fri
                  </p>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
