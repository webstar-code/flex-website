import React from 'react'
import '../styles/connect.css'
import logo from '../assets/flex-logo.png'
import {IoMdClose} from 'react-icons/io'
import {AiFillFacebook,AiFillInstagram,AiFillTwitterSquare} from 'react-icons/ai'
const Connect = () => {
    return (
        <div className="connect">
            <div className="top-sec">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="burger">
                    <IoMdClose className="close"/>
                </div>
            </div>
            <h1>Connect</h1>
            <div className="connect-form">
                <form>
                  <input type="text" placeholder="Full Name"/>
                  <input type="text" placeholder="Phone Number" />
                  <textarea name="msg" id="" cols="30" rows="10"
                  placeholder="Message"
                  ></textarea>
                  <button type="submit">SEND MESSAGE</button>
                </form>
            </div>
            <div className="footer-social-icons">
               <AiFillFacebook className="icon i-connect"/>
               <AiFillInstagram className="icon i-connect"/>
               <AiFillTwitterSquare className="icon i-connect"/>
            </div>
        </div>
    )
}

export default Connect