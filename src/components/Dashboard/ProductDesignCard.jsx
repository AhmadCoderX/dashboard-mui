import { Grid } from "@mui/material";
import React from "react";
const classes = { root: { color: { xs: "yellow", md: "red" } } };

function ProductDesignCard() {
  return (
    <Grid
      container
      spacing={1}
      justifyContent={"flex-start"}
      flexDirection={"column"}
      sx={classes.root}
    >
      // iteself contain flex property
      <Grid item xs={4}>
        <Grid container>
          <Grid item>shahid</Grid>
          <Grid item>Naveed</Grid>
          <Grid item>Ahmad</Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        Naveed
      </Grid>
      <Grid item xs={4}>
        Ahmad
      </Grid>
    </Grid>
  );
}

export default ProductDesignCard;
