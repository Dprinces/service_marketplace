import React from 'react';
import PropTypes from 'prop-types';
import ArtisanCard from './ArtisanCard'; // Assuming ArtisanCard component is in the same directory
import '../Styles/FeaturedArtisan.module.css'; // Import your CSS module for styling

const FeaturedArtisan = ({ artisans }) => {
  return (
    <section className="featured-artisan">
      <h2 className="section-title">Featured Artisans</h2>
      <div className="artisan-cards">
        {artisans.map((artisan) => (
          <ArtisanCard
            key={artisan.id}
            id={artisan.id}
            name={artisan.name}
            skill={artisan.skill}
            phone={artisan.phone}
            avatar={artisan.avatar}
          />
        ))}
      </div>
    </section>
  );
};

FeaturedArtisan.propTypes = {
  artisans: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      skill: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FeaturedArtisan;
