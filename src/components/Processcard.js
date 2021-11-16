import React from 'react'

const Processcard = ({img,text}) => {
    return (
        <div className="process-card">
            <img src={img} alt="" />
            <h3 className="text-base font-semibold py-5">{text}</h3>
        </div>
    )
}

export default Processcard
