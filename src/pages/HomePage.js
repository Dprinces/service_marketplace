import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import HeroCarousel from '../components/HeroCarousel';
import FeaturedArtisan from '../components/FeaturedArtisan';
import CallToAction from '../components/CallToAction';
import styles from '../Styles/HomePage.module.css'; // Import your CSS module for styling

const HomePage = () => {
  const [featuredArtisan, setFeaturedArtisan] = useState(null);

  useEffect(() => {
    // Fetch the featured artisan data from an API
    fetch('/api/featured-artisan')
      .then(response => response.json())
      .then(data => setFeaturedArtisan(data))
      .catch(error => console.error('Error fetching featured artisan:', error));
  }, []);

  return (
    <div className={styles.homePage}> {/* Use CSS module class */}
      <HeroCarousel />
      <section className={styles.featuredArtisans}> {/* Use CSS module class */}
        <h2>Featured Artisans</h2>
        {featuredArtisan ? (
          <FeaturedArtisan artisan={featuredArtisan} /> // Pass data to FeaturedArtisan
        ) : (
          <p>Loading featured artisan...</p> // Loading state
        )}
      </section>
      <section className={styles.ctaSection}> {/* Use CSS module class */}
        <CallToAction />
      </section>
    </div>
  );
};

export default HomePage;
