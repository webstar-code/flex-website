import React from 'react'
import logo from '../assets/flex-logo.png'
import '../styles/portfolio.css'
import Slider from '../components/Slider'
import {IoMdClose} from 'react-icons/io'
const Portfolio = ({index}) => {
    console.log(index)
    return (
        <div className="connect portfolio-page">
            <div className="top-sec">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="burger">
                    <IoMdClose className="close"/>
                </div>
            </div>
            <h1>Portfolio</h1>
            <Slider index={index}/>
            </div>
    )
}

export default Portfolio
