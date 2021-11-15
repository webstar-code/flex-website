import React from 'react'
import logo from '../assets/flex-logo.png'
import { IoMdClose } from 'react-icons/io'
import '../styles/design.css'
import DesignView from '../components/DesignView'
import { Link } from 'react-router-dom'
const Design = () => {
    return (
        <div className="design">
            <div className="w-full px-8 py-5 md:px-24 md:p-9 bg-transparent flex items-center justify-between top-0 left-0 z-40">
                <div className="w-24 cursor-pointer">
                    <img src={logo} alt="" />
                </div>
                <div className="flex items-center justify-center cursor-pointer">
                    <Link to="/home">
                        <IoMdClose className="text-4xl" />
                    </Link>
                </div>
            </div>
            <DesignView />
        </div>
    )
}

export default Design
