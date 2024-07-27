import React, { useEffect } from "react";
import HolidatBCard from "../components/HaolidayBCard";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const HolidayBooking = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <main className="commoin-booking-main">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Holiday Package Booking Details</h1>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="Filter Date" />
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </div>
      <div className="common-booking">
        <HolidatBCard />
        <HolidatBCard />
        <HolidatBCard />
        <HolidatBCard />
        <HolidatBCard />
        <HolidatBCard />
        <HolidatBCard />
        <HolidatBCard />
        <HolidatBCard />
        <HolidatBCard />
        <HolidatBCard />
      </div>
    </main>
  );
};

export default HolidayBooking;
