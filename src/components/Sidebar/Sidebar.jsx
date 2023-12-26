import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import GenericList from "./GenericList";
import { OverviewItems, friendsItems } from "../../constants";
import FriendsList from "./FriendsList";

const drawerWidth = 240;

function ResponsiveDrawer() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <GenericList items={OverviewItems} title="OVERVIEW" />
          <FriendsList items={friendsItems} title="FRIENDS" />
        </Drawer>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
