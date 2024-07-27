import React, { useEffect } from "react";
import TransBCard from "../components/TranBCard";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const TransportBooking = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <main className="commoin-booking-main">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Transport Booking Details</h1>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="Filter Date" />
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </div>
      <div className="common-booking">
        <TransBCard />
        <TransBCard />
        <TransBCard />
        <TransBCard />
        <TransBCard />
        <TransBCard />
        <TransBCard />
        <TransBCard />
        <TransBCard />
      </div>
    </main>
  );
};

export default TransportBooking;
