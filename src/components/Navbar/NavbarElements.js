import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height: 80px; 
    display: flex; 
    margin-top: -80px;
    justify-content: center; 
    align-items: center;
    font-size: 1rem; 
    position: sticky; 
    top: 0; 
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex; 
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%; 
    padding: 0 24px; 
    max-width: 100%; 
`;

export const NavLogo = styled(LinkR)`
    color: white;
    justify-self: flex-start; 
    cursor: pointer; 
    font-size: 1.5rem; 
    display: flex;
    align-items: center;
    margin-left: 10px;
    text-decoration: none;
`;

export const Image = styled.img`
    height: 3rem;
    margin-bottom: 2px;
    pointer-events: none;
    justify-self: flex-start; 
    display: flex;
    align-items: center;
    margin-left: 10px;
    font-weight: bold;
    text-decoration: none;

    @
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0; 
        transform: translate(-100%, 60%); 
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
   color: #fff;
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 0 1rem;
   height: 100%;
   font-size: 20px;
   cursor: pointer;

   &.active {
       border-bottom: 3px solid #ff6484;
   }
`;

export const NavBtn = styled.nav`
   display: flex;
   align-items: center;

   @media screen and (max-width: 768px) {
       display: none;
   }
`

export const NavBtnLink = styled.a`
   border-radius: 50px;
   background: #ff6484; 
   white-space: nowrap;
   padding: 10px 22px;
   color: #fff;
   font-size: 20px; 
   outline: none; 
   border: none; 
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;

   &:hover {
       transition: all 0.2s ease-in-out;
       background: #fff; 
       color: #010606;
   }
`

export const EmptySpot = styled.div`
   width: 130px;
`
