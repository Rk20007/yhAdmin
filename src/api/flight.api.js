import axios from "axios";
import Cookies from "js-cookie";

export const FlightGETTopVisitedAPI = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-top-destination`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const FlightADDTopVisitedAPI = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}api/v1/add-top-destination`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const FlightDELETETopVisitedAPI = async (data) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_APP_API_URL}api/v1/delete-top-destination`,
      { data }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const FlightUPDATETopVisitedAPI = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}api/v1/update-top-destination`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const FlightADDofferAPI = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}api/v1/add-flight-offer`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const FlightGETofferAPI = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-flight-offer`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const FlightUpdateofferAPI = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}api/v1/update-flight-offer`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const FlightDeleteofferAPI = async (data) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_APP_API_URL}api/v1/delete-flight-offer`,
      { data }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const FlightAddBannerAPI = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}api/v1/add-banner`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const FlightGetBannerAPI = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-banner?type=flight`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const FlightDeleteBannerAPI = async (data) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_APP_API_URL}api/v1/delete-banner`,
      { data }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const FlightAddTestimonialAPI = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}api/v1/add-testimonial`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const FlightGetTestimonialAPI = async (data) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-testimonial?type=flight`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const FlightUpdateTestimonialAPI = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}api/v1/update-testimonial`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const FlightDeleteTestimonialAPI = async (data) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_APP_API_URL}api/v1/delete-testimonial`,
      { data }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
