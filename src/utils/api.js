// utils/api.js

import axios from 'axios';

// Base URL for the API
const BASE_URL = 'https://api.example.com'; // Replace with your API base URL

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token if needed
api.interceptors.request.use(
  (config) => {
    // Add auth token or any other headers if needed
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally if needed
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error
      console.error('Unauthorized. Please login.');
    }
    return Promise.reject(error);
  }
);

// Function to get all artisans
export const getArtisans = async () => {
  try {
    const response = await api.get('/artisans');
    return response.data;
  } catch (error) {
    console.error('Error fetching artisans:', error);
    throw error;
  }
};

// Function to get a specific artisan by ID
export const getArtisanById = async (id) => {
  try {
    const response = await api.get(`/artisans/${id}`);
    return response.data;
  }
  catch (error){

  }
};
