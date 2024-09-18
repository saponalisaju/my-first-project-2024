/*eslint-disable*/

import React, { useEffect, useState } from 'react';
import './Home14.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook, faTwitter, faVimeo, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Component14 = () => {
  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({})

  const inputChangeHandler =(event) =>{
    setFormValues({...formValues, [event.target.name]: event.target.value});
  };

  const submitHandler = (event) =>{
     event.preventDefault();
     setErrors(validation(formValues))
     setIsSubmit(true);
    };

    useEffect(()=>{
    if(Object.keys(errors).length === 0 && isSubmit) {
      alert("Send data is Successfully")
       }
    }, [errors]);

    const validation =(values) =>{
      const errors = {}
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if(!values.name) {
        errors.name = "Name is required"
      }
      if(!values.email) {
        errors.email = "Email is required"
      }
      if(!values.email) {
        if(!regex.test(values.email)) {
          errors.email = "Please enter your valid email"
        }
      }
      return errors;
    }

  return (
    <>
      <div>
        <img className='fixed_image position-relative' src='images/wp5399284.jpg' alt='image'/>
      </div>
   <div className=' text-center m-5'>
   <div className='contact_us_area position-sticky text-light'>
      <h2>Contact Us</h2>
      <p className='p-3'>Just fill up the form below. Our expert will contact with you soon.</p>
    </div>
   
    <form className='form_control_input position-sticky d-flex' action='/' onSubmit={submitHandler}>
     <div className='contact_information text-center '>
      <h4 className='p-2'>CONTACT INFORMATION</h4><FontAwesomeIcon icon={faDiscord} className='voicemail_icon border border-3 p-4 rounded-circle'/>
      <p className='p-2'>write us or contact us on our social media</p>
      <FontAwesomeIcon icon={faFacebook} className='facebook_icon border border-2 p-3 rounded-circle'/>
      <FontAwesomeIcon icon={faTwitter} className='twitter_icon border border-2 p-3 rounded-circle'/>
      <FontAwesomeIcon icon={faYoutube} className='youtube_icon border border-2 p-3 rounded-circle'/>
      <FontAwesomeIcon icon={faVimeo} className='vimeo_icon border border-2 p-3 rounded-circle'/>
     </div>
     <div className='input_text_filled form-control'>

     <label className='form-label'  htmlFor='name'>Your Name(required)</label>
      <input  className='name_filled form-control'id='name' name='name' type='text' value={formValues.name} onChange={inputChangeHandler} required/> <hr/>
      

      <label className='form-label' htmlFor='email' >Your Email(required)</label>
      <input className='email_filled form-control' id='email' name='email' type='email' value={formValues.email} onChange={inputChangeHandler} required /><hr/>
      <p>{errors.email}</p>
      

      <label htmlFor='textareal' >Your Message</label>
      <textarea className='textarea_filled form-control' id='textareal' onChange={inputChangeHandler}
       cols='15' rows='7' type="text" name='message' value={formValues.message}></textarea><hr/>
       
      <button className='btn btn_submit_send ' type='submit'>SEND</button>
     </div>
    </form>
    </div>
   </>
  )};
  export default Component14;
