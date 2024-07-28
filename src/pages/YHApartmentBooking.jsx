import React, { useEffect, useState } from "react";
import YHotelBCard from "../components/YHotelBCard";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import axios from "axios";

const YHApartmentBooking = () => {
  const [getData, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const getAllData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}api/v1/get-yh-total?type=apartment`
      );
      setData(response.data.message);
      setFilteredData(response.data.message);
    } catch (error) {
      console.log("error", error);
      return error;
    }
  };

  useEffect(() => {
    scrollTo(0, 0);
    getAllData();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      const filtered = getData.filter((ele) => {
        const createdAtDate = dayjs(ele.createdAt);
        return createdAtDate.isSame(selectedDate, "day");
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(getData);
    }
  }, [selectedDate, getData]);

  return (
    <main className="commoin-booking-main">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>YH Apartment Booking Details</h1>
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
            return <YHotelBCard data={ele} key={ele._id} />;
          })}
      </div>
    </main>
  );
};

export default YHApartmentBooking;
