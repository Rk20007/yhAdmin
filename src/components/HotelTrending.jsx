import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";
import { HotelAddTrendingAPI, HotelGetTrendingAPI } from "../api/hotel.api";
import HotelOfferTable from "./HotelOffTable";
import HotelTrendingTable from "./HotelTrendingTable";

const HotelTrending = () => {
  const [trending, setTrending] = useState([]);
  const [payload, setPayload] = useState({
    title: "",
    description: "",
    image1: "",
    image2: "",
    image3: "",
    count: ""
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const getTrending = async () => {
    const getData = await HotelGetTrendingAPI();
    setTrending(getData?.data?.findData);
  };
  useEffect(() => {
    Promise.allSettled([getTrending()]);
  }, []);

  const handleSubmit = async () => {
    const res = await HotelAddTrendingAPI(payload);
    if (res.status) {
      toast.success("Successfully Added!");
      getTrending();
      setPayload({
        title: "",
        description: "",
        image1: "",
        image2: "",
        image3: "",
        count: ""
      });
    } else {
      toast.error("Failed to Add!");
    }
  };

  return (
    <main className="flight-offer">
      <section style={{ paddingRight: "25rem" }}>
        <h1>Trending getaways!</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <TextField
            id="outlined-basic"
            label="Enter Title"
            variant="outlined"
            value={payload.title}
            name="title"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter Count"
            value={payload.count}
            variant="outlined"
            name="count"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter Image 1"
            value={payload.image1}
            variant="outlined"
            name="image1"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter Image 2"
            value={payload.image2}
            variant="outlined"
            name="image2"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter Image 3"
            value={payload.image3}
            variant="outlined"
            name="image3"
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
        <HotelTrendingTable trending={trending} getTrending={getTrending} />
      </section>
    </main>
  );
};

export default HotelTrending;
