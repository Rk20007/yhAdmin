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
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { FlightDELETETopVisitedAPI } from "../api/flight.api";
import toast from "react-hot-toast";
import FlightTopModal from "./FlightTopModal";

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

export default function TopTables({ destinations, getDestinations }) {
  const [open, setOpen] = React.useState(false);
  const [updateData, setUpdateData] = React.useState({});

  const hanldeDelete = async (id) => {
    const response = await FlightDELETETopVisitedAPI({ _id: id });
    if (response.status) {
      getDestinations();
      toast.success("Successfully Deleted");
    } else {
      toast.error("Failed to Delete");
    }
  };

  const hanldeUpdateData = (data) => {
    setOpen(true);
    setUpdateData(data);
  };

  return (
    <TableContainer component={Paper}>
      <FlightTopModal
        open={open}
        setOpen={setOpen}
        updateData={updateData}
        setUpdateData={setUpdateData}
        getDestinations={getDestinations}
      />
      <Table sx={{ minWidth: 800 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Country</StyledTableCell>
            <StyledTableCell align="center">City</StyledTableCell>
            <StyledTableCell align="center">Image</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {destinations.map((ele) => (
            <StyledTableRow key={ele._id}>
              <StyledTableCell align="center">{ele._id}</StyledTableCell>
              <StyledTableCell align="center">{ele.country}</StyledTableCell>
              <StyledTableCell align="center">{ele.city}</StyledTableCell>
              <StyledTableCell align="center">
                <img
                  src={ele.image}
                  alt="image"
                  style={{ width: "250px", height: "200px" }}
                />
              </StyledTableCell>
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
                    onClick={() => hanldeUpdateData(ele)}
                  >
                    <ModeEditOutlineOutlinedIcon />
                  </Button>
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
