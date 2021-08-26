import React from 'react'
import development from '../assets/development.png'
import design from '../assets/design.png'
import { Link } from 'react-router-dom'
const Services = () => {
    return (
        <div className="services">
           <h2>SERVICES</h2> 
           <div className="services-card">
           <Link to="/design" className="card"><div className="card-2">
                   <div className="card-img">
                        <img src={design} alt="" />
                   </div>
                   <div className="card-text">
                     <h3>DESIGN</h3>
                   </div>
               </div></Link>
               <Link to="/development" className="card"><div className="card-2">
                  
                   <div className="card-img">
                      <img src={development} alt="" />
                   </div>
                   <div className="card-text">
                   <h3>DEVELOPMENT</h3>
                   </div>
                   
               </div></Link>
           </div>
        </div>
    )
}

export default Services
