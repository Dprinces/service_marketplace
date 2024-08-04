import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArtisanDirectoryPage from './pages/ArtisanDirectoryPage';
import ArtisanProfilePage from './pages/ArtisanProfilePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import { ArtisanProvider } from './context/ArtisanContext';
import FeaturedArtisan from './components/FeaturedArtisan'; // Example component
import ErrorBoundary from './components/ErrorBoundary'; // Import Error Boundary
import 'slick-carousel/slick/slick.css'; // Slick Carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Slick Carousel theme styles

const App = () => {
  return (
    <Router>
      <ArtisanProvider>
        <div className="app-container">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/artisans" element={<ArtisanDirectoryPage />} />
              <Route path="/artisan/:id" element={<ArtisanProfilePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </ErrorBoundary>
        </div>
      </ArtisanProvider>
    </Router>
  );
};

export default App;

