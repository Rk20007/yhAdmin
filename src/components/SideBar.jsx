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
import Collapse from "@mui/material/Collapse";
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
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ChecklistIcon from "@mui/icons-material/Checklist";
import HandshakeIcon from '@mui/icons-material/Handshake';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const drawerWidth = 240;

export default function SideBar({ children }) {
  const location = useLocation();
  const [openFlightMenu, setOpenFlightMenu] = useState(false);
  const [openHotelMenu, setOpenHotelMenu] = useState(false);
  const [openTransportMenu, setOpenTransportMenu] = useState(false);
  const [openOffersMenu, setOpenOffersMenu] = useState(false);
  const [openYHHOteldsMenu, setOpenYHHOteldsMenu] = useState(false);
  const [openSupportMenu, setOpenSupportMenu] = useState(false);
  const [openListingMenu, setOpenListingMenu] = useState(false);
  const [openBookikngMenu, setOpenBookikngMenu] = useState(false);

  const handleFlightMenuClick = () => {
    setOpenFlightMenu(!openFlightMenu);
  };

  const handleHotelMenuClick = () => {
    setOpenHotelMenu(!openHotelMenu);
  };

  const handleTransportMenuClick = () => {
    setOpenTransportMenu(!openTransportMenu);
  };

  const handleOffersMenuClick = () => {
    setOpenOffersMenu(!openOffersMenu);
  };

  const handleYHHOteldsMenuClick = () => {
    setOpenYHHOteldsMenu(!openYHHOteldsMenu);
  };

  const handleSupportMenuClick = () => {
    setOpenSupportMenu(!openSupportMenu);
  };

  const handleListingMenuClick = () => {
    setOpenListingMenu(!openListingMenu);
  };

  const handleBookikngMenuClick = () => {
    setOpenBookikngMenu(!openBookikngMenu);
  };

  const menuItems = [
    { text: "Home", path: "/admin/secure/home", icon: <CottageIcon /> },
    {
      text: "Flight Page",
      path: "",
      icon: <FlightIcon />,
      hasSubmenu: true,
      submenuItems: [
        {
          text: "Top Destinations",
          path: "/admin/secure/flight-top-destination",
        },
        { text: "Flight Offers", path: "/admin/secure/flight-offer" },
        { text: "Flight Banner", path: "/admin/secure/flight-banner" },
        {
          text: "Flight Testimonial",
          path: "/admin/secure/flight-testimonial",
        },
      ],
      open: openFlightMenu,
      handleClick: handleFlightMenuClick,
    },
    {
      text: "Hotel Page",
      path: "",
      icon: <HotelIcon />,
      hasSubmenu: true,
      submenuItems: [
        { text: "Hotel Banner", path: "/admin/secure/hotel-banner" },
        { text: "Hotel Offers", path: "/admin/secure/hotel-offer" },
        {
          text: "Top Destinations",
          path: "/admin/secure/flight-top-destination",
        },
        {
          text: "Top Rated Hotels",
          path: "/admin/secure/hotel-hotelswithdeal",
        },
        {
          text: "Trending getaways",
          path: "/admin/secure/hotel-trending-gateway",
        },
        {
          text: "Nearby Shooting Ranges",
          path: "/admin/secure/hotel-shooting-range",
        },
      ],
      open: openHotelMenu,
      handleClick: handleHotelMenuClick,
    },
    {
      text: "Transport Page",
      path: "",
      icon: <DirectionsCarIcon />,
      hasSubmenu: true,
      submenuItems: [
        { text: "Transport Banner", path: "/admin/secure/transport-banner" },
        { text: "Transport Offers", path: "/admin/secure/transport-offer" },
        { text: "Transport Service", path: "/admin/secure/transport-services" },
      ],
      open: openTransportMenu,
      handleClick: handleTransportMenuClick,
    },
    {
      text: "Offers Page",
      path: "",
      icon: <DiscountIcon />,
      hasSubmenu: true,
      submenuItems: [
        { text: "Flight Offers", path: "/admin/secure/offer-flight" },
        { text: "Hotel Offers", path: "/admin/secure/offer-hotel" },
        { text: "Transport Offers", path: "/admin/secure/offer-transport" },
      ],
      open: openOffersMenu,
      handleClick: handleOffersMenuClick,
    },
    {
      text: "YH Hotels",
      path: "",
      hasSubmenu: true,
      icon: <AccessibilityNewIcon />,
      submenuItems: [
        { text: "YH Hotels", path: "/admin/secure/yh-hotel" },
        { text: "YH Apartments", path: "/admin/secure/yh-appartment" },
      ],
      open: openYHHOteldsMenu,
      handleClick: handleYHHOteldsMenuClick,
    },
    {
      text: "Holiday Package",
      path: "/admin/secure/holidayPackage",
      icon: <SnowboardingIcon />,
    },
    {
      text: "YH Gallery",
      path: "/admin/secure/gallery",
      icon: <CollectionsIcon />,
    },
    {
      text: "My Services",
      path: "/admin/secure/services",
      icon: <ManageAccountsIcon />,
    },
    {
      text: "Supports",
      path: "",
      icon: <SmsIcon />,
      hasSubmenu: true,
      submenuItems: [
        { text: "Pending", path: "/admin/secure/support-pending" },
        { text: "Solved", path: "/admin/secure/support-solved" },
      ],
      open: openSupportMenu,
      handleClick: handleSupportMenuClick,
    },
    {
      text: "Users Details",
      path: "/admin/secure/user-details",
      icon: <PersonIcon />,
    },
    {
      text: "Listing Details",
      path: "",
      hasSubmenu: true,
      icon: <ChecklistIcon />,
      submenuItems: [
        {
          text: "HotelListing Details",
          path: "/admin/secure/hotel-listing-details",
        },
        {
          text: "Transport Listing Details",
          path: "/admin/secure/transport-listing-details",
        },
      ],
      open: openListingMenu,
      handleClick: handleListingMenuClick,
    },
    {
      text: "Booking Details",
      path: "",
      hasSubmenu: true,
      icon: <BeenhereIcon />,
      submenuItems: [
        { text: "Hotel Booking", path: "/admin/secure/hotel-booking-details" },
        {
          text: "Transport Booking",
          path: "/admin/secure/transport-booking-details",
        },
        {
          text: "YH Hotel Booking",
          path: "/admin/secure/yh-hotel-booking-details",
        },
        {
          text: "YH Apartment Booking",
          path: "/admin/secure/yh-apartment-booking-details",
        },
        {
          text: "Holiday Package Booking",
          path: "/admin/secure/holiday-booking-details",
        },
      ],
      open: openBookikngMenu,
      handleClick: handleBookikngMenuClick,
    },
    {
      text: "Payment Details",
      path: "/admin/secure/paymentDetail",
      icon: <CurrencyRupeeIcon />,
    },
    {
      text: "Why Book With Us",
      path: "/admin/secure/whyBook",
      icon: <PushPinIcon />,
    },
    {
      text: "Social Media",
      path: "/admin/secure/socialMedia",
      icon: <ShareIcon />,
    },
    {
      text: "Our Partners",
      path: "/admin/secure/ourPartners",
      icon: <HandshakeIcon />,
    },
    // {
    //   text: "Image Upload",
    //   path: "/admin/secure/image-upload",
    //   icon: <CloudUploadIcon />,
    // }
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
              <React.Fragment key={item.text}>
                <ListItem disablePadding>
                  <ListItemButton
                    component={item.hasSubmenu ? "div" : Link}
                    to={item.hasSubmenu ? null : item.path}
                    selected={location.pathname === item.path}
                    onClick={item.hasSubmenu ? item.handleClick : null}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                    {item.hasSubmenu ? (
                      item.open ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )
                    ) : null}
                  </ListItemButton>
                </ListItem>
                {item.hasSubmenu && (
                  <Collapse in={item.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.submenuItems.map((subItem) => (
                        <ListItem key={subItem.text} disablePadding>
                          <ListItemButton
                            component={Link}
                            to={subItem.path}
                            sx={{ pl: 4 }}
                            selected={location.pathname === subItem.path}
                          >
                            <ListItemText primary={subItem.text} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
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
