import { Card, CardContent, Typography, Divider } from "@mui/material";
import React from "react";

const HotelBCard = ({ data }) => {
  return (
    <Card sx={{ width: "100%", height: "auto", boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.hotelName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Address: {data.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Room Type: {data.room_type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Check-in: {new Date(data.check_in).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Check-out: {new Date(data.check_out).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Total Rooms: {data.total_room}
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
        <Typography variant="body2" color="text.secondary">
          Add-ons:
          <ul>
            <li>breakfast - {data.add_ons[0].breakfast ? "Yes" : "No"}</li>
            <li>extraBed {data.add_ons[0].extraBed ? "Yes" : "No"}</li>
            <li>meal {data.add_ons[0].meal ? "Yes" : "No"}</li>
            <li>parking {data.add_ons[0].parking ? "Yes" : "No"}</li>
            <li>wifi {data.add_ons[0].wifi ? "Yes" : "No"}</li>
          </ul>
        </Typography>
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
          Email: {data.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Passenger Name: {data.passenger_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date of Booking: {new Date(data.date_of_booking).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HotelBCard;
