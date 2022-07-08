import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to = "about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to = "launch" onClick={toggle}>
                        Launch
                    </SidebarLink>
                    <SidebarLink to = "waitlist" onClick={toggle}>
                        Build
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    </>
  );
};

export default Sidebar;