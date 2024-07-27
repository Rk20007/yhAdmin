import React, { useEffect, useState } from "react";
import SupportCard from "../components/SupportCard";
import toast from "react-hot-toast";
import axios from "axios";

const Support = () => {
  const [supportData, setSupportData] = useState([]);
  const getSupportData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}api/v1/get-support?status=Pending`
      );
      if (response.data.success) {
        setSupportData(response.data.data.findData);
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log("Error", error);
      return error.message;
    }
  };

  useEffect(() => {
    Promise.allSettled([getSupportData()]);
  }, []);

  return (
    <main className="flight-offer">
      <h1>YH Support Pending Status</h1>
      <div className="support-grid">
        {supportData &&
          supportData.map((ele) => {
            return (
              <SupportCard
                data={ele}
                key={ele._id}
                getSupportData={getSupportData}
              />
            );
          })}
      </div>
    </main>
  );
};

export default Support;
