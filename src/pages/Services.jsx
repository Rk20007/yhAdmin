import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";
import { ServiceAddAPI, ServiceGetAPI } from "../api/service.api";
import ServiceTable from "../components/ServiceTable";
import ImageUpload from "./ImageUpload";

const Services = () => {
  const [offers, setOffers] = useState([]);
  const [payload, setPayload] = useState({
    title: "",
    img: "",
    sub_img1: "",
    sub_img2: "",
    description: "",
    provide_desc: "",
    service_desc: "",
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const getOffers = async () => {
    const getData = await ServiceGetAPI();
    setOffers(getData?.data?.findData);
  };
  useEffect(() => {
    Promise.allSettled([getOffers()]);
  }, []);

  const handleSubmit = async () => {
    const res = await ServiceAddAPI(payload);
    if (res.status) {
      toast.success("Successfully Added!");
      getOffers();
      setPayload({
        title: "",
        img: "",
        sub_img1: "",
        sub_img2: "",
        description: "",
        provide_desc: "",
        service_desc: "",
      });
    } else {
      toast.error("Failed to Add!");
    }
  };

  return (
    <main className="flight-offer">
      <section style={{ paddingRight: "25rem" }}>
        <h1>YH Services</h1>
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
            label="Enter Image Link"
            value={payload.img}
            variant="outlined"
            name="img"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter Sub Image 1 Link"
            value={payload.sub_img1}
            variant="outlined"
            name="sub_img1"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter Sub Image 2 Link"
            value={payload.sub_img2}
            variant="outlined"
            name="sub_img2"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter Description"
            value={payload.description}
            variant="outlined"
            name="description"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter Provide Description"
            value={payload.provide_desc}
            variant="outlined"
            name="provide_desc"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter Service Description"
            value={payload.service_desc}
            variant="outlined"
            name="service_desc"
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
      <section>
        <ImageUpload />
      </section>
      <section
        style={{
          paddingTop: "2rem",
          paddingRight: "1rem",
          paddingBottom: "2rem",
        }}
      >
        <ServiceTable offers={offers} getOffers={getOffers} />
      </section>
    </main>
  );
};

export default Services;
