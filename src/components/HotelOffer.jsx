import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";
import { HotelAddOfferAPI, HotelGetOfferAPI } from "../api/hotel.api";
import HotelOfferTable from "./HotelOffTable";

const HotelOffer = () => {
  const [offers, setOffers] = useState([]);
  const [payload, setPayload] = useState({
    type: "hotels",
    coupen_code: "",
    validity: "",
    description: "",
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const getOffers = async () => {
    const getData = await HotelGetOfferAPI();
    setOffers(getData?.data?.findData);
  };
  useEffect(() => {
    Promise.allSettled([getOffers()]);
  }, []);

  const handleSubmit = async () => {
    const res = await HotelAddOfferAPI(payload);
    if (res.status) {
      toast.success("Successfully Added!");
      getOffers();
      setPayload({
        type: "hotels",
        coupen_code: "",
        validity: "",
        description: "",
      });
    } else {
      toast.error("Failed to Add!");
    }
  };

  return (
    <main className="flight-offer">
      <section style={{ paddingRight: "25rem" }}>
        <h1>Hotel Offers</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <TextField
            id="outlined-basic"
            label="Enter Description"
            variant="outlined"
            value={payload.description}
            name="description"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter Coupen Code"
            value={payload.coupen_code}
            variant="outlined"
            name="coupen_code"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter Validity"
            value={payload.validity}
            variant="outlined"
            name="validity"
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
        <HotelOfferTable offers={offers} getOffers={getOffers} />
      </section>
    </main>
  );
};

export default HotelOffer;
