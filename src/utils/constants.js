// utils/constants.js

// Base URL for API requests
export const BASE_URL = 'https://api.example.com'; // Replace with your API base URL

// Endpoints
export const API_ENDPOINTS = {
  ARTISANS: '/artisans',
  ARTISANS_FEATURED: '/artisans/featured',
  ARTISAN_BY_ID: (id) => `/artisans/${id}`,
  ARTISANS_SEARCH: '/artisans/search',
};

// Application-wide settings
export const APP_SETTINGS = {
  TIMEOUT: 10000, // Timeout in milliseconds for API requests
  MAX_RETRIES: 3, // Maximum number of retry attempts for failed requests
};

// Auth-related constants
export const AUTH_CONSTANTS = {
  LOCAL_STORAGE_KEY: 'authToken', // Key for storing auth token in localStorage
  LOGIN_URL: '/login', // URL path for the login page
  SIGNUP_URL: '/signup', // URL path for the signup page
};

// UI-related constants
export const UI_CONSTANTS = {
  ITEMS_PER_PAGE: 10, // Number of items to display per page in pagination
  DATE_FORMAT: 'YYYY-MM-DD', // Date format used throughout the application
};

// Feature flags
export const FEATURE_FLAGS = {
  ENABLE_NEW_FEATURE: true, // Toggle to enable/disable a new feature
};

