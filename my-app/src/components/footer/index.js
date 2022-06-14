import React from 'react'
import { FaLinkedin, FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLink, FooterLinkTitle, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink  } from './FooterElements'
const Footer = () => {
  return (
    <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        {/* <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to ="/investors"> Investors</FooterLink>
                            <FooterLink to ="/users"> Our Users</FooterLink> (TODO: When users obtained)
                             <FooterLink to ="/testimonials"> Testimonials</FooterLink> (TODO: When users obtained and quotes are available) 
                            <FooterLink to ="/careers"> Careers</FooterLink> (TODO: When we seek employees)
                           <FooterLink to ="/tos"> Terms of Service</FooterLink> (TODO: Get legal counsel on terms of service agreement
                        </FooterLinkItems>  */}
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to ="/contact_us"> Contact/Support</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Openpod
                        </SocialLogo>
                        <WebsiteRights>Openpod © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIconLink href="https://linkedin.com/company/openpod" target= "_blank" area-label="LinkedIn">
                                <FaLinkedin />
                        </SocialIconLink>
                        <SocialIcons>
                            {/* <SocialIconLink href="https://linkedin.com/company/openpod" target= "_blank" area-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink> */}
                            {/* <SocialIconLink href="/" target= "_blank" area-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target= "_blank" area-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target= "_blank" area-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target= "_blank" area-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink> */}
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    </>
  )
}

export default Footer