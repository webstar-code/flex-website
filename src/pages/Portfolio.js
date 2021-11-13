import React from 'react'
import logo from '../assets/flex-logo.png'
import '../styles/portfolio.css'
import Slider from '../components/Slider'
import { IoMdClose } from 'react-icons/io'


const Portfolio = ({ index }) => {
    return (
        <div className="w-full h-full overflow-hidden">
            <div className="w-full px-8 py-5 md:px-24 md:p-9 bg-transparent fixed flex items-center justify-between top-0 left-0 z-40">
                <div className="w-24 cursor-pointer">
                    <img src={logo} alt="" />
                </div>
                <div className="flex items-center justify-center cursor-pointer">
                    <IoMdClose className="text-xl" />
                </div>
            </div>

            <Slider index={index} />


        </div>
    )
}

export default Portfolio
