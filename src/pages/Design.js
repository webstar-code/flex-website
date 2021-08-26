import React from 'react'
import logo from '../assets/flex-logo.png'
import {IoMdClose} from 'react-icons/io'
import '../styles/design.css'
import DesignView from '../components/DesignView'
const Design = () => {
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
            <DesignView/>
        </div>
    )
}

export default Design
