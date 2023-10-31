import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import "./Loginsignup.css";
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Task from "./Task";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";





const Dashboard = () => {
    const navigate = useNavigate();
  return (
    <>
      <AppBar className="AppBar" style={{ height: "8%" }} position="relative">
        <Toolbar>
        <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
        <div  style={{ margin: "auto", fontSize: "140%" }}>DASHBOARD</div>
        </div>
        <LogoutOutlinedIcon   style={{
         
    marginLeft: "auto",
    marginRight: "1rem", // Add some right margin for spacing
    fontSize: "1.5em",  // Increase the font size
    marginTop: "-2%",
    cursor: "pointer",   // Move the icon up by 8 pixels
  }}
  onClick={() => navigate("/Loginsignup")}
  />
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
        <div className="task-container" style={{ display: "flex", flexDirection: "column" }}>

          <h1 className="h1-task">Pending</h1>
          <Task/>
          <Task/>
          <Task/>
          <Task/>


        </div>
        <div className="task-container">
          <h1 className="h1-task">In going</h1>
        </div>
        <div className="task-container">
          <h1 className="h1-task">Completed</h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
