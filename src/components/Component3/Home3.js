import React from 'react';
import './Home3.css';

const Component3 = () => {
  return (
    <div className='section-two'>
      <div className="main-two p-5">
          <h1 className="text-center p-4 m-3">HOW DO WE WORK? </h1>
          <h4 className="text-center p-5 m-3">Research, plan, execute tasks, communicate effectively, adapt, and continuously improve processes?</h4>
      </div>
      <div className=" d-flex bg-light pb-5">
          <div className="para1 text-center p-5">
            <img className="border rounded-circle p-3" src="./images/settings (3).png" alt="loading"/>
            <h4 className="p-3">ASSESSMENT</h4>
            <span className="">Identify objectives, design tasks, administer assessments, collect data, analyze results, provide feedback, and adjust instruction based on findings. Bangladesh , we ded this for thousands of our valuable clients.</span>
          </div>
          <div className="para2 text-center p-5">
              <img className="border rounded-circle p-3" src="./images/gear.png" alt="loading"/>
              <h4 className='p-2'>PROCESSING AND COMMUNICATION</h4>
              <p className="">Both processing and communication are essential for successful interactions, whether in personal, academic, or professional contexts. They ensure that information is not only shared but also understood and utilized effectively
              </p>
            </div>
            <div className="para3 text-center p-5">
               <img className="border rounded-circle p-3" src="./images/settings (2).png" alt="loading"/>
              <h4 className='p-3'>RESULT</h4>
              <p className="">Typically, visa processing takes about 3 to 5 weeks. After processing, the consulate will notify you of the decision, and the visa delivery can take up to two additional workdays.
              </p>
            </div> 
        </div> 
    </div>
  )
}

export default Component3;
