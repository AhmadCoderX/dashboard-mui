import { Box, InputAdornment, TextField } from "@mui/material";
import React from "react";
import filterIcon from "../../assets/images/filter.svg";
import searchIcon from "../../assets/images/search-normal.svg";

function Searchbar() {
  return (
    <Box display={"flex"} flexDirection={"row"} py={2}>
      <TextField
        fullWidth
        placeholder="Search your course here..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={searchIcon} alt="icon" />
            </InputAdornment>
          ),
          style: {
            color: "#9E9E9E",
            borderRadius: "10px",
          },
        }}
        sx={{}}
      />
      <img src={filterIcon} alt="searchIcon" style={{ paddingLeft: "18px" }} />
    </Box>
  );
}

export default Searchbar;
