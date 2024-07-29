import { Card, CardContent, Typography, Divider } from "@mui/material";
import React from "react";

const TransBCard = ({ data }) => {
  return (
    <Card sx={{ width: "100%", height: "auto", boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Transport Type: {data.type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          From: {data.from}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          To: {data.to}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Departure: {data.departure_date} at {data.departure_date_time}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Arrival: {data.arrival_date} at {data.arrival_date_time}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Total Passengers: {data.total_passenger}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Guest Details:
          <ul>
            {data.guest_details.map((guest, index) => (
              <li key={index}>{guest.name}</li>
            ))}
          </ul>
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" color="text.secondary">
          Total Amount: ${data.total_amount}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Payment Status: {data.payment_status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Payment ID: {data.payment_id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Mode of Payment: {data.mode_of_payment}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Mobile Number: {data.mobileNumber}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Passenger Name: {data.passengerName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {data.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date of Booking: {data.date_of_booking}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TransBCard;
