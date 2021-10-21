import React,{ useState } from 'react';
import LearnPage from '../LearnPage'
import { LearnObjThree } from '../LearnPage/Data';
import Navbar2 from '../Navbar2';
import Sidebar2 from '../Sidebar2';
import {
    LearnMoreParents,
    Page,
} from './InteriorElements';

const Interior = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <LearnMoreParents>
        <Sidebar2 isOpen={isOpen} toggle={toggle} />
         <Navbar2 toggle={toggle} />  
            <Page>
                <LearnPage {...LearnObjThree}/>
            </Page>
        </LearnMoreParents>
    )
}

export default Interior
