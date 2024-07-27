import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";
import { YHHotelAddAPI, YHHotelGetAPI } from "../api/yhHotel.api";
import YHHotelTable from "./YHHotelTable";

const YHHotel = () => {
  const [deals, setDeals] = useState([]);
  const [payload, setPayload] = useState({
    type: "hotels",
    star: "",
    reviews: "",
    title: "",
    city: "",
    country: "",
    image: "",
    price: "",
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const getDeals = async () => {
    const getData = await YHHotelGetAPI("hotels");
    setDeals(getData?.data?.findData);
  };
  useEffect(() => {
    Promise.allSettled([getDeals()]);
  }, []);

  const handleSubmit = async () => {
    const res = await YHHotelAddAPI(payload);
    if (res.status) {
      toast.success("Successfully Added!");
      getDeals();
      setPayload({
        type: "hotels",
        star: "",
        reviews: "",
        title: "",
        city: "",
        country: "",
        image: "",
        price: "",
      });
    } else {
      toast.error("Failed to Add!");
    }
  };
  return (
    <main className="HotelwithDeal">
      <section style={{ paddingRight: "25rem" }}>
        <h1>YH Hotels</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <TextField
            id="outlined-basic"
            label="Enter Star"
            value={payload.star}
            variant="outlined"
            type="number"
            name="star"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter Reviews"
            value={payload.reviews}
            variant="outlined"
            type="number"
            name="reviews"
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
            label="Enter Image"
            value={payload.image}
            variant="outlined"
            name="image"
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
        <YHHotelTable deals={deals} getDeals={getDeals} />
      </section>
    </main>
  );
};

export default YHHotel;
