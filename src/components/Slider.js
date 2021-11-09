import React, { useState } from 'react'
import { data } from './SliderData'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { FaLongArrowAltLeft } from 'react-icons/fa'
const Slider = ({ index }) => {

  const [current, setCurrent] = useState(index)
  const lengths = data.length

  const preSlide = () => {
    setCurrent(current === 0 ? lengths - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === lengths - 1 ? 0 : current + 1)
  }
  return (
    <div className="slider-container">
      <div className="i-con left " onClick={preSlide}>
        <FaLongArrowAltLeft className="arrow-icon" />
      </div>
      {
        data.map((itm, i) => (
          <div key={i} className={`img-slider ${i === current ? 'active' : ''}`}>
            {
              i === current && (
                <>
                  <img src={itm.image} alt="" className={`${itm.image2 && 'img-1'}`} />
                  {itm.image2 && <img src={itm?.image2} alt="" className={`${itm.image2 && 'img-2'}`} />}
                  <h1 className="silder-title">{itm.title}</h1>
                </>
              )
            }

          </div>
        ))
      }
      <div onClick={nextSlide} className="i-con">
        <FaLongArrowAltRight className="arrow-icon right" />
      </div>
    </div>
  )
}

export default Slider
