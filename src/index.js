import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import './Styles/index.css'; // Global styles
import ArtisanContext from './context/ArtisanContext'; // Ensure this path is correct
import App from './App';
import 'slick-carousel/slick/slick.css'; // Slick Carousel core styles
import 'slick-carousel/slick/slick-theme.css'; // Slick Carousel theme styles

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Create root with the target container
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found.');
}
