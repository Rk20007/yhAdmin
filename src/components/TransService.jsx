import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";
import { TransAddServiceAPI, TransGetServiceAPI } from "../api/transport.api";
import TransOfferTable from "./TransOffTable";
import TransServiceTable from "./TransServiceTable";
import ImageUpload from "../pages/ImageUpload";

const TransService = () => {
  const [services, setServices] = useState([]);
  const [payload, setPayload] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const getServices = async () => {
    const getData = await TransGetServiceAPI();
    setServices(getData?.data?.findData);
  };
  useEffect(() => {
    Promise.allSettled([getServices()]);
  }, []);

  const handleSubmit = async () => {
    const res = await TransAddServiceAPI(payload);
    if (res.status) {
      toast.success("Successfully Added!");
      getServices();
      setPayload({
        title: "",
        description: "",
        image: "",
      });
    } else {
      toast.error("Failed to Add!");
    }
  };

  return (
    <main className="flight-offer">
      <section style={{ paddingRight: "25rem" }}>
        <h1>Transport Services</h1>
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
            value={payload.description}
            variant="outlined"
            name="description"
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
        <TransServiceTable services={services} getServices={getServices} />
      </section>
    </main>
  );
};

export default TransService;
