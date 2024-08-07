import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const SocialMedia = () => {
  const [payload, setPayload] = React.useState({
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  });
  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };
  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}api/v1/get-social`
      );
      const data = response.data.data.findData;
      setPayload({ ...data });
    } catch (error) {
      console.log(error);
      return error.message;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}api/v1/add-social`,
        payload
      );
      if (response?.data?.success) {
        toast.success("Successfully Added");
        getData();
      }
    } catch (error) {
      console.log(error);
      return error.message;
    }
  };
  return (
    <div className="social">
      <h1>Social Media</h1>
      <TextField
        label="Facebook"
        variant="outlined"
        value={payload.facebook}
        name="facebook"
        onChange={handleChange}
      />
      <TextField
        label="Twitter"
        variant="outlined"
        value={payload.twitter}
        name="twitter"
        onChange={handleChange}
      />
      <TextField
        label="Instagram"
        variant="outlined"
        value={payload.instagram}
        name="instagram"
        onChange={handleChange}
      />
      <TextField
        label="LinkedIn"
        variant="outlined"
        value={payload.linkedin}
        name="linkedin"
        onChange={handleChange}
      />
      <TextField
        label="Youtube"
        variant="outlined"
        value={payload.youtube}
        name="youtube"
        onChange={handleChange}
      />
      <Button variant="contained" color="secondary" onClick={handleSubmit}>
        Save
      </Button>
    </div>
  );
};

export default SocialMedia;
