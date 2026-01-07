import React, { useState } from 'react'; // Added useState
import { Link } from 'react-router-dom';
import { ShieldCheck, CreditCard, ChevronLeft, ArrowRight, Star } from 'lucide-react';

const PurchasePage: React.FC = () => {
  // 1. Create states to hold the user data
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 2. The function that sends data to Mailchimp and then redirects
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Replace 'YOUR_API_ENDPOINT' with your actual Mailchimp/Webhook URL
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          name: fullName,
          tag: "Transcendent_Heroic_Advisor"
        }),
      });

      // After the data is sent, redirect to your sales page
      window.location.href = "https://zippi.link/exitstrategy";
    } catch (error) {
      console.error("Error signing up:", error);
      // Even if there's an error, we usually redirect so we don't lose the sale
      window.location.href = "https://zippi.link/exitstrategy";
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* ... Header and Course Details remain the same ... */}
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Course Info */}
          <div className="lg:col-span-7">
             {/* [Keep your existing order summary code here] */}
          </div>

          {/* Right Column: Checkout Form */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 sticky top-24">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-amber-600" /> Enrollment Details
              </h2>
              
              {/* Change 3: Wrap inputs in a form and use onSubmit */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none text-slate-900" 
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none text-slate-900" 
                  />
                </div>

                {/* Price Summary omitted for brevity - keep your existing price UI here */}

                <button 
                  disabled={isLoading}
                  type="submit"
                  className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                >
                  {isLoading ? 'Processing...' : 'Complete Enrollment'} <ArrowRight className="w-5 h-5" />
                </button>
              </form>
              
              <p className="text-center text-xs text-slate-400 mt-4">
                Secure 256-bit encrypted checkout. No hidden fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
