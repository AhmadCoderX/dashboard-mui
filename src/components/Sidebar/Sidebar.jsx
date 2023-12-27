import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import GenericList from "./GenericList";
import { OverviewItems, friendsItems, settingItems } from "../../constants";
import { Toolbar, Typography } from "@mui/material";
import appLogo from "../../assets/images/AppLogo.svg";

const drawerWidth = 240;

function ResponsiveDrawer() {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "flex" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        <Toolbar>
          <img src={appLogo} alt="logo" style={{ paddingRight: "8px" }} />
          <Typography fontSize={"20px"} color={"#702DFF"} fontWeight={800}>
            COURSUE
          </Typography>
        </Toolbar>
        <GenericList items={OverviewItems} title="OVERVIEW" />
        <GenericList items={friendsItems} title="FRIENDS" />
        <Box sx={{ bottom: 0, position: "inherit" }}>
          <GenericList items={settingItems} title="SETTINGS" />
        </Box>
      </Drawer>
    </Box>
  );
}

export default ResponsiveDrawer;
