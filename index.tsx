import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import PurchasePage from './PurchasePage';
import FreeResources from './FreeResources';

// This is the "Room" behind the locked door
const AcademyPage = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto text-center mt-20">
        <h1 className="text-4xl font-serif mb-6">Heroic Advisor Academy</h1>
        <p className="text-xl text-slate-600 mb-8">Welcome to your mastery vault. Your videos and resources are loading below.</p>
        
        {/* This placeholder stays until MemberSpace verifies the login */}
        <div className="border-2 border-dashed border-slate-200 rounded-xl p-12">
          <p className="text-slate-400">Loading your exclusive content...</p>
        </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/freeresources" element={<FreeResources />} />
          {/* This creates the /academy page on your site */}
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
