import React from 'react';
import { Link } from 'react-router-dom';
import { FLEX_LOGO2X } from '../assets'

import { IoMdClose } from 'react-icons/io'

const CloseHeader = () => {
    return (
        <div className="w-full px-8 py-5 md:px-24 md:p-9 bg-transparent flex items-center justify-between top-0 left-0 z-40">
            <div className="w-24 cursor-pointer">
                <img src={FLEX_LOGO2X} alt="" />
            </div>
            <div className="flex items-center justify-center cursor-pointer">
                <Link to="/home">
                    <IoMdClose className="text-4xl" />
                </Link>
            </div>
        </div>
    )
}

export default CloseHeader;