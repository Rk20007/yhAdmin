import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";
import OurPartner from "../components/OurPartner";

const Partners = () => {
  const [trending, setTrending] = useState([]);
  const [payload, setPayload] = useState({
    image: "",
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const getTrending = async () => {
    const getData = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-partners`
    );
    setTrending(getData?.data?.data?.findData);
  };
  useEffect(() => {
    Promise.allSettled([getTrending()]);
  }, []);

  const handleSubmit = async () => {
    const res = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}api/v1/add-partners`,
      payload
    );
    if (res.status) {
      toast.success("Successfully Added!");
      getTrending();
      setPayload({
        image: "",
      });
    } else {
      toast.error("Failed to Add!");
    }
  };
  return (
    <main className="flight-offer">
      <section style={{ paddingRight: "25rem" }}>
        <h1>Our Partners</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <TextField
            id="outlined-basic"
            label="Enter Image URL"
            variant="outlined"
            value={payload.image}
            name="image"
            onChange={handleChange}
          />
        </div>
        <Button
          variant="contained"
          sx={{ marginTop: "25px" }}
          color="secondary"
          onClick={handleSubmit}
        >
          Add Details
        </Button>
      </section>
      <section
        style={{
          paddingTop: "2rem",
          paddingRight: "1rem",
          paddingBottom: "2rem",
        }}
      >
        <OurPartner trending={trending} getTrending={getTrending} />
      </section>
    </main>
  );
};

export default Partners;
