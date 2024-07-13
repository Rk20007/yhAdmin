import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CottageIcon from "@mui/icons-material/Cottage";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DiscountIcon from "@mui/icons-material/Discount";
import SnowboardingIcon from "@mui/icons-material/Snowboarding";
import CollectionsIcon from "@mui/icons-material/Collections";
import SmsIcon from "@mui/icons-material/Sms";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PersonIcon from "@mui/icons-material/Person";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PushPinIcon from "@mui/icons-material/PushPin";
import ShareIcon from "@mui/icons-material/Share";

const drawerWidth = 240;

export default function SideBar({ children }) {
  const location = useLocation();

  const menuItems = [
    { text: "Home", path: "/admin/secure/home" },
    { text: "Flight Page", path: "/admin/secure/flight" },
    { text: "Hotel Page", path: "/admin/secure/hotel" },
    { text: "Transport Page", path: "/admin/secure/transport" },
    { text: "Offers Page", path: "/admin/secure/offer" },
    { text: "Holiday Package", path: "/admin/secure/holidayPackage" },
    { text: "YH Gallery", path: "/admin/secure/gallery" },
    { text: "My Services", path: "/admin/secure/services" },
    { text: "Supports", path: "/admin/secure/support" },
    { text: "Users Details", path: "/admin/secure/userDetail" },
    { text: "Booking Details", path: "/admin/secure/bookingDetail" },
    { text: "Payment Details", path: "/admin/secure/paymentDetail" },
    { text: "Why Book With Us", path: "/admin/secure/whyBook" },
    { text: "Social Media", path: "/admin/secure/socialMedia" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: "65px",
            height: "calc(100% - 65px)",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box
          sx={{
            height: "100%",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
        >
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  selected={location.pathname === item.path}
                >
                  <ListItemIcon>
                    {(() => {
                      if (item.text === "Home") {
                        return <CottageIcon />;
                      } else if (item.text === "Flight Page") {
                        return <FlightIcon />;
                      } else if (item.text === "Hotel Page") {
                        return <HotelIcon />;
                      } else if (item.text === "Transport Page") {
                        return <DirectionsCarIcon />;
                      } else if (item.text === "Offers Page") {
                        return <DiscountIcon />;
                      } else if (item.text === "Holiday Package") {
                        return <SnowboardingIcon />;
                      } else if (item.text === "YH Gallery") {
                        return <CollectionsIcon />;
                      } else if (item.text === "My Services") {
                        return <ManageAccountsIcon />;
                      } else if (item.text === "Supports") {
                        return <SmsIcon />;
                      } else if (item.text === "Users Details") {
                        return <PersonIcon />;
                      } else if (item.text === "Booking Details") {
                        return <BeenhereIcon />;
                      } else if (item.text === "Payment Details") {
                        return <CurrencyRupeeIcon />;
                      } else if (item.text === "Why Book With Us") {
                        return <PushPinIcon />;
                      } else if (item.text === "Social Media") {
                        return <ShareIcon />;
                      }
                    })()}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
    </Box>
  );
}
