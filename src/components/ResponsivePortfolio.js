import React from 'react'
import '../styles/resPortfolio.css'
import PortfolioCard from './PortfolioCard'
import liteNlamp from '../assets/resLiteNLamp.png'
import dom from '../assets/resDom.png'
import gokul from '../assets/resGokul.png'
import healthy from '../assets/resHealty.png'
import jd from '../assets/resjd.png'
import kurta from '../assets/resKurta.png'
const ResponsivePortfolio = ({setIndex,index}) => {
    return (
        <div className="res-portfolio">
            <h2>PORTFOLIO</h2>
            <div className="res-port-items">
                <PortfolioCard img={liteNlamp} title="Lite N Lamps" setIndex={setIndex} num={0}/>
                <PortfolioCard img={dom} title="Domineum"/>
                <PortfolioCard img={gokul} title="Gokul Diagnostics" setIndex={setIndex} num={1}/>
                <PortfolioCard img={healthy} title="Healthy Nutrients" setIndex={setIndex} num={2}/>
                <PortfolioCard img={kurta}  title="Kurta Ghar" setIndex={setIndex} num={3}/>
                <PortfolioCard img={jd}  title="JD Herbal" setIndex={setIndex} num={4}/>
            </div>
        </div>
    )
}

export default ResponsivePortfolio
