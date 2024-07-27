import { Button } from "@mui/material";
import axios from "axios";
import moment from "moment";
import React from "react";
import toast from "react-hot-toast";

const SupportCard = ({ data, getSupportData }) => {
  const { _id, name, email, query, mobileNumber, createdAt, status } = data;
  const cardStyle = {
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "16px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    marginRight: "15rem",
  };

  const titleStyle = {
    fontSize: "1em",
    fontWeight: "500",
    marginBottom: "8px",
  };

  const contentStyle = {
    marginBottom: "12px",
    fontSize: "1em",
  };

  const statusStyle = {
    color: "#ff5722",
    fontWeight: "bold",
  };

  const statusStyle2 = {
    color: "#4caf50",
    fontWeight: "bold",
  };

  const handleSolved = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}api/v1/update-support`,
        {
          _id,
          status: "Solved",
        }
      );
      if (response.status) {
        toast.success("Solved Successfully");
        await getSupportData();
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log("Error", error);
      return error.message;
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_APP_API_URL}api/v1/delete-support`,
        { data: { _id } }
      );
      if (response.status) {
        toast.success("Deleted Successfully");
        await getSupportData();
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log("Error", error);
      return error.message;
    }
  };

  return (
    <section style={cardStyle}>
      <div style={{ ...contentStyle, ...titleStyle }}>
        SupportId: <span>{_id}</span>
      </div>
      <div style={{ ...contentStyle, ...titleStyle }}>
        Name: <span>{name}</span>
      </div>
      <div style={{ ...contentStyle, ...titleStyle }}>
        Date: <span>{moment(createdAt).format("DD-MM-YYYY")}</span>
      </div>
      <div style={{ ...contentStyle, ...titleStyle }}>
        Mobile: <span>{mobileNumber}</span>
      </div>
      <div style={{ ...contentStyle, ...titleStyle }}>
        Email: <span>{email}</span>
      </div>
      <div style={{ ...contentStyle, ...titleStyle }}>
        Status:{" "}
        <span style={status === "Solved" ? statusStyle2 : statusStyle}>
          {status}
        </span>
      </div>
      <div style={{ ...contentStyle, ...titleStyle }}>
        Query: <span>{query}</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          paddingTop: "25px",
          gap: "15px",
        }}
      >
        {status === "Pending" && <Button variant="contained" color="success" onClick={handleSolved}>
          Solved
        </Button>}
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </section>
  );
};

export default SupportCard;
