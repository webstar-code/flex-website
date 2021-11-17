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
import { Link } from 'react-router-dom'
import { data } from './SliderData'
import { UNION } from '../assets'






const OverLay = ({ showOverlay, setShowOverlay, images, index }) => {
	console.log(index);
	let itemWidth;

	const { innerWidth, innerHeight } = window;
	if (innerWidth > 768) {
		itemWidth = 450;
	} else if (innerWidth > 428) {
		itemWidth = 400;
	} else {
		itemWidth = 330;
	}


	const [activeIndex, setActiveIndex] = useState(index != null ? index : Math.round(images.length / 2) - 1);

	return (
		<div className={`overlay-container`}>
			<div className="w-full md:w-4/5 mx-auto flex justify-end align-bottom p-6 md:p-12" onClick={() => setShowOverlay(false)}>
				<AiOutlineClose className="text-4xl cursor-pointer" />
			</div>
			<div className="mt-10 sm:mt-32 md:mt-12 mx-auto w-full md:w-4/5 flex flex-col items-center overflow-hidden">
				<div className="flex flex-col items-center justify-center overflow-hidden">
					<div className="relative w-full m-0 grid grid-rows-1 auto-cols-max grid-flow-col px-16 transition-all overflow-hidden"
						style={{ left: `-${activeIndex * itemWidth + 64}px`, transform: 'translate(35%, 0px)', height: `${itemWidth}px` }}>
						{images.map((image, i) =>
							<div className="flex items-center justify-center" style={{ width: `${itemWidth}px` }}>
								<img className={`${activeIndex === i ? 'w-full' : 'w-72 opacity-75'} object-contain`} src={image} style={{ boxShadow: '20px 19px 20px 4px #0000009E' }} />
							</div>
						)}
					</div>
					<div className="flex justify-center items-center">
						{images.map((item, i) => {
							return <span onClick={() => setActiveIndex(i)} className={`${activeIndex === i ? 'w-14 h-14' : 'h-10 w-10'} cursor-pointer`}>
								<BsDot className="w-full h-full" /></span>
						})}
					</div>
				</div>
			</div>

		</div>
	)
}


const PCard = ({ images, className, name, i }) => {
	const history = useHistory();
	const [showOverlay, setShowOverlay] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(1);

	const Imageprev = (i) => {
		setSelectedIndex(i)
		setShowOverlay(true);
	}

	// useEffect(() => {
	// }, [selectedIndex]);

	return (
		<>
			<div className={`${className} cursor-pointer transform hover:scale-105 transition-transform`}>
				<div className="images">
					<img src={images[0]} className="image-1  cursor-pointer transform hover:shadow-2xl" onClick={() => Imageprev(0)} />
					<img src={images[1]} className="image-2 cursor-pointer transform hover:shadow-2xl" onClick={() => Imageprev(1)} />
					<img src={images[2]} className="image-2 cursor-pointer transform hover:shadow-2xl" onClick={() => Imageprev(2)} />
				</div>
				<div className="des">
					<h1 className="uppercase">{name}</h1>
					<img src={UNION} className="cursor-pointer" onClick={() => history.push('/portfolio', { state: { name, index: i } })} />
				</div>

			</div>
			{showOverlay && <OverLay showOverlay={showOverlay} setShowOverlay={setShowOverlay} images={images} index={selectedIndex} />}
		</>
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
			<h2 className="text-2xl font-semibold">PORTFOLIO</h2>
			<div className="portfolio-items">
				{data.map((item, i) =>
					(i % 2 == 0) ?
						<PCard images={item.images} name={item.title} i={i} className="portfolio-item" />
						:
						<PCard images={item.images} name={item.title} i={i} className="portfolio-item reverse" />
				)}
			</div>
			<Link to="/portfolio">
				<button className="bg-white font-bold font-Josefin border-none outline-none my-5 px-8 py-4 md:px-16 md:py-6 
				rounded-full tracking-widest text-sm cursor-pointer shadow-lg text-primary transform transition-transform hover:scale-110">
					<span className="uppercase text-xs font-bolder">View ALl</span>
				</button>
			</Link>

		</div>
	)
}

export default Portfolio
