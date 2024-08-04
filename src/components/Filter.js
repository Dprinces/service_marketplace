import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Styles/Filter.module.css'; // Import your CSS module for styling

const Filter = ({ onFilter }) => {
  const [selectedSkill, setSelectedSkill] = useState('');
  const [location, setLocation] = useState('');

  const handleSkillChange = (event) => {
    setSelectedSkill(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilter({ skill: selectedSkill, location });
  };

  const handleClear = () => {
    setSelectedSkill('');
    setLocation('');
    onFilter({ skill: '', location: '' });
  };

  return (
    <div className="filter-container">
      <form onSubmit={handleSubmit} className="filter-form">
        <div className="filter-group">
          <label htmlFor="skill">Skill:</label>
          <select id="skill" value={selectedSkill} onChange={handleSkillChange} className="filter-select">
            <option value="">All Skills</option>
            <option value="Woodworking">Woodworking</option>
            <option value="Metalworking">Metalworking</option>
            <option value="Pottery">Pottery</option>
            {/* Add more skill options as needed */}
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={handleLocationChange}
            placeholder="Enter location"
            className="filter-input"
          />
        </div>
        <div className="filter-actions">
          <button type="submit" className="filter-submit">Apply Filter</button>
          <button type="button" onClick={handleClear} className="filter-clear">Clear Filter</button>
        </div>
      </form>
    </div>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
