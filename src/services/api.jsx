import axios from "axios"

const API_URL = 'https://akabab.github.io/superhero-api/api/all.json';

export const getAllSuperheroes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching superheroes:', error);
    throw error;
  }
};