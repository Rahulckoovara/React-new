import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Divider, Toolbar } from "@mui/material";
import "./Loginsignup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Task from "./Task";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <AppBar className="AppBar" style={{ height: "10%" }} position="relative">
        <Toolbar>
          <MoreVertIcon onClick={handleMenuClick} />
          <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <div style={{ margin: "auto", fontSize: "140%" }}>DASHBOARD</div>
          </div>
          {/*}
          <LogoutOutlinedIcon
            style={{
              marginLeft: "auto",
              marginRight: "1rem", // Add some right margin for spacing
              fontSize: "1.5em", // Increase the font size
              marginTop: "-2%",
              cursor: "pointer", // Move the icon up by 8 pixels
            }}
            onClick={() => navigate("/Loginsignup")}
          />
          */}
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <List>
              <Link
                to="/Changepassword"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItem onClick={handleMenuClose}>
                  <ListItemText primary="Change password" />
                </ListItem>
              </Link>
              <Divider/>
                <ListItem onClick={() => navigate("/Loginsignup")}>
                  <ListItemText primary="Log out" />
                </ListItem>
              
            </List>
          </Popover>
        </Toolbar>
      </AppBar>
      <div className="input-area">
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      {/* <div style={{display:'flex',flexDirection:'column'}} 
            className="search-dashboard">
                <input></input>
    </div>*/}
      <div
        className="main-dashboard"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div
          className="task-container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div style={{ display: "flex" }} className="task-header">
            
            <h1 className="h1-task">Pending</h1>
          </div>
          <div 
          className="task-scroll"
          style={{overflow:'auto'}}
          >
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          
          </div>
         
          
          
        </div>
        <div className="task-container">
          <div  style={{ display: "flex" }} className="task-header">
            <h1 className="h1-task">On going</h1>
          </div>
          <br />
        </div>
        <div className="task-container">
          <div  style={{ display: "flex" }} className="task-header">
            <h1 className="h1-task">Completed</h1>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
