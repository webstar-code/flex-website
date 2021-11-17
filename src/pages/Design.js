import React from 'react'
import logo from '../assets/flex-logo.png'
import { IoMdClose } from 'react-icons/io'
import '../styles/design.css'
import DesignView from '../components/DesignView'
import { useHistory } from 'react-router-dom'
import CloseHeader from '../components/CloseHeader';

const Design = () => {
    const history = useHistory();
    return (
        <div className="design">
            {/* <CloseHeader /> */}

            <div className="w-full relative py-5 md:px-24 md:p-9 bg-primary flex items-center z-40">
            <h1 className="absolute w-full text-3xl font-semibold mt-4 text-center">Services</h1>
            <div className="flex ml-auto mr-5 items-center justify-center cursor-pointer">
                <IoMdClose className="text-4xl" onClick={() => history.goBack()} />
            </div>
        </div>
            <DesignView />
        </div >
    )
}

export default Design
