// pages/ArtisanProfilePage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // For route parameters
import useArtisan from '../hooks/useArtisans';
import '../Styles/ArtisanProfilePage.module.css'; // Import your CSS module for styling

const ArtisanProfilePage = () => {
  const { id } = useParams(); // Get artisan ID from URL
  const { artisans } = useArtisan();
  const [artisan, setArtisan] = useState(null);

  useEffect(() => {
    const foundArtisan = artisans.find(artisan => artisan.id === parseInt(id, 10));
    setArtisan(foundArtisan);
  }, [id, artisans]);

  if (!artisan) {
    return <p>Loading...</p>;
  }

  return (
    <div className="artisan-profile">
      <header className="profile-header">
        <img src={artisan.avatar} alt={artisan.name} className="profile-avatar" />
        <h1>{artisan.name}</h1>
        <p className="profile-skill">{artisan.skill}</p>
      </header>
      <section className="profile-details">
        <h2>Contact Information</h2>
        <p>Phone: {artisan.phone}</p>
        <p>Email: <a href={`mailto:${artisan.email}`}>{artisan.email}</a></p>
        <p>Address: {artisan.address}</p>
      </section>
      <section className="profile-description">
        <h2>Description</h2>
        <p>{artisan.description}</p>
      </section>
      <section className="profile-photos">
        <h2>Photos</h2>
        <div className="photos-gallery">
          {artisan.photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Artisan work ${index + 1}`} className="gallery-photo" />
          ))}
        </div>
      </section>
      <section className="profile-reviews">
        <h2>Customer Reviews</h2>
        <div className="reviews-list">
          {artisan.reviews.length ? (
            artisan.reviews.map((review, index) => (
              <div key={index} className="review">
                <p><strong>{review.author}</strong> ({review.rating} stars)</p>
                <p>{review.text}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet</p>
          )}
        </div>
      </section>
      <section className="profile-social">
        <h2>Social Links</h2>
        <div className="social-links">
          {artisan.socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link">
              {link.platform}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArtisanProfilePage;
