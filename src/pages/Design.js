import React from 'react'
import logo from '../assets/flex-logo.png'
import { IoMdClose } from 'react-icons/io'
import '../styles/design.css'
import DesignView from '../components/DesignView'
import { Link } from 'react-router-dom'
import CloseHeader from '../components/CloseHeader';

const Design = () => {
    return (
        <div className="design">
            <CloseHeader />
            <DesignView />
        </div >
    )
}

export default Design
