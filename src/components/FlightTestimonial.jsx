import React, { useState, useEffect } from "react";
import {
  FlightAddTestimonialAPI,
  FlightGetTestimonialAPI,
} from "../api/flight.api";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";
import TestimonialTable from "./FlightTestTable";

const FlightTestimonial = () => {
  const [testimonial, setTestimonial] = useState([]);
  const [payload, setPayload] = useState({
    type: "flight",
    title: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const getTestimonial = async () => {
    const getData = await FlightGetTestimonialAPI();
    setTestimonial(getData?.data?.findData);
  };

  useEffect(() => {
    Promise.allSettled([getTestimonial()]);
  }, []);

  const handleSubmit = async () => {
    const res = await FlightAddTestimonialAPI(payload);
    if (res.status) {
      toast.success("Successfully Added!");
      getTestimonial();
      setPayload({
        type: "flight",
        title: "",
        description: "",
        image: "",
      });
    } else {
      toast.error("Failed to Add!");
    }
  };
  return (
    <main className="FlightTestimonial">
      <section style={{ paddingRight: "25rem" }}>
        <h1>Flight Testimonial</h1>
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
            label="Enter Description"
            variant="outlined"
            value={payload.description}
            name="description"
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
        <TestimonialTable testimonial={testimonial} getTestimonial={getTestimonial} />
      </section>
    </main>
  );
};

export default FlightTestimonial;
