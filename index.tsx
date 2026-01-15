import React from 'react';
import { createRoot } from 'react-dom/client';

// We are intentionally NOT importing the pages yet to isolate the crash
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <div style={{ padding: '50px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>System Check: ONLINE</h1>
      <p>If you can see this, the website wiring is perfect.</p>
      <p>The crash is happening inside one of the Page files.</p>
    </div>
  );
}
