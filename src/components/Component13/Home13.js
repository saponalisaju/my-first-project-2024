import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareTwitter, faVimeo, faSquareYoutube } from '@fortawesome/free-brands-svg-icons';

const Component13 = () => {
  return (
    <div className='text-center bg-light'>
    <h1 className='p-5'>Our Team</h1>
    <h4 className='p-3'>Meet with our talented team who are exeptional expereince for your job visa consultancy.</h4>
    <div className='d-flex justify-content-around'>
    <div className='border'>
      <img className='charlotte_image m-3 p-3 w-100' src='images/uk-charlotte-hogg.webp' alt='loading error'/>
      <h4>Charlotte Hogg</h4>
      <h5>CEO Officer </h5>
      <FontAwesomeIcon icon={faSquareFacebook} className='p-1 bg-warning m-1'/><FontAwesomeIcon icon={faSquareTwitter} className='p-1 bg-warning m-1'/>
      <FontAwesomeIcon icon={faSquareYoutube} className='p-1 bg-warning m-1'/><FontAwesomeIcon icon={faVimeo} className='p-1 bg-warning m-1'/>
    </div>
    <div className='border'>
    <img className='kelly_image m-3 p-3 w-100' src='images/uk-kelly-tullier.webp' alt='loading error'/>
      <h4>Kelly Mohan Tullier</h4>
      <h5>CPCO and Corporate Secretory</h5>
      <FontAwesomeIcon icon={faSquareFacebook} className='p-1 bg-warning m-1'/><FontAwesomeIcon icon={faSquareTwitter} className='p-1 bg-warning m-1'/>
      <FontAwesomeIcon icon={faSquareYoutube} className='p-1 bg-warning m-1'/><FontAwesomeIcon icon={faVimeo} className='p-1 bg-warning m-1'/>
    </div>
    <div className='border'>
      <img className='hoffmeister_image m-3 p-3 w-100' src='images/uk-jim-hoffmeister.webp' alt='loading error'/>
      <h4>James H Hoffmeister</h4>
      <h5>CFO Officer</h5>
      <FontAwesomeIcon icon={faSquareFacebook} className='p-1 bg-warning m-1'/><FontAwesomeIcon icon={faSquareTwitter} className='p-1 bg-warning m-1'/>
      <FontAwesomeIcon icon={faSquareYoutube} className='p-1 bg-warning m-1'/><FontAwesomeIcon icon={faVimeo} className='p-1 bg-warning m-1'/>
    </div>
    </div>
  </div>
  )
}

export default Component13;
