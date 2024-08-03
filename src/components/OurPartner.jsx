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
import axios from "axios";
import toast from "react-hot-toast";

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

export default function OurPartner({ trending, getTrending }) {
  const hanldeDelete = async (id) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_APP_API_URL}api/v1/delete-partners`,
      {
        data: { _id: id },
      }
    );
    if (response.data.status) {
      getTrending();
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
            <StyledTableCell align="center">Image</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trending.map((trending) => {
            return (
              <StyledTableRow key={trending._id}>
                <StyledTableCell align="center">{trending._id}</StyledTableCell>
                <StyledTableCell align="center">
                  <img
                    src={trending.image}
                    alt=""
                    style={{ width: "100px", height: "100px" }}
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
                      onClick={() => hanldeDelete(trending._id)}
                    >
                      <DeleteOutlineOutlinedIcon />
                    </Button>
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
