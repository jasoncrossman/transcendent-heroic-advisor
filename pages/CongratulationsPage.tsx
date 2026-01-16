import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Share2, Mail, ArrowRight, Gift } from 'lucide-react';

const CongratulationsPage: React.FC = () => {
  const navigate = useNavigate();
  const [funnelStep, setFunnelStep] = useState<'welcome' | 'shipping' | 'share' | 'complete'>('welcome');
  const [shippingData, setShippingData] = useState({ name: '', address: '' });
  const [shareEmail, setShareEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // STEP 1.5: The Continue Button logic
  const handleContinue = () => {
    window.open("https://calendly.com/bwright-msdi/45-minute-consultation-re-30-second-msg", "_blank");
    setFunnelStep('shipping');
  };

  const handleShippingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("https://hooks.zapier.com/hooks/catch/18380285/uwqwyud/", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ ...shippingData, type: "Signed Book Request" }),
      });
    } catch (err) { console.error(err); }
    setIsSubmitting(false);
    setFunnelStep('share');
  };

  const handleFinalRedirect = () => {
    setFunnelStep('complete');
    setTimeout(() => navigate('/'), 2000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        
        {/* --- WELCOME SCREEN --- */}
        {funnelStep === 'welcome' && (
          <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-slate-100 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-amber-50 rounded-2xl flex items-center justify-center mb-8 mx-auto">
              <CheckCircle2 className="w-10 h-10 text-[#F59E0B]" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6 font-serif">Welcome to Mastery</h1>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              I am honored to have you in this cohort. We have two final steps to complete your onboarding.
            </p>
            <button 
              onClick={handleContinue}
              className="w-full py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-xl"
            >
              Continue to Onboarding <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* --- SHIPPING MODAL --- */}
        {funnelStep === 'shipping' && (
          <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-300">
            <Gift className="w-12 h-12 text-[#F59E0B] mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-2 font-serif">Shipping Details</h2>
            <p className="text-slate-600 mb-8">Where should Bruce send your signed copy of the book?</p>
            <form onSubmit={handleShippingSubmit} className="space-y-4">
              <input 
                type="text" placeholder="Full Name" required 
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-amber-500"
                value={shippingData.name} onChange={(e) => setShippingData({...shippingData, name: e.target.value})}
              />
              <textarea 
                placeholder="Mailing Address..." required rows={3}
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-amber-500"
                value={shippingData.address} onChange={(e) => setShippingData({...shippingData, address: e.target.value})}
              />
              <button className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all">
                {isSubmitting ? 'Saving...' : 'Claim My Signed Book'}
              </button>
              <button type="button" onClick={() => setFunnelStep('share')} className="w-full text-slate-400 text-sm hover:text-slate-600">I'll do this later</button>
            </form>
          </div>
        )}

        {/* --- SHARE MODAL --- */}
        {funnelStep === 'share' && (
          <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-slate-100 text-center animate-in zoom-in-95 duration-300">
            <Share2 className="w-12 h-12 text-[#F59E0B] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-2 font-serif">Share the Opportunity</h2>
            <p className="text-slate-600 mb-8">Know a colleague who belongs in this cohort? Pass it on.</p>
            <input 
              type="email" placeholder="Colleague's Email" 
              className="w-full px-5 py-4 rounded-2xl border border-slate-200 mb-4 outline-none"
              value={shareEmail} onChange={(e) => setShareEmail(e.target.value)}
            />
            <button onClick={handleFinalRedirect} className="w-full py-4 bg-amber-500 text-slate-900 font-bold rounded-2xl mb-4 hover:bg-amber-400">
              Send Invite
            </button>
            <button onClick={handleFinalRedirect} className="text-slate-400 text-sm">Finish & Complete</button>
          </div>
        )}

        {/* --- FINAL STATE --- */}
        {funnelStep === 'complete' && (
          <div className="text-center animate-in fade-in duration-500">
             <CheckCircle2 className="w-20 h-20 text-amber-500 mx-auto mb-6 animate-bounce" />
             <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">You're All Set!</h2>
             <p className="text-slate-500">Redirecting you back to the main site...</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default CongratulationsPage;
