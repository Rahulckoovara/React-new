import React, { useState } from "react";
import "./loginsignup.css";
import { useNavigate } from "react-router-dom";
import Validation from "./Validation";
//import Forgotpassword from "./forgotpassword";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";




const Loginsignup = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setError] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
 // const [touched, setTouched] = useState({ email: false, password: false });

  const navigate = useNavigate();
  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
    //const { name, value } = e.target;
    //setValues({ ...values, [name]: value });
    //setTouched({ ...touched, [name]: true });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = Validation(values);

    if (Object.keys(validationErrors).length === 0) {
      // No validation errors, proceed to check username and password
      const predefinedEmail = "raj@gmail.com";
      const predefinedPassword = "12345678";

      if (
        values.email === predefinedEmail &&
        values.password === predefinedPassword
      ) {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);

          // Login successful, navigate to dashboard
          navigate("/Dashboard");
        }, 3000);
      } else {
        setError({
          common: "Invalid username or password. Please try again.",
        });
      }
    } else {
      setError(validationErrors);
    }
  }
  function handleForgotPasswordClick() {
    // Navigate to the Forgot Password page
    navigate("/forgotpassword1");
  }

  return (
    <form onSubmit={handleSubmit}>
    

      <div className="container">
        <div className="header">
          <div className="text">LOGIN</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <EmailIcon />
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email Id"
           //   onBlur={() => setTouched({ ...touched, email: true })}
            />
          </div>
          {errors.email&& <p style={{color:'red',alignItems:'center',display:'flex',flexDirection:'column'}}>{errors.email}</p>}

          <div className="input">
            <HttpsIcon />
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
              //onBlur={() => setTouched({ ...touched, email: true })}
            />
          </div>
          {errors.password&& <p style={{color:'red',alignItems:'center',display:'flex',flexDirection:'column'}}>{errors.password}</p>}
        </div>
        <div className="forgotpassword">
          Forget Password?{" "}
          <span
            className="fogotpassword-span"
            onClick={handleForgotPasswordClick}
          >
            Click here!
          </span>
        </div>
        <div className="submit-container">
          
          <button
            className="submit"
            //onClick={()=>
            //{setAction("Login")}
            // navigate("/Dashboard    ")}
          >
            LOGIN
          </button>
        </div>
      </div>
      {showSuccessMessage && (
        <div 
        className="success-message">Login successful!</div>
      )}
    </form>
  );
};

export default Loginsignup;
