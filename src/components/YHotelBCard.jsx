import { Card, CardContent, Typography, Divider } from "@mui/material";
import moment from "moment";
import React from "react";

const YHotelBCard = ({ data }) => {
  return (
    <Card sx={{ width: "100%", height: "auto", boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Hotel Name: {data.hotelName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {data.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Contact: {data.mobileNumber}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {data.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date: {moment(data.createdAt).format("DD-MM-YYYY")}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" color="text.secondary">
          Booking under the name: {data.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default YHotelBCard;
