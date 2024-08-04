// hooks/useArtisan.js

import { useContext } from 'react';
import { useArtisanContext } from '../context/ArtisanContext'; // Adjust the import path as needed

const useArtisan = () => {
  const context = useContext(ArtisanContext);

  if (!context) {
    throw new Error('useArtisan must be used within an ArtisanProvider');
  }

  const { artisans, featuredArtisans, filterArtisans } = context;

  return { artisans, featuredArtisans, filterArtisans };
};

export default useArtisan;
