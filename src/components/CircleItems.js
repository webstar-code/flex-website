import React from 'react'

const CircleItems = ({className,img,text}) => {
    return (
        <div className={className}>
            <img src={img} className="logo-design-img" alt="" />
            <h3>{text}</h3>
        </div>
    )
}

export default CircleItems
