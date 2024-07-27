import axios from "axios";
import Cookies from "js-cookie";

export const GalleryAddAPI = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}api/v1/add-gallery`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const GalleryGetAPI = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-gallery`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const GalleryDeleteAPI = async (data) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_APP_API_URL}api/v1/delete-gallery`,
      { data }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
