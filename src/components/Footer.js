import React from 'react'
import '../styles/footer.css'
import logo from '../assets/flex-logo.png'
import { FLEX_LOGO2X } from '../assets'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillBehanceSquare } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className="w-full pt-16 bg-primary flex flex-col items-center justify-center px-5 py-10" style={{ boxShadow: 'black 0px -1px 20px 4px' }}>
            <div className="w-28 cursor-pointer">
                <img src={FLEX_LOGO2X} alt="" />
            </div>
            <div className="footer-social-icons connect-i">
                <a href="https://www.facebook.com/flexxited/" target="_blank"><AiFillFacebook className="my-2 mx-5 text-3xl last:mr-0 transform transition-transform hover:scale-105 " /></a>
                <a href="https://www.instagram.com/flexxited/" target="_blank"><AiFillInstagram className="my-2 mx-5 text-3xl last:mr-0 transform transition-transform hover:scale-105 " /></a>
                <a href="https://www.behance.net/flexxitbydixit" target="_blank"><AiFillBehanceSquare className="my-2 mx-5 text-3xl last:mr-0 transform transition-transform hover:scale-105 " /></a>
                <a href="https://twitter.com/flexxited" target="_blank"><AiFillTwitterSquare className="my-2 mx-5 text-3xl last:mr-0 transform transition-transform hover:scale-105" /></a>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center my-5">
                <p className="my-2 md:my-0 md:mr-10 font-semibold hover-underline-animation"><a href="https://wa.me/919008358030" target="_blank">+91 90083 58030</a></p>
                <p className="my-2 md:my-0 md:mr-10 font-semibold hover-underline-animation"><a href="mailto:info@flexxited.com">contact@flexxited.com</a></p>
                <p className="my-2 md:my-0 md:mr-10 font-semibold hover-underline-animation"><a href="https://www.instagram.com/flexxited/">@flexxited</a></p>

            </div>
            <div className="w-full mt-3 md:mt-20 flex justify-center items-center">
                <p className="w-full md:w-auto cursor-pointer text-center md:mr-8 font-medium underline text-gray-400 hover:text-gray-200 ">Terms of Service</p>
                <p className="w-full md:w-auto cursor-pointer text-center md:mr-8 font-medium underline text-gray-400 hover:text-gray-200">Privacy Policies</p>
            </div>
        </div>
    )
}

export default Footer
