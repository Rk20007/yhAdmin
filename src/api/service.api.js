import axios from "axios";
import Cookies from "js-cookie";

export const ServiceAddAPI = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}api/v1/add-myservice`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};


export const ServiceGetAPI = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-myservice`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const ServiceUpdateAPI = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}api/v1/update-myservice`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const ServiceDeleteAPI = async (data) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_APP_API_URL}api/v1/delete-myservice`,
      { data }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
