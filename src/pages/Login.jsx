import { Box, Button, Paper, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const handleLogin = () => {
    nav("/admin/secure/home");
  };
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
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
          />
          <TextField
            id="outlined-basic"
            label="Enter Admin Password"
            variant="outlined"
            fullWidth
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{ height: "6vh" }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </section>
  );
};

export default Login;
