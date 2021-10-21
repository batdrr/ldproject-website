import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRouter 
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='home' onClick={toggle}>
                        Home
                        </SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>
                        About
                        </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
                        Services
                        </SidebarLink>
                    <SidebarLink to='project' onClick={toggle}>
                        Projects
                        </SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>
                        Contact
                        </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRouter to="/emailform">Email Us</SidebarRouter>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
