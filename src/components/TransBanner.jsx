import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";
import { HotelAddBannerAPI, HotelGetBannerAPI } from "../api/hotel.api";
import HotelBannerTable from "./HotelBanTable";
import { TransportGetBannerAPI } from "../api/transport.api";
import TransportBannerTable from "./TransBannerTable";

const TransBanner = () => {
  const [banner, setBanner] = useState([]);
  const [payload, setPayload] = useState({
    type: "transport",
    url: "",
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const getBanner = async () => {
    const getData = await TransportGetBannerAPI();
    setBanner(getData?.data?.findData);
  };

  useEffect(() => {
    Promise.allSettled([getBanner()]);
  }, []);

  const handleSubmit = async () => {
    const res = await HotelAddBannerAPI(payload);
    if (res.status) {
      toast.success("Successfully Added!");
      getBanner();
      setPayload({
        url: "",
        type: "hotel",
      });
    } else {
      toast.error("Failed to Add!");
    }
  };
  return (
    <main className="flight-banner">
      <section style={{ paddingRight: "25rem" }}>
        <h1>Transport Banner</h1>
        <div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <TextField
              id="outlined-basic"
              label="Enter Banner URL"
              variant="outlined"
              value={payload.url}
              name="url"
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
        </div>
      </section>
      <section
        style={{
          paddingTop: "2rem",
          paddingRight: "1rem",
          paddingBottom: "2rem",
        }}
      >
        <TransportBannerTable banner={banner} getBanner={getBanner} />
      </section>
    </main>
  );
};

export default TransBanner;
