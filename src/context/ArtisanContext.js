// // context/ArtisanContext.js

// import React, { createContext, useState, useEffect, useContext } from 'react';
// import PropTypes from 'prop-types';

// // Create the context
// const ArtisanContext = createContext();

// // Create the provider component
// export const ArtisanProvider = ({ children }) => {
//   const [artisans, setArtisans] = useState([]);
//   const [featuredArtisans, setFeaturedArtisans] = useState([]);

//   // Fetch artisans data from an API or other source
//   useEffect(() => {
//     // Example fetch (replace with your API endpoint)
//     const fetchArtisans = async () => {
//       try {
//         const response = await fetch('/api/artisans');
//         const data = await response.json();
//         setArtisans(data);
//         setFeaturedArtisans(data.filter(artisan => artisan.featured)); // Filter for featured artisans
//       } catch (error) {
//         console.error('Failed to fetch artisans', error);
//       }
//     };

//     fetchArtisans();
//   }, []);

//   // Function to filter artisans by skill and location
//   const filterArtisans = (skill, location) => {
//     const filtered = artisans.filter(artisan => {
//       const skillMatch = skill ? artisan.skill.toLowerCase().includes(skill.toLowerCase()) : true;
//       const locationMatch = location ? artisan.location.toLowerCase().includes(location.toLowerCase()) : true;
//       return skillMatch && locationMatch;
//     });
//     return filtered;
//   };

//   return (
//     <ArtisanContext.Provider value={{ artisans, featuredArtisans, filterArtisans }}>
//       {children}
//     </ArtisanContext.Provider>
//   );
// };

// // Create a custom hook for easy access to the context
// export const useArtisanContext = () => {
//   const context = useContext(ArtisanContext);
//   if (!context) {
//     throw new Error('useArtisanContext must be used within an ArtisanProvider');
//   }
//   return context;
// };

// ArtisanProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// src/context/ArtisanContext.js
import React, { createContext, useContext, useState } from 'react';

const ArtisanContext = createContext();

export const ArtisanProvider = ({ children }) => {
  const [state, setState] = useState(/* initial state */);

  return (
    <ArtisanContext.Provider value={{ state, setState }}>
      {children}
    </ArtisanContext.Provider>
  );
};

export const useArtisanContext = () => useContext(ArtisanContext);

