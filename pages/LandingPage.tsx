// 1. Add this state at the top of your LandingPage component
const [isVideoActive, setIsVideoActive] = useState(false);

// ... inside your return statement ...

{/* Video Section with Blurred Cover */}
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
          {/* Glassmorphism Blur Effect */}
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
          
          {/* Subtle branding tag */}
          <div className="absolute bottom-8 text-slate-300/60 text-xs font-bold uppercase tracking-widest">
            Quantum Mind Mastery Series
          </div>
        </div>
      )}
    </div>

    {/* ... rest of your complimentary resources text ... */}
  </div>
</section>
