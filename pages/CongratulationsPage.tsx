import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Truck, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

const CongratulationsPage: React.FC = () => {
  const location = useLocation();
  const [step, setStep] = useState<'letter' | 'shipping' | 'calendar' | 'final'>('letter');
  const [formData, setFormData] = useState({ name: '', address: '' });

  const calendlyUrl = "https://calendly.com/bwright-msdi/45-minute-consultation-re-30-second-msg?hide_event_type_details=1&hide_gdpr_banner=1";

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('calendar');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 relative">
      {/* BACKGROUND PRE-LOAD */}
      <iframe src={calendlyUrl} className="hidden" title="preload-calendly"></iframe>

      <div className="max-w-3xl mx-auto">
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

        {step !== 'letter' && (
          <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
            <div className="bg-white rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
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
                    <textarea placeholder="Mailing Address" required rows={3} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-amber-500" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
                    <div className="flex gap-3 pt-6">
                      <button type="submit" className="flex-[2] py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg">Submit & Book Appointment</button>
                      <button type="button" onClick={() => setStep('calendar')} className="flex-1 py-4 text-slate-400">Skip</button>
                    </div>
                  </form>
                </div>
              )}

              {step === 'calendar' && (
                <div className="h-[700px] flex flex-col relative">
                  <div className="p-4 border-b flex justify-between items-center bg-white sticky top-0 z-10">
                    <h2 className="font-bold flex items-center gap-2 text-slate-900"><Calendar className="w-5 h-5 text-amber-600" /> Book First Appointment</h2>
                    <button onClick={() => setStep('final')} className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-2 rounded-lg">Skip</button>
                  </div>
                  <div className="flex-1 overflow-auto">
                    <iframe src={calendlyUrl} width="100%" height="100%" frameBorder="0"></iframe>
                  </div>
                </div>
              )}

              {step === 'final' && (
                <div className="p-16 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 font-serif text-slate-900">You're All Set!</h2>
                  <p className="text-slate-600 text-lg mb-10 max-w-md mx-auto">We look forward to seeing you in the Mastery Course.</p>
                  <button onClick={() => window.location.assign("/#/")} className="py-4 px-12 bg-slate-900 text-white font-bold rounded-2xl shadow-xl">Go to Landing Page</button>
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
