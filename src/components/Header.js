import React, { useState } from 'react'
import '../styles/header.css'
import { FLEX_LOGO2X } from '../assets'
import burger from '../assets/burger.png'
import { Link } from 'react-router-dom'
import { IoMdClose } from 'react-icons/io'
const Header = () => {
    const [show, setShow] = useState("")
    const [activeLink, setActiveLink] = useState('');

    const pathname = window.location.pathname;
    console.log(pathname);
    console.log(pathname === '/connect')
    return (
        <div className="header">
            <div className="logo">
                <img src={FLEX_LOGO2X} alt="" />
            </div>
            <div className="burger" onClick={() => setShow(show === "" ? 'show' : '')}>
                <img src={burger} alt="" />
            </div>

            <div className={`top-header ${show}`}>
                <div className="top-sec">
                    <div className="logo">
                        <Link to="/home">
                        <img src={FLEX_LOGO2X} alt="" />
                        </Link>
                    </div>
                    <div className="burger" onClick={() => setShow(show === "" ? 'show' : '')}>
                        <IoMdClose className="close" />
                    </div>
                </div>
                <div className="bottom-sec">
                    <h3 className={`${pathname === '/home' ? "active" : "none"}`}>
                        <Link to="/home">HOME</Link>
                    </h3>
                    <h3 className={`${pathname === '/corporate' ? "active" : "none"}`}>
                        <Link>CORPORATE</Link>
                    </h3>
                    <h3 className={`${pathname === '/services' ? "active" : "none"}`}>
                        <Link>SERVICES</Link>
                    </h3>
                    <h3 className={`${pathname === '/portfolio' ? "active" : "none"}`}>
                        <Link to="/portfolio">PORTFOLIO</Link>
                    </h3>
                    <h3 className={`${pathname == '/connect' ? "active" : "none"}`}>
                        <Link to="/connect">CONNECT</Link>
                    </h3>
                </div>
                <div className="header-icons">

                </div>

            </div>
        </div>
    )
}

export default Header
