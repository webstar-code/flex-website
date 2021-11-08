import React ,{useState}from 'react'
import '../styles/header.css'
import { FLEX_LOGO2X } from '../assets'
import burger from '../assets/burger.png'
import {Link} from 'react-router-dom'
import {IoMdClose} from 'react-icons/io'
const Header = () => {
    const [show,setShow]=useState("")
    return (
        <div className="header">
            <div className="logo">
             <img src={FLEX_LOGO2X} alt="" />
            </div>
            <div className="burger" onClick={()=>setShow(show===""?'show':'')}>
                 <img src={burger} alt="" />
            </div>

            <div className={`top-header ${show}`}>
            <div className="top-sec">
                        <div className="logo">
                        <img src={FLEX_LOGO2X} alt="" />
                        </div>
                        <div className="burger" onClick={()=>setShow(show===""?'show':'')}>
                            <IoMdClose className="close"/>
                        </div>
            </div>
            <div className="bottom-sec">
              <h3 className="active">HOME</h3>
              <h3>CORPORATE</h3>
              <h3>SERVICES</h3>
              <Link to="/portfolio"><h3>PORTFOLIO</h3></Link>
              <h3>CONNECT</h3>
            </div>
            <div className="header-icons">

            </div>
            
            </div>
        </div>
    )
}

export default Header
