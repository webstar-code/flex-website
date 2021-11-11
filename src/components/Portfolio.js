import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import liteNLamp from '../assets/lite-lamp.png'
import domineum from '../assets/dominum.png'
import gokul from '../assets/gokul.png'
import healthy from '../assets/healthy.png'
import jd from '../assets/jd.png'
import kutra from '../assets/kutra.png'
import { AiOutlineEye } from 'react-icons/ai'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'
import { CgArrowLongRight } from 'react-icons/cg'
import { Link as RouterLink } from 'react-router-dom'

import {
	ana1, ana2, ana3,
	domineum1, domineum2, domineum3,
	hunger1, hunger2, hunger3,
	litenlamps1,
	litenlamps2,
	litenlamps3,
	onehealthwell1, onehealthwell2, onehealthwell3,
	prajwala1, prajwala2, prajwala3, UNION
} from '../assets'

const OverLay = ({ setShowOverlay, images }) => {
	const [activeIndex, setActiveIndex] = useState(Math.round(images.length / 2) - 1);
	const [slideamt, setSlideAmt] = useState(0);

	useEffect(() => {
		setSlideAmt(activeIndex * 365)
	}, [activeIndex]);

	console.log(activeIndex);
	return (
		<div className="overlay-container">
			<div className="inner-container">
				<div className="close-icon" onClick={() => setShowOverlay(false)}>
					<AiOutlineClose />
				</div>
				<div className="slider">
					<div className="slider-images" style={{ left: `-${slideamt}px` }}>
						{images.map((image, i) => (
							<div className={`${activeIndex === i ? "active-slider-image " : "slider-image"}`}>
								<img src={image} />
							</div>
						))}
					</div>
					<div className="slider-ellipses">
						{images.map((item, i) => {
							return <span onClick={() => setActiveIndex(i)} className={`${activeIndex === i ? 'active-ellipses' : 'ellipses'}`}>
								<BsDot /></span>
						})}
					</div>
				</div>
			</div>
		</div>
	)
}


const PCard = ({ images, className, name }) => {
	const [showOverlay, setShowOverlay] = useState(false);

	return (
		<div className={`${className}`}>
			<div className="images" onClick={() => setShowOverlay(true)}>
				<img src={images[0]} className="image-1" />
				<img src={images[1]} className="image-2" />
				<img src={images[2]} className="image-2" />
			</div>
			<div className="des">
				<h1>{name}</h1>
				<img src={UNION} />
			</div>

			{showOverlay && <OverLay setShowOverlay={setShowOverlay} images={images} />}
		</div>
	)
}


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
				<PCard images={[hunger1, hunger2, hunger3]} name="Restro Solutions" className="portfolio-item"
					 />
				<PCard images={[onehealthwell1, onehealthwell2, onehealthwell3]} name="One health wellness" className="portfolio-item reverse"
					 />

				<PCard images={[ana1, ana2, ana3]} name="Ana" className="portfolio-item"
					 />

				<PCard images={[litenlamps1, litenlamps2, litenlamps3]} name="Lite n Lamps" className="portfolio-item reverse"
					 />

				<PCard images={[domineum1, domineum2, domineum3]} name="Domineum" className="portfolio-item "
					 />



			</div>

			<RouterLink to="/portfolio"><button className="main-page-btn">View All</button></RouterLink>

		</div>
	)
}

export default Portfolio
