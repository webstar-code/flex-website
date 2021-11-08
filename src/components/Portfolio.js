import React from 'react'
import { useHistory } from 'react-router-dom'
import liteNLamp from '../assets/lite-lamp.png'
import domineum from '../assets/dominum.png'
import gokul from '../assets/gokul.png'
import healthy from '../assets/healthy.png'
import jd from '../assets/jd.png'
import kutra from '../assets/kutra.png'
import { AiOutlineEye } from 'react-icons/ai'
import { FaLongArrowAltRight } from 'react-icons/fa'

import {
    ana1, ana2, ana3,
    domineum1, domineum2, domineum3,
    hunger1, hunger2, hunger3,
    litenlamps1, litenlamps2, litenlamps3,
    onehealthwell1, onehealthwell2, onehealthwell3,
    prajwala1, prajwala2, prajwala3, UNION
} from '../assets'

const Portfolio = ({ setIndex, index }) => {
    const history = useHistory()
    const pushToProtFolio = (num) => {
        setIndex(num)
        history.push('/portfolio')
    }
    return (
        <div className="portfolio">
            <h2>PORTFOLIO</h2>
            <div className="portfolio-items">
                <div className="portfolio-item">
                    <div className="images">
                        <img src={hunger1} className="image-1" />
                        <img src={hunger2} className="image-2" />
                        <img src={hunger3} className="image-3" />
                    </div>
                    <div className="des">
                        <h1>Restro Solutions</h1>
                        <img src={UNION} />
                    </div>
                </div>
                <div className="portfolio-item reverse">
                    <div className="images">
                        <img src={onehealthwell1} className="image-1" />
                        <img src={onehealthwell2} className="image-2" />
                        <img src={onehealthwell3} className="image-3" />
                    </div>
                    <div className="des">
                        <h1>One health wellness</h1>
                        <img src={UNION} />
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="images">
                        <img src={ana1} className="image-1" />
                        <img src={ana2} className="image-2" />
                        <img src={ana3} className="image-3" />
                    </div>
                    <div className="des">
                        <h1>ANA</h1>
                        <img src={UNION} />
                    </div>
                </div>
                <div className="portfolio-item reverse">
                    <div className="images">
                        <img src={litenlamps1} className="image-1" />
                        <img src={litenlamps2} className="image-2" />
                        <img src={litenlamps3} className="image-3" />
                    </div>
                    <div className="des">
                        <h1>Lite n Lamps</h1>
                        <img src={UNION} />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Portfolio
