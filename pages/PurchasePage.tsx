import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, CheckCircle2, Mail, ArrowRight } from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscriber email:", email);
    navigate('/purchase');
  };

  const benefits = [
    "Demonstrate how you are extraordinary, priceless, and irreplaceable.",
    "Become far more attractive to A-level referrals… without asking for them.",
    "Transcend fiduciary regulations in ways that matter most to clients.",
    "Consistently deliver dazzling multidimensional wisdom that your competitors do not offer… and cannot even imagine.",
    "Create an entire ecosystem of like-minded transcendent advisors that bring dynamic execution of details to clients. Helping YOU to bring clients into alignment with who, what, and where they would rather be now and next."
  ];

  return (
    <div className="animate-in fade-in duration-700 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920" 
            alt="Quantum Vision Background" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900 to-slate-900"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-amber-400 uppercase border border-amber-400/30 rounded-full bg-amber-400/10 backdrop-blur-sm">
            Cohort Launching January 2026
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
            The Transcendent <span className="text-amber-500">Heroic Advisor</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed mb-10">
            Welcome to our Quantum Mind Mastery Course. We don't just teach theory; we <span className="text-white font-semibold">SHOW</span> you how to implement Quantum Mind solutions that transform your practice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/purchase" 
              className="w-full sm:w-auto px-10 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-full transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center group"
            >
              Reserve Your Place <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section ("The Sandwich") */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">Mastery Through Doing</h2>
            <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-amber-500 pl-6 text-left inline-block">
              "We believe the best way to learn unique approaches to life and business is to have the inventor teach you by doing them with you."
            </p>
          </div>
          
          <div className="bg-amber-500 p-8 md:p-12 rounded-3xl border border-amber-600 shadow-2xl text-left transform hover:scale-[1.01] transition-all duration-300 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif underline decoration-slate-900/20 underline-offset-8">Quantum Alignment</h3>
            <p className="text-slate-900 font-medium text-lg leading-relaxed">
              Learn how to use Quantum Physics to achieve more of what you want. We don’t get what we want, we get what we are <strong>aligned</strong> with. To attract loyal, high-level clients, you must evolve into the person they are currently missing in their lives.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Quantum thinking elevates you into <span className="text-slate-900 font-extrabold uppercase tracking-tight">BEING</span> above and beyond the reach of the ordinary. There is no competitive advantage in being ordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Systems Intro Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-amber-500">Quantum Systems Produce Quantum Leaps in Performance</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                This mastery course teaches proven SYSTEMS, methods, ways, and means that optimize Quantum Thinking beyond Fiduciary Standards of Care above federal and state regulations. While many advisors struggle to COMPLY with government standards, we will SHOW YOU how to transcend them in ways that dazzle discerning highly affluent people and ATTRACT them to become your loyal long-term clients.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
                alt="System Performance" 
                className="rounded-2xl shadow-2xl shadow-amber-500/10 border border-slate-800"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 p-6 rounded-2xl hidden md:block shadow-xl">
                <p className="text-slate-900 font-bold text-xl leading-tight text-center">Beyond Compliance.<br/>Into Transcendence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation/Results Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xl text-slate-700 leading-relaxed font-medium">
              The Transcendent Heroic Advisor Mastery Course provides an array of practical, well-proven thinking and behavioral shifts that help grow you into what people need, but don’t know how to ask for… YET.
            </p>
            <p className="text-lg text-amber-600 font-bold mt-4 uppercase tracking-wide">
              As you learn our methods, ways, and means by DOING them properly, you will:
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {benefits.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-amber-200 transition-colors">
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center border border-amber-200">
                  <CheckCircle2 className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-slate-700 text-lg leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-serif">A Welcome from Bruce Wright and Jason Crossman</h2>
          <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl mb-12">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/WS1ccYNZJtU"
              title="Welcome Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="max-w-3xl mx-auto text-left bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-inner">
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              In this brief orientation video, Jason Crossman and Bruce Wright discuss four essential questions:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-800 font-semibold">
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-amber-500"></div> Bruce's unique work and legacy.</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-amber-500"></div> Why advisors get stuck with mid-level clients.</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-amber-500"></div> Differentiating through transcendent thinking.</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-amber-500"></div> Why Bruce is the leader for this transformation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reserve Place CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white">Reserve Your Place</h2>
          <p className="text-xl text-slate-300 mb-10">
            The Mastery Course will be available to the public in Spring 2026.
            <br/>
            <span className="font-bold text-amber-400 mt-2 block italic text-2xl">Secure Early Riser pricing of $997.97 now.</span>
          </p>
          
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-slate-700 bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all shadow-inner"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                Secure My Seat <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-slate-500 pt-2">
                Limited cohort availability. By signing up, you agree to receive course updates.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
