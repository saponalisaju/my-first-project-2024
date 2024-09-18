import React from 'react';
import './Home12.css';
import { Link } from 'react-router-dom';

const Component12 = () => {
  return (
    <div>
    <div className='content_component_twelve'>
      <img src='./images/free-photo-of-london-from-the-shard.jpeg' alt='loading' width="100%" className=' image_twelve'/>
    <div className='content_check '>
     <h1>Already Applied?</h1>
     <h1>Check Your Status Here!</h1>
    </div>
      <Link to="/visaEnquiry" className='btn btn-warning btn_check' href='#' type='button'>CHECK STATUS</Link>
    </div>
</div>
  )
}

export default Component12;
