import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";
import {
  HolidayPackageAddAPI,
  HolidayPackageGetAPI,
} from "../api/holidayPackage.api";
import HolidayPacTable from "../components/HolidayPacTable";

const HolidayPackage = () => {
  const [deals, setDeals] = useState([]);
  const [payload, setPayload] = useState({
    img: "",
    title: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const getDeals = async () => {
    const getData = await HolidayPackageGetAPI("hotels");
    setDeals(getData?.data?.findData);
  };
  useEffect(() => {
    Promise.allSettled([getDeals()]);
  }, []);

  const handleSubmit = async () => {
    const res = await HolidayPackageAddAPI(payload);
    if (res.status) {
      toast.success("Successfully Added!");
      getDeals();
      setPayload({
        img: "",
        title: "",
        description: "",
        price: "",
      });
    } else {
      toast.error("Failed to Add!");
    }
  };
  return (
    <main className="HotelwithDeal">
      <section style={{ paddingRight: "25rem" }}>
        <h1>Holiday Packages</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <TextField
            id="outlined-basic"
            label="Enter Image"
            value={payload.img}
            variant="outlined"
            name="img"
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
            label="Enter Description"
            value={payload.description}
            variant="outlined"
            name="description"
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
        <HolidayPacTable deals={deals} getDeals={getDeals} />
      </section>
    </main>
  );
};

export default HolidayPackage;
