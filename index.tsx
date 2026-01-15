import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PurchasePage from './pages/PurchasePage';
import FreeResources from './pages/FreeResourcesPage';
import AcademyPage from './pages/AcademyPage';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          {/* We are pointing "/" directly to the LandingPage file */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/freeresources" element={<FreeResources />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
