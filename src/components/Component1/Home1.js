import React, {useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Link, NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
import './Home1.css';

const Component1 = () => {
  const [active, setActive] = useState(false);

  window.addEventListener("scroll", function(){
    if(this.window.scrollY > 100){ 
      setActive(true);
    } else{
       setActive(false); 
    }
  });

  return (
     <Container>
       <div className="main_content">
       <Navbar expand="lg" className={active ? "activenav" : " "}>
          <Nav className="ms-auto p-4 d-flex text-light ">
          <img src='./images/logo-no-background.webp' alt='error' className='image_logo' width='100'/>
            <NavLink to="/" >HOME</NavLink>
            <NavLink to="/visaEnquiry">VISA ENQUIRY</NavLink>
            <NavLink to="/contacts">CONTACTS</NavLink>
            <NavLink to="/login">LOGIN</NavLink>
          </Nav>
        </Navbar>
      <div className="main-one  text-center">
          <div className="main-one-content text-center">
              <h1 className="heading-one"> Job Europe Visa Canada | Australia | USA  </h1>
               <h4 className="heading-two text-white text-center"> Job Europe Visa Provide Clear Advice For Your Migration To Canada, australia, USA. Talk to us for Worker visa , family visa, skilled & business migration, & visitor visa</h4>
          </div>
          <div className="button">
              <Link to="/visaEnquiry" type="button" className="btnCheck btn rounded-5 p-1 m-2" href="">CHECK YOUR APPLICATION STATUS</Link>
              <Link to="/login"  type="button" className="btnLogin btn border rounded-5 p-1">ADMIN LOGIN</Link>
          </div>   
        </div>
      </div> 
    </Container>
  )
}
export default Component1
