import React, { useEffect, useState } from 'react'
import logo from '../assets/flex-logo.png'
import { IoMdClose } from 'react-icons/io'
import CircleItems from '../components/CircleItems'
import circle from '../assets/circle.png'
import app from '../assets/app.png'
import progressive from '../assets/progressive.png'
import website from '../assets/website.png'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'


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

	const itemWidth = 450;
	const [currentItem, setCurrentItem] = useState(data[1]);
	const [currentIndex, setCurrentIndex] = useState(activeIndex)
	const lengths = data.length

	useEffect(() => {
		let x = data[currentIndex];
		setCurrentItem(x);
	}, [currentIndex]);


	const preSlide = () => {
		setCurrentIndex(currentIndex === 0 ? lengths - 1 : currentIndex - 1)
	}

	const nextSlide = () => {
		console.log(currentIndex, lengths)
		setCurrentIndex(currentIndex === lengths - 1 ? 0 : currentIndex + 1)
	}

	return (
		<div className="design">
			<div className="w-full px-8 py-5 md:px-24 md:p-9 bg-transparent flex items-center justify-between top-0 left-0 z-40">
				<div className="w-24 cursor-pointer">
					<img src={logo} alt="" />
				</div>
				<div className="flex items-center justify-center cursor-pointer">
					<Link to="/home">
						<IoMdClose className="text-4xl" />
					</Link>
				</div>
			</div>
			<div className="desgin-view">
				<h1 className="text-4xl font-bold">Development</h1>
				<div className="flex flex-col">

					{
						<div className="mx-auto w-4/5 mb-12 flex flex-col items-center overflow-hidden">
							<div className="flex flex-col items-center justify-center overflow-hidden">
								<div className="relative w-full m-0 grid grid-rows-1 auto-cols-max grid-flow-col px-16 transition-all overflow-hidden"
									style={{ left: `-${currentIndex * itemWidth + 64}px`, transform: 'translate(35%, 0px)', height: `${itemWidth}px` }}>
									{data.map((item, i) =>
										<div className="flex flex-col items-center justify-center" style={{ width: `${itemWidth}px` }}>
											<img className={`${currentIndex === i ? 'w-full' : 'w-72 opacity-75'} object-contain`} src={item.img} style={{ boxShadow: '20px 19px 20px 4px #0000009E' }} />
											<h1 className="text-xl font-Josefin mt-10 uppercase text-center">{item.text}</h1>
										</div>
									)
									}
								</div>
								<div className="flex w-full md:w-72 justify-between items-center">
									<div className="" onClick={preSlide}>
										<FaLongArrowAltLeft className="text-gray-700 text-7xl md:text-9xl" />
									</div>
									<div onClick={nextSlide} className="">
										<FaLongArrowAltRight className="text-gray-700 text-7xl md:text-9xl" />
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
							<Link to="/connect"><button className="bg-white font-bold font-Josefin border-none outline-none my-5 px-8 py-4 md:px-12 md:py-6 rounded-full tracking-widest text-sm cursor-pointer shadow-lg text-primary">Get in touch</button></Link>
							<div className="footer-social-icons connect-i">
								<AiFillFacebook className="icon" />
								<AiFillInstagram className="icon" />
								<AiFillTwitterSquare className="icon" />
							</div>
						</div>
					</div>
				</div>
			</div>

		</div >
	)
}

export default Development
