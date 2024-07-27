import axios from "axios";
import Cookies from "js-cookie";

export const YHHotelAddAPI = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}api/v1/add-yhhotels`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const YHHotelGetAPI = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-yhhotels?type=${data}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const YHHotelUpdateAPI = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}api/v1/update-yhhotels`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const YHHotelDeleteAPI = async (data) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_APP_API_URL}api/v1/delete-yhhotels`,
      { data }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
