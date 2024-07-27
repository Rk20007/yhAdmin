import React, { useState, useEffect } from "react";
import { Button, TextField, IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import toast from "react-hot-toast";
import { GalleryAddAPI, GalleryGetAPI } from "../api/gallery.api";
import GalleryTable from "../components/GalleryTable";

const TeamPhotosForm = () => {
  const [imgData, setImgData] = useState([]);
  const [payload, setPayload] = useState({
    title: "",
    description: "",
    img: [{ src: "" }],
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const handleImgUrlChange = (index, event) => {
    const newImgUrls = [...payload.img];
    newImgUrls[index].src = event.target.value;
    setPayload({ ...payload, img: newImgUrls });
  };

  const handleAddImage = () => {
    setPayload({ ...payload, img: [...payload.img, { src: "" }] });
  };

  const handleRemoveImage = (index) => {
    const newImgUrls = payload.img.filter((_, i) => i !== index);
    setPayload({ ...payload, img: newImgUrls });
  };

  const getImgData = async () => {
    const getData = await GalleryGetAPI();
    setImgData(getData?.data?.findData);
  };

  useEffect(() => {
    getImgData();
  }, []);

  const handleSubmit = async () => {
    const res = await GalleryAddAPI(payload);
    if (res.status) {
      toast.success("Successfully Added!");
      getImgData();
      setPayload({
        title: "",
        description: "",
        img: [{ src: "" }],
      });
    } else {
      toast.error("Failed to Add!");
    }
  };
  
  return (
    <main className="flight-offer">
      <section style={{ paddingRight: "25rem" }}>
        <h1>YH Gallery</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <TextField
            id="outlined-title"
            label="Enter Title"
            variant="outlined"
            value={payload.title}
            name="title"
            onChange={handleChange}
          />
          <TextField
            id="outlined-description"
            label="Enter Description"
            variant="outlined"
            value={payload.description}
            name="description"
            onChange={handleChange}
          />
          {payload.img.map((img, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center" }}>
              <TextField
                id={`outlined-img-${index}`}
                label={`Enter Image URL ${index + 1}`}
                variant="outlined"
                value={img.src}
                onChange={(e) => handleImgUrlChange(index, e)}
                style={{ flexGrow: 1 }}
              />
              <IconButton onClick={() => handleRemoveImage(index)}>
                <Remove />
              </IconButton>
            </div>
          ))}
          <Button
            variant="outlined"
            onClick={handleAddImage}
            startIcon={<Add />}
          >
            Add Image
          </Button>
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
        <GalleryTable imgData={imgData} getImgData={getImgData} />
      </section>
    </main>
  );
};

export default TeamPhotosForm;
