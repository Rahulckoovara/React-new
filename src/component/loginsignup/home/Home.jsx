import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import "./home.css";
//import Sidebar from "./sidebar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";

import { FaBars } from "react-icons/fa6";
import LoginIcon from '@mui/icons-material/Login';
import InfoIcon from '@mui/icons-material/Info';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const Home = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => {
    setOpen(isOpen);
  };

  return (
    <>
      <AppBar  position="relative">
        <Toolbar>
          <FaBars className="bar-icon" onClick={toggleDrawer} />
          <div style={{ margin: "auto", fontSize: "30px" }}>HOME</div>
        </Toolbar>
      </AppBar>

      <div
        className="main"
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          transition: "margin-left 0.3s",
          marginLeft: open ? "18%" : "0",
        }}
      >
        <Drawer
          className="drawer"
          anchor="left"
          open={open}
          size="md"
          onClose={() => toggleDrawer(false)}
          //  style={{  width : "100px"}}
        >
          <div className="sidebar" style={{ width: "15em" }}>
            <strong>
              <h1 className="h1-sidebar">CONTENTS</h1>
            </strong>
            <List className="list">
              <Link to="/loginsignup" className="list-text">
               
                <ListItem className="listitem">
                  <LoginIcon/>
                  <ListItemText className="list-text" primary="Login" />
                </ListItem>
              </Link>

              <Divider className="divider" />
              <Link to="/Signup" className="list-text">
              <ListItem>
                <PersonAddAltIcon/>
                <ListItemText className="list-text" primary="Signup" />
              </ListItem>
              </Link>
              <Divider className="divider" />

              <ListItem>
                <InfoIcon/>
                <ListItemText className="list-text" primary="About" />
              </ListItem>
            </List>
          </div>
        </Drawer>

        <div
          className="new"
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <div>
            <input className="search" placeholder="Search"></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
