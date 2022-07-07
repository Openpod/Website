import React, { useEffect, useState } from 'react'
import { Nav, NavbarContainer, NavLogo, Image, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa'
import logo_inverted from "./logo_inverted.png"
import {animateScroll as scroll } from 'react-scroll'

const Navbar = ({toggle}) => {

  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {

    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav scrollNav = {scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick = {toggleHome} >
            <Image src = {logo_inverted} />
            Openpod
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={500} spy={true} exact = 'true' offset={-80} >About </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="launch" smooth={true} duration={500} spy={true} exact = 'true' offset={-80} >Launch </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="waitlist" smooth={true} duration={500} spy={true} exact = 'true' offset={-80} >Waitlist </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink href='https://app.openpod.io'> Get Started </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;