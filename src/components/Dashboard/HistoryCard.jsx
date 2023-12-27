import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import moreIcon from "../../assets/images/more.svg";

function HistoryCard({ items }) {
  return (
    <Grid container py={3} spacing={2}>
      {items.map((item) => {
        return (
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Card
              sx={{
                minWidth: "300px",
                height: "64px",
                display: "flex",
                borderRadius: 4,
              }}
              elevation={1}
            >
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  pt: 3,
                }}
              >
                <Avatar sx={{ bgcolor: "#702DFF33", color: "#702DFF", ml: 2 }}>
                  <NotificationsNoneIcon />
                </Avatar>
                <Box sx={{ pl: 2, fontSize: "12px" }}>
                  <Typography>{item.progress}</Typography>
                  <Typography fontWeight={600}>{item.title}</Typography>
                </Box>
                <img
                  src={moreIcon}
                  alt="more icon"
                  style={{ height: "24px", marginLeft: "24px" }}
                />
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default HistoryCard;
