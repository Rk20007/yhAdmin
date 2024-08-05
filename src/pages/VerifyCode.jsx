import { Box, Button, Paper, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const VerifyCode = () => {
  const [payload, setPayload] = useState({
    fullName: "",
    userId: "",
    mobileNumber: "",
    password: "",
    code: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };
  const handleVerify = async () => {
    if (payload.code === "") {
      toast.error("Please fill all the fields");
      return;
    } else if (payload.code === import.meta.env.VITE_APP_CODE_VERIFY) {
      toast.success("Code Verified");
      setLoading(true);
      const reponse = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}api/v1/admin-register`,
        payload
      );
      if (reponse.data.status) {
        toast.success(reponse.data.message);
        setLoading(false);
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        toast.error(reponse.data.message);
      }
    } else {
      toast.error("Invalid Code");
      return;
    }
  };
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "5rem",
      }}
    >
      <Paper elevation={10} sx={{ borderRadius: "15px" }}>
        <Box
          sx={{
            p: 4,
            minWidth: "400px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            Admin Registration
          </div>
          <TextField
            id="outlined-basic"
            label="Enter Security Code"
            variant="outlined"
            fullWidth
            name="code"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <TextField
            id="outlined-basic"
            label="Enter Full Name"
            variant="outlined"
            fullWidth
            name="fullName"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <TextField
            id="outlined-basic"
            label="Enter User ID"
            variant="outlined"
            fullWidth
            name="userId"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <TextField
            id="outlined-basic"
            label="Enter Mobile Number"
            variant="outlined"
            type="number"
            fullWidth
            name="mobileNumber"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <TextField
            id="outlined-basic"
            label="Enter Secure Password"
            variant="outlined"
            fullWidth
            name="password"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{ height: "6vh" }}
            onClick={handleVerify}
            disabled={loading}
          >
            {loading ? "Please wait..." : "Register"}
          </Button>
        </Box>
      </Paper>
    </section>
  );
};

export default VerifyCode;
