import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CreditCard, ChevronLeft, ArrowRight, Star, Zap } from 'lucide-react';

const PurchasePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      email: email.trim(),
      full_name: fullName.trim(),
      source: "Transcendent Mastery Checkout"
    };

    try {
      await fetch("https://hooks.zapier.com/hooks/catch/18380285/uwqwyud/", {
        method: "POST",
        // @ts-ignore
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setTimeout(() => {
        window.location.assign("https://zippi.link/exitstrategy");
      }, 100);
      
    } catch (error) {
      console.error("Submission error:", error);
      window.location.assign("https://zippi.link/exitstrategy");
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 animate-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-slate-900 mb-8 font-medium group transition-colors">
          <ChevronLeft className="mr-1 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Course Details
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Order Summary */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h1 className="text-3xl font-bold text-slate-900 mb-6 font-serif">Secure Your Place in the Mastery Course</h1>
              
              <div className="space-y-6">
                <div className="flex justify-between items-start pb-6 border-b border-slate-100">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-slate-900 rounded-xl flex items-center justify-center text-white shrink-0">
                      <Star className="w-8 h-8 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">Transcendent Heroic Advisor Mastery Course</h3>
                      <p className="text-slate-500 text-sm">Quantum Mind Mastery for Professionals</p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-amber-100 text-amber-800 text-xs font-bold rounded uppercase tracking-wider">Early Riser Special</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-bold text-slate-900">$997.97</span>
                    <span className="block text-sm text-slate-400 line-through">$1,497.97</span>
                  </div>
                </div>

                {/* --- 30-SECOND MESSAGE FEATURED ITEM --- */}
                <div className="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden border border-amber-500/30">
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="bg-amber-500 p-2 rounded-lg shrink-0">
                      <Zap className="w-5 h-5 text-slate-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-500 uppercase text-xs tracking-widest mb-1">Exclusive Masterclass Included</h4>
                      <p className="font-serif text-lg leading-tight mb-2">Ten Steps to Creating Your Dynamic and Magnetic 30-Second Marketing Message</p>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        A guided strategic transformation and deep-dive video session with Bruce Raymond Wright.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h4 className="font-bold text-slate-900">Your Enrollment Also Includes:</h4>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span>2x Confidential 45min Calls with Bruce</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span>Wright Exit Strategy Lessons</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span>Transcendent Thought and Market Leadership 1.0 Book</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span>Access to the Transcendent Heroic Advisor Cohort (Spring 2026)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
              <p className="text-amber-900 font-medium text-sm">
                <strong>Waitlist Note:</strong> This cohort is limited to ensure personalized attention. Registration is first-come, first-served.
              </p>
            </div>
          </div>

          {/* Checkout Form Sidebar */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 sticky top-24">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-amber-600" /> Payment Details
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none text-slate-900 bg-white placeholder:text-slate-400" 
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none text-slate-900 bg-white placeholder:text-slate-400" 
                  />
                </div>

                <div className="pt-4 border-t border-slate-100">
                   <div className="flex justify-between items-center mb-2">
                     <span className="text-slate-600">Subtotal</span>
                     <span className="font-bold text-slate-900">$997.97</span>
                   </div>
                   <div className="flex justify-between items-center mb-6">
                     <span className="text-slate-600">Early Riser Discount</span>
                     <span className="text-green-600 font-bold">-$500.00</span>
                   </div>
                   <div className="flex justify-between items-center text-xl font-bold text-slate-900 mb-8 pt-4 border-t border-slate-100">
                     <span>Total Due</span>
                     <span>$997.97</span>
                   </div>
                </div>

                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20 disabled:opacity-50"
                >
                  {isLoading ? 'Processing...' : 'Complete Enrollment'} <ArrowRight className="w-5 h-5" />
                </button>
                
                <p className="text-center text-xs text-slate-400 mt-4">
                  Secure 256-bit encrypted checkout. No hidden fees.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
