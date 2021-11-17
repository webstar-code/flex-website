import React from 'react';
import { useHistory } from 'react-router-dom';
import { FLEX_LOGO2X } from '../assets'

import { IoMdClose } from 'react-icons/io'

const CloseHeader = () => {

    const history = useHistory();
    
    return (
        <div className="w-full px-8 py-5 md:px-24 md:p-9 bg-primary fixed flex items-center justify-between top-0 left-0 z-40">
            <div className="w-24 cursor-pointer">
                <img src={FLEX_LOGO2X} alt="" />
            </div>
            <div className="flex items-center justify-center cursor-pointer">
                <IoMdClose className="text-4xl" onClick={() => history.goBack()} />
            </div>
        </div>
    )
}

export default CloseHeader;