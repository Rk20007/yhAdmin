import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FlightUpdateofferAPI } from "../api/flight.api";
import { Button, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import toast from "react-hot-toast";

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

export default function FlightOfferModal({
  open,
  setOpen,
  updateData,
  getOffers,
  setUpdateData,
}) {
  const handleClose = () => setOpen(false);

  const handleUpdate = async () => {
    const response = await FlightUpdateofferAPI(updateData);
    if (response.status) {
      getOffers();
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
              label="Enter Type"
              variant="outlined"
              fullWidth
              name="type"
              value={updateData?.type}
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
              variant="outlined"
              name="title"
              fullWidth
              value={updateData?.title}
              onChange={(e) =>
                setUpdateData({
                  ...updateData,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <TextField
              id="outlined-basic"
              label="Enter Details"
              variant="outlined"
              name="details"
              fullWidth
              value={updateData?.details}
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
              variant="outlined"
              name="price"
              fullWidth
              type="number"
              value={updateData?.price}
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
