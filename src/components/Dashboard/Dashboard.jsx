import { Box, Typography } from "@mui/material";
import React from "react";
import Searchbar from "./Searchbar";
import JoinNowCard from "./JoinNowCard";
import HistoryCard from "./HistoryCard";
import { historyCardItems } from "../../constants";
import ContinueWatching from "./ContinueWatching";

function Dashboard() {
  return (
    <Box sx={{ marginLeft: "240px", height: "100vh", px: 5 }}>
      <Searchbar />
      <JoinNowCard />
      <HistoryCard items={historyCardItems} />
      <ContinueWatching />
    </Box>
  );
}

export default Dashboard;
