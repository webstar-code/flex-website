import React, { useEffect, useState } from 'react'
import '../styles/header.css'
import { FLEX_LOGO2X } from '../assets'
import burger from '../assets/burger.png'
import { Link } from 'react-router-dom'
import { IoMdClose } from 'react-icons/io'
const Header = () => {
    const [show, setShow] = useState("")
    const [activeLink, setActiveLink] = useState('');
    const [showHeader, setShowHeader] = useState({ show: true, scrollPos: 0 });

    const handleScroll = () => {
        if (window.scrollY < 100) {
            setShowHeader((prev) => ({ ...showHeader, show: true }));
        } else {
            setShowHeader((prev) => ({
                scrollPos: document.body.getBoundingClientRect().top,
                show: document.body.getBoundingClientRect().top > prev.scrollPos
            }))
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const pathname = window.location.pathname;

    return (
        <div className={`fixed bg-black top-0 left-0 flex items-center justify-between w-full h-12 md:h-14 px-5 py-10 md:py-8 md:px-8 z-20 transition-all
			${!showHeader.show ? '-top-20 md:-top-36' : 'top-0'} 
		`}>
            <div className="w-24 cursor-pointer">
                <img src={FLEX_LOGO2X} alt="" />
            </div>
            <div className="w-6 h-6" onClick={() => setShow(show === "" ? 'show' : '')}>
                <img src={burger} alt="" />
            </div>

            <div className={`top-header ${show}`}>
                <div className={`bg-primary flex items-center justify-between w-full h-12 md:h-14 px-4 py-8 md:py-8 md:px-16 z-20`}>
                <div className="w-24 cursor-pointer">

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

            </div >
        </div >
    )
}

export default Header
