import React, { useEffect, useState } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { BsDot } from 'react-icons/bs'
import { UNION } from '../assets'
const Slider = ({ data, index = 0 }) => {
  
  let itemWidth;
  const { innerWidth, innerHeight } = window;
  if (innerWidth > 768) {
    itemWidth = 450;
  } else if (innerWidth > 428) {
    itemWidth = 400;
  } else {
    itemWidth = 330;
  }

  const [currentItem, setCurrentItem] = useState(data[index]);
  const [currentIndex, setCurrentIndex] = useState(index)
  const lengths = data.length
  const [activeIndex, setActiveIndex] = useState(Math.round(currentItem.images.length / 2 - 1));

  useEffect(() => {
    let x = data[currentIndex];
    setCurrentItem(x);
    setActiveIndex(Math.round(currentItem.images.length / 2 - 1));
  }, [currentIndex]);




  const preSlide = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const nextSlide = () => {
    if (currentIndex + 1 < lengths) {
      setCurrentIndex(currentIndex + 1)
    }
  }
  // useEffect(() => {
  //   console.log("changed");
  //   setCurrentItem(data[currentIndex]);
  //   setActiveIndex(currentItem.images.length / 2 - 1);
  // }, [currentIndex])


  return (
    <div className="mt-28 mx-auto w-4/5 h-full flex flex-col items-center overflow-hidden mb-28">
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <h1 className="w-96 text-center md:w-full text-4xl font-semibold mb-7 leading-normal tracking-widest uppercase whitespace-pre-wrap">{currentItem.title}</h1>
        <div className="relative w-full m-0 grid grid-rows-1 auto-cols-max grid-flow-col px-16 transition-all overflow-hidden"
          style={{ left: `-${activeIndex * itemWidth + 64}px`, transform: 'translate(35%, 0px)', height: `${itemWidth}px` }}>
          {currentItem.images.map((image, i) =>
            <div className="flex items-center justify-center" style={{ width: `${itemWidth}px` }}>
              <img className={`${activeIndex === i ? 'w-full' : 'w-72 opacity-75'} object-contain`} src={image} style={{ boxShadow: ' 8px 4px 20px 4px #0000009E' }} />
            </div>
          )}
        </div>
        <div className="flex justify-center items-center">
          {currentItem.images.map((item, i) => {
            return <span onClick={() => setActiveIndex(i)} className={`${activeIndex === i ? 'w-14 h-14' : 'h-10 w-10'} cursor-pointer`}>
              <BsDot className="w-full h-full select-none" style={{ WebkitUserSelect: "" }} /></span>
          })}
        </div>
      </div>
      <div className="flex w-full md:w-72 justify-between items-center">
        <div className="" onClick={preSlide}>
          <img src={UNION} className={`cursor-pointer w-full h-full transform rotate-180 ${currentIndex - 1 < 0 ? 'opacity-50' : 'opacity-100 hover:scale-110'} `} />

        </div>
        <div onClick={nextSlide} className="">
          <img src={UNION} className={`cursor-pointer w-full h-full transform ${currentIndex + 1 >= lengths ? 'opacity-50' : 'opacity-100 hover:scale-110'} `} />

        </div>
      </div>
    </div>
  )
}

export default Slider
