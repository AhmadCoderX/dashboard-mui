import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

function FriendsList({ title, items }) {
  return (
    <div>
      <List>
        <ListItem>
          <Typography fontWeight={600} fontSize={"18px"}>
            {title}
          </Typography>
        </ListItem>
        {items.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Avatar alt="Remy Sharp" src={item.profilePicture} />
              <Box>
                <ListItemText
                  primary={item.name}
                  sx={{
                    ml: "0",
                  }}
                />
                <ListItemText
                  primary={item.role}
                  sx={{
                    ml: "0",
                    fontSize: "8px",
                  }}
                />
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default FriendsList;
