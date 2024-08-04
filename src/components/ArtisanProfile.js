import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/ArtisanProfile.module.css'; // Import your CSS module for styling

const ArtisanProfile = ({ artisan }) => {
  if (!artisan) {
    return <div className="artisan-profile">Loading...</div>;
  }

  const {
    name,
    address,
    phone,
    email,
    skill,
    socialLinks,
    photos,
    description,
    reviews,
    rating,
  } = artisan;

  return (
    <div className="artisan-profile">
      <div className="profile-header">
        <h1 className="profile-name">{name}</h1>
        <p className="profile-skill">{skill}</p>
        <p className="profile-contact">
          Phone: <a href={`tel:${phone}`}>{phone}</a> | Email: <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
      <div className="profile-address">
        <h2>Address</h2>
        <p>{address}</p>
      </div>
      <div className="profile-description">
        <h2>Description</h2>
        <p>{description}</p>
      </div>
      <div className="profile-photos">
        <h2>Photos</h2>
        <div className="photo-gallery">
          {photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Artisan photo ${index + 1}`} className="photo" />
          ))}
        </div>
      </div>
      <div className="profile-social-links">
        <h2>Social Links</h2>
        <ul>
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.platform}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="profile-reviews">
        <h2>Customer Reviews</h2>
        <div className="review-summary">
          <p>Average Rating: {rating}</p>
        </div>
        <ul>
          {reviews.map((review, index) => (
            <li key={index} className="review">
              <p><strong>{review.author}:</strong> {review.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ArtisanProfile.propTypes = {
  artisan: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
    socialLinks: PropTypes.arrayOf(
      PropTypes.shape({
        platform: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default ArtisanProfile;
