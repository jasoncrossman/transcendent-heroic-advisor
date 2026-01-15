import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import PurchasePage from './PurchasePage';
import FreeResources from './FreeResources';
import AcademyPage from './pages/AcademyPage'; // This tells the map to find your new styled file

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/freeresources" element={<FreeResources />} />
          {/* This uses the styled page you just created in the pages folder */}
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
