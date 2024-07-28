import React, { useEffect, useState } from "react";
import TransBCard from "../components/TranBCard";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";
import dayjs from "dayjs";

const TransportBooking = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const getTransData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}api/v1/get-trans-total`
      );
      setData(response.data.message);
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
  };

  useEffect(() => {
    scrollTo(0, 0);
    getTransData();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      const filtered = data.filter((ele) => {
        return dayjs(ele.date_of_booking).isSame(selectedDate, "day");
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [data, selectedDate]);

  return (
    <main className="commoin-booking-main">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Transport Booking Details</h1>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Filter Date"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </div>
      <div className="common-booking">
        {filteredData.map((ele) => (
          <TransBCard key={ele._id} data={ele} />
        ))}
      </div>
    </main>
  );
};

export default TransportBooking;
