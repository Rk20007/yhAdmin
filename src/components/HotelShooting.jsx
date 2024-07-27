import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";
import { HotelAddShootingAPI, HotelGetShootingAPI } from "../api/hotel.api";
import HotelDealTable from "./HotelDealTable";
import HotelShootingTable from "./HotelShootingTable";

const HotelShooting = () => {
  const [deals, setDeals] = useState([]);
  const [payload, setPayload] = useState({
    img: "",
    stars: "",
    reviews_count: "",
    title: "",
    city: "",
    country: "",
    price: "",
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const getDeals = async () => {
    const getData = await HotelGetShootingAPI();
    setDeals(getData?.data?.findData);
  };
  useEffect(() => {
    Promise.allSettled([getDeals()]);
  }, []);

  const handleSubmit = async () => {
    const res = await HotelAddShootingAPI(payload);
    if (res.status) {
      toast.success("Successfully Added!");
      getDeals();
      setPayload({
        img: "",
        stars: "",
        reviews_count: "",
        title: "",
        city: "",
        country: "",
        price: "",
      });
    } else {
      toast.error("Failed to Add!");
    }
  };
  return (
    <main className="HotelwithDeal">
      <section style={{ paddingRight: "25rem" }}>
        <h1>Nearby Shooting Ranges</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <TextField
            id="outlined-basic"
            label="Enter Image"
            variant="outlined"
            value={payload.img}
            name="img"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter Stars"
            value={payload.stars}
            variant="outlined"
            type="number"
            name="stars"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter Reviews Count"
            value={payload.reviews_count}
            variant="outlined"
            type="number"
            name="reviews_count"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter Title"
            value={payload.title}
            variant="outlined"
            name="title"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter City"
            value={payload.city}
            variant="outlined"
            name="city"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter Country"
            value={payload.country}
            variant="outlined"
            name="country"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter Price"
            value={payload.price}
            variant="outlined"
            type="number"
            name="price"
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
        <HotelShootingTable deals={deals} getDeals={getDeals} />
      </section>
    </main>
  );
};

export default HotelShooting;
