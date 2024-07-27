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

export default function TransListingTable({ offers, getOffers }) {
  const hanldeDelete = async (id) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_APP_API_URL}api/v1/delete-transportListing`,
      {
        data: { _id: id },
      }
    );
    if (response.status) {
      getOffers();
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
            <StyledTableCell align="center">Type</StyledTableCell>
            <StyledTableCell align="center">From</StyledTableCell>
            <StyledTableCell align="center">To</StyledTableCell>
            <StyledTableCell align="center">Start Time</StyledTableCell>
            <StyledTableCell align="center">End Time</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Day</StyledTableCell>
            <StyledTableCell align="center">Duration</StyledTableCell>
            <StyledTableCell align="center">Month</StyledTableCell>
            <StyledTableCell align="center">Year</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {offers?.map((ele) => (
            <StyledTableRow key={ele._id}>
              <StyledTableCell align="center">{ele._id}</StyledTableCell>
              <StyledTableCell align="center">{ele.type}</StyledTableCell>
              <StyledTableCell align="center">{ele.from}</StyledTableCell>
              <StyledTableCell align="center">{ele.to}</StyledTableCell>
              <StyledTableCell align="center">{ele.startTime}</StyledTableCell>
              <StyledTableCell align="center">{ele.endTime}</StyledTableCell>
              <StyledTableCell align="center">{ele.date}</StyledTableCell>
              <StyledTableCell align="center">{ele.price}</StyledTableCell>
              <StyledTableCell align="center">{ele.day}</StyledTableCell>
              <StyledTableCell align="center">{ele.duration}</StyledTableCell>
              <StyledTableCell align="center">{ele.month}</StyledTableCell>
              <StyledTableCell align="center">{ele.year}</StyledTableCell>
              <StyledTableCell>
                <Box
                  sx={{
                    display: "flex",
                    gap: "15px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => hanldeDelete(ele._id)}
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
