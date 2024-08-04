import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import '../Styles/ArtisanCard.module.css'; // Import your CSS module for styling

const ArtisanCard = ({ id, name, skill, phone, avatar }) => {
  return (
    <div className="artisan-card">
      <div className="artisan-avatar">
        <img src={avatar} alt={`${name}'s avatar`} className="avatar-image" />
      </div>
      <div className="artisan-info">
        <h2 className="artisan-name">{'OGUNLEYE OLASUNKANMI ANTHONY'}</h2>
        <p className="artisan-skill">{'Fashion Designer'}</p>
        <p className="artisan-phone">{'0816801082'}</p>
      </div>
      <div className="artisan-action">
        <Link to={`/artisans/${id}`} className="view-profile-link">
          View Profile
        </Link>
      </div>
    </div>
  );
};

ArtisanCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default ArtisanCard;
