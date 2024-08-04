// utils/filters.js

/**
 * Filters artisans based on the given filters.
 * @param {Array} artisans - The list of artisans to filter.
 * @param {Object} filters - The filter criteria.
 * @param {string} [filters.skill] - Filter by artisan skill.
 * @param {string} [filters.searchTerm] - Filter by a search term in artisan's name or description.
 * @param {Object} [filters.location] - Filter by artisan location.
 * @param {number} [filters.location.latitude] - Latitude of the user's location.
 * @param {number} [filters.location.longitude] - Longitude of the user's location.
 * @param {number} [filters.maxDistance] - Maximum distance from the user's location.
 * @returns {Array} - The filtered list of artisans.
 */
export const filterArtisans = (artisans, filters) => {
    return artisans.filter(artisan => {
      let matches = true;
  
      // Filter by skill
      if (filters.skill && artisan.skill !== filters.skill) {
        matches = false;
      }
  
      // Filter by search term
      if (filters.searchTerm && !(
        artisan.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        artisan.description.toLowerCase().includes(filters.searchTerm.toLowerCase())
      )) {
        matches = false;
      }
  
      // Filter by location and distance
      if (filters.location && filters.maxDistance) {
        const { latitude, longitude } = filters.location;
        const artisanDistance = calculateDistance(
          latitude,
          longitude,
          artisan.latitude,
          artisan.longitude
        );
  
        if (artisanDistance > filters.maxDistance) {
          matches = false;
        }
      }
  
      return matches;
    });
  };
  
  /**
   * Calculates the distance between two geographic points.
   * @param {number} lat1 - Latitude of the first point.
   * @param {number} lon1 - Longitude of the first point.
   * @param {number} lat2 - Latitude of the second point.
   * @param {number} lon2 - Longitude of the second point.
   * @returns {number} - The distance in kilometers.
   */
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };
  
  /**
   * Converts degrees to radians.
   * @param {number} degrees - The angle in degrees.
   * @returns {number} - The angle in radians.
   */
  const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  };
  