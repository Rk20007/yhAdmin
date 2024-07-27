import React from "react";
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
import toast from "react-hot-toast";
import { GalleryDeleteAPI } from "../api/gallery.api";

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

export default function GalleryTable({ imgData, getImgData }) {
  const hanldeDelete = async (id) => {
    const response = await GalleryDeleteAPI({ _id: id });
    if (response.status) {
      getImgData();
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
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Images</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {imgData?.map((ele) => (
            <StyledTableRow key={ele._id}>
              <StyledTableCell align="center">{ele._id}</StyledTableCell>
              <StyledTableCell align="center">{ele.title}</StyledTableCell>
              <StyledTableCell align="center">
                {ele.description}
              </StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "10px",
                }}
              >
                {ele.img.map((imgs, i) => {
                  return (
                    <img
                      src={imgs.src}
                      key={i}
                      style={{ width: "200px", height: "200px" }}
                    />
                  );
                })}
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
