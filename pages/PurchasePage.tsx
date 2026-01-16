import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronLeft, Star, PlayCircle, Truck } from 'lucide-react';

const PurchasePage: React.FC = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [shippingAddress, setShippingAddress] = useState('');
  const [isSubmittingAddress, setIsSubmittingAddress] = useState(false);

  // --- THE NUCLEAR GHOST BUSTER ---
  useEffect(() => {
    if (window.location.href.includes('payment_success=true')) {
      const killMemberSpace = () => {
        // 1. Target all known MemberSpace classes and IDs
        const selectors = [
          '.ms-widget', '#memberspace-widget', '.ms-modal-container', 
          '[id^="memberspace"]', '.ms-overlay', '.ms-is-logged-in'
        ];
        
        selectors.forEach(s => {
          document.querySelectorAll(s).forEach(el => {
            (el as HTMLElement).style.setProperty('display', 'none', 'important');
            (el as HTMLElement).style.setProperty('visibility', 'hidden', 'important');
          });
        });

        // 2. Nuclear option: Find any element that contains "memberspace" in its ID or class
        const allElements = document.getElementsByTagName('*');
        for (let i = 0; i < allElements.length; i++) {
          const el = allElements[i] as HTMLElement;
          if (el.id?.toLowerCase().includes('memberspace') || el.className?.toString().toLowerCase().includes('ms-')) {
             el.style.setProperty('display', 'none', 'important');
             el.style.setProperty('opacity', '0', 'important');
             el.style.setProperty('pointer-events', 'none', 'important');
          }
        }
      };

      // Run every 100ms for the first 3 seconds to catch late injections
      const interval = setInterval(killMemberSpace, 100);
      setTimeout(() => clearInterval(interval), 3000);

      const observer = new MutationObserver(killMemberSpace);
      observer.observe(document.body, { childList: true, subtree: true });
      return () => {
        clearInterval(interval);
        observer.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    if (window.location.href.includes('payment_success=true')) {
      setShowSuccessModal(true);
    }
  }, []);

  const handleShippingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingAddress(true);
    try {
      await fetch("https://hooks.zapier.com/hooks/catch/18380285/uwqwyud/", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          shipping_address: shippingAddress.trim(),
          type: "Signed Book Request",
          timestamp: new Date().toISOString()
        }),
      });
      window.location.assign("/#/congratulations");
    } catch (error) {
      window.location.assign("/#/congratulations");
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 animate-in fade-in duration-700">
      
      {/* MODAL LAYER: Increased Z-Index to 100,000 to beat MemberSpace */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-[#0f172a]/95 backdrop-blur-md z-[100000] flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] p-8 max-w-md w-full shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Truck className="w-10 h-10 text-[#F59E0B]" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3 font-serif text-center">Payment Confirmed</h2>
            <p className="text-slate-600 mb-8 text-center leading-relaxed">
              Bruce would like to mail you a <strong>signed copy</strong> of <span className="italic">The Wright Exit Strategy</span>. Where should he send it?
            </p>
            <form onSubmit={handleShippingSubmit} className="space-y-4">
              <textarea 
                required 
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-[#F59E0B] bg-slate-50" 
                placeholder="Full Shipping Address..." 
                rows={3} 
                value={shippingAddress} 
                onChange={(e) => setShippingAddress(e.target.value)} 
              />
              <button 
                type="submit" 
                disabled={isSubmittingAddress}
                className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-lg"
              >
                {isSubmittingAddress ? 'Saving Address...' : 'Claim My Signed Book'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* --- Rest of your UI (The feature list and Stripe Table) --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-slate-900 mb-10 font-medium group transition-colors">
          <ChevronLeft className="mr-1 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Details
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-10">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <h1 className="text-4xl font-bold text-slate-900 mb-8 font-serif leading-tight">Secure Your Place in the Mastery Course</h1>
              <div className="space-y-8">
                <div className="flex justify-between items-start pb-8 border-b border-slate-100">
                  <div className="flex gap-5">
                    <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center text-white shrink-0">
                      <Star className="w-10 h-10 text-[#F59E0B]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-xl">Transcendent Heroic Advisor Mastery Course</h3>
                      <p className="text-slate-500 font-serif italic">Quantum Mind Mastery for Professionals</p>
                      <span className="inline-block mt-3 px-3 py-1 bg-amber-100 text-amber-800 text-[10px] font-black rounded-full uppercase tracking-widest">Early Riser Special</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-5 pt-4">
                  <h4 className="font-bold text-slate-900 text-lg uppercase tracking-tight">Your Enrollment Includes:</h4>
                  <ul className="grid grid-cols-1 gap-4 text-slate-600">
                    <li className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                      <ShieldCheck className="w-6 h-6 text-[#F59E0B] shrink-0" />
                      <span className="text-sm font-medium">2x Confidential 45min Calls with Bruce</span>
                    </li>
                    <li className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                      <ShieldCheck className="w-6 h-6 text-[#F59E0B] shrink-0" />
                      <span className="text-sm font-medium">Ten Steps to Creating Your Magnetic 30-Second Marketing Message (workbook)</span>
                    </li>
                    <li className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                      <ShieldCheck className="w-6 h-6 text-[#F59E0B] shrink-0" />
                      <span className="text-sm font-medium">(4) Free Lessons From The Wright Exit Strategy; Wealth Training</span>
                    </li>
                    <li className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                      <ShieldCheck className="w-6 h-6 text-[#F59E0B] shrink-0" />
                      <span className="text-sm font-medium">Macro Strategic Planning® Your Life and Business (workbook)</span>
                    </li>
                    <li className="mt-8 p-8 bg-slate-900 rounded-[2rem] border-2 border-[#F59E0B] shadow-2xl relative overflow-hidden group">
                      <div className="relative z-10 flex items-start gap-6">
                        <div className="bg-[#F59E0B] p-3 rounded-xl shrink-0">
                          <PlayCircle className="w-8 h-8 text-slate-900" />
                        </div>
                        <div>
                          <h5 className="text-[#F59E0B] font-bold text-lg mb-2 italic underline underline-offset-8">Early Access:</h5>
                          <p className="text-white font-bold leading-snug mb-4 text-lg">Receive our 2-hour "Magnetic 30-Second Message" course one week early.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl border border-slate-100 sticky top-12 overflow-hidden">
               <div className="p-6 text-center border-b border-slate-50">
                  <h2 className="text-xl font-bold text-slate-900 font-serif">Secure Enrollment</h2>
               </div>
               <div className="min-h-[650px] bg-white">
                {/* @ts-ignore */}
                <stripe-pricing-table pricing-table-id="prctbl_1Sq3zc4qZAoEhXfslOVzOlXK" publishable-key="pk_live_4QZHow0uzfALujwLcvSBXSPK" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
