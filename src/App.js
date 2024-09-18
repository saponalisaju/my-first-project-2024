import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import VisaEnquiry from "./pages/visaEnquiry/VisaEnquiry";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
 
const App = () => {
    return (
       <>
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/visaEnquiry" element={<VisaEnquiry />}/>
            <Route path="/contacts" element={<Contacts />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>      
       </BrowserRouter>
      </>
    );
};

export default App;
