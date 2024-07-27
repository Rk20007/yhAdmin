import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const PaymentCard = ({ transaction }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "auto",
        margin: "auto",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Payment Details
        </Typography>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Date:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Amount:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Method:
          </Typography>
        </Box>
        <Box sx={{ borderTop: "1px solid #ddd", paddingTop: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Transaction ID:
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PaymentCard;
