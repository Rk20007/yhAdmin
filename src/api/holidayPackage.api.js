import axios from "axios";
import Cookies from "js-cookie";

export const HolidayPackageAddAPI = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}api/v1/add-hotel-package`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const HolidayPackageGetAPI = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-hotel-package`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const HolidayPackageUpdateAPI = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}api/v1/update-hotel-package`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const HolidayPackageDeleteAPI = async (data) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_APP_API_URL}api/v1/delete-hotel-package`,
      { data }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
