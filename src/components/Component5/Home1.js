import React from 'react';
import './Home1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';

const Home1 = () => {
  return (
      <div className="border p-1 m-4 ms-5 w-50">
        <div className=" d-flex">
            <FontAwesomeIcon icon={faCube} className='border border-3 rounded-circle border-warning p-3'/>
            <h4 className="text-warning m-2">Nestle</h4>
        </div>
        <div className="ps-5 mb-5">
            <p><strong>POSITION:</strong> Pakaging Worker</p>
            <p> <strong> DEPARTMENT:</strong> Production</p>
            <p><strong>TOTAL VACANCIES:</strong> 28</p>
            <p><strong>EMPTY VACANCIES:</strong>30</p>
            <p> <strong>LOCATION:</strong> ASTRALIA, CANADA, USA</p>
            <p> <strong>Start Date:</strong> 20/11/2025</p>
            <p> <strong>Working Hours:</strong> 6-8 hours per day</p>
            <p><strong>Compensation: </strong>Salary 1200 USD</p>
        </div>
        <div className="p-1">
            <p><strong>POSITION:</strong> Pakaging Worker</p>
            <p> <strong> DEPARTMENT:</strong> Production</p>
            <p><strong>TOTAL VACANCIES:</strong> 28</p>
            <p><strong>EMPTY VACANCIES:</strong>30</p>
            <p> <strong>LOCATION:</strong> ASTRALIA, CANADA, USA</p>
            <p> <strong>Start Date:</strong> 20/11/2025</p>
            <p> <strong>Working Hours:</strong> 6-8 hours per day</p>
            <p><strong>Compensation: </strong>Salary 1200 USD</p>
        </div>
        <div className="m-2 text-center">
            <p><strong>POSITION:</strong> Pakaging Worker</p>
            <p> <strong> DEPARTMENT:</strong> Production</p>
            <p><strong>TOTAL VACANCIES:</strong> 28</p>
            <p><strong>EMPTY VACANCIES:</strong>30</p>
            <p> <strong>LOCATION:</strong> ASTRALIA, CANADA, USA</p>
            <p> <strong>Start Date:</strong> 20/11/2025</p>
            <p> <strong>Working Hours:</strong> 6-8 hours per day</p>
            <p><strong>Compensation: </strong>Salary 1200 USD</p>
        </div>
    </div>
  )
}

export default Home1;
