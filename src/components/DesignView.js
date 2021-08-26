import React,{useState} from 'react'
import circle from '../assets/circle.png'
import logoDesign from '../assets/logodesign.png'
import socailMedia from '../assets/socail-media.png'
import brandGuide from '../assets/brandguide.png'
import app from '../assets/app.png'
import progressive from '../assets/progressive.png'
import CircleItems from './CircleItems'
import { Link } from 'react-router-dom'
import {AiFillFacebook,AiFillInstagram,AiFillTwitterSquare} from 'react-icons/ai'

import website from '../assets/website.png'
const DesignView = () => {
  const [graphic,setGraphic]=useState(true)
  const [uiux,setUiUx]=useState(false)

  const handleGraphic=()=>{
   setGraphic(true)
   setUiUx(false)
  }
const handleUIUX=()=>{
setUiUx(true)
setGraphic(false)
}
    return (
        <div className="desgin-view">
            <div className="design-tiles">
                <h1 onClick={handleGraphic} className={`${graphic&&'active'}`}>Graphic Design</h1>
                <h1 onClick={handleUIUX} className={`${uiux&&'active'}`}>UI/UX Design</h1>
            </div>
            <div className="active-design-area">
              <div className={`line ${graphic&&'active'}`}></div>
              <div className={`line ${uiux&&'active'}`}></div>
            </div>
            <div className="circle-view">
                <img src={circle} alt="" />
                 { 
                 graphic?(
                 <><CircleItems className="logo-design" img={logoDesign} text="LOGO DESIGN"/>
                  <CircleItems className="socail-design" img={socailMedia} text="LOGO DESIGN"/>
                  <CircleItems className="brand-design" img={brandGuide} text="SOCIAL MEDIA BRANDING"/>
                  </>
                 ):(
                   <>
                   <CircleItems className="logo-design website" img={website} text="WEBSITE DESIGN"/>
                  <CircleItems className="progresive-desig" img={progressive} text="PROGRESSIVE WEB APPS"/>
                  <CircleItems className="brand-design" img={app} text="APP DESIGN"/>
                   </>
                 )}
                 <div className="connect-area">
                   <div className="connect-container">
                   <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</p>
                   <Link to="/connect"><button>GET IN TOUCH</button></Link>
                   <div className="footer-social-icons connect-i">
                      <AiFillFacebook className="icon"/>
                      <AiFillInstagram className="icon"/>
                      <AiFillTwitterSquare className="icon"/>
                  </div>
                  </div>
                 </div>
            </div>
        </div>
    )
}

export default DesignView
