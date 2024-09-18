/*eslint-disable*/

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import './LoginPage.css';
import LoginValidation from './visaEnquiry/LoginValidation';


const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    chekbox: ""
  });

  const {email, password} = values
  const [errMsg, setErrMsg] = useState({});
  const [isValid, setIsValid] = useState(false);
  
    const changeHandler =(event) =>{
      setValues({
        ...values, 
         [event.target.name]: event.target.value
     })
  };
 
    const handleSubmit = (event) =>{ 
     event.preventDefault();
     setErrMsg(LoginValidation(values)); 
     setIsValid(true);
    };

    useEffect(()=>{
      if(Object.keys(errMsg).length === 0 && isValid ) {
        alert("Form submitted successfully")
      }
    }, [errMsg])

  return (
    <div className="login_page  d-flex m-5 p-4">
      <form className=' m-5' action='/login'  onSubmit={handleSubmit}>
        <div className='form-control form_control_email'>

         <label className="form-label ms-3" htmlFor="email">Email </label>
        <div>
          <FontAwesomeIcon className='lock_icon pb-2 pe-3' icon={faUser}/>
          <input className=" input_name mb-3" type="email" name="email" id='email' onChange={changeHandler} value={email} required/>
          <span className='errMsg' style={{color: "red"}}>{errMsg.email}</span>
        </div> 

        </div> 
        <div className="form-control mt-3">
            <label className="form-label ms-3" htmlFor="password"> Password</label>
        <div>
            <FontAwesomeIcon className='lock_icon pb-2 pe-3' icon={faLock}/>
            <input className=" input_password mb-3" id='password' type="password" name="password" onChange={changeHandler} min="6" max="12" value={password} required/>
             <span className='errMsg' style={{color: "red"}}>{errMsg.password}</span>
        </div>
        </div>

        <div className="form-check p-3">
          <label className="form-check-label m-2" htmlFor="checkbox">
          <input className="form-check-input" type="checkbox" name="checkbox" id="checkbox"  onChange={changeHandler}/> Checkbox
          </label>
        </div>

          <button type="submit" className="btn btn-info " >Log In</button>
          <p className="m-2"><FontAwesomeIcon icon={faLock}/> Forgor your password </p>
      </form> 
      <img className="image_login m-5" src="images/immigration-2431576157.jpg" alt="" />
    </div>
  )}
export default Login;
