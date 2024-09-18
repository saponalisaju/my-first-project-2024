import React from 'react';
import './Home11.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Component11 = () => {
  return (
      <div className='content_eleven bg-secondary'>
        <div className='text-center p-4'>
            <h1>Client Testimonials</h1>
            <h4>Don't take our word for it -hears what our clients say.</h4>
        </div>
        <div className='d-flex'>
            <div className='w-25 m-auto bg-light text-center p-3'>
            <FontAwesomeIcon icon={faQuoteLeft} className='qoute_simble'/>
            <p className=''>
                If you're interested in working at Visa, their Client Services and Support team plays a crucial role. They aim to be the best payment partner for clients by providing operational support and services. Here's what they do:  
            </p>
                <img src="images/photo-1159947707.jpg" alt='loading'/>
                <h2>Mohammad Arafat Hossain</h2>
                <h4><em>Nestle Canada</em></h4>
            </div>
            <div className='w-25 bg-light text-center p-3'>
            <FontAwesomeIcon icon={faQuoteLeft} className='qoute_simble'/>
                <p className=''>
                If you're interested in working at Visa, their Client Services and Support team plays a crucial role. They aim to be the best payment partner for clients by providing operational support and services. Here's what they do:  
                </p>
                <img src="images/photo-1159947707.jpg" alt='loading'/>
                <h2>Mohammad Emon Rahman</h2>
                <h4><em>Coca-Cola, USA</em></h4>
            </div>
            <div className='w-25 m-auto bg-light text-center p-3'>
            <FontAwesomeIcon icon={faQuoteLeft} className='qoute_simble'/>
                <p className=''>
                If you're interested in working at Visa, their Client Services and Support team plays a crucial role. They aim to be the best payment partner for clients by providing operational support and services. Here's what they do:  
                </p>
                <img src="images/photo-1159947707.jpg" alt='loading'/>
                <h2>Mr. Shafiq A. Patwary </h2>
                <h4><em>Airways, Australia</em></h4>
            </div>
        </div>
    </div>     
  )
}

export default Component11;
