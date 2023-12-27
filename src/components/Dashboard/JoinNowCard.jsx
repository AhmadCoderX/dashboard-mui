import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function JoinNowCard() {
  return (
    <div>
      <Card
        sx={{
          minWidth: 275,
          py: 2,
          borderRadius: 6,
          backgroundColor: "#702DFF",
          color: "#fff",
        }}
        elevation={0}
      >
        <CardContent>
          <Typography>ONLINE COURSE</Typography>
          <Typography fontSize={"24px"} pt={2} fontWeight={600}>
            Sharpen Your Skills With <br /> Professional Online Courses
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="medium"
            variant="contained"
            disableElevation
            sx={{ borderRadius: 7, background: "black" }}
          >
            <Typography fontSize={"12px"} fontWeight={500}>
              Join Now
            </Typography>
            <PlayCircleIcon sx={{ ml: 1 }} />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default JoinNowCard;
