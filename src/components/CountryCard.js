import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const CountryCard = ({ country, flag }) => {
    const item = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        // gsap.to(".country-card", {
        //     scrollTrigger: {
        //         trigger: ".country-card",
        //         start: "top top",
        //         end: "bottom top",
        //         markers: true,
        //         scrub: true,
        //     },

        //     rotation: 270,
        //     duration: 3
        // })

        // gsap.from(item.current, {
        //     scale: 0,
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: item.current,
        //         start: "center center",
        //         scrub: true,
        //         markers: true,
        //         toggleActions: "restart pause none pause"
        //     },
        // });
    }, []);
    return (
        <div className="country-card" ref={item}>
            <img src={flag} />
            <h3 className="text-base font-black">{country}</h3>
        </div>
    )
}

export default CountryCard
