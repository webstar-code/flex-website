import React from 'react'
import logo from '../assets/flex-logo.png'
import '../styles/portfolio.css'
import Slider from '../components/Slider'
import { IoMdClose } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'


const Portfolio = ({ index }) => {
    const location = useLocation();
    const state = location.state

    return (
        <div className="w-full h-full overflow-hidden bg-primary">
            <div className="w-full px-8 py-5 md:px-24 md:p-9 bg-transparent fixed flex items-center justify-between top-0 left-0 z-40">
                <div className="w-24 cursor-pointer">
                    <img src={logo} alt="" />
                </div>
                <div className="flex items-center justify-center cursor-pointer">
                    <Link to="/home">
                        <IoMdClose className="text-4xl" />
                    </Link>
                </div>
            </div>
            {state ?
                <Slider index={state.state.index} />
                :
                <Slider index={0} />
            }


        </div>
    )
}

export default Portfolio
