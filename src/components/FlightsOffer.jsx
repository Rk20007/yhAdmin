import React, { useState, useEffect } from "react";
import { FlightADDofferAPI, FlightGETofferAPI } from "../api/flight.api";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";
import OfferTable from "./FlightOffTable";

const FlightsOffer = () => {
  const [offers, setOffers] = useState([]);
  const [payload, setPayload] = useState({
    type: "",
    title: "",
    details: "",
    price: "",
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const getOffers = async () => {
    const getData = await FlightGETofferAPI();
    setOffers(getData?.data?.flightOffer);
  };
  useEffect(() => {
    Promise.allSettled([getOffers()]);
  }, []);

  const handleSubmit = async () => {
    const res = await FlightADDofferAPI(payload);
    if (res.status) {
      toast.success("Successfully Added!");
      getOffers();
      setPayload({
        type: "",
        title: "",
        details: "",
        price: "",
      });
    } else {
      toast.error("Failed to Add!");
    }
  };
  return (
    <main className="flight-offer">
      <section style={{ paddingRight: "25rem" }}>
        <h1>Flight Offers</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <TextField
            id="outlined-basic"
            label="Enter Type"
            variant="outlined"
            value={payload.type}
            name="type"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter Ttile"
            variant="outlined"
            value={payload.title}
            name="title"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter Details"
            value={payload.details}
            variant="outlined"
            name="details"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter Price"
            value={payload.price}
            variant="outlined"
            name="price"
            type="number"
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
        <OfferTable offers={offers} getOffers={getOffers} />
      </section>
    </main>
  );
};

export default FlightsOffer;
