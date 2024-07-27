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
import WhyModal from "./WhyModal";

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

export default function WhyTable({ trending, getTrending }) {
  const [open, setOpen] = React.useState(false);
  const [updateData, setUpdateData] = React.useState({});

  //   const hanldeDelete = async (id) => {
  //     const response = await axios.delete(
  //       `${import.meta.env.VITE_APP_API_URL}api/v1/delete-description`,
  //       {
  //         data: { _id: id },
  //       }
  //     );
  //     if (response.status) {
  //       getTrending();
  //       toast.success("Successfully Deleted");
  //     } else {
  //       toast.error("Failed to Delete");
  //     }
  //   };

  const hanldeUpdateData = (data) => {
    setOpen(true);
    setUpdateData(data);
  };

  return (
    <TableContainer component={Paper}>
      <WhyModal
        open={open}
        setOpen={setOpen}
        updateData={updateData}
        setUpdateData={setUpdateData}
        getTrending={getTrending}
      />
      <Table sx={{ minWidth: 800 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key={trending._id}>
            <StyledTableCell align="center">{trending._id}</StyledTableCell>
            <StyledTableCell align="center">
              <div dangerouslySetInnerHTML={{ __html: trending.data }} />
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
                  onClick={() => hanldeUpdateData(trending)}
                >
                  <ModeEditOutlineOutlinedIcon />
                </Button>
                {/* <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => hanldeDelete(ele._id)}
                  >
                    <DeleteOutlineOutlinedIcon />
                  </Button> */}
              </Box>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
