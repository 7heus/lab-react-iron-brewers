import axios from "axios";

export const getAllBeers = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSingleBeer = async (id) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createBeer = async (beer) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/new`,
      beer
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
