import React, { useState, useEffect, useRef } from 'react'
import circle from '../assets/circle.png'
import logoDesign from '../assets/logodesign.png'
import socailMedia from '../assets/socail-media.png'
import brandGuide from '../assets/brandguide.png'
import app from '../assets/app.png'
import progressive from '../assets/progressive.png'
import CircleItems from './CircleItems'
import { Link } from 'react-router-dom'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'

import website from '../assets/website.png'
import Slider from './Slider'

const data = [
  {
    img: logoDesign,
    text: "Website Design"
  },
  {
    img: socailMedia,
    text: "socials ites"
  },
  {
    img: brandGuide,
    text: "Brand Design"
  }
]

const DesignView = () => {
  const itemRef = useRef(null);
  const [graphic, setGraphic] = useState(true)
  const [uiux, setUiUx] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeItem, setActiveItem] = useState(data[activeIndex]);
  const handleGraphic = () => {
    setGraphic(true)
    setUiUx(false)
  }
  const handleUIUX = () => {
    setUiUx(true)
    setGraphic(false)
  }


  var htmlCollection = document.getElementsByClassName('item');
  //getting elements by class name into an HTMLCollection
  var itemsId = Array.from(htmlCollection);
  //turning the HTMLcollection into an array for easier manipulation of the elements

  var sectionDeg = 360 / itemsId.length;
  //sectioning the (imaginary) circle into a number of section equalling the number of items
  //it can be used on more elements

  var radianSectionDeg = sectionDeg * Math.PI * 2 / 360;
  //transforming from degrees into radians

  var radiusLength = 500;
  //the distance between the center of the circle to the element
  //edit this number to increase/decrease that distance

  for (var i = 0; i < itemsId.length; i++) {
    itemsId[i].style.top = radiusLength * Math.sin(radianSectionDeg * i - 1.5708) / 2 + 'px';
    itemsId[i].style.left = radiusLength * Math.cos(radianSectionDeg * i - 1.5708) + 'px';
  }
  useEffect(() => {




  }, []);

  function makeATurn() {
    for (var i = 0; i < itemsId.length; i++) {
      itemsId[i].style.top = radiusLength * Math.sin(radianSectionDeg * i - 1.5708) / 2 + 'px';
      itemsId[i].style.left = radiusLength * Math.cos(radianSectionDeg * i - 1.5708) + 'px';
    }
  }
  //function used to set the new position of the elements

  function turnRight() {
    var holder = itemsId.pop();
    itemsId.unshift(holder);
    makeATurn();
  }

  function turnLeft() {
    var holder = itemsId.shift();
    itemsId.push(holder);
    makeATurn();
  }

  return (
    <div className="desgin-view">
      <div className="design-tiles">
        <h1 onClick={handleGraphic} className={`${graphic && 'active'}`}>Graphic Design</h1>
        <h1 onClick={handleUIUX} className={`${uiux && 'active'}`}>UI/UX Design</h1>
      </div>
      <div className="active-design-area">
        <div className={`line ${graphic && 'active'}`}></div>
        <div className={`line ${uiux && 'active'}`}></div>
      </div>
      <div className="circle-view">
        {
          graphic ? (
            <div className="main-wrapper">
              <div id="center" class="wrapper">
                <div class="item" ref={itemRef}>
                  <img src={data[0].img} />
                </div>
                <div class="item">
                  <img src={data[1].img} />
                </div>
                <div class="item">
                  <img src={data[2].img} />
                </div>       
              </div>

              <div class="controls selection-off">
                <div class="left selection-off" onClick={() => turnRight()}>L</div>
                <div class="right selection-off" onClick={() => turnLeft()}>R</div>
              </div>
            </div>

          ) : (
            <>
              <CircleItems className="logo-design website" img={website} text="WEBSITE DESIGN" />
              <CircleItems className="progresive-desig" img={progressive} text="PROGRESSIVE WEB APPS" />
              <CircleItems className="brand-design" img={app} text="APP DESIGN" />
            </>
          )}
        {/* <div className="connect-area">
          <div className="connect-container">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</p>
            <Link to="/connect"><button>GET IN TOUCH</button></Link>
            <div className="footer-social-icons connect-i">
              <AiFillFacebook className="icon" />
              <AiFillInstagram className="icon" />
              <AiFillTwitterSquare className="icon" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default DesignView
