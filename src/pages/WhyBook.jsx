import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";
import WhyTable from "../components/WhyTable";

const WhyBook = () => {
  const [trending, setTrending] = useState([]);
  const [payload, setPayload] = useState({
    data: "",
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const getTrending = async () => {
    const getData = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-description`
    );
    console.log("getData", getData);
    setTrending(getData?.data?.data?.topDestination[0]);
  };
  useEffect(() => {
    Promise.allSettled([getTrending()]);
  }, []);

  const handleSubmit = async () => {
    const res = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}api/v1/add-description`,
      payload
    );
    if (res.status) {
      toast.success("Successfully Added!");
      getTrending();
      setPayload({
        data: "",
      });
    } else {
      toast.error("Failed to Add!");
    }
  };

  return (
    <main className="flight-offer">
      <section style={{ paddingRight: "25rem" }}>
        <h1>Why Book on YH</h1>
        {/* <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <TextField
            id="outlined-basic"
            label="Enter Data"
            variant="outlined"
            value={payload.data}
            name="data"
            onChange={handleChange}
            multiline
            rows={5}
          />
        </div>
        <Button
          variant="contained"
          sx={{ marginTop: "25px" }}
          color="secondary"
          onClick={handleSubmit}
        >
          Add Details
        </Button> */}
      </section>
      <section
        style={{
          paddingTop: "2rem",
          paddingRight: "1rem",
          paddingBottom: "2rem",
        }}
      >
        <WhyTable trending={trending} getTrending={getTrending} />
      </section>
    </main>
  );
};

export default WhyBook;
