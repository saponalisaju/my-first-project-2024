/* eslint-disable */

import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav'; 
import { NavLink } from 'react-router-dom';
import './Enquiry.css';


const VisaEnquiry= () => {
    const [formData, setFormData] = useState({ number : " ", passportNumber : " ", country : " ", dateOfBirth : " " });

   const [errData, setErrData] = useState({})
   const [isValidet, setIsValidet] = useState(false);


    const onChangeHandler =(event) =>{
        setFormData({...formData, [event.target.name]: event.target.value});
     }

     const submitHandler =(event) =>{
        event.preventDefault();
        setErrData(visaValidation(formData));
      setIsValidet(true);
     }

     useEffect(()=>{
      console.log(errData)
      if(Object.keys(errData).length === 0 && isValidet) {
         alert("Submited Successfully")
         console.log(formData)
      }
     })

     const visaValidation = (values) =>{
      const errData = {}
      const whatsupRegex = /^(?=(?:[+ -]*[0-9][+ -]*){11,12}$)\+(?:[0-9]+[ -]?)+[0-9]$/
      const passportRegex = /^[A-PR-WY][1-9]\d\s?\ d{4}[1-9]$/;
      
      if(!values.number) {
         errData.number = " Passport Number is required"
      }
      if(!values.number) {
        if(!whatsupRegex.test(values.number)) {
         errData.number = "Please Eneter your valid number"
        }
      }
      if(!values.passportNumber) {
         errData.passportNumber = " Passport Number is required"
      }
      if(!values.passportNumber) {
        if(!passportRegex.test(values.passportNumber)) {
         errData.passportNumber = "Please Enter Valid number"
        }
      }
      return errData;
     }

  return (
       <>
        <Nav className="navbar bg-light p-4 ">
            <img className='enquiry_image' src="images/download.jpeg" alt=""/>
            <NavLink className="text-decoration-none">Visa Enquiry</NavLink>
            <NavLink to="/login" type='submit' className="btn btn-success">Login</NavLink>
        </Nav>
        <form className='p-4' action='/' onSubmit={submitHandler}>

         <div className=" p-2 form-control">
            <h3 className="d-inline ">Check Visa Status</h3>
         <div className="formWhatsUp">
           <label className=" " htmlFor="whatsup" >WhatsApp Number: </label><br/>
           <input className="whats_up" type="text" name="number" id="whatsup" onChange={onChangeHandler} /><p>{errData.number}</p>

         </div>
        </div> <hr/>
            <h5 className=''>Please Enter The Following data</h5>
         <div className="form-control form-group" >
            <label className="form-label" htmlFor="passport">Passport Number:</label>
            <input className="form-control required "  onChange={onChangeHandler} type="text" name="passportNnumber" id="passport" placeholder='Passport Number' />
            <p>{errData.passportNumber}</p>

            <label className="form-label" htmlFor="nation">Nationality:</label>
            <input className="form-control"   onChange={onChangeHandler} type="text" name="country" id="country" placeholder='Nationality'/>
            <p>{errData.country}</p>

            <label className="form-label" htmlFor="dob">Date of Birth:</label>
            <input className="form-control"   onChange={onChangeHandler} type="date" name="dateOfBirth" id="dob" required/><p>{errData.dateOfBirth}</p>

            <button type="submit" className="btn btn-success mt-4 mb-4"  >submit</button>
            <button type="reset" className="btn btn-outline-danger mt-4 mb-4">reset</button>
         </div>
         </form>
            <p className="footer_area text-bg-dark p-4 text-center">&copy 2024 Job Visa All Rights Reserved.</p>
     </>  
  )};
export default VisaEnquiry;
