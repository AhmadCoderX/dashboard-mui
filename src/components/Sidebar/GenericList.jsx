import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const handleClick = () => {};

const GenericList = ({ items, title }) => {
  const location = useLocation();
  const pathName = location.pathname;
  console.log(pathName);

  const [selected, setSelected] = useState(false);
  const isSelected = items.find((item) => {
    return item.routeUrl && pathName;
  });

  console.log(isSelected);
  return (
    <div>
      <List>
        <ListItem>
          <Typography fontWeight={600} fontSize={"18px"}>
            {title}
          </Typography>
        </ListItem>
        {items.map((item, index) => {
          return (
            <Link
              to={"/dashboard"}
              style={{ color: "black", textDecoration: "none" }}
              onClick={() => handleClick}
            >
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  {item.icon ? (
                    <ListItemIcon sx={{ minWidth: "fit-content", pr: 1 }}>
                      <img src={item.icon} />
                    </ListItemIcon>
                  ) : (
                    <Avatar
                      alt="Prashant Pic"
                      src={item.profilePicture}
                      sx={{ mr: 1 }}
                    />
                  )}
                  <Box>
                    <Typography
                      sx={
                        item.selected
                          ? { color: "#702DFF" }
                          : { color: "black" }
                      }
                    >
                      {item.name}
                    </Typography>
                    {item?.role && (
                      <Typography fontSize={"12px"}>{item.role}</Typography>
                    )}
                  </Box>
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </div>
  );
};

export default GenericList;
