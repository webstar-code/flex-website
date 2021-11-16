import React, { useState } from 'react'
import '../styles/connect.css'
import logo from '../assets/flex-logo.png'
import { IoMdClose } from 'react-icons/io'
import { AiFillBehanceSquare, AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'
import Header from '../components/Header'
import PhoneNumberInput from '../components/PhoneNumberInput'
const Connect = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneCount, setPhoneCount] = useState(0);
    const [isName, setIsName] = useState(true);
    const [isNum, setIsNum] = useState(true);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (name.length <= 2) {
            setIsName(false);
            return;
        } else {
            setIsName(true);
        }

        if (phoneNumber != phoneCount) {
            setIsNum(false);
        } else {
            setIsNum(true);
        }
    }


    return (
        <>
            <Header />
            <div className="w-full h-full flex flex-col items-center mt-24 justify-start bg-primary">
                <h1 className="text-5xl font-bold tracking-widest">Connect</h1>
                <div className="mt-5 w-3/6 p-12 flex items-center justify-center mb-7 bg-secondary shadow-2xl">
                    <form className="w-full h-full flex flex-col items-start justify-center" onClick={(e) => handleOnSubmit(e)}>
                        <input type="text" placeholder="Full Name" />
                        {!isName && <p className="text-xs text-red-500">Please enter a Name</p>}

                        <PhoneNumberInput value={phoneNumber} setValue={setPhoneNumber}
                            setPhoneCount={setPhoneCount} containerStyle={{}} />
                        {!isNum && <p className="text-xs text-red-500">Please enter a valid number</p>}

                        {/* <input type="text" placeholder="Phone Number" /> */}
                        <textarea name="msg" id="" cols="30" rows="10"
                            placeholder="Message"
                        ></textarea>
                        <button type="submit" className="bg-white mx-auto font-bold font-Josefin border-none outline-none my-5 px-8 py-4 md:px-16 md:py-6 
				rounded-full tracking-widest text-sm cursor-pointer shadow-lg text-primary transform transition-transform hover:scale-110">
                            <span className="uppercase text-xs font-bolder">send message</span>
                        </button>
                    </form>
                </div>
                <div className="flex items-center justify-center mt-2 mb-5">
                    <a href="https://www.facebook.com/flexxited/" target="_blank"><AiFillFacebook className="icon i-connect " /></a>
                    <a href="https://www.instagram.com/flexxited/" target="_blank"><AiFillInstagram className="icon i-connect" /></a>
                    <a href="https://www.behance.net/flexxitbydixit" target="_blank"><AiFillBehanceSquare className="icon i-connect " /></a>
                    <a href="https://twitter.com/flexxited" target="_blank"><AiFillTwitterSquare className="icon i-connect" /></a>
                </div>
            </div>
        </>
    )
}

export default Connect
