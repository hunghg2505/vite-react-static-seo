import './index.css';

import React from 'react';

import { createRoot, hydrateRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement!);

if (rootElement?.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
