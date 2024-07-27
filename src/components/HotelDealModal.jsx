import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import toast from "react-hot-toast";
import { HotelUpdateDealsAPI } from "../api/hotel.api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

export default function HotelDealModal({
  open,
  setOpen,
  updateData,
  getDeals,
  setUpdateData,
}) {
  const handleClose = () => setOpen(false);

  const handleUpdate = async () => {
    const response = await HotelUpdateDealsAPI(updateData);
    if (response.status) {
      getDeals();
      toast.success("Successfully Updated");
      handleClose();
    } else {
      toast.error("Failed to Update");
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Update The Data
            </Typography>
            <CloseIcon
              onClick={handleClose}
              sx={{ cursor: "pointer", float: "right" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              marginTop: "25px",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Enter Image"
              variant="outlined"
              value={updateData.img}
              name="img"
              onChange={(e) =>
                setUpdateData({
                  ...updateData,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <TextField
              id="outlined-basic"
              label="Enter Stars"
              value={updateData.stars}
              variant="outlined"
              type="number"
              name="stars"
              onChange={(e) =>
                setUpdateData({
                  ...updateData,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <TextField
              id="outlined-basic"
              label="Enter Reviews Count"
              value={updateData.reviews_count}
              variant="outlined"
              type="number"
              name="reviews_count"
              onChange={(e) =>
                setUpdateData({
                  ...updateData,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <TextField
              id="outlined-basic"
              label="Enter Title"
              value={updateData.title}
              variant="outlined"
              name="title"
              onChange={(e) =>
                setUpdateData({
                  ...updateData,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <TextField
              id="outlined-basic"
              label="Enter City"
              value={updateData.city}
              variant="outlined"
              name="city"
              onChange={(e) =>
                setUpdateData({
                  ...updateData,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <TextField
              id="outlined-basic"
              label="Enter Country"
              value={updateData.country}
              variant="outlined"
              name="country"
              onChange={(e) =>
                setUpdateData({
                  ...updateData,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <TextField
              id="outlined-basic"
              label="Enter Price"
              value={updateData.price}
              variant="outlined"
              type="number"
              name="price"
              onChange={(e) =>
                setUpdateData({
                  ...updateData,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <Button
              variant="contained"
              onClick={handleUpdate}
              color="secondary"
            >
              Update
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
