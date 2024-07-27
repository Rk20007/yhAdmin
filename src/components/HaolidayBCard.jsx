import { Card, CardContent, Typography, Divider } from "@mui/material";
import React from "react";

const HolidatBCard = () => {
  return (
    <Card sx={{ width: "100%", height: "auto", boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Transport Name - XYZ
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Address: 1234 Hotel St, City, Country
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: ⭐⭐⭐⭐
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: $120 per night
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" color="text.secondary">
          Description: This is a beautiful hotel located in the heart of the
          city. Enjoy luxury and comfort during your stay.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HolidatBCard;
