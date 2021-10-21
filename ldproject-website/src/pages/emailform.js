import React, {useState} from 'react'
import Email from '../components/Email';
import Navbar2 from '../components/Navbar2';
import Sidebar2 from '../components/Sidebar2';
import "../pages/emailform.css";

const Emailform = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id="container">
             <Sidebar2 isOpen={isOpen} toggle={toggle} />
             <Navbar2 toggle={toggle} />  
                <div id="email">
                    <Email />
                </div>
        </div>
    );
};

export default Emailform;
