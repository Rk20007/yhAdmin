import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import moment from "moment";

const PaymentCard = ({ data }) => {
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
            Date: {moment(data.createdAt).format("DD-MM-YYYY")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Amount: {data.amount}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            mobileNumber: {data.mobileNumber}
          </Typography>
        </Box>
        <Box sx={{ borderTop: "1px solid #ddd", paddingTop: 2 }}>
          <Typography variant="body2" color="text.secondary">
            razorpay_order_id: {data.razorpay_order_id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            razorpay_payment_id: {data.razorpay_payment_id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            razorpay_signature: {data.razorpay_signature}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PaymentCard;
