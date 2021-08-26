import React from 'react'
import '../styles/footer.css'
import logo from '../assets/flex-logo.png'
import {AiFillFacebook,AiFillInstagram,AiFillTwitterSquare} from 'react-icons/ai'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={logo} alt="" />
            </div>
            <div className="footer-social-icons">
               <AiFillFacebook className="icon"/>
               <AiFillInstagram className="icon"/>
               <AiFillTwitterSquare className="icon"/>
            </div>
            <div className="contact-details">
                <p>+91 90083 58030</p>
                <p>contact@flexxited.com</p>
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
 