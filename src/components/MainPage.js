import React, { useEffect } from 'react'
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

const MainPage = ({ setIndex, index }) => {

	return (
		<>
			<Header />
			<div className="socail-icons">
				<AiFillFacebook className="icon" />
				<AiFillInstagram className="icon" />
				<AiFillBehanceSquare className="icon" />
				<AiFillTwitterSquare className="icon" />
			</div>
			<div className="main-page" data-aos="fade-up">
				<div className="banner-title">
					<h1>GET FLEXECUTED</h1>
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
					<RouterLink to="/connect"><button className="bg-white font-bold font-Josefin border-none outline-none my-5 px-8 py-4 md:px-12 md:py-6 rounded-full tracking-widest text-sm cursor-pointer shadow-lg text-primary">Get in touch</button></RouterLink>
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

			<div className="touch">
				<div className="touch-block">
					<h3>ARE YOU READY TO START?</h3>
					<p>
						We are committed to building robust and scalable designs and applications that create efficient business processes and adds value to our client's businesses.
					</p>
					<RouterLink to="/connect">
						<button className="bg-white border-none outline-none px-12 py-6 rounded-full font-extrabold tracking-wide cursor-pointer shadow-lg text-primary">
							Get in Touch
						</button>
					</RouterLink>
				</div>
			</div>
			<Footer />
		</>


	)
}

export default MainPage
