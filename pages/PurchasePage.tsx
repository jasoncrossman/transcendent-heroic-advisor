import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CreditCard, ChevronLeft, ArrowRight, Star, PlayCircle } from 'lucide-react';

const PurchasePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // 1. ZAPIER HOOK: Sends lead info to your automation (which likely talks to Mailchimp)
      await fetch("https://hooks.zapier.com/hooks/catch/18380285/uwqwyud/", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ 
          email: email.trim(), 
          fullName: fullName.trim(), 
          source: "Transcendent Mastery Checkout" 
        }),
      });

      // 2. STRIPE POP-UP: Triggers the secure window on your site
      // @ts-ignore
      const stripe = window.Stripe('pk_live_4QZHow0uzfALujwLcvSBXSPK'); 
      
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{
          // Verified Price ID from your Stripe screenshot
          price: 'price_1QisL7KWV16y1R8YQ9M6yS5J', 
          quantity: 1,
        }],
        mode: 'payment',
        successUrl: window.location.origin + '/academy',
        cancelUrl: window.location.origin + '/purchase',
        customerEmail: email, // Carries the email into the pop-up
      });

      if (error) throw error;
      
    } catch (err) {
      console.error("Checkout error:", err);
      // FALLBACK: If pop-up fails, use the direct link
      window.location.href = `https://buy.stripe.com/cNi00cemBbl44Na5bu2go00?prefilled_email=${encodeURIComponent(email)}`;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 animate-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-slate-900 mb-8 font-medium group transition-colors">
          <ChevronLeft className="mr-1 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Course Details
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Summary Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h1 className="text-3xl font-bold text-slate-900 mb-6 font-serif">Secure Enrollment</h1>
              <div className="flex justify-between items-start pb-6 border-b border-slate-100">
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-slate-900 rounded-xl flex items-center justify-center text-white shrink-0">
                    <Star className="w-8 h-8 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Transcendent Heroic Advisor Mastery</h3>
                    <p className="text-slate-500 text-sm">Early Riser Special Pricing</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-slate-900">$997.97</span>
              </div>

              <div className="space-y-4 pt-4">
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-amber-500 mt-0.5" /> <span>2x Confidential 45min Strategic Consultation Calls</span></li>
                  <li className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-amber-500 mt-0.5" /> <span>Full Mastery Workbook & Resource Vault Access</span></li>
                  <li className="mt-40 p-6 bg-slate-900 rounded-2xl border-2 border-amber-500 shadow-xl">
                    <div className="flex items-start gap-4">
                      <PlayCircle className="w-6 h-6 text-amber-500 shrink-0" />
                      <div>
                        <h5 className="text-amber-500 font-bold mb-1 italic">Feb 15th Launch Bonus:</h5>
                        <p className="text-white font-bold text-sm">Receive the "Magnetic 30-Second Message" course one week early.</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Checkout Column */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 sticky top-24">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-amber-600" /> Payment Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-amber-500" />
                <input required type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-amber-500" />
                <button type="submit" disabled={isLoading} className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
                  {isLoading ? 'Opening Secure Portal...' : 'Complete Enrollment'} <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-center text-xs text-slate-400 italic mt-4">Safe, secure, and encrypted payment portal.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
