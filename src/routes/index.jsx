import React from "react";
import { createBrowserRouter } from "react-router-dom";
import CommonElement from "../App.jsx";
import Login from "../pages/Login.jsx";
import Homepage from "../pages/Homepage.jsx";
import SideBar from "../components/SideBar.jsx";
import Flight from "../pages/Flight.jsx";
import Hotel from "../pages/Hotel.jsx";
import Transport from "../pages/Transport.jsx";
import Offer from "../pages/Offer.jsx";
import HolidayPackage from "../pages/HolidayPackage.jsx";
import Gallery from "../pages/Gallery.jsx";
import Services from "../pages/Services.jsx";
import Support from "../pages/Support.jsx";
import UserDetail from "../pages/UserDetail.jsx";
import BookingDetail from "../pages/BookingDetail.jsx";
import PaymentDetail from "../pages/PaymentDetail.jsx";
import WhyBook from "../pages/WhyBook.jsx";
import SocialMedia from "../pages/SocialMedia.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonElement />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/admin/secure/home",
        element: <Homepage />,
      },
      {
        path: "/admin/secure/flight",
        element: <Flight />,
      },
      {
        path: "/admin/secure/hotel",
        element: <Hotel />,
      },
      {
        path: "/admin/secure/transport",
        element: <Transport />,
      },
      {
        path: "/admin/secure/offer",
        element: <Offer />,
      },
      {
        path: "/admin/secure/holidayPackage",
        element: <HolidayPackage />,
      },
      {
        path: "/admin/secure/gallery",
        element: <Gallery />,
      },
      {
        path: "/admin/secure/services",
        element: <Services />,
      },
      {
        path: "/admin/secure/support",
        element: <Support />,
      },
      {
        path: "/admin/secure/userDetail",
        element: <UserDetail />,
      },
      {
        path: "/admin/secure/bookingDetail",
        element: <BookingDetail />,
      },
      {
        path: "/admin/secure/paymentDetail",
        element: <PaymentDetail />,
      },
      {
        path: "/admin/secure/whyBook",
        element: <WhyBook />,
      },
      {
        path: "/admin/secure/socialMedia",
        element: <SocialMedia />,
      },
    ],
  },
]);
