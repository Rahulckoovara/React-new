import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Dashboard from './component/loginsignup/Dashboard.jsx';
import Forgotpassword1 from './component/loginsignup/forgotpassword1.jsx';
import Signup from './component/loginsignup/Signup.jsx';
import Loginsignup from './component/loginsignup/Loginsignup.jsx';
import Changepassword from './component/loginsignup/changepassword.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path:"/forgotpassword1",
    element:<Forgotpassword1/>
  }
  ,{
    path:"/loginsignup",
    element:<Loginsignup/>
  },
  {
    path:"/Signup",
    element:<Signup/>
  },
  ,
  {
    path:"/Changepassword",
    element:<Changepassword/>
  },
  


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
