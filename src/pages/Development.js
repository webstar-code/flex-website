import React from 'react'
import logo from '../assets/flex-logo.png'
import {IoMdClose} from 'react-icons/io'
import CircleItems from '../components/CircleItems'
import circle from '../assets/circle.png'
import app from '../assets/app.png'
import progressive from '../assets/progressive.png'
import website from '../assets/website.png'
import { Link } from 'react-router-dom'
import {AiFillFacebook,AiFillInstagram,AiFillTwitterSquare} from 'react-icons/ai'
const Development = () => {
    return (
        <div className="connect design">
            <div className="top-sec">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="burger">
                    <IoMdClose className="close"/>
                </div>
            </div>
            <div className="desgin-view">
                <h1>Development</h1>
                <div className="circle-view">
                <img src={circle} alt="" />
                  <CircleItems className="logo-design website" img={website} text="WEBSITE DEVELOPMENT"/>
                  <CircleItems className="progresive-desig" img={progressive} text="PROGRESSIVE WEB APP DEVELOPMENT"/>
                  <CircleItems className="brand-design" img={app} text="MOBILE APP DESIGN"/>
                  <div className="connect-area">
                   <div className="connect-container">
                   <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</p>
                   <Link to="/connect"><button>GET IN TOUCH</button></Link>
                   <div className="footer-social-icons connect-i">
                      <AiFillFacebook className="icon"/>
                      <AiFillInstagram className="icon"/>
                      <AiFillTwitterSquare className="icon"/>
                  </div>
                  </div>
                 </div>
                </div>

            </div>
        </div>
    )
}

export default Development
