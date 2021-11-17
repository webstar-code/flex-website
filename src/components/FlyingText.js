import React, { useState } from 'react'
import '../styles/flying-text.css'
import logo from '../assets/flex-logo.png';
import { useHistory } from 'react-router-dom'
const FlyingText = () => {
    const [down, setDown] = useState('')
    const history = useHistory()
    setTimeout(() => {
        setDown('down')
    }, 5000)
    setTimeout(() => {
        history.push('/home')
    }, 8000)
    return (
        <>
            <div className={`logo up ${down}`} onClick={() => history.push('/home')}>
                <img src={logo} alt="" />
            </div>
            <div className="main-text-area" onClick={() => history.push('/home')}>
                <div className="flying-text-area">
                    <h1>CONSISTENCY</h1>
                    {/* CREDIBLITY
            GROWTH */}
                </div>
                <div className="flying-text-area-2">
                    <h1>CREDIBLITY</h1>
                    {/* CREDIBLITY
            GROWTH */}
                </div>
                <div className="flying-text-area-3">
                    <h1>GROWTH</h1>
                    {/* CREDIBLITY
            GROWTH */}
                </div>
            </div>
        </>
    )
}

export default FlyingText
