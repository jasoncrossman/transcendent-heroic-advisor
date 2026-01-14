import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  FileText, 
  Video, 
  Download, 
  ExternalLink, 
  Gift, 
  ChevronRight 
} from 'lucide-react';

const FreeResourcesPage: React.FC = () => {
  const resources = [
    {
      title: "The Quantum Advisor Manifesto",
      type: "PDF Guide",
      description: "A 15-page deep dive into the philosophy of the Transcendent Heroic Advisor.",
      icon: <FileText className="w-6 h-6" />,
      tag: "Popular"
    },
    {
      title: "30-Second Message Worksheet",
      type: "Interactive Tool",
      description: "A preliminary framework to help you identify your primary 'Quantum Hook'.",
      icon: <Gift className="w-6 h-6" />,
      tag: "New"
    },
    {
      title: "Introductory Principles Video",
      type: "Video Lesson",
      description: "Bruce Raymond Wright explains the core shift from Compliance to Transcendence.",
      icon: <Video className="w-6 h-6" />,
      tag: "Essential"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Navigation */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link to="/" className="inline-flex items-center text-slate-600 hover:text-amber-600 transition-colors group font-medium">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 font-serif">Free Resources</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Begin your journey into Quantum Mind Mastery with these foundational tools and insights.
          </p>
        </div>

        <div className="grid gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col md:flex-row items-center justify-between gap-6 group">
              <div className="flex items-center gap-6">
                <div className="bg-amber-500/10 p-4 rounded-2xl text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  {resource.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">{resource.type}</span>
                    <span className="bg-slate-100 text-slate-500 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">{resource.tag}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{resource.title}</h3>
                  <p className="text-slate-500 text-sm mt-1">{resource.description}</p>
                </div>
              </div>
              
              <button className="w-full md:w-auto px-6 py-3 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all active:scale-95">
                Access Now <Download className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-amber-500 rounded-3xl p-8 text-center shadow-xl shadow-amber-500/20">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready for the Full Transformation?</h2>
          <p className="text-slate-900 font-medium mb-6">
            Join our Spring 2026 cohort and get the complete Mastery Course plus the 10-Step Message Masterclass.
          </p>
          <Link 
            to="/purchase" 
            className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-lg group"
          >
            Secure Early Riser Pricing <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

// Crucial for the Vercel Build
export default FreeResourcesPage;
