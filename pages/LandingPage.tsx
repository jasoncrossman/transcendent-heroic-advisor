import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Added Share to the imports
import { ChevronRight, CheckCircle2, Mail, Gift, Phone, PlayCircle, Calendar, X, Zap, ChevronLeft, Share } from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isVideoActive, setIsVideoActive] = useState(false);

  // --- QUANTUM VIDEO SUITE LOGIC ---
  const [showPulse, setShowPulse] = useState(true); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isDocked, setIsDocked] = useState(false); 

  // --- SHARE LOGIC ---
  const handleShare = async () => {
    const shareData = {
      title: 'The Transcendent Heroic Advisor',
      text: 'Experience the Quantum Mind Mastery Course for Professionals.',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.log('Share failed', err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPulse(false);
      setIsModalOpen(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  // ... (keeping handleCloseVideo and handleRestoreVideo as verified before)

  return (
    <div className="relative min-h-screen">
      
      {/* --- GOLDEN SHARE ARROW (TOP RIGHT) --- */}
      <div className="fixed top-6 right-6 z-[100] flex flex-col items-center gap-1 group">
        <button 
          onClick={handleShare}
          className="p-3 bg-slate-900/80 backdrop-blur-md border border-amber-500/30 rounded-full text-amber-500 hover:bg-amber-500 hover:text-slate-900 transition-all shadow-lg shadow-amber-500/10 active:scale-90"
          aria-label="Share Site"
        >
          <Share className="w-5 h-5" />
        </button>
        <span className="text-[9px] font-black uppercase tracking-widest text-amber-500/80 opacity-0 group-hover:opacity-100 transition-opacity">
          Share
        </span>
      </div>

      {/* --- PHASE 1: PULSE OVERLAY --- */}
      {/* ... (rest of the code remains exactly the same) ... */}
