import React from 'react'
import logo from '../assets/flex-logo.png'
import { IoMdClose } from 'react-icons/io'
import '../styles/design.css'
import DesignView from '../components/DesignView'
import { Link } from 'react-router-dom'
const Design = () => {
    return (
        <div className="design">
            <div className="top-sec">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="burger">
                    <Link to="/">
                        <IoMdClose className="close" />
                    </Link>
                </div>
            </div>
            <DesignView />
        </div>
    )
}

export default Design
