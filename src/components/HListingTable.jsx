import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import toast from "react-hot-toast";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function HotelListingTable({ deals, getDeals }) {
  const handleDelete = async (id) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_APP_API_URL}api/v1/delete-hotelListing`,
      {
        data: { _id: id },
      }
    );
    if (response.status) {
      getDeals();
      toast.success("Successfully Deleted");
    } else {
      toast.error("Failed to Delete");
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">hotelName</StyledTableCell>
            <StyledTableCell align="center">city</StyledTableCell>
            {/* <StyledTableCell align="center">country</StyledTableCell> */}
            {/* <StyledTableCell align="center">state</StyledTableCell> */}
            <StyledTableCell align="center">image</StyledTableCell>
            {/* <StyledTableCell align="center">reviews</StyledTableCell> */}
            <StyledTableCell align="center">price</StyledTableCell>
            {/* <StyledTableCell align="center">
              room_avaliable_count
            </StyledTableCell> */}
            {/* <StyledTableCell align="center">recommended</StyledTableCell> */}
            {/* <StyledTableCell align="center">guest_rating</StyledTableCell> */}
            {/* <StyledTableCell align="center">star_category</StyledTableCell> */}
            {/* <StyledTableCell align="center">descriptionImages</StyledTableCell> */}
            {/* <StyledTableCell align="center">descriptionbed</StyledTableCell> */}
            {/* <StyledTableCell align="center">
              descriptionDedicated
            </StyledTableCell> */}
            {/* <StyledTableCell align="center">
              description_reviews_data
            </StyledTableCell> */}
            {/* <StyledTableCell align="center">description_about</StyledTableCell> */}
            {/* <StyledTableCell align="center">
              description_amentities
            </StyledTableCell> */}
            {/* <StyledTableCell align="center">
              description_price_breakup_serviceFee
            </StyledTableCell>
            <StyledTableCell align="center">
              description_price_breakup_taxFee
            </StyledTableCell>
            <StyledTableCell align="center">
              description_nonRefundable
            </StyledTableCell> */}
            {/* <StyledTableCell align="center">
              description_Refundable
            </StyledTableCell> */}
            {/* <StyledTableCell align="center">
              description_cancellation_before
            </StyledTableCell> */}
            {/* <StyledTableCell align="center">
              description_cancellation_before_partial
            </StyledTableCell> */}
            {/* <StyledTableCell align="center">
              description_google_map
            </StyledTableCell> */}
            {/* <StyledTableCell align="center">
              description_hotel_details
            </StyledTableCell> */}
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deals?.map((deal) => (
            <StyledTableRow key={deal._id}>
              <StyledTableCell align="center">{deal._id}</StyledTableCell>
              <StyledTableCell align="center">{deal.hotelName}</StyledTableCell>
              <StyledTableCell align="center">{deal.city}</StyledTableCell>
              {/* <StyledTableCell align="center">{deal.country}</StyledTableCell> */}
              {/* <StyledTableCell align="center">{deal.state}</StyledTableCell> */}
              <StyledTableCell align="center">
                <img
                  src={deal.image}
                  alt="Hotel"
                  style={{ width: "50px", height: "50px", margin: "5px" }}
                />
              </StyledTableCell>
              {/* <StyledTableCell align="center">{deal.reviews}</StyledTableCell> */}
              <StyledTableCell align="center">{deal.price}</StyledTableCell>
              {/* <StyledTableCell align="center">
                {deal.room_avaliable_count}
              </StyledTableCell> */}
              {/* <StyledTableCell align="center">
                {deal.recommended}
              </StyledTableCell>
              <StyledTableCell align="center">
                {deal.guest_rating}
              </StyledTableCell> */}
              {/* <StyledTableCell align="center">
                {deal.star_category}
              </StyledTableCell> */}
              {/* <StyledTableCell
                align="center"
                sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
              >
                {deal.descriptionImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="Hotel"
                    style={{ width: "50px", height: "50px", margin: "5px" }}
                  />
                ))} */}
              {/* </StyledTableCell> */}
              {/* <StyledTableCell align="center">
                {deal.descriptionbed}
              </StyledTableCell> */}
              {/* <StyledTableCell align="center">
                {deal.descriptionDedicated}
              </StyledTableCell> */}
              {/* <StyledTableCell align="center">
                {deal.description_reviews_data}
              </StyledTableCell> */}
              {/* <StyledTableCell align="center">
                {deal.description_about}
              </StyledTableCell> */}
              {/* <StyledTableCell align="center">
                {deal.description_amentities.join(", ")}
              </StyledTableCell> */}
              {/* <StyledTableCell align="center">
                {deal.description_price_breakup_serviceFee}
              </StyledTableCell>
              <StyledTableCell align="center">
                {deal.description_price_breakup_taxFee}
              </StyledTableCell>
              <StyledTableCell align="center">
                {deal.description_nonRefundable}
              </StyledTableCell> */}
              {/* <StyledTableCell align="center">
                {deal.description_Refundable}
              </StyledTableCell>
              <StyledTableCell align="center">
                {deal.description_cancellation_before}
              </StyledTableCell>
              <StyledTableCell align="center">
                {deal.description_cancellation_before_partial}
              </StyledTableCell> */}
              {/* <StyledTableCell align="center">
                {deal.description_google_map}
              </StyledTableCell>
              <StyledTableCell align="center">
                {deal.description_hotel_details}
              </StyledTableCell> */}
              {/* <StyledTableCell align="center">
                {deal.description_nearBy_hotels}
              </StyledTableCell> */}

              <StyledTableCell align="center">
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(deal._id)}
                  >
                    <DeleteOutlineOutlinedIcon />
                  </Button>
                </Box>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
