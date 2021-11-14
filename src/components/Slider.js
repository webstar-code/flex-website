import React, { useEffect, useState } from 'react'
import { data } from './SliderData'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { BsDot } from 'react-icons/bs'
const Slider = ({ index = 0 }) => {
  const itemWidth = 384;
  const [currentItem, setCurrentItem] = useState(data[index]);
  const [currentIndex, setCurrentIndex] = useState(index)
  const lengths = data.length

  useEffect(() => {
    let x = data[currentIndex];
    setCurrentItem(x);
  }, [currentIndex]);


  const preSlide = () => {
    setCurrentIndex(currentIndex === 0 ? lengths - 1 : currentIndex - 1)
  }

  const nextSlide = () => {
    setCurrentIndex(currentIndex === lengths - 1 ? 0 : currentIndex + 1)
  }

  const [activeIndex, setActiveIndex] = useState(Math.round(currentItem.images.length / 2 - 1));

  // useEffect(() => {
  //   console.log("changed");
  //   setCurrentItem(data[currentIndex]);
  //   setActiveIndex(currentItem.images.length / 2 - 1);
  // }, [currentIndex])


  return (
    <div className="mt-20 mx-auto w-4/5 h-screen flex flex-col items-center overflow-hidden">
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <h1 className="text-4xl font-semibold mb-7 leading-loose tracking-widest">{currentItem.title}</h1>
        <div className="relative w-full m-0 grid grid-rows-1 auto-cols-max grid-flow-col px-16 transition-all overflow-hidden"
          style={{ left: `-${activeIndex * itemWidth + 64}px`, transform: 'translate(35%, 0px)', height: `${itemWidth}px` }}>
          {currentItem.images.map((image, i) =>
            <div className="flex items-center justify-center" style={{ width: `${itemWidth}px` }}>
              <img className={`${activeIndex === i ? 'w-full' : 'w-72 opacity-75'} object-contain`} src={image} style={{ boxShadow: '20px 19px 20px 4px #0000009E' }} />
            </div>
          )}
        </div>
        <div className="flex justify-center items-center">
          {currentItem.images.map((item, i) => {
            return <span onClick={() => setActiveIndex(i)} className={`${activeIndex === i ? 'w-14 h-14' : 'h-10 w-10'} cursor-pointer`}>
              <BsDot className="w-full h-full" /></span>
          })}
        </div>
      </div>
      <div className="flex w-full md:w-72 justify-between items-center">
        <div className="" onClick={preSlide}>
          <FaLongArrowAltLeft className="text-gray-700 text-7xl md:text-9xl" />
        </div>
        <div onClick={nextSlide} className="">
          <FaLongArrowAltRight className="text-gray-700 text-7xl md:text-9xl" />
        </div>
      </div>
    </div>
  )
}

export default Slider
