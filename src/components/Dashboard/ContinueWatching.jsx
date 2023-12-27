import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import React from "react";
import GenericList from "../Sidebar/GenericList";
import { continueWatching } from "../../constants";

function ContinueWatching() {
  return (
    <Box>
      <Typography fontSize={"16px"} fontWeight={500}>
        Continue Watching
      </Typography>
      <Grid container gutterTop spacing={2}>
        {continueWatching.map((item) => {
          console.log(item);
          return (
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Card sx={{ maxWidth: 300, borderRadius: 2 }}>
                <Box p={1}>
                  <CardMedia
                    sx={{ height: "120px", px: 5, pt: 5, borderRadius: 2 }}
                    image={item.imagePath}
                    title="green iguana"
                  />
                </Box>
                <CardContent>
                  <Chip
                    label="FRONTEND"
                    sx={{
                      height: "18px",
                      bgcolor: "#702DFF33",
                      color: "#702DFF",
                      mb: 1,
                    }}
                  />
                  <Typography fontSize={"16px"} fontWeight={500}>
                    {item.title}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={item.progressValue}
                    sx={{
                      mt: 0.5,
                      height: "6px",
                      borderRadius: 2,
                      backgroundColor: "#D9D9D9",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#702DFF",
                      },
                    }}
                  />
                  <GenericList items={item.profileInfo} />
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default ContinueWatching;
