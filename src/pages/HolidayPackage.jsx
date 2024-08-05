import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";
import {
  HolidayPackageAddAPI,
  HolidayPackageGetAPI,
} from "../api/holidayPackage.api";
import HolidayPacTable from "../components/HolidayPacTable";
import ImageUpload from "./ImageUpload";

const initialPlaceData = [
  { image: "", title: "", description: "", list_desc: "" },
  { image: "", title: "", description: "", list_desc: "" },
  { image: "", title: "", description: "", list_desc: "" },
];

const HolidayPackage = () => {
  const [deals, setDeals] = useState([]);
  const [place, setPlace] = useState(initialPlaceData);
  const [payload, setPayload] = useState({
    img: "",
    title: "",
    description: "",
    price: "",
    sub_desc: "",
    placeData: initialPlaceData,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const handlePlaces = (index, e) => {
    const { name, value } = e.target;
    const updatedPlace = [...place];
    updatedPlace[index][name] = value;
    setPlace(updatedPlace);
    setPayload({ ...payload, placeData: updatedPlace });
  };

  const getDeals = async () => {
    try {
      const getData = await HolidayPackageGetAPI("hotels");
      setDeals(getData?.data?.findData);
    } catch (error) {
      console.error("Failed to fetch deals:", error);
    }
  };

  useEffect(() => {
    getDeals();
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await HolidayPackageAddAPI(payload);
      if (res.status) {
        toast.success("Successfully Added!");
        getDeals();
        setPayload({
          img: "",
          title: "",
          description: "",
          price: "",
          sub_desc: "",
          placeData: initialPlaceData,
        });
        setPlace(initialPlaceData);
      } else {
        toast.error("Failed to Add!");
      }
    } catch (error) {
      toast.error("Failed to Add!");
      console.error("Error adding holiday package:", error);
    }
  };

  const renderPlaceInputs = (index) => (
    <div key={index} style={{ marginTop: "25px" }}>
      <h2>Add Place Data {index + 1}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <TextField
          label="Enter Place Title"
          value={place[index].title}
          variant="outlined"
          name="title"
          onChange={(e) => handlePlaces(index, e)}
        />
        <TextField
          label="Enter Place Description"
          value={place[index].description}
          variant="outlined"
          name="description"
          onChange={(e) => handlePlaces(index, e)}
        />
        <TextField
          label="Enter Place Image URL"
          value={place[index].image}
          variant="outlined"
          name="image"
          onChange={(e) => handlePlaces(index, e)}
        />
        <TextField
          label="Enter Description List"
          value={place[index].list_desc}
          variant="outlined"
          name="list_desc"
          onChange={(e) => handlePlaces(index, e)}
          // multiline
          // rows={4}
        />
      </div>
    </div>
  );

  return (
    <main className="HotelwithDeal">
      <section style={{ paddingRight: "25rem" }}>
        <h1>Holiday Packages</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <TextField
            label="Enter Image"
            value={payload.img}
            variant="outlined"
            name="img"
            onChange={handleChange}
          />
          <TextField
            label="Enter Title"
            value={payload.title}
            variant="outlined"
            name="title"
            onChange={handleChange}
          />
          <TextField
            label="Enter Description"
            value={payload.description}
            variant="outlined"
            name="description"
            onChange={handleChange}
          />
          <TextField
            label="Enter Sub Description"
            value={payload.sub_desc}
            variant="outlined"
            name="sub_desc"
            onChange={handleChange}
          />
          <TextField
            label="Enter Price"
            value={payload.price}
            variant="outlined"
            name="price"
            type="number"
            onChange={handleChange}
          />
        </div>

        {place.map((_, index) => renderPlaceInputs(index))}

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
        <HolidayPacTable deals={deals} getDeals={getDeals} />
      </section>
    </main>
  );
};

export default HolidayPackage;
