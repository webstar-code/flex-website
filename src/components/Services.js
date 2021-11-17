import React from 'react'
import development from '../assets/development.png'
import design from '../assets/design.png'
import { Link } from 'react-router-dom'
const Services = () => {
    return (
        <div className="services">
            <h2 className="text-2xl font-semibold">SERVICES</h2>
            <div className="services-card">
                <Link to="/design" className="card  hover:scale-110 transition-all transform"><div className="card-2">
                    <div className="card-img">
                        <img src={design} alt="" />
                    </div>
                    <div className="card-text">
                        <h3  className="text-base font-semibold">DESIGN</h3>
                    </div>
                </div></Link>
                <Link to="/development" className="card hover:scale-110 transition-all transform"><div className="card-2">

                    <div className="card-img">
                        <img src={development} alt="" />
                    </div>
                    <div className="card-text">
                        <h3 className="text-base font-semibold">DEVELOPMENT</h3>
                    </div>

                </div></Link>
            </div>
        </div>
    )
}

export default Services
