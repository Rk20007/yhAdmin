import React from "react";
import { createBrowserRouter } from "react-router-dom";
import CommonElement from "../App.jsx";
import Login from "../pages/Login.jsx";
import Homepage from "../pages/Homepage.jsx";
import HolidayPackage from "../pages/HolidayPackage.jsx";
import Gallery from "../pages/Gallery.jsx";
import Services from "../pages/Services.jsx";
import Support from "../pages/Support.jsx";
import UserDetail from "../pages/UserDetail.jsx";
import BookingDetail from "../pages/BookingDetail.jsx";
import PaymentDetail from "../pages/PaymentDetail.jsx";
import WhyBook from "../pages/WhyBook.jsx";
import SocialMedia from "../pages/SocialMedia.jsx";
import FlightTop from "../components/FlightTop.jsx";
import FlightsOffer from "../components/FlightsOffer.jsx";
import FlightBanner from "../components/FlightBanner.jsx";
import FlightTestimonial from "../components/FlightTestimonial.jsx";
import HotelBanner from "../components/HotelBanner.jsx";
import HotelOffer from "../components/HotelOffer.jsx";
import HotelwithDeal from "../components/HotelwithDeal.jsx";
import HotelTrending from "../components/HotelTrending.jsx";
import HotelShooting from "../components/HotelShooting.jsx";
import TransBanner from "../components/TransBanner.jsx";
import TransOffer from "../components/TransOffer.jsx";
import TransService from "../components/TransService.jsx";
import OfferFlight from "../components/OfferFlight.jsx";
import OfferHotel from "../components/OfferHotel.jsx";
import OfferTrans from "../components/OfferTrans.jsx";
import YHHotel from "../components/YHHotel.jsx";
import YHAppartment from "../components/YHAppartment.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import SupportSolved from "../pages/SupportSolved.jsx";
import UserDetails from "../pages/UserDetails.jsx";
import HotelListing from "../pages/HotelListing.jsx";
import TransportListing from "../pages/TransportListing.jsx";
import HotelBooking from "../pages/HotelBooking.jsx";
import TransportBooking from "../pages/TransportBooking.jsx";
import YHotelBooking from "../pages/YHotelBooking.jsx";
import YHApartmentBooking from "../pages/YHApartmentBooking.jsx";
import HolidayBooking from "../pages/HolidayBooking.jsx";
import Partners from "../pages/Partners.jsx";
import VerifyCode from "../pages/VerifyCode.jsx";
import ImageUpload from "../pages/ImageUpload.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonElement />,
    children: [
      {
        index: "/",
        element: <ProtectedRoute Component={Login} />,
      },
      {
        path: "/secure/home",  // Changed from /admin/secure/home to secure/home
        element: <ProtectedRoute Component={Homepage} />,
      },
      {
        path: "/admin-yh/secure/flight-top-destination",
        element: <ProtectedRoute Component={FlightTop} />,
      },
      {
        path: "/admin-yh/secure/flight-offer",
        element: <ProtectedRoute Component={FlightsOffer} />,
      },
      {
        path: "/admin-yh/secure/flight-banner",
        element: <ProtectedRoute Component={FlightBanner} />,
      },
      {
        path: "/admin-yh/secure/flight-testimonial",
        element: <ProtectedRoute Component={FlightTestimonial} />,
      },
      {
        path: "/admin-yh/secure/hotel-banner",
        element: <ProtectedRoute Component={HotelBanner} />,
      },
      {
        path: "/admin-yh/secure/hotel-offer",
        element: <ProtectedRoute Component={HotelOffer} />,
      },
      {
        path: "/admin-yh/secure/hotel-hotelswithdeal",
        element: <ProtectedRoute Component={HotelwithDeal} />,
      },
      {
        path: "/admin-yh/secure/hotel-trending-gateway",
        element: <ProtectedRoute Component={HotelTrending} />,
      },
      {
        path: "/admin-yh/secure/hotel-shooting-range",
        element: <ProtectedRoute Component={HotelShooting} />,
      },
      {
        path: "/admin-yh/secure/transport-banner",
        element: <ProtectedRoute Component={TransBanner} />,
      },
      {
        path: "/admin-yh/secure/transport-offer",
        element: <ProtectedRoute Component={TransOffer} />,
      },
      {
        path: "/admin-yh/secure/transport-services",
        element: <ProtectedRoute Component={TransService} />,
      },
      {
        path: "/admin-yh/secure/offer-flight",
        element: <ProtectedRoute Component={OfferFlight} />,
      },
      {
        path: "/admin-yh/secure/offer-hotel",
        element: <ProtectedRoute Component={OfferHotel} />,
      },
      {
        path: "/admin-yh/secure/offer-transport",
        element: <ProtectedRoute Component={OfferTrans} />,
      },
      {
        path: "/admin-yh/secure/holidayPackage",
        element: <ProtectedRoute Component={HolidayPackage} />,
      },
      {
        path: "/admin-yh/secure/gallery",
        element: <ProtectedRoute Component={Gallery} />,
      },
      {
        path: "/admin-yh/secure/services",
        element: <ProtectedRoute Component={Services} />,
      },
      {
        path: "/admin-yh/secure/support-pending",
        element: <ProtectedRoute Component={Support} />,
      },
      {
        path: "/admin-yh/secure/userDetail",
        element: <ProtectedRoute Component={UserDetail} />,
      },
      {
        path: "/admin-yh/secure/bookingDetail",
        element: <ProtectedRoute Component={BookingDetail} />,
      },
      {
        path: "/admin-yh/secure/paymentDetail",
        element: <ProtectedRoute Component={PaymentDetail} />,
      },
      {
        path: "/admin-yh/secure/whyBook",
        element: <ProtectedRoute Component={WhyBook} />,
      },
      {
        path: "/admin-yh/secure/socialMedia",
        element: <ProtectedRoute Component={SocialMedia} />,
      },
      {
        path: "/admin-yh/secure/yh-hotel",
        element: <ProtectedRoute Component={YHHotel} />,
      },
      {
        path: "/admin-yh/secure/yh-appartment",
        element: <ProtectedRoute Component={YHAppartment} />,
      },
      {
        path: "/admin-yh/secure/support-solved",
        element: <ProtectedRoute Component={SupportSolved} />,
      },
      {
        path: "/admin-yh/secure/user-details",
        element: <ProtectedRoute Component={UserDetails} />,
      },
      {
        path: "/admin-yh/secure/hotel-listing-details",
        element: <ProtectedRoute Component={HotelListing} />,
      },
      {
        path: "/admin-yh/secure/transport-listing-details",
        element: <ProtectedRoute Component={TransportListing} />,
      },
      {
        path: "/admin-yh/secure/hotel-booking-details",
        element: <ProtectedRoute Component={HotelBooking} />,
      },
      {
        path: "/admin-yh/secure/transport-booking-details",
        element: <ProtectedRoute Component={TransportBooking} />,
      },
      {
        path: "/admin-yh/secure/yh-hotel-booking-details",
        element: <ProtectedRoute Component={YHotelBooking} />,
      },
      {
        path: "/admin-yh/secure/yh-apartment-booking-details",
        element: <ProtectedRoute Component={YHApartmentBooking} />,
      },
      {
        path: "/admin-yh/secure/holiday-booking-details",
        element: <ProtectedRoute Component={HolidayBooking} />,
      },
      {
        path: "/admin-yh/secure/ourPartners",
        element: <ProtectedRoute Component={Partners} />,
      },
      {
        path: "/admin-yh/secure/verifyCode",
        element: <ProtectedRoute Component={VerifyCode} />,
      },
    ],
  },
]);

