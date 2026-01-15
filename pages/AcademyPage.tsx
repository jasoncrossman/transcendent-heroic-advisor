import React from 'react';

const AcademyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="p-6 border-b border-slate-100">
        <span className="text-xl font-serif font-bold text-slate-800">Heroic Advisor Academy</span>
      </nav>
      <main className="max-w-6xl mx-auto py-12 px-6">
        <header className="mb-12">
          <h1 className="text-4xl font-serif font-bold mb-4">Mastery Vault</h1>
          <p className="text-slate-600">Your exclusive curriculum and resources are loading below.</p>
        </header>
        <div className="bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 p-20 text-center">
          <p className="text-slate-400 italic">Your MemberSpace content is initializing...</p>
        </div>
      </main>
    </div>
  );
};

export default AcademyPage;
