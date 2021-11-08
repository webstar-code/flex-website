import React from 'react'
import '../styles/footer.css'
import logo from '../assets/flex-logo.png'
import { FLEX_LOGO2X } from '../assets'
import {AiFillFacebook,AiFillInstagram,AiFillTwitterSquare, AiFillBehanceSquare} from 'react-icons/ai'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={FLEX_LOGO2X} alt="" />
            </div>
            <div className="footer-social-icons">
               <AiFillFacebook className="icon"/>
               <AiFillInstagram className="icon"/>
               <AiFillBehanceSquare className="icon" />
               <AiFillTwitterSquare className="icon"/>
            </div>
            <div className="contact-details">
                <p><a href="https://wa.me/919008358030" target="_blank">+91 90083 58030</a></p>
                <p><a href="mailto:info@flexxited.com">contact@flexxited.com</a></p>
                <p>@flexxited</p>
            </div>
            <div className="terms-services">
              <p>Terms of Service</p>
              <p>Privacy Policies</p>
            </div>
        </div>
    )
}

export default Footer
 