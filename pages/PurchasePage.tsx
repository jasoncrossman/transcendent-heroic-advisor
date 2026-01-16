import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronLeft, Star, PlayCircle } from 'lucide-react';

const PurchasePage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-slate-900 mb-10 font-medium group">
          <ChevronLeft className="mr-1 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Details
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-16">
          {/* CONTENT COLUMN */}
          <div className="lg:w-7/12 space-y-10">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <h1 className="text-4xl font-bold text-slate-900 mb-8 font-serif leading-tight">Secure Your Place in the Mastery Course</h1>
              <div className="space-y-8">
                <div className="flex gap-5 pb-8 border-b border-slate-100">
                  <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center text-white shrink-0">
                    <Star className="w-10 h-10 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xl">Transcendent Heroic Advisor Mastery Course</h3>
                    <p className="text-slate-500 font-serif italic">Quantum Mind Mastery for Professionals</p>
                    <span className="inline-block mt-3 px-3 py-1 bg-amber-100 text-amber-800 text-[10px] font-black rounded-full uppercase tracking-widest">Early Riser Special</span>
                  </div>
                </div>
                <div className="space-y-6 pt-4">
                  <h4 className="font-bold text-slate-900 text-lg uppercase tracking-tight">Your Enrollment Includes:</h4>
                  <div className="space-y-4">
                    {[
                      "2x Confidential 45min Calls with Bruce",
                      "Ten Steps to Creating Your Magnetic 30-Second Message (workbook)",
                      "(4) Free Lessons From The Wright Exit Strategy; Wealth Training",
                      "Macro Strategic Planning® Your Life and Business (workbook)"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                        <ShieldCheck className="w-6 h-6 text-[#F59E0B] shrink-0" />
                        <span className="text-sm font-medium text-slate-600">{item}</span>
                      </div>
                    ))}
                    <div className="mt-8 p-8 bg-slate-900 rounded-[2rem] border-2 border-[#F59E0B] shadow-2xl relative overflow-hidden">
                      <div className="relative z-10 flex items-start gap-6">
                        <div className="bg-[#F59E0B] p-3 rounded-xl shrink-0">
                          <PlayCircle className="w-8 h-8 text-slate-900" />
                        </div>
                        <div>
                          <h5 className="text-[#F59E0B] font-bold text-lg mb-2 italic underline underline-offset-8">Early Access:</h5>
                          <p className="text-white font-bold leading-snug text-lg">Receive our 2-hour "Magnetic 30-Second Message" course one week early.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STRIPE COLUMN */}
          <div className="lg:w-5/12">
            <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl border border-slate-100 sticky top-12 overflow-hidden">
               <div className="p-6 text-center border-b border-slate-50">
                  <h2 className="text-xl font-bold text-slate-900 font-serif">Secure Enrollment</h2>
               </div>
               <div className="min-h-[650px]">
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
