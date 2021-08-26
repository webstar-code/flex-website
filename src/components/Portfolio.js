import React from 'react'
import liteNLamp from '../assets/lite-lamp.png'
import domineum  from '../assets/dominum.png'
import gokul  from '../assets/gokul.png'
import healthy  from '../assets/healthy.png'
import jd  from '../assets/jd.png'
import kutra  from '../assets/kutra.png'
import {AiOutlineEye} from 'react-icons/ai'
const Portfolio = () => {
    return (
        <div className="portfolio">
            <h2>PORTFOLIO</h2>
            <div className="profolio-items">
                <div className="protfilo-cards">
                    <div className="portfolio-card">
                        <img src={liteNLamp} alt="" />
                        <div className="por-text">
                            <h3>Lite N Lamps</h3>
                            <div className="eye">
                                <AiOutlineEye/>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-card">
                         <img src={domineum} alt="" />
                         <div className="por-text">
                            <h3>Domineum</h3>
                            <div className="eye">
                                <AiOutlineEye/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="protfilo-cards-2">
                <div className="portfolio-card">
                        <img src={gokul} alt="" />
                        <div className="por-text">
                            <h3>Gokul Diagnostics</h3>
                            <div className="eye">
                                <AiOutlineEye/>
                            </div>
                        </div>
                    </div>
                <div className="portfolio-card">
                        <img src={healthy} alt="" />
                        <div className="por-text">
                            <h3>Healthy Nutrients</h3>
                            <div className="eye">
                                <AiOutlineEye/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="protfilo-cards reverse">
                    <div className="portfolio-card">
                        <img src={jd} alt="" />
                        <div className="por-text">
                            <h3>JD Herbal</h3>
                            <div className="eye">
                                <AiOutlineEye/>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-card kurta">
                         <img src={kutra} alt="" />
                         <div className="por-text">
                            <h3>Kurta Ghar</h3>
                            <div className="eye">
                                <AiOutlineEye/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
