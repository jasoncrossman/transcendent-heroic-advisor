import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Truck, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

const CongratulationsPage: React.FC = () => {
  const location = useLocation();
  const [step, setStep] = useState<'letter' | 'shipping' | 'calendar' | 'final'>('letter');
  const [formData, setFormData] = useState({ name: '', address: '' });

  // Detect Stripe Success
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('payment_success') === 'true') {
      console.log("Payment Success Verified");
    }
  }, [location]);

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Direct progression: No Zapier, No MemberSpace
    setStep('calendar');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 relative">
      <div className="max-w-3xl mx-auto">
        
        {/* STEP 1: WELCOME LETTER */}
        <div className={`bg-white rounded-[2.5rem] p-10 md:p-16 shadow-xl border border-slate-100 transition-all duration-500 ${step !== 'letter' ? 'opacity-20 blur-sm pointer-events-none' : 'opacity-100'}`}>
          <h1 className="text-3xl font-bold text-slate-900 mb-8 font-serif leading-tight">
            Welcome to The Transcendent Heroic Advisor Mastery Course
          </h1>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>You’ve officially secured your place in our February 15th cohort, and I am honored to have you with us.</p>
            <p>First things first: I’ll be personally signing and mailing your copy of <em>The Wright Exit Strategy</em> this week. Enter your preferred mailing address on the next screen!</p>
            
            <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-amber-500 my-8">
              <h3 className="font-bold text-slate-900 mb-4">What happens next?</h3>
              <ul className="space-y-4 text-base">
                <li className="flex gap-3">
                  <span className="font-bold text-amber-600 shrink-0">February 8th:</span> 
                  Early Access to our "Magnetic 30-Second Message" video course.
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-amber-600 shrink-0">February 15th:</span> 
                  The full Mastery Portal opens.
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-amber-600 shrink-0">Onboarding Call:</span> 
                  My team will reach out shortly for your first Strategic Call.
                </li>
              </ul>
            </div>

            <p>In the meantime, take a deep breath. You’ve moved from the "technical" to the "transcendent." We are going to do great work together.</p>
            
            <div className="pt-6">
              <p className="font-serif italic text-slate-500">To your success,</p>
              <p className="font-bold text-slate-900 text-xl">Bruce Wright</p>
            </div>

            <button 
              onClick={() => setStep('shipping')}
              className="w-full mt-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 group shadow-xl"
            >
              Continue <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* ONBOARDING OVERLAY FLOW */}
        {step !== 'letter' && (
          <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
            <div className="bg-white rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
              
              {/* STEP 2: ADDRESS COLLECTION */}
              {step === 'shipping' && (
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <Truck className="text-amber-600 w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold font-serif text-slate-900">Signed Book Details</h2>
                  </div>
                  <form onSubmit={handleShippingSubmit} className="space-y-4">
                    <input 
                      type="text" placeholder="Full Name" required
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-amber-500"
                      value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                    <textarea 
                      placeholder="Mailing Address (Street, City, State, Zip)" required rows={3}
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-amber-500"
                      value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})}
                    />
                    <div className="flex flex-col sm:flex-row gap-3 pt-6">
                      <button type="submit" className="flex-[2] py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg">
                        Submit & Book Call
                      </button>
                      <button type="button" onClick={() => setStep('calendar')} className="flex-1 py-4 text-slate-400 font-medium hover:text-slate-600 text-center">
                        Skip
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* STEP 3: CALENDLY */}
              {step === 'calendar' && (
                <div className="h-[700px] flex flex-col relative">
                  <div className="p-4 border-b flex justify-between items-center bg-white sticky top-0 z-10">
                    <h2 className="font-bold flex items-center gap-2 text-slate-900">
                      <Calendar className="w-5 h-5 text-amber-600" /> Book Strategic Call
                    </h2>
                    <button onClick={() => setStep('final')} className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-2 rounded-lg">
                      I've Booked / Skip
                    </button>
                  </div>
                  <div className="flex-1 overflow-auto">
                    <iframe 
                      src="https://calendly.com/bwright-msdi/45-minute-consultation-re-30-second-msg?hide_event_type_details=1&hide_gdpr_banner=1"
                      width="100%" height="100%" frameBorder="0"
                    ></iframe>
                  </div>
                </div>
              )}

              {/* STEP 4: FINAL */}
              {step === 'final' && (
                <div className="p-16 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 font-serif text-slate-900">Congratulations</h2>
                  <p className="text-slate-600 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                    Thanks for joining Transcendent Heroic Advisors! We are excited to start this journey with you.
                  </p>
                  <button 
                    onClick={() => window.location.assign("/#/")}
                    className="py-4 px-12 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl"
                  >
                    Go to Landing Page
                  </button>
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
