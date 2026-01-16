import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CreditCard, ChevronLeft, ArrowRight, Star, PlayCircle } from 'lucide-react';

const PurchasePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [shippingAddress, setShippingAddress] = useState('');

  // 1. Detect return from Stripe to show the Book Address Popup
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('payment_success')) {
      setShowSuccessModal(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // 2. Log lead in Zapier
      await fetch("https://hooks.zapier.com/hooks/catch/18380285/uwqwyud/", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ email, fullName, source: "Mastery Checkout Start" }),
      });

      // 3. Initialize Stripe Pop-up
      // @ts-ignore
      const stripe = window.Stripe('pk_live_4QZHow0uzfALujwLcvSBXSPK');
      
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{
          price: 'price_1QisL7KWV16y1R8YQ9M6yS5J', // Your $997.97 Product
          quantity: 1,
        }],
        mode: 'payment',
        // Redirects back here with a success flag
        successUrl: window.location.origin + window.location.pathname + '?payment_success=true',
        cancelUrl: window.location.origin + window.location.pathname,
        customerEmail: email,
      });

      if (error) throw error;

    } catch (err) {
      console.error("Stripe Modal Error:", err);
      // Fallback: If the pop-up is blocked or fails, use the direct link
      window.location.href = `https://buy.stripe.com/cNi00cemBbl44Na5bu2go00?prefilled_email=${encodeURIComponent(email)}`;
    } finally {
      setIsLoading(false);
    }
  };

  const handleShippingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("https://hooks.zapier.com/hooks/catch/18380285/uwqwyud/", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({ email, shippingAddress, type: "Signed Book Request" }),
    });
    setShowSuccessModal(false);
    window.location.href = "/academy"; // Final destination
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      
      {/* SIGNED BOOK MODAL */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-md z-[999] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Star className="w-8 h-8 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2 font-serif text-center">Payment Received!</h2>
            <p className="text-slate-600 mb-6 text-center font-medium">Where should Bruce mail your free signed copy of <span className="italic">The Wright Exit Strategy</span>?</p>
            <form onSubmit={handleShippingSubmit} className="space-y-4">
              <textarea required className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-amber-500" placeholder="Full Shipping Address..." rows={3} value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} />
              <button type="submit" className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all">Claim My Signed Copy</button>
            </form>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-slate-900 mb-8 font-medium group">
          <ChevronLeft className="mr-1 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Course Details
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Order Summary - FULL ORIGINAL TEXT RESTORED */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h1 className="text-3xl font-bold text-slate-900 mb-6 font-serif">Secure Your Place in the Mastery Course</h1>
              <div className="flex justify-between items-start pb-6 border-b border-slate-100">
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-slate-900 rounded-xl flex items-center justify-center text-white shrink-0"><Star className="w-8 h-8 text-amber-500" /></div>
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

              <div className="space-y-4 pt-4">
                <h4 className="font-bold text-slate-900">Your Enrollment Includes:</h4>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> <span>2x Confidential 45min Calls with Bruce</span></li>
                  <li className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> <span>Ten Steps to Creating Your Dynamic & Magnetic 30-Second Marketing Message (workbook)</span></li>
                  <li className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> <span>(4) Free Lessons From The Best Selling The Wright Exit Strategy; Wealth - How to Create It, Keep It, and Use It Advisory Training</span></li>
                  <li className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> <span>The Wright Exit Strategy; Wealth - How to Create It, Keep It, and Use It Book</span></li>
                  <li className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> <span>Transcendent Thought and Market Leadership 1.0; How to Lead Any Profession, Anywhere in the World Book</span></li>
                  <li className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> <span>Macro Strategic Planning® Your Life and Business (workbook)</span></li>
                  
                  <li className="mt-20 p-6 bg-slate-900 rounded-2xl border-2 border-amber-500 shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="bg-amber-500 p-2 rounded-lg shrink-0"><PlayCircle className="w-6 h-6 text-slate-900" /></div>
                      <div>
                        <h5 className="text-amber-500 font-bold text-base mb-2 italic underline underline-offset-4">Early Access to our Feb 15th Launch:</h5>
                        <p className="text-white font-bold text-base mb-3">Receive our 2-hour "Magnetic 30-Second Message" course one week before the official February 15th launch.</p>
                        <p className="text-slate-300 text-xs">You’ll learn how to clearly communicate your true value in a way that attracts higher-quality clients and positions you as the obvious choice.</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 sticky top-24">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2"><CreditCard className="w-5 h-5 text-amber-600" /> Payment Details</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none" />
                <input required type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none" />
                
                <div className="pt-4 border-t border-slate-100 space-y-2">
                   <div className="flex justify-between text-slate-600"><span>Subtotal</span><span>$997.97</span></div>
                   <div className="flex justify-between text-green-600 font-bold"><span>Early Riser Discount</span><span>-$500.00</span></div>
                   <div className="flex justify-between text-xl font-bold pt-4 border-t border-slate-100 text-slate-900"><span>Total Due</span><span>$997.97</span></div>
                </div>

                <button type="submit" disabled={isLoading} className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                  {isLoading ? 'Opening Secure Portal...' : 'Complete Enrollment'} <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
