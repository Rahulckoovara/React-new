import React,{useState} from "react";
import "./loginsignup.css";
import Validation from "./Validation";



const Changepassword = () => {
    const[values,setValues]=useState({ password:''});
    const[errors,setError]=useState({}) 
    function handleChange(e)
    {
      setValues({...values,[e.target.name]: e.target.value})
    }
    function handleSubmit(e){

        e.preventDefault(); 
        const validationErrors = Validation(values);
        setError(validationErrors);

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="header">
            <div  className="text-forgot"  >CHANGE PASSWORD</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <input
                type="password"
                name="password"
                required
               // value={values.email}
                onChange={handleChange}
                placeholder="Old Password"
              />
            </div>
            <div className="error">{errors.password&&<p style={{color:'red'}}>{errors.password}</p>}
        </div>
            
            <div className="input">
              <input
                type="password"
                name="password"
                required
                
               // value={values.email}
                onChange={handleChange}
                placeholder="New Password"
              />
            </div>
            <div className="error">{errors.password&&<p style={{color:'red'}}>{errors.password}</p>}
        </div>
            <div className="input">
              <input
                type="password"
                name="password"
                required
                
               // value={values.email}
                onChange={handleChange}
                placeholder="Confirm New Password"
              />
            </div>
            <div className="error">{errors.password&&<p style={{color:'red'}}>{errors.password}</p>}
        </div>
            <button className="submit-forgot">
            SUBMIT
            </button>


          </div>
        </div>
      </form>
    </div>
  );
};

export default Changepassword;
