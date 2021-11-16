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
import { FaLongArrowAltRight } from 'react-icons/fa'
import { FaLongArrowAltLeft } from 'react-icons/fa'

import website from '../assets/website.png'
import Slider from './Slider'
import { UNION } from '../assets'

const graphicsData = [
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

const UxData = [
  {
    img: website,
    text: "Website Design"
  },
  {
    img: progressive,
    text: "progressive web apps"
  },
  {
    img: app,
    text: "app design"
  }
]

const DesignView = () => {
  const itemRef = useRef(null);
  const [graphic, setGraphic] = useState(true)
  const [uiux, setUiUx] = useState(false)
  const [activeIndex, setActiveIndex] = useState(Math.round(graphicsData.length / 2 - 1));

  const [activeItem, setActiveItem] = useState(graphicsData[activeIndex]);

  const itemWidth = 400;
  const [currentItem, setCurrentItem] = useState(graphicsData[1]);
  const [currentIndex, setCurrentIndex] = useState(activeIndex)
  const lengths = graphicsData.length

  useEffect(() => {
    let x = graphicsData[currentIndex];
    setCurrentItem(x);
  }, [currentIndex]);


  const preSlide = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const nextSlide = () => {
    console.log(currentIndex, lengths);
    if (currentIndex + 1 < lengths) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handleGraphic = () => {
    setGraphic(true)
    setUiUx(false)
  }
  const handleUIUX = () => {
    setUiUx(true)
    setGraphic(false)
  }


  return (
    <div className="desgin-view">
      <div className="flex items-center justify-center">
        <h1 onClick={handleGraphic} className={`${graphic && 'text-3xl transition-all'} text-base md:text-2xl transition-all cursor-pointer mr-2`}>Graphic Design</h1>
        <h1 onClick={handleUIUX} className={`${uiux && 'text-3xl transition-all'} text-base md:text-2xl transition-all cursor-pointer`}>UI/UX Design</h1>
      </div>
      <div className="active-design-area">
        <div className={`line ${graphic && 'active'}`}></div>
        <div className={`line ${uiux && 'active'}`}></div>
      </div>
      {/* <div className="circle-view"> */}
      <div className="flex flex-col">

        {
          <div className="mx-auto w-4/5 mb-12 flex flex-col items-center overflow-hidden">
            <div className="flex flex-col items-center justify-center overflow-hidden">
              <div className="relative w-full m-0 grid grid-rows-1 auto-cols-max grid-flow-col px-16 transition-all overflow-hidden"
                style={{ left: `-${currentIndex * itemWidth + 64}px`, transform: 'translate(35%, 0px)', height: `${itemWidth}px` }}>
                {graphic ?
                  graphicsData.map((item, i) =>
                    <div className="flex flex-col items-center justify-center" style={{ width: `${itemWidth}px` }}>
                      <img className={`${currentIndex === i ? 'w-full' : 'w-72 opacity-75'} object-contain`} src={item.img} style={{ boxShadow: '20px 19px 20px 4px #0000009E' }} />
                      <h1 className="text-2xl font-Josefin mt-10 uppercase">{item.text}</h1>
                    </div>
                  )
                  :
                  UxData.map((item, i) => (
                    <div className="flex flex-col items-center justify-center" style={{ width: `${itemWidth}px` }}>
                      <img className={`${currentIndex === i ? 'w-full' : 'w-72 opacity-75'} object-contain`} src={item.img} style={{ boxShadow: '20px 19px 20px 4px #0000009E' }} />
                      <h1 className="text-xl font-Josefin mt-10 uppercase">{item.text}</h1>
                    </div>
                  ))
                }
              </div>
              <div className="flex w-80 md:w-72 mt-9 justify-between items-center">
                <div className="" onClick={preSlide}>
                  <img src={UNION} className={`cursor-pointer w-full h-full transform rotate-180 ${currentIndex - 1 < 0 ? 'opacity-50' : 'opacity-100 hover:scale-110'} `} />
                </div>
                <div onClick={nextSlide} className="">
                  <img src={UNION} className={`cursor-pointer w-full h-full transform ${currentIndex + 1 >= lengths ? 'opacity-50' : 'opacity-100 hover:scale-110'} `} />
                </div>
              </div>
            </div>
          </div>

        }
        <div className="w-11/12 mx-auto md:w-full flex items-center justify-center px-8 py-2">
          <div className="connect-container">
            <p className="w-full md:w-11/12 text-lg leading-normal text-center px-5 py-5">
              We are committed to building robust and scalable designs and applications that create efficient business processes and adds value to our client's businesses.
            </p>
            <Link to="/connect"><button className="bg-white font-bold font-Josefin border-none outline-none my-5 px-8 py-4 md:px-12 md:py-6 rounded-full tracking-widest text-sm cursor-pointer shadow-lg text-primary">Get in touch</button></Link>
            <div className="footer-social-icons connect-i">
              <AiFillFacebook className="icon" />
              <AiFillInstagram className="icon" />
              <AiFillTwitterSquare className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignView


// import React, { useState, useEffect, useRef } from 'react'
// import circle from '../assets/circle.png'
// import logoDesign from '../assets/logodesign.png'
// import socailMedia from '../assets/socail-media.png'
// import brandGuide from '../assets/brandguide.png'
// import app from '../assets/app.png'
// import progressive from '../assets/progressive.png'
// import CircleItems from './CircleItems'
// import { Link } from 'react-router-dom'
// import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'

// import website from '../assets/website.png'
// import Slider from './Slider'

// const data = [
//   {
//     img: logoDesign,
//     text: "Website Design"
//   },
//   {
//     img: socailMedia,
//     text: "socials ites"
//   },
//   {
//     img: brandGuide,
//     text: "Brand Design"
//   }
// ]

// const DesignView = () => {
//   const itemRef = useRef(null);
//   const [graphic, setGraphic] = useState(true)
//   const [uiux, setUiUx] = useState(false)
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [activeItem, setActiveItem] = useState(data[activeIndex]);
//   const handleGraphic = () => {
//     setGraphic(true)
//     setUiUx(false)
//   }
//   const handleUIUX = () => {
//     setUiUx(true)
//     setGraphic(false)
//   }


//   // var htmlCollection = document.getElementsByClassName('item');
//   // //getting elements by class name into an HTMLCollection
//   // var itemsId = Array.from(htmlCollection);
//   // //turning the HTMLcollection into an array for easier manipulation of the elements

//   // var sectionDeg = 360 / itemsId.length;
//   // //sectioning the (imaginary) circle into a number of section equalling the number of items
//   // //it can be used on more elements

//   // var radianSectionDeg = sectionDeg * Math.PI * 2 / 360;
//   // //transforming from degrees into radians

//   // var radiusLength = 500;
//   // //the distance between the center of the circle to the element
//   // //edit this number to increase/decrease that distance

//   // for (var i = 0; i < itemsId.length; i++) {
//   //   itemsId[i].style.top = radiusLength * Math.sin(radianSectionDeg * i - 1.5708) / 2 + 'px';
//   //   itemsId[i].style.left = radiusLength * Math.cos(radianSectionDeg * i - 1.5708) + 'px';
//   // }
//   useEffect(() => {
//     var radius = 100;
// TweenMax.staggerFromTo('rect',4,{
//   cycle: {
//     attr:function(i) {
//       var r = i*90;
//       return {
//         transform:'rotate('+r+') translate('+radius+',0) rotate('+(-r)+')'
//       }      
//     }
//   }  
// },{
//   cycle: {
//     attr:function(i) {
//       var r = i*90+360;
//       return {
//         transform:'rotate('+r+') translate('+radius+',0) rotate('+(-r)+')'
//       }      
//     }
//   },
//   ease:Linear.easeNone,
//   repeat:-1
// });


//   }, []);

//   function makeATurn() {
//     for (var i = 0; i < itemsId.length; i++) {
//       itemsId[i].style.top = radiusLength * Math.sin(radianSectionDeg * i - 1.5708) / 2 + 'px';
//       itemsId[i].style.left = radiusLength * Math.cos(radianSectionDeg * i - 1.5708) + 'px';
//     }
//   }
//   //function used to set the new position of the elements

//   function turnRight() {
//     var holder = itemsId.pop();
//     itemsId.unshift(holder);
//     makeATurn();
//   }

//   function turnLeft() {
//     var holder = itemsId.shift();
//     itemsId.push(holder);
//     makeATurn();
//   }

//   return (
//     <div className="desgin-view">
//       <div className="design-tiles">
//         <h1 onClick={handleGraphic} className={`${graphic && 'active'}`}>Graphic Design</h1>
//         <h1 onClick={handleUIUX} className={`${uiux && 'active'}`}>UI/UX Design</h1>
//       </div>
//       <div className="active-design-area">
//         <div className={`line ${graphic && 'active'}`}></div>
//         <div className={`line ${uiux && 'active'}`}></div>
//       </div>
//       <div className="circle-view">
//         {
//           graphic ? (
//             <div className="main-wrapper h-">
//               <div id="center" class="wrapper">
//                 <div class="item" ref={itemRef}>
//                   <img src={data[0].img} />
//                 </div>
//                 <div class="item" ref={itemRef}>
//                   <img src={data[1].img} />
//                 </div>
//                 <div class="item" ref={itemRef}>
//                   <img src={data[2].img} />
//                 </div>       
//               </div>

//               <div class="controls selection-off">
//                 <div class="left selection-off" onClick={() => turnRight()}>L</div>
//                 <div class="right selection-off" onClick={() => turnLeft()}>R</div>
//               </div>
//             </div>

//           ) : (
//             <>
//               <CircleItems className="logo-design website" img={website} text="WEBSITE DESIGN" />
//               <CircleItems className="progresive-desig" img={progressive} text="PROGRESSIVE WEB APPS" />
//               <CircleItems className="brand-design" img={app} text="APP DESIGN" />
//             </>
//           )}
//         {/* <div className="connect-area">
//           <div className="connect-container">
//             <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</p>
//             <Link to="/connect"><button>GET IN TOUCH</button></Link>
//             <div className="footer-social-icons connect-i">
//               <AiFillFacebook className="icon" />
//               <AiFillInstagram className="icon" />
//               <AiFillTwitterSquare className="icon" />
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   )
// }

// export default DesignView
