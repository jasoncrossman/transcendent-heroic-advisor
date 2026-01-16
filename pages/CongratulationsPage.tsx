import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Truck, Calendar, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';

const CongratulationsPage: React.FC = () => {
  const location = useLocation();
  const [step, setStep] = useState<'letter' | 'shipping' | 'calendar' | 'final'>('letter');
  const [formData, setFormData] = useState({ name: '', address: '' });

  const calendlyUrl = "https://calendly.com/bwright-msdi/45-minute-consultation-re-30-second-msg?hide_event_type_details=1&hide_gdpr_banner=1";
  const courseUrl = "https://globalsparks.com/index.php/search-everything/academies/teachme-academy1/guruprograms/18-teach-me/656-the-wright-exit-strategy-special-edition-wealth-how-to-create-it-keep-it-use-it-with-expert-bruce-wright";

  // Verified Payment Logic
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('payment_success') === 'true') {
      console.log("Success: Payment verified for onboarding flow.");
    }
  }, [location]);

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('calendar');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 relative">
      {/* Pre-load Calendly for instant access */}
      <iframe src={calendlyUrl} className="hidden" title="preload-calendly"></iframe>

      <div className="max-w-3xl mx-auto">
        {/* STEP 1: WELCOME LETTER */}
        <div className={`bg-white rounded-[2.5rem] p-10 md:p-16 shadow-xl border border-slate-100 transition-all duration-500 ${step !== 'letter' ? 'opacity-20 blur-sm pointer-events-none' : 'opacity-100'}`}>
          <h1 className="text-3xl font-bold text-slate-900 mb-8 font-serif leading-tight">
            Welcome to The Transcendent Heroic Advisor Mastery Course
          </h1>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>You’ve officially secured your place in our <strong>February 15th advisor training</strong>, and I am honored to have you with us.</p>
            
            <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-amber-500 my-8">
              <h3 className="font-bold text-slate-900 mb-4 text-xl">What happens next?</h3>
              <ul className="space-y-6 text-base">
                <li className="flex flex-col">
                  <span className="font-bold text-amber-600 uppercase tracking-wider text-sm">February 8th:</span> 
                  <span className="text-slate-800 font-medium text-lg">Early Access to course.</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-bold text-amber-600 uppercase tracking-wider text-sm">February 15th:</span> 
                  <span className="text-slate-800 font-medium text-lg">Mastery Portal opens.</span>
                </li>
                <li className="flex items-start gap-3 pt-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                  <span className="text-slate-700">Get the free signed copy of <strong>THE WRIGHT EXIT STRATEGY; WEALTH - HOW TO CREATE IT, KEEP IT, AND USE IT</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                  <span className="text-slate-700 font-bold">Book your first appointment.</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-6 border-t border-slate-100">
              <p className="font-serif italic text-slate-500">To your success,</p>
              <p className="font-bold text-slate-900 text-xl">Bruce Wright</p>
            </div>

            <button onClick={() => setStep('shipping')} className="w-full mt-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-xl group">
              Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* STEP 2-4: OVERLAY FLOW */}
        {step !== 'letter' && (
          <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
            <div className="bg-white rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
              
              {/* SHIPPING ADDRESS */}
              {step === 'shipping' && (
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <Truck className="text-amber-600 w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold font-serif text-slate-900">Signed Book Details</h2>
                  </div>
                  <form onSubmit={handleShippingSubmit} className="space-y-4">
                    <input type="text" placeholder="Full Name" required className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-amber-500" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    <textarea placeholder="Mailing Address (Street, City, State, Zip)" required rows={3} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-amber-500" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
                    <div className="flex flex-col sm:flex-row gap-3 pt-6">
                      <button type="submit" className="flex-[2] py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg">Submit & Book Appointment</button>
                      <button type="button" onClick={() => setStep('calendar')} className="flex-1 py-4 text-slate-400 font-medium hover:text-slate-600 text-center">Skip</button>
                    </div>
                  </form>
                </div>
              )}

              {/* CALENDLY APPOINTMENT */}
              {step === 'calendar' && (
                <div className="h-[700px] flex flex-col relative">
                  <div className="p-4 border-b flex justify-between items-center bg-white sticky top-0 z-10">
                    <h2 className="font-bold flex items-center gap-2 text-slate-900"><Calendar className="w-5 h-5 text-amber-600" /> Book First Appointment</h2>
                    <button onClick={() => setStep('final')} className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-2 rounded-lg">Skip / Done</button>
                  </div>
                  <div className="flex-1 overflow-auto">
                    <iframe src={calendlyUrl} width="100%" height="100%" frameBorder="0"></iframe>
                  </div>
                </div>
              )}

              {/* FINAL UPSELL & NAVIGATION */}
              {step === 'final' && (
                <div className="p-10 md:p-14 text-center animate-in fade-in zoom-in duration-500 overflow-y-auto max-h-[90vh]">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 font-serif text-slate-900">Congratulations</h2>
                  <p className="text-amber-600 font-bold text-lg mb-6 leading-tight">Thanks for joining Transcendent Heroic Advisors!</p>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-left mb-8">
                    <p className="text-slate-600 leading-relaxed text-sm italic mb-4">
                      Discover the game-changing wisdom that financial advisors don't want you to know! If you want to break free from your current circumstances and design your Ideal Life on your own terms, then you need <strong>The Wright Exit Strategy Full Course</strong>, packed with real stories of triumph and failure.
                    </p>
                    <p className="text-slate-700 leading-relaxed text-sm font-medium">
                      Wright's straightforward teachings will open your eyes to new possibilities and show you exactly how to achieve tangible, measurable success in business and beyond!
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={courseUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-[2] py-4 bg-[#F59E0B] text-slate-900 font-black rounded-xl hover:bg-amber-500 transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      The Wright Exit Strategy <ExternalLink className="w-4 h-4" />
                    </a>
                    <button 
                      onClick={() => window.location.assign("/#/")} 
                      className="flex-1 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg"
                    >
                      Home
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CongratulationsPage;
