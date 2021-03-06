import React, { useEffect, useLayoutEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Header from './Header'
import '../styles/mainpage.css'
import mockup from '../assets/mockup-2.png'
import mockup1 from '../assets/mockup-1.png'
import mockup3 from '../assets/mockup-3.png'
import { ANA_MOCKUP, HUNGER_MOCKUP, HEALTHY_MOCKUP } from '../assets'
import { MACEDONIA, USA, NETHERLANDS, NIGERIA, UAE, INDIA, CANADA, ALBANIA, AUSTRALIA, } from '../assets'
import { Link } from 'react-scroll'
import { AiFillBehanceSquare, AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'
import Services from './Services'
import Portfolio from './Portfolio'
import CountryCard from './CountryCard'
import Processcard from './Processcard'
import Footer from './Footer'
import idea from '../assets/idea.png'
import notes from '../assets/notes.png'
import creativity from '../assets/creativity.png'
import production from '../assets/production.png'
import ResponsivePortfolio from './ResponsivePortfolio'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from './Button'
import { Timeline } from 'gsap/gsap-core'

const MainPage = ({ setIndex, index }) => {
	gsap.registerPlugin(ScrollTrigger);

	useLayoutEffect(() => {
		const box = '.country-card';
		const boxes = gsap.utils.toArray(box);
		boxes.forEach(box => {
			ScrollTrigger.refresh();
			gsap.from(box, {
				x: -100,
				scrollTrigger: {
					trigger: box,
					start: "20px 90%",
					end: "top 30%",
					scrub: true,
					toggleActions: "restart none none none",

					immediateRender: false
				}
			})
		})


		const process_card = '.process-card';
		const processes = gsap.utils.toArray(process_card);

		processes.forEach((p) => {
			ScrollTrigger.refresh();
			gsap.from(p, {
				scale: 0,
				scrollTrigger: {
					trigger: p,
					start: "20px 90%",
					end: "top 60%",
					scrub: true,
					toggleActions: "restart none none none",
					immediateRender: false
				}
			})
		})


		
		let x = gsap.timeline().from('.upper', { x: 800, duration: 0.25})
		.from('.lower', { x: -800, duration: 0.25}).restart();
		x.repeat(3)
	}, []);



	return (
		<>
			<Header />
			<div className="socail-icons">
				<a href="https://www.facebook.com/flexxited/" target="_blank"><AiFillFacebook className="icon transform transition-transform hover:scale-105" /></a>
				<a href="https://www.instagram.com/flexxited/" target="_blank"><AiFillInstagram className="icon transform transition-transform hover:scale-105" /></a>
				<a href="https://www.behance.net/flexxitbydixit" target="_blank"><AiFillBehanceSquare className="icon transform transition-transform hover:scale-105" /></a>
				<a href="https://twitter.com/flexxited" target="_blank"><AiFillTwitterSquare className="icon transform transition-transform hover:scale-105" /></a>
			</div>
			<div className="main-page" data-aos="fade-up">
				<div className="banner-title overflow-hidden">
					<div className="upper w-24 bg-primaryText absolute -left-24" style={{height: '1px'}}></div>
					<h1>GET FLEXECUTED</h1>
					<div className="lower w-24 bg-primaryText absolute  -right-24" style={{height: '1px', bottom: '1px'}}></div>
				</div>
				<Link className="link" to="business" smooth={true} duration={1000}><p>Scroll Down</p></Link>
			</div>

			<div className="opp">
				<div className="grid" id="business" data-aos="fade-up">
					<h1>A New World of Business Opportunities</h1>
					<div className="grid-area">
						<div className="gird-item">
							<div className="grid-img">
								<img src={HUNGER_MOCKUP} alt="" />
							</div>
							<div className="grid-text">
								<p>
									The 7 wonders are scattered all over the world but still considered as one when it comes to describing them. Similarly, the team of  <span className="flexxited-highlight">flexxited</span> are all around and very rarely work in the same workplace but still when we say Flexxited, it brings out the team work that hence we make it happen.
								</p>
							</div>
						</div>
						<div className="gird-item">
							<div className="grid-img">
								<img src={HEALTHY_MOCKUP} alt="" />
							</div>
							<div className="grid-text">
								<p>
									Every single monument in them has their own aura and significant characteristic features but are never segregated when they are referred together just like our team.
								</p>
							</div>
						</div>
						<div className="gird-item">
							<div className="grid-img comp">
								<img src={ANA_MOCKUP} alt="" />
							</div>
							<div className="grid-text">
								<p>
									<span className="flexxited-highlight">flexxited</span>'s growth is a result of its constant pursue of uninterrupted growth and a drive to manufacture new business opportunities. We see a world where intersection of data and technology will create infinite possibilities, and we strive to cash in on them most perfectly.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Services />
			<Portfolio setIndex={setIndex} index={index} />
			{/* <ResponsivePortfolio setIndex={setIndex} index={index} /> */}
			<div className="w-full flex items-center justify-center bg-primary pt-24 p-6 md:pt-48 md:p-24 ">
				<div className="bg-secondary md:mx-28 my-0 w-full md:w-9/12 flex flex-col items-center justify-center py-10 md:p-14 drop-shadow-2xl" style={{ boxShadow: '20px 20px 25px #0000009E' }}>
					<h3 className="text-base font-black md:text-2xl py-5 text-center">WHEN SUCCESS MATTERS</h3>
					<p className="w-full md:w-11/12 text-lg leading-normal text-center px-5 py-5">
						We are committed to building robust and scalable designs and applications that create efficient business processes and adds value to our client's businesses.
					</p>
					<Button text="Get in touch" path="/connect" />
				</div>
			</div>
			<div className="w-full flex flex-col items-center justify-center bg-primary pt-44">
				<h2 className="text-2xl font-semibold">CLIENTS FROM</h2>
				<div className="w-full md:w-4/5 flex items-center justify-center flex-wrap mt-20">
					<CountryCard country="India" flag={INDIA} />
					<CountryCard country="USA" flag={USA} />
					<CountryCard country="Australia" flag={AUSTRALIA} />
					<CountryCard country="Canada" flag={CANADA} />
					<CountryCard country="UAE" flag={UAE} />
					<CountryCard country="Nigeria" flag={NIGERIA} />
					<CountryCard country="Albania" flag={ALBANIA} />
					<CountryCard country="Macedonia" flag={MACEDONIA} />
					<CountryCard country="Netherland" flag={NETHERLANDS} />
					<CountryCard country="Singapore" flag={INDIA} />
					<CountryCard country="Germany" flag={INDIA} />
					<CountryCard country="Norway" flag={INDIA} />
				</div>
				<h2 className="text-2xl font-semibold mt-8">And More...</h2>

			</div>
			<div className="clients process">
				<h2 className="text-2xl font-semibold">PROCESS</h2>
				<div className="client-area process">
					<Processcard img={idea} text="STRATEGY" />
					<Processcard img={notes} text="CONCEPT" />
					<Processcard img={creativity} text="DESIGN" />
					<Processcard img={production} text="PRODUCTION" />
				</div>
			</div>

			{/* <ResponsivePortfolio setIndex={setIndex} index={index} /> */}
			<div className="w-full flex items-center justify-center bg-primary py-24 p-6 md:py-48 md:p-24 ">
				<div className="bg-secondary md:mx-28 my-0 w-full md:w-9/12 flex flex-col items-center justify-center py-10 md:p-14 drop-shadow-2xl" style={{ boxShadow: '20px 20px 25px #0000009E' }}>
					<h3 className="text-base font-black md:text-2xl py-5 text-center">ARE YOU READY TO START?</h3>
					<p className="w-full md:w-11/12 text-lg leading-normal text-center px-5 py-5">
						We are committed to building robust and scalable designs and applications that create efficient business processes and adds value to our client's businesses.
					</p>
					<Button text="Get in touch" path="/connect" />
				</div>
			</div>
			<Footer />
		</>


	)
}



export default MainPage
