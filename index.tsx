import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import PurchasePage from './pages/PurchasePage';
import FreeResources from './pages/FreeResources';
import AcademyPage from './pages/AcademyPage';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/freeresources" element={<FreeResources />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
