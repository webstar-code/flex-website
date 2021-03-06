import React, { useEffect, useState } from 'react'
import logo from '../assets/flex-logo.png'
import CircleItems from '../components/CircleItems'
import circle from '../assets/circle.png'
import app from '../assets/app.png'
import progressive from '../assets/progressive.png'
import website from '../assets/website.png'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillBehanceSquare } from 'react-icons/ai'
import CloseHeader from '../components/CloseHeader';
import { UNION } from '../assets'
import Carousel from '../components/Carousals'
import '../styles/carousal.css'
import Button from '../components/Button'

let data = [
	{
		img: website,
		text: "website design"
	},
	{
		img: progressive,
		text: "PROGRESSIVE WEB APP DEVELOPMENT"
	},
	{
		img: app,
		text: "MOBILE APP DESIGN"
	}
]

const Development = () => {
	const [activeIndex, setActiveIndex] = useState(Math.round(data.length / 2 - 1));

	const [activeItem, setActiveItem] = useState(data[activeIndex]);
	
	let itemWidth;
	const { innerWidth, innerHeight } = window;
	if (innerWidth > 768) {
		itemWidth = 450;
	} else if (innerWidth > 428) {
		itemWidth = 400;
	} else {
		itemWidth = 330;
	}

	const [currentItem, setCurrentItem] = useState(data[1]);
	const [currentIndex, setCurrentIndex] = useState(activeIndex)
	const lengths = data.length

	useEffect(() => {
		let x = data[currentIndex];
		setCurrentItem(x);
	}, [currentIndex]);


	const preSlide = () => {
		if (currentIndex - 1 >= 0) {
			setCurrentIndex(currentIndex - 1)
		}
	}

	const nextSlide = () => {
		console.log(currentIndex, lengths);
		if (currentIndex + 1 < lengths) {
			setCurrentIndex(currentIndex + 1)
		}
	}
	const setting = {
		dragSpeed: 1.25,
		itemWidth: itemWidth,
		itemHeight: 180,
		itemSideOffsets: 15,
	}
	const itemStyle = {
		width: `${setting.itemWidth}px`,
		height: `${setting.itemHeight}px`,
		margin: `0px ${setting.itemSideOffsets}px`
	}


	return (
		<div className="design">
			<CloseHeader />
			<div className="desgin-view">
				<h1 className="text-4xl font-bold">Development</h1>
				<div className="flex flex-col">

					{
						<div className="mx-auto w-4/5 mb-12 flex flex-col items-center overflow-hidden">
							<div className="flex flex-col items-center justify-center overflow-hidden">
								<div className="relative w-full m-0 grid grid-rows-1 auto-cols-max grid-flow-col px-16 transition-all overflow-hidden"
									style={{ left: `-${currentIndex * itemWidth + 64}px`, transform: 'translate(35%, 0px)', height: `${itemWidth}px`, margin: `0px ${itemWidth}px` }}>
									<Carousel _data={data} {...setting}>
										{data.map((item, i) =>
											<div className="flex flex-col items-center justify-center" style={{ width: `${itemWidth}px` }}>
												<img className={`${currentIndex === i ? 'w-full' : 'w-72 opacity-75'} object-contain`} src={item.img} style={{ boxShadow: '20px 19px 20px 4px #0000009E' }} />
												<h1 className="text-xl font-Josefin mt-10 uppercase text-center">{item.text}</h1>
											</div>
										)
										}
									</Carousel>
								</div>
								<div className="flex w-80 md:w-72 mt-9 justify-between items-center">
									<div className="" onClick={preSlide}>
										<img src={UNION} className={`cursor-pointer w-full h-full transform rotate-180 ${currentIndex - 1 < 0 ? 'opacity-50' : 'opacity-100 hover:scale-110'} `} />
									</div>
									<div onClick={nextSlide} className="">
										<img src={UNION} className={`cursor-pointer w-full h-full transform ${currentIndex + 1 >= lengths ? 'opacity-50' : 'opacity-100 hover:scale-110'} `} />
									</div>
								</div>
							</div>
						</div>

					}
					<div className="connect-area">
						<div className="connect-container">
							<p className="w-full md:w-11/12 text-lg leading-normal text-center px-5 py-5">
								We are committed to building robust and scalable designs and applications that create efficient business processes and adds value to our client's businesses.
							</p>
							<Button text="get in touch" path="/connect" />
							<div className="footer-social-icons connect-i">
								<a href="https://www.facebook.com/flexxited/" target="_blank"><AiFillFacebook className="my-2 mx-5 text-3xl last:mr-0 transform transition-transform hover:scale-105 " /></a>
								<a href="https://www.instagram.com/flexxited/" target="_blank"><AiFillInstagram className="my-2 mx-5 text-3xl last:mr-0 transform transition-transform hover:scale-105 " /></a>
								<a href="https://www.behance.net/flexxitbydixit" target="_blank"><AiFillBehanceSquare className="my-2 mx-5 text-3xl last:mr-0 transform transition-transform hover:scale-105 " /></a>
								<a href="https://twitter.com/flexxited" target="_blank"><AiFillTwitterSquare className="my-2 mx-5 text-3xl last:mr-0 transform transition-transform hover:scale-105" /></a>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div >
	)
}

export default Development
