import { Box, Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { LoginApi } from "../api/auth.api";
import toast from "react-hot-toast";

const Login = () => {
  const nav = useNavigate();
  const [payload, setPayload] = useState({
    userId: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };
  const handleLogin = async () => {
    if (payload.userId === "" || payload.password === "") {
      toast.error("Please fill all the fields");
      return;
    }
    setLoading(true);
    const res = await LoginApi(payload);
    if (res.status) {
      toast.success(res.message);
      Cookies.set("YH_admin_token", res.data.token);
      localStorage.setItem("admin_name", res.data.name);
      setLoading(false);
      setTimeout(() => {
        window.location.href = "/admin/secure/home";
      }, 1500);
    } else {
      toast.error("User not found");
      setLoading(false);
    }
  };
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "85vh",
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
            gap: "2rem",
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
            Admin Login Here
          </div>
          <TextField
            id="outlined-basic"
            label="Enter Admin ID"
            variant="outlined"
            fullWidth
            name="userId"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <TextField
            id="outlined-basic"
            label="Enter Admin Password"
            variant="outlined"
            fullWidth
            type="password"
            name="password"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <div
            className="admin-text"
            onClick={() => nav("/admin/secure/verifyCode")}
          >
            Click for Make Admin ID
          </div>
          <Button
            variant="contained"
            color="secondary"
            sx={{ height: "6vh" }}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Please wait..." : "Login"}
          </Button>
        </Box>
      </Paper>
    </section>
  );
};

export default Login;
