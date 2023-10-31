import React,{useState} from "react";
import'./loginsignup.css'
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";
import PersonIcon from '@mui/icons-material/Person';
import Validation from "./Validation";
import { useNavigate } from "react-router-dom";


const Signup=()=>{
    const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setError] = useState({});
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = Validation(values);
    
  }
    return(
        <form onSubmit={handleSubmit}>
    

        <div className="container">
          <div className="header">
            <div className="text">SIGNUP</div>
            <div className="underline"></div>
          </div>
          <div className="inputs1">
          <div className="input">
              <PersonIcon/>
              <input
                type="name"
                name="name"
                //value={values.email}
               // onChange={handleChange}
                placeholder="Name"
             //   onBlur={() => setTouched({ ...touched, email: true })}
              />
            </div>
            <div className="input">
              <EmailIcon />
              <input
                type="email"
                name="email"
                //value={values.email}
              //  onChange={handleChange}
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
              //  value={values.password}
               // onChange={handleChange}
                placeholder="Password"
                //onBlur={() => setTouched({ ...touched, email: true })}
              />
            </div>
            {errors.password&& <p style={{color:'red',alignItems:'center',display:'flex',flexDirection:'column'}}>{errors.password}</p>}

            <div className="input">
              <HttpsIcon />
              <input
                type="password"
                name="password"
                //value={values.password}
               // onChange={handleChange}
                placeholder="Confirm Password"
                //onBlur={() => setTouched({ ...touched, email: true })}
              />
            </div>
          </div>
         
          <div className="submit-container">
            
            <button
              className="submit"
              onClick={()=>navigate("/Dashboard")}
            >
              Create
            </button>
          </div>
        </div>
       
      </form>  
    )
}

export  default Signup;