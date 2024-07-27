import React, { useState, useEffect } from "react";
import {
  FlightADDTopVisitedAPI,
  FlightGETTopVisitedAPI,
} from "../api/flight.api";
import { Button, TextField } from "@mui/material";
import TopTables from "./TopTable";
import toast from "react-hot-toast";

const FlightTop = () => {
  const [destinations, setDestinations] = useState([]);
  const [payload, setPayload] = useState({
    country: "",
    city: "",
    image: "",
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const getDestinations = async () => {
    const getData = await FlightGETTopVisitedAPI();
    setDestinations(getData?.data?.topDestination);
  };

  useEffect(() => {
    Promise.allSettled([getDestinations()]);
  }, []);

  const handleSubmit = async () => {
    const res = await FlightADDTopVisitedAPI(payload);
    if (res.status) {
      toast.success("Successfully Added!");
      getDestinations();
      setPayload({
        country: "",
        city: "",
        image: "",
      });
    } else {
      toast.error("Failed to Add!");
    }
  };

  return (
    <main className="flight-destinations">
      <section style={{ paddingRight: "25rem" }}>
        <h1>Top Visited Destinations</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <TextField
            id="outlined-basic"
            label="Enter Country"
            variant="outlined"
            value={payload.country}
            name="country"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter City"
            variant="outlined"
            value={payload.city}
            name="city"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter Image URL"
            value={payload.image}
            variant="outlined"
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
        <TopTables
          destinations={destinations}
          setDestinations={setDestinations}
          getDestinations={getDestinations}
        />
      </section>
    </main>
  );
};

export default FlightTop;
