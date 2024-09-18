import React from 'react';
import './Home10.css';
import { Link } from 'react-router-dom';

const Component10 = () => {
  return (
      <div className="section-9 bg-info-subtle">
        <div className='text-center m-4'>
            <h1 className='p-4'>Apply and Check your eligibility</h1>
            <p className='security_account'>You can check the status of your disability benefits application online using your personal my Social Security account <Link to="https://www.nationwideedu.com/"> visa process to work in Europe. </Link></p>
        </div>
        <div className='flag_all'>
            <img src="./images/flag_127- (4).png" alt="error"/>
            <img src="./images/flage6(6).jpeg" alt="error" />
            <img src="./images/flag2.png" alt="error" />
            <img src="./images/flag3.png" alt="error" />
            <img src="./images/flag7 (4).png" alt="error"/>
            <img src="./images/flag8_1 (4).png" alt="error" />
            <img src="./images/flage (4).png" alt="error" />
            <img src="./images/flage(1).png" alt="error" />
         </div>
      </div> 
  )
}

export default Component10;
