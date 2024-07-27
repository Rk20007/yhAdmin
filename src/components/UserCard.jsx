import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
import moment from "moment";

const UserCard = ({ user }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2, boxShadow: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <Avatar
          alt={user.fullName}
          //   src={user.avatar}
          sx={{ width: 56, height: 56 }}
        />
        <Box sx={{ ml: 2 }}>
          <Typography variant="h6">{user.fullName}</Typography>
          <Typography variant="body2" color="text.secondary">
            {user.email}
          </Typography>
        </Box>
      </Box>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Gender: {user.gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          User_id: {user._id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          mobileNumber: {user.mobileNumber}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date of Created: {moment(user.createdAt).format("DD-MM-YYYY")}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
