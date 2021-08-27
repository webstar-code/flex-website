import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import Header from './Header'
import '../styles/mainpage.css'
import mockup from '../assets/mockup-2.png'
import mockup1 from '../assets/mockup-1.png'
import mockup3 from '../assets/mockup-3.png'
import {Link} from 'react-scroll'
import {AiFillFacebook,AiFillInstagram,AiFillTwitterSquare} from 'react-icons/ai'
import Services from './Services'
import Portfolio from './Portfolio'
import CountryCard from './CountryCard'
import Processcard from './Processcard'
import Footer from './Footer'
import idea from '../assets/idea.png'
import notes from '../assets/notes.png'
import creativity from '../assets/creativity.png'
import production from '../assets/production.png'
const MainPage = ({setIndex,index}) => {
    return (
        <>
            <Header/>
            <div className="socail-icons">
               <AiFillFacebook className="icon"/>
               <AiFillInstagram className="icon"/>
               <AiFillTwitterSquare className="icon"/>
            </div>
        <div className="main-page" data-aos="fade-up">
            <div className="banner-title">
               <h1>GET FLEXECUTED !</h1>
            </div>
            <Link className="link" to="business" smooth={true} duration={1000}><p>Scroll Down</p></Link>
        
        </div>
        <div className="opp">
            <div className="grid" id="business" data-aos="fade-up">
            <h1>A New World of Business Opportunities</h1>
                <div className="grid-area">
                    <div className="gird-item">
                        <div className="grid-img">
                             <img src={mockup} alt="" />
                        </div>
                        <div className="grid-text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                        </div>
                    </div>
                    <div className="gird-item">
                        <div className="grid-img">
                             <img src={mockup3} alt="" />
                        </div>
                        <div className="grid-text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                        </div>
                    </div>
                    <div className="gird-item">
                        <div className="grid-img">
                             <img src={mockup1} alt="" />
                        </div>
                        <div className="grid-text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Services/>
        {/* <Portfolio setIndex={setIndex} index={index}/> */}
        <div className="touch">
            <div className="touch-block">
                <h3>WHEN SUCCESS MATTERS</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</p>
                <RouterLink to="/connect"><button>GET IN TOUCH</button></RouterLink>
            </div>
        </div>
        <div className="clients">
                <h2>CLIENTS FROM</h2>
            <div className="client-area">
                <CountryCard country="India"/>
                <CountryCard country="USA"/>
                <CountryCard country="Australia"/>
                <CountryCard country="Canada"/>
                <CountryCard country="UAE"/>
                <CountryCard country="Nigeria"/>
                <CountryCard country="Albania"/>
                <CountryCard country="Macedonia"/>
                <CountryCard country="And more..."/>
            </div>
        </div>
        <div className="clients process">
        <h2>PROCESS</h2>
           <div className="client-area process">
              <Processcard img={idea} text="STRATEGY"/>
              <Processcard img={notes} text="CONCEPT"/>
              <Processcard img={creativity} text="DESIGN"/>
              <Processcard img={production} text="PRODUCTION"/>
           </div>
        </div>
        <Footer/>
        </>

        
    )
}

export default MainPage
