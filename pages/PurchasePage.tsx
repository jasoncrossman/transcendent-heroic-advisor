import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronLeft, Star, PlayCircle, Truck } from 'lucide-react';

const PurchasePage: React.FC = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [shippingAddress, setShippingAddress] = useState('');
  const [isSubmittingAddress, setIsSubmittingAddress] = useState(false);

  // 1. Detect the Stripe Redirect to show the "Signed Book" Modal
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('payment_success')) {
      setShowSuccessModal(true);
    }
  }, []);

  const handleShippingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingAddress(true);

    const payload = {
      shipping_address: shippingAddress.trim(),
      type: "Signed Book Request",
      source: "Mastery Post-Purchase Modal",
      timestamp: new Date().toISOString()
    };

    try {
      // Send shipping info to your Zapier hook
      await fetch("https://hooks.zapier.com/hooks/catch/18380285/uwqwyud/", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
      });

      // After 2 seconds, send them to the final destination
      setTimeout(() => {
        window.location.assign("https://zippi.link/exitstrategy");
      }, 1500);
      
    } catch (error) {
      console.error("Error saving address:", error);
      window.location.assign("https://zippi.link/exitstrategy");
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 animate-in fade-in duration-700">
      
      {/* SHIPPING ADDRESS MODAL (Triggered by ?payment_success=true) */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-md z-[9999] flex items-center justify-center p-4">
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
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-[#F59E0B] transition-all bg-slate-50 placeholder:text-slate-400" 
                placeholder="Full Shipping Address (Street, City, State, Zip)..." 
                rows={3} 
                value={shippingAddress} 
                onChange={(e) => setShippingAddress(e.target.value)} 
              />
              <button 
                type="submit" 
                disabled={isSubmittingAddress}
                className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 disabled:opacity-50"
              >
                {isSubmittingAddress ? 'Saving Address...' : 'Claim My Signed Book'}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-slate-900 mb-10 font-medium group transition-colors">
          <ChevronLeft className="mr-1 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Details
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* LEFT: COURSE DETAILS (Full Text) */}
          <div className="lg:col-span-7 space-y-10">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <h1 className="text-4xl font-bold text-slate-900 mb-8 font-serif leading-tight">Secure Your Place in the Mastery Course</h1>
              
              <div className="space-y-8">
                <div className="flex justify-between items-start pb-8 border-b border-slate-100">
                  <div className="flex gap-5">
                    <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-inner">
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
                      <span className="text-sm font-medium">Ten Steps to Creating Your Dynamic & Magnetic 30-Second Marketing Message (workbook)</span>
                    </li>
                    <li className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                      <ShieldCheck className="w-6 h-6 text-[#F59E0B] shrink-0" />
                      <span className="text-sm font-medium">(4) Free Lessons From The Best Selling The Wright Exit Strategy; Wealth - How to Create It, Keep It, and Use It Advisory Training</span>
                    </li>
                    <li className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                      <ShieldCheck className="w-6 h-6 text-[#F59E0B] shrink-0" />
                      <span className="text-sm font-medium">Macro Strategic Planning® Your Life and Business (workbook)</span>
                    </li>
                    
                    {/* VIDEO HIGHLIGHT BOX */}
                    <li className="mt-8 p-8 bg-slate-900 rounded-[2rem] border-2 border-[#F59E0B] shadow-2xl relative overflow-hidden group">
                      <div className="relative z-10 flex items-start gap-6">
                        <div className="bg-[#F59E0B] p-3 rounded-xl shrink-0 shadow-lg shadow-[#F59E0B]/20">
                          <PlayCircle className="w-8 h-8 text-slate-900" />
                        </div>
                        <div>
                          <h5 className="text-[#F59E0B] font-bold text-lg mb-2 italic underline underline-offset-8 decoration-[#F59E0B]/30">Early Access to our Feb 15th Launch:</h5>
                          <p className="text-white font-bold leading-snug mb-4 text-lg">
                            Receive our 2-hour "Magnetic 30-Second Message" course one week before the official February 15th launch.
                          </p>
                          <p className="text-slate-300 text-sm leading-relaxed font-medium">
                            Learn how to clearly communicate your true value in a way that attracts higher-quality clients and positions you as the obvious choice—without sounding salesy.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: THE STRIPE PRICING TABLE EMBED */}
          <div className="lg:col-span-5">
            <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 sticky top-12 overflow-hidden">
               <div className="p-6 text-center border-b border-slate-50">
                  <h2 className="text-xl font-bold text-slate-900 font-serif">Secure Enrollment</h2>
               </div>
               
               <div className="min-h-[650px] bg-white">
                {/* @ts-ignore */}
                <stripe-pricing-table 
                  pricing-table-id="prctbl_1Sq3zc4qZAoEhXfslOVzOlXK"
                  publishable-key="pk_live_4QZHow0uzfALujwLcvSBXSPK"
                >
                {/* @ts-ignore */}
                </stripe-pricing-table>
               </div>

               <div className="p-6 bg-slate-50/50">
                  <p className="text-center text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black">
                    🔒 Certified Secure 256-Bit Connection
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
