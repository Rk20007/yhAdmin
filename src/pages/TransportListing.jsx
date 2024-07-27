import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";
import TransListingTable from "../components/TListingTable";

const TransportListing = () => {
  const [offers, setOffers] = useState([]);
  const [payload, setPayload] = useState({
    type: "",
    from: "",
    to: "",
    startTime: "",
    endTime: "",
    date: "",
    price: "",
    day: "",
    duration: "",
    month: "",
    year: "",
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const getOffers = async () => {
    const getData = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-all-transportListing`
    );
    setOffers(getData?.data?.data?.findData);
  };

  useEffect(() => {
    Promise.allSettled([getOffers()]);
  }, []);

  const handleSubmit = async () => {
    const res = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}api/v1/add-transportListing`,
      payload
    );
    if (res.status) {
      toast.success("Successfully Added!");
      getOffers();
      setPayload({
        type: "",
        from: "",
        to: "",
        startTime: "",
        endTime: "",
        date: "",
        price: "",
        day: "",
        duration: "",
        month: "",
        year: "",
      });
    } else {
      toast.error("Failed to Add!");
    }
  };

  return (
    <main className="transport-listing">
      <section style={{ paddingRight: "25rem" }}>
        <h1>Transport Listing</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <TextField
            label="Type"
            variant="outlined"
            value={payload.type}
            name="type"
            onChange={handleChange}
          />
          <TextField
            label="From"
            variant="outlined"
            value={payload.from}
            name="from"
            onChange={handleChange}
          />
          <TextField
            label="To"
            variant="outlined"
            value={payload.to}
            name="to"
            onChange={handleChange}
          />
          <TextField
            label="Start Time"
            variant="outlined"
            value={payload.startTime}
            name="startTime"
            onChange={handleChange}
          />
          <TextField
            label="End Time"
            variant="outlined"
            value={payload.endTime}
            name="endTime"
            onChange={handleChange}
          />
          <TextField
            label="Date"
            variant="outlined"
            value={payload.date}
            name="date"
            onChange={handleChange}
          />
          <TextField
            label="Price"
            variant="outlined"
            value={payload.price}
            name="price"
            onChange={handleChange}
          />
          <TextField
            label="Day"
            variant="outlined"
            value={payload.day}
            name="day"
            onChange={handleChange}
          />
          <TextField
            label="Duration"
            variant="outlined"
            value={payload.duration}
            name="duration"
            onChange={handleChange}
          />
          <TextField
            label="Month"
            variant="outlined"
            value={payload.month}
            name="month"
            onChange={handleChange}
          />
          <TextField
            label="Year"
            variant="outlined"
            value={payload.year}
            name="year"
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
        <TransListingTable offers={offers} getOffers={getOffers} />
      </section>
    </main>
  );
};

export default TransportListing;
