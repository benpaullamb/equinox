import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import ScrollToTop from './components/ScrollToTop';

import './index.css';
import 'swiper/css/bundle';

const rootElement = document.getElementById('root');

const content = (
  <React.StrictMode>
    <HelmetProvider prioritizeSeoTags>
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, content);
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(content);
}
