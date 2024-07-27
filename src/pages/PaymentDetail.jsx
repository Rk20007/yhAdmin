import React, { useEffect } from "react";
import PaymentCard from "../components/PaymentCard";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const PaymentDetail = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <main className="commoin-booking-main">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Payment Details</h1>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="Filter Date" />
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </div>
      <div className="common-booking">
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
      </div>
    </main>
  );
};

export default PaymentDetail;
