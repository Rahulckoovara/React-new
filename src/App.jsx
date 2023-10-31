import React from 'react'
import Loginsignup from './component/loginsignup/loginsignup';
import './index.css';
import Signup from './component/loginsignup/Signup';
import Home from './component/loginsignup/home/Home';
import Dashboard from './component/loginsignup/Dashboard';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Forgotpassword from './component/loginsignup/forgotpassword';
//import Dashboard from './component/loginsignup/Dashboard';

function App() {
  return (
   <div style={{height:"100%"}}>
    <Home/>

   </div>
  )
}

export default App;
