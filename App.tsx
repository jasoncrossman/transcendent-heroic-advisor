import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.tsx';
import PurchasePage from './pages/PurchasePage.tsx';
import FreeResourcesPage from './pages/FreeResourcesPage.tsx';
import AcademyPage from './pages/AcademyPage.tsx';
import CongratulationsPage from './pages/CongratulationsPage.tsx'; // THE ONLY NEW IMPORT
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/purchase" element={<PurchasePage />} />
            <Route path="/free-resources" element={<FreeResourcesPage />} />
            <Route path="/academy" element={<AcademyPage />} />
            <Route path="/congratulations" element={<CongratulationsPage />} /> {/* THE ONLY NEW ROUTE */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
