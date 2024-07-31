import React, { useEffect, useState } from "react";
import HotelBCard from "../components/HotelBCard";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";
import dayjs from "dayjs";

const HotelBooking = () => {
  const [getData, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const getHotelData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}api/v1/get-hotel-total`
      );
      setData(response.data.message);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getHotelData();
  }, []);

  const filteredData = selectedDate
    ? getData.filter((ele) => dayjs(ele.date_of_booking).isSame(selectedDate, "day"))
    : getData;
  return (
    <main className="commoin-booking-main">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Hotel Booking Details</h1>
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
        {filteredData &&
          filteredData.map((ele) => <HotelBCard data={ele} key={ele._id} />)}
      </div>
    </main>
  );
};

export default HotelBooking;
