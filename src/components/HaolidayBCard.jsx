import { Card, CardContent, Typography, Divider } from "@mui/material";
import React from "react";

const HolidayBCard = ({ data }) => {
  return (
    <Card sx={{ width: "100%", height: "auto", boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Location: {data.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Travel Details: {data.details}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {data.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Traveler: {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Contact Number: {data.mobileNumber}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date of Travel: {new Date(data.date_of_travel).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Total Members: {data.total_memebers}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Payment Status: {data.payment_status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Payment ID: {data.payment_id}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" color="text.secondary">
          Booking Created At: {new Date(data.createdAt).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HolidayBCard;
