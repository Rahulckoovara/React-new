import React from "react";

const Validation=(values)=>
{
let errors={};
if(!values.email){
    errors.email="Email Required"
}
else if(values.email.length<5){
errors.email="Email should be minimum 5 characters"
}
if(!values.password){
    errors.password="Password Required"
}
else if(values.password.length<8)
{
errors.password="Password should contain minimum 8 characters"
}
return errors;

}

export default Validation;