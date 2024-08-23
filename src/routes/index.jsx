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
        path: "/secure/flight-top-destination",
        element: <ProtectedRoute Component={FlightTop} />,
      },
      {
        path: "/secure/flight-offer",
        element: <ProtectedRoute Component={FlightsOffer} />,
      },
      {
        path: "/secure/flight-banner",
        element: <ProtectedRoute Component={FlightBanner} />,
      },
      {
        path: "/secure/flight-testimonial",
        element: <ProtectedRoute Component={FlightTestimonial} />,
      },
      {
        path: "/secure/hotel-banner",
        element: <ProtectedRoute Component={HotelBanner} />,
      },
      {
        path: "/secure/hotel-offer",
        element: <ProtectedRoute Component={HotelOffer} />,
      },
      {
        path: "/secure/hotel-hotelswithdeal",
        element: <ProtectedRoute Component={HotelwithDeal} />,
      },
      {
        path: "/secure/hotel-trending-gateway",
        element: <ProtectedRoute Component={HotelTrending} />,
      },
      {
        path: "/secure/hotel-shooting-range",
        element: <ProtectedRoute Component={HotelShooting} />,
      },
      {
        path: "/secure/transport-banner",
        element: <ProtectedRoute Component={TransBanner} />,
      },
      {
        path: "/secure/transport-offer",
        element: <ProtectedRoute Component={TransOffer} />,
      },
      {
        path: "/secure/transport-services",
        element: <ProtectedRoute Component={TransService} />,
      },
      {
        path: "/secure/offer-flight",
        element: <ProtectedRoute Component={OfferFlight} />,
      },
      {
        path: "/secure/offer-hotel",
        element: <ProtectedRoute Component={OfferHotel} />,
      },
      {
        path: "/secure/offer-transport",
        element: <ProtectedRoute Component={OfferTrans} />,
      },
      {
        path: "/secure/holidayPackage",
        element: <ProtectedRoute Component={HolidayPackage} />,
      },
      {
        path: "/secure/gallery",
        element: <ProtectedRoute Component={Gallery} />,
      },
      {
        path: "/secure/services",
        element: <ProtectedRoute Component={Services} />,
      },
      {
        path: "/secure/support-pending",
        element: <ProtectedRoute Component={Support} />,
      },
      {
        path: "/secure/userDetail",
        element: <ProtectedRoute Component={UserDetail} />,
      },
      {
        path: "/secure/bookingDetail",
        element: <ProtectedRoute Component={BookingDetail} />,
      },
      {
        path: "/secure/paymentDetail",
        element: <ProtectedRoute Component={PaymentDetail} />,
      },
      {
        path: "/secure/whyBook",
        element: <ProtectedRoute Component={WhyBook} />,
      },
      {
        path: "/secure/socialMedia",
        element: <ProtectedRoute Component={SocialMedia} />,
      },
      {
        path: "/secure/yh-hotel",
        element: <ProtectedRoute Component={YHHotel} />,
      },
      {
        path: "/secure/yh-appartment",
        element: <ProtectedRoute Component={YHAppartment} />,
      },
      {
        path: "/secure/support-solved",
        element: <ProtectedRoute Component={SupportSolved} />,
      },
      {
        path: "/secure/user-details",
        element: <ProtectedRoute Component={UserDetails} />,
      },
      {
        path: "/secure/hotel-listing-details",
        element: <ProtectedRoute Component={HotelListing} />,
      },
      {
        path: "/secure/transport-listing-details",
        element: <ProtectedRoute Component={TransportListing} />,
      },
      {
        path: "/secure/hotel-booking-details",
        element: <ProtectedRoute Component={HotelBooking} />,
      },
      {
        path: "/secure/transport-booking-details",
        element: <ProtectedRoute Component={TransportBooking} />,
      },
      {
        path: "/secure/yh-hotel-booking-details",
        element: <ProtectedRoute Component={YHotelBooking} />,
      },
      {
        path: "/secure/yh-apartment-booking-details",
        element: <ProtectedRoute Component={YHApartmentBooking} />,
      },
      {
        path: "/secure/holiday-booking-details",
        element: <ProtectedRoute Component={HolidayBooking} />,
      },
      {
        path: "/secure/ourPartners",
        element: <ProtectedRoute Component={Partners} />,
      },
      {
        path: "/secure/verifyCode",
        element: <ProtectedRoute Component={VerifyCode} />,
      },
    ],
  },
]);

