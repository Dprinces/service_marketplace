import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ArtisanCard from './ArtisanCard';
import '../Styles/ArtisanList.module.css'; // Import your CSS module for styling

const ArtisanList = ({ artisans }) => {
  const [filteredArtisans, setFilteredArtisans] = useState(artisans);
  const [filterSkill, setFilterSkill] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const artisansPerPage = 9;

  useEffect(() => {
    // Filter artisans based on selected skill
    if (filterSkill) {
      setFilteredArtisans(
        artisans.filter(artisan => artisan.skill.toLowerCase().includes(filterSkill.toLowerCase()))
      );
    } else {
      setFilteredArtisans(artisans);
    }
  }, [filterSkill, artisans]);

  // Pagination logic
  const indexOfLastArtisan = currentPage * artisansPerPage;
  const indexOfFirstArtisan = indexOfLastArtisan - artisansPerPage;
  const currentArtisans = filteredArtisans.slice(indexOfFirstArtisan, indexOfLastArtisan);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredArtisans.length / artisansPerPage);

  return (
    <div className="artisan-list">
      <div className="filter-container">
        <select 
          className="filter-select"
          value={filterSkill}
          onChange={(e) => setFilterSkill(e.target.value)}
        >
          <option value="">All Skills</option>
          <option value="Woodworking">Woodworking</option>
          <option value="Metalworking">Metalworking</option>
          <option value="Pottery">Pottery</option>
          {/* Add more skill options as needed */}
        </select>
      </div>
      <div className="artisan-cards">
        {currentArtisans.map(artisan => (
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
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPages).keys()].map(number => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={number + 1 === currentPage ? 'active' : ''}
          >
            {number + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

ArtisanList.propTypes = {
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

export default ArtisanList;
