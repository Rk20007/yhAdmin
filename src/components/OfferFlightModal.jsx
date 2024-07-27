import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import toast from "react-hot-toast";
import { OfferUpdateAPI } from "../api/offer.api";

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

export default function OfferFlightModal({
  open,
  setOpen,
  updateData,
  getOffers,
  setUpdateData,
}) {
  const handleClose = () => setOpen(false);

  const handleUpdate = async () => {
    const response = await OfferUpdateAPI(updateData);
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
              label="Enter Description"
              variant="outlined"
              fullWidth
              name="description"
              value={updateData?.description}
              onChange={(e) =>
                setUpdateData({
                  ...updateData,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <TextField
              id="outlined-basic"
              label="Enter Coupen Code"
              variant="outlined"
              name="coupen_code"
              fullWidth
              value={updateData?.coupen_code}
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
              label="Enter Validity"
              variant="outlined"
              name="validity"
              fullWidth
              value={updateData?.validity}
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
