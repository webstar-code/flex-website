import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const CountryCard = ({ country, flag }) => {
    const item = useRef(null);

    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        // gsap.to(".country-card", {
        //     scrollTrigger: {
        //         trigger: ".country-card",
        //         start: "top top",
        //         markers: true,
        //         scrub: true,
        //     },

        //     rotation: 270,
        //     duration: 3
        // })

        // let x = gsap.from(".country-card", {
        //     scale: 0,
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: ".country-card",
        //         scrub: true,
        //         start: "top center",
        //         // end: "top center",
        //         markers: true,
        //     },
        // });
   
    }, []);
    return (
        <div className="country-card" ref={item}>
            <img src={flag} />
            <h3 className="text-base md:text-lg font-black">{country}</h3>
        </div>
    )
}

export default CountryCard
