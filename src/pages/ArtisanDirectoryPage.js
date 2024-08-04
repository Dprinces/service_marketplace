// pages/ArtisanDirectoryPage.js

import React, { useState, useEffect } from 'react';
import useArtisan from '../hooks/useArtisans';
import Filter from '../components/Filter';
import ArtisanCard from '../components/ArtisanCard';
import Pagination from '../components/Pagination'; // Import a Pagination component if available
import '../Styles/ArtisanDirectoryPage.module.css'; // Import your CSS module for styling

const ArtisanDirectoryPage = () => {
  const { artisans, filterArtisans } = useArtisan();
  const [filteredArtisans, setFilteredArtisans] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [artisansPerPage] = useState(10); // Number of artisans per page
  const [skill, setSkill] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    const filtered = filterArtisans(skill, location);
    setFilteredArtisans(filtered);
    setCurrentPage(1); // Reset to first page on filter change
  }, [skill, location, filterArtisans]);

  // Pagination logic
  const indexOfLastArtisan = currentPage * artisansPerPage;
  const indexOfFirstArtisan = indexOfLastArtisan - artisansPerPage;
  const currentArtisans = filteredArtisans.slice(indexOfFirstArtisan, indexOfLastArtisan);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="artisan-directory">
      <h1>Artisan Directory</h1>
      <Filter onFilter={({ skill, location }) => {
        setSkill(skill);
        setLocation(location);
      }} />
      <div className="artisan-cards">
        {currentArtisans.length ? (
          currentArtisans.map((artisan) => (
            <ArtisanCard
              key={artisan.id}
              id={artisan.id}
              name={artisan.name}
              skill={artisan.skill}
              phone={artisan.phone}
              avatar={artisan.avatar}
            />
          ))
        ) : (
          <p>No artisans found</p>
        )}
      </div>
      {filteredArtisans.length > artisansPerPage && (
        <Pagination
          totalItems={filteredArtisans.length}
          itemsPerPage={artisansPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default ArtisanDirectoryPage;
