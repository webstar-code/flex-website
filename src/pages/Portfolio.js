import React from 'react'
import logo from '../assets/flex-logo.png'
import '../styles/portfolio.css'
import Slider from '../components/Slider'
import { IoMdClose } from 'react-icons/io'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { data } from '../components/SliderData'
import CloseHeader from '../components/CloseHeader'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillBehanceSquare } from 'react-icons/ai'



const Portfolio = ({ index }) => {
    const location = useLocation();
    const history = useHistory();
    const state = location.state

    return (
        <div className="w-full h-full overflow-hidden bg-primary">
            <CloseHeader />
            {state ?
                <Slider data={data} index={state.state.index} />
                :
                <Slider data={data} index={0} />
            }
            <div className="w-11/12 mx-auto md:w-full flex items-center justify-center px-8 py-2">
                <div className="w-full flex flex-col justify-center items-center text-center text-lg">
                    <p className="w-full md:w-3/5 text-lg leading-normal text-center px-5 py-5">
                        We are committed to building robust and scalable designs and applications that create efficient business processes and adds value to our client's businesses.
                    </p>
                    <Link to="/connect"><button className="transform transition-all hover:scale-105 bg-white font-bold font-Josefin border-none outline-none my-5 px-8 py-4 md:px-12 md:py-6 rounded-full tracking-widest text-sm cursor-pointer shadow-lg text-primary">Get in touch</button></Link>
                    <div className="footer-social-icons connect-i">
                        <a href="https://www.facebook.com/flexxited/" target="_blank"><AiFillFacebook className="my-2 mx-5 text-3xl last:mr-0 transform transition-transform hover:scale-105 " /></a>
                        <a href="https://www.instagram.com/flexxited/" target="_blank"><AiFillInstagram className="my-2 mx-5 text-3xl last:mr-0 transform transition-transform hover:scale-105 " /></a>
                        <a href="https://www.behance.net/flexxitbydixit" target="_blank"><AiFillBehanceSquare className="my-2 mx-5 text-3xl last:mr-0 transform transition-transform hover:scale-105 " /></a>
                        <a href="https://twitter.com/flexxited" target="_blank"><AiFillTwitterSquare className="my-2 mx-5 text-3xl last:mr-0 transform transition-transform hover:scale-105" /></a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Portfolio
