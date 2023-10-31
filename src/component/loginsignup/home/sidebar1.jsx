
import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const SidebarItem = ({ text }) => {
  return (
    <ListItem button>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default SidebarItem;
