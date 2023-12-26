import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const GenericList = ({ items, title }) => {
  console.log(items);
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
              <ListItemIcon disablePadding>
                <img src={item.icon} />
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                sx={{
                  ml: "0",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenericList;
