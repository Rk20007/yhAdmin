import React, { useEffect, useState } from "react";
import PaymentCard from "../components/PaymentCard";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";
import dayjs from "dayjs";

const PaymentDetail = () => {
  const [getData, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const getPayment = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}api/v1/get-payment`
      );
      setData(response.data.message);
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
  };

  useEffect(() => {
    scrollTo(0, 0);
    getPayment();
  }, []);

  // Filter payments based on selected date
  const filteredData = selectedDate
    ? getData.filter((item) =>
        dayjs(item.createdAt).isSame(selectedDate, "day")
      )
    : getData;

  return (
    <main className="commoin-booking-main">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Payment Details</h1>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Filter Date"
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div className="common-booking">
        {filteredData &&
          filteredData.map((ele) => <PaymentCard key={ele._id} data={ele} />)}
      </div>
    </main>
  );
};

export default PaymentDetail;
