import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
export const registerService = async data => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, data);
    return response.data;
  } catch (error) {
    console.error('Error in register service:', error.message);
    throw new Error(
      error.response?.data?.message || 'An error occurred during registration'
    );
  }
};
