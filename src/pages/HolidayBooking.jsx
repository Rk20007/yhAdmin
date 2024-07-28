import React, { useEffect, useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import axios from "axios";
import HolidayBCard from "../components/HaolidayBCard";

const HolidayBooking = () => {
  const [getData, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const getHolidayData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}api/v1/get-holiday-total`
      );
      setData(response.data.message);
    } catch (error) {
      console.log("error", error);
      return error;
    }
  };

  useEffect(() => {
    scrollTo(0, 0);
    getHolidayData();
  }, []);

  const filteredData = getData.filter((ele) =>
    selectedDate ? dayjs(ele.createdAt).isSame(selectedDate, "day") : true
  );

  return (
    <main className="commoin-booking-main">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Holiday Package Booking Details</h1>
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
          filteredData.map((ele) => {
            return <HolidayBCard data={ele} key={ele._id} />;
          })}
      </div>
    </main>
  );
};

export default HolidayBooking;
