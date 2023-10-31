import React,{useState} from "react";
import "./loginsignup.css";
import Validation from "./Validation";
import EmailIcon from '@mui/icons-material/Email';


const Forgotpassword1 = () => {
    const[values,setValues]=useState({email:''});
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
            <div  className="text-forgot"  >Forgot Password</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
                <EmailIcon/>
              <input
                type="Email"
                name="email"
                required
                value={values.email}
                onChange={handleChange}
                placeholder="Email Id"
              />
            </div>
            {errors.email && (
            <div className="error">
              <p style={{ color: "red" }}>{errors.email}</p>
            </div>
          )}
           <div className="forgot-msg">
           <p>* Please enter your registered email id</p>

           </div>
            <div className="error">
                {errors.email&& <p style={{color:'red'}}>{errors.email}</p>}

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

export default Forgotpassword1;
