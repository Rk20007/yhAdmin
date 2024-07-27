import axios from "axios";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import UserCard from "../components/UserCard";

const UserDetails = () => {
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getUserData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}api/v1/get-user`
      );
      setUserData(response?.data?.data?.findData);
    } catch (error) {
      console.log("Error", error);
      return error.message;
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = searchTerm
    ? userData.filter((user) =>
        user?.fullName?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      )
    : userData;

  return (
    <main className="user-details-main">
      <TextField
        label="Search Users"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        fullWidth
        margin="normal"
      />
      <div className="user-details">
        {filteredUsers?.map((ele) => {
          return <UserCard user={ele} key={ele._id} />;
        })}
      </div>
    </main>
  );
};

export default UserDetails;
