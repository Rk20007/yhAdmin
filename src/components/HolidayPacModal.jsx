import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import toast from "react-hot-toast";
import { YHHotelUpdateAPI } from "../api/yhHotel.api";
import { HolidayPackageUpdateAPI } from "../api/holidayPackage.api";

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

export default function HolidayPacModal({
  open,
  setOpen,
  updateData,
  getDeals,
  setUpdateData,
}) {
  const handleClose = () => setOpen(false);

  const handleUpdate = async () => {
    const response = await HolidayPackageUpdateAPI(updateData);
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
              value={updateData.img}
              variant="outlined"
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
              label="Enter Description"
              value={updateData.description}
              variant="outlined"
              name="description"
              onChange={(e) =>
                setUpdateData({
                  ...updateData,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <TextField
              id="outlined-basic"
              label="Enter Sub Description"
              value={updateData.sub_desc}
              variant="outlined"
              name="sub_desc"
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
