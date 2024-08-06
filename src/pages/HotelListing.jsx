import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";
import HotelListingTable from "../components/HListingTable";
import ImageUpload from "./ImageUpload";

const HotelListing = () => {
  const [deals, setDeals] = useState([]);
  const [payload, setPayload] = useState({
    hotelName: "",
    city: "",
    country: "",
    state: "",
    image: "",
    reviews: "",
    price: "",
    room_avaliable_count: "",
    hotel_show: "true",
    recommended: "",
    guest_rating: "",
    star_category: "",
    descriptionImages: [],
    descriptionbed: "",
    descriptionDedicated: "",
    description_reviews_data: [],
    description_about: "",
    description_amentities: [],
    description_price_breakup_serviceFee: "",
    description_price_breakup_taxFee: "",
    description_nonRefundable: "",
    description_Refundable: "",
    description_cancellation_before: "",
    description_cancellation_before_partial: "",
    description_google_map: "",
    description_hotel_details: "",
    description_nearBy_hotels: [],
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (index, field, value, arrayName) => {
    if (field === "") {
      // For fields that are just arrays of strings, like descriptionImages and description_amentities
      const newArray = [...payload[arrayName]];
      newArray[index] = value;
      setPayload({ ...payload, [arrayName]: newArray });
    } else {
      // For objects within an array
      const newArray = [...payload[arrayName]];
      newArray[index][field] = value;
      setPayload({ ...payload, [arrayName]: newArray });
    }
  };
  

  const addNewField = (fieldName, defaultValue) => {
    setPayload({
      ...payload,
      [fieldName]: [...payload[fieldName], defaultValue],
    });
  };

  const removeField = (index, fieldName) => {
    setPayload({
      ...payload,
      [fieldName]: payload[fieldName].filter((_, i) => i !== index),
    });
  };

  const getDeals = async () => {
    const getData = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}api/v1/get-all-hotelListing`
    );
    setDeals(getData?.data?.data?.findData);
  };

  useEffect(() => {
    getDeals();
  }, []);

  const handleSubmit = async () => {
    const res = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}api/v1/add-hotelListing`,
      payload
    );
    if (res.status) {
      toast.success("Successfully Added!");
      getDeals();
      setPayload({
        hotelName: "",
        city: "",
        country: "",
        state: "",
        image: "",
        reviews: "",
        price: "",
        room_avaliable_count: "",
        hotel_show: "",
        recommended: "",
        guest_rating: "",
        star_category: "",
        descriptionImages: [],
        descriptionbed: "",
        descriptionDedicated: "",
        description_reviews_data: [],
        description_about: "",
        description_amentities: [],
        description_price_breakup_serviceFee: "",
        description_price_breakup_taxFee: "",
        description_nonRefundable: "",
        description_Refundable: "",
        description_cancellation_before: "",
        description_cancellation_before_partial: "",
        description_google_map: "",
        description_hotel_details: "",
        description_nearBy_hotels: [],
      });
    } else {
      toast.error("Failed to Add!");
    }
  };

  return (
    <main className="HotelwithDeal">
      <section>
        <h1>Top Rated Hotels</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px"}}>
          <TextField
            label="Hotel Name"
            variant="outlined"
            value={payload.hotelName}
            name="hotelName"
            onChange={handleChange}
            style={{ width: "500px" }}
          />
          <TextField
            label="Enter City"
            variant="outlined"
            value={payload.city}
            name="city"
            onChange={handleChange}
            style={{ width: "500px" }}
          />
          <TextField
            label="Enter Country"
            variant="outlined"
            value={payload.country}
            name="country"
            onChange={handleChange}
            style={{ width: "500px" }}
          />
          <TextField
            label="Enter State"
            variant="outlined"
            value={payload.state}
            name="state"
            onChange={handleChange}
            style={{ width: "500px" }}
          />
          <TextField
            label="Enter Image URL"
            variant="outlined"
            value={payload.image}
            name="image"
            onChange={handleChange}
            style={{ width: "500px" }}
          />
          <TextField
            label="Enter Reviews Count"
            variant="outlined"
            type="number"
            value={payload.reviews}
            name="reviews"
            onChange={handleChange}
            style={{ width: "500px" }}
          />
          <TextField
            label="Enter Price"
            variant="outlined"
            value={payload.price}
            name="price"
            type="number"
            onChange={handleChange}
            style={{ width: "500px" }}
          />
          <TextField
            label="Enter Rooms Available Count"
            variant="outlined"
            type="number"
            value={payload.room_avaliable_count}
            name="room_avaliable_count"
            onChange={handleChange}
            style={{ width: "500px" }}
          />
          {/* <TextField
            label="Hotel Show"
            variant="outlined"
            value={payload.hotel_show}
            name="hotel_show"
            onChange={handleChange}
          /> */}
          <TextField
            label="Enter Recommended Text as per in Drop Down"
            variant="outlined"
            value={payload.recommended}
            name="recommended"
            onChange={handleChange}
            style={{ width: "500px" }}
          />
          <TextField
            label="Enter Guest Rating Text as per in Drop Down"
            variant="outlined"
            value={payload.guest_rating}
            name="guest_rating"
            onChange={handleChange}
            style={{ width: "500px" }}
          />
          <TextField
            label="Enter Star Category Count"
            variant="outlined"
            type="number"
            value={payload.star_category}
            name="star_category"
            onChange={handleChange}
            style={{ width: "500px" }}
          />
          <TextField
            label="Enter Description Bed count"
            variant="outlined"
            type="number"
            value={payload.descriptionbed}
            name="descriptionbed"
            onChange={handleChange}
            style={{ width: "500px" }}
          />
          <TextField
            label="Enter Description Dedicated"
            variant="outlined"
            value={payload.descriptionDedicated}
            name="descriptionDedicated"
            onChange={handleChange}
            style={{ width: "500px" }}
          />
          <TextField
            label="Enter Description About"
            variant="outlined"
            value={payload.description_about}
            name="description_about"
            onChange={handleChange}
            style={{ width: "500px" }}
          />
          <TextField
            label="Enter Service Fee"
            variant="outlined"
            type="number"
            value={payload.description_price_breakup_serviceFee}
            name="description_price_breakup_serviceFee"
            onChange={handleChange}
            style={{ width: "500px" }}
          />
          <TextField
            label="Enter Tax Fee"
            variant="outlined"
            type="number"
            value={payload.description_price_breakup_taxFee}
            name="description_price_breakup_taxFee"
            onChange={handleChange}
            style={{ width: "500px" }}
          />
          <TextField
            label="Enter Non-Refundable"
            variant="outlined"
            type="number"
            value={payload.description_nonRefundable}
            name="description_nonRefundable"
            onChange={handleChange}
            style={{ width: "500px" }}
          />
          <TextField
            label="Enter Refundable amount"
            variant="outlined"
            type="number"
            value={payload.description_Refundable}
            name="description_Refundable"
            onChange={handleChange}
            style={{ width: "500px" }}
          />
          <TextField
            label="Enter Cancellation Before"
            variant="outlined"
            value={payload.description_cancellation_before}
            name="description_cancellation_before"
            onChange={handleChange}
            style={{ width: "500px" }}
          />
          <TextField
            label="Enter Partial Cancellation Before"
            variant="outlined"
            value={payload.description_cancellation_before_partial}
            name="description_cancellation_before_partial"
            onChange={handleChange}
            style={{ width: "500px" }}
          />
          <TextField
            label="Enter Google Map"
            variant="outlined"
            value={payload.description_google_map}
            name="description_google_map"
            onChange={handleChange}
            style={{ width: "500px" }}
          />
          <TextField
            label="Enter Hotel Details"
            variant="outlined"
            value={payload.description_hotel_details}
            name="description_hotel_details"
            onChange={handleChange}
            style={{ width: "500px" }}
          />
          <h3>Description Images</h3>
          {payload.descriptionImages.map((img, index) => (
            <div key={index}>
              <TextField
                label={`Image URL ${index + 1}`}
                variant="outlined"
                value={img}
                onChange={(e) =>
                  handleArrayChange(
                    index,
                    "",
                    e.target.value,
                    "descriptionImages"
                  )
                }
                style={{ width: "500px" }}
              />
              <Button onClick={() => removeField(index, "descriptionImages")}>
                Remove
              </Button>
            </div>
          ))}
          <Button
            variant="outlined"
            onClick={() => addNewField("descriptionImages", "")}
            style={{ width: "500px" }}
          >
            Add Image
          </Button>
          <h3>Description Reviews Data</h3>
          {payload.description_reviews_data.map((review, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <TextField
                label="Title"
                variant="outlined"
                value={review.title}
                onChange={(e) =>
                  handleArrayChange(
                    index,
                    "title",
                    e.target.value,
                    "description_reviews_data"
                  )
                }
                style={{ width: "500px" }}

              />
              <TextField
                label="Date"
                variant="outlined"
                value={review.date}
                onChange={(e) =>
                  handleArrayChange(
                    index,
                    "date",
                    e.target.value,
                    "description_reviews_data"
                  )
                }
                style={{ width: "500px" }}

              />
              <TextField
                label="Review"
                variant="outlined"
                value={review.review}
                onChange={(e) =>
                  handleArrayChange(
                    index,
                    "review",
                    e.target.value,
                    "description_reviews_data"
                  )
                }
                style={{ width: "500px" }}

              />
              <TextField
                label="Rating"
                variant="outlined"
                value={review.rating}
                onChange={(e) =>
                  handleArrayChange(
                    index,
                    "rating",
                    e.target.value,
                    "description_reviews_data"
                  )
                }
                style={{ width: "500px" }}

              />
              <Button
                onClick={() => removeField(index, "description_reviews_data")}
                style={{ width: "500px" }}

              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            variant="outlined"
            onClick={() =>
              addNewField("description_reviews_data", {
                title: "",
                date: "",
                review: "",
                rating: "",
              })
            }
            style={{ width: "500px" }}
          >
            Add Review
          </Button>
          <h3>Description Amenities</h3>
          {payload.description_amentities.map((amenity, index) => (
            <div key={index}>
              <TextField
                label={`Amenity ${index + 1}`}
                variant="outlined"
                value={amenity}
                onChange={(e) =>
                  handleArrayChange(
                    index,
                    "",
                    e.target.value,
                    "description_amentities"
                  )
                }
              />
              <Button
                onClick={() => removeField(index, "description_amentities")}
                style={{ width: "500px" }}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            variant="outlined"
            onClick={() => addNewField("description_amentities", "")}
            style={{ width: "500px" }}
          >
            Add Amenity
          </Button>
          {/* <h3>Nearby Hotels</h3>
          {payload.description_nearBy_hotels.map((hotel, index) => (
            <div key={index}>
              <TextField
                label="Star"
                variant="outlined"
                value={hotel.star}
                onChange={(e) =>
                  handleArrayChange(
                    index,
                    "star",
                    e.target.value,
                    "description_nearBy_hotels"
                  )
                }
              />
              <TextField
                label="Reviews"
                variant="outlined"
                value={hotel.reviews}
                onChange={(e) =>
                  handleArrayChange(
                    index,
                    "reviews",
                    e.target.value,
                    "description_nearBy_hotels"
                  )
                }
              />
              <TextField
                label="Hotel Name"
                variant="outlined"
                value={hotel.hotelName}
                onChange={(e) =>
                  handleArrayChange(
                    index,
                    "hotelName",
                    e.target.value,
                    "description_nearBy_hotels"
                  )
                }
              />
              <TextField
                label="City"
                variant="outlined"
                value={hotel.city}
                onChange={(e) =>
                  handleArrayChange(
                    index,
                    "city",
                    e.target.value,
                    "description_nearBy_hotels"
                  )
                }
              />
              <TextField
                label="Country"
                variant="outlined"
                value={hotel.country}
                onChange={(e) =>
                  handleArrayChange(
                    index,
                    "country",
                    e.target.value,
                    "description_nearBy_hotels"
                  )
                }
              />
              <TextField
                label="Price"
                variant="outlined"
                value={hotel.price}
                onChange={(e) =>
                  handleArrayChange(
                    index,
                    "price",
                    e.target.value,
                    "description_nearBy_hotels"
                  )
                }
              />
              <TextField
                label="Image URL"
                variant="outlined"
                value={hotel.image}
                onChange={(e) =>
                  handleArrayChange(
                    index,
                    "image",
                    e.target.value,
                    "description_nearBy_hotels"
                  )
                }
              />
              <Button
                onClick={() => removeField(index, "description_nearBy_hotels")}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            variant="outlined"
            onClick={() =>
              addNewField("description_nearBy_hotels", {
                star: "",
                reviews: "",
                hotelName: "",
                city: "",
                country: "",
                price: "",
                image: "",
              })
            }
          >
            Add Nearby Hotel
          </Button> */}
        </div>
        <Button
          variant="contained"
          sx={{ marginTop: "25px" }}
          color="secondary"
          onClick={handleSubmit}
        >
          Add Details
        </Button>
      </section>
      <section>
        <ImageUpload />
      </section>
      <section
        style={{
          paddingTop: "2rem",
          paddingRight: "1rem",
          paddingBottom: "2rem",
        }}
      >
        <HotelListingTable deals={deals} getDeals={getDeals} isHotelListing={true}/>
      </section>
    </main>
  );
};

export default HotelListing;
