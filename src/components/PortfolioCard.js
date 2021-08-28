import React from 'react'
import { useHistory } from 'react-router'
import {AiOutlineEye} from 'react-icons/ai'

const PortfolioCard = ({img,title,setIndex,num}) => {
    const history = useHistory()
    const pushToProtFolio=(num)=>{
      setIndex(num)
      history.push('/portfolio')
    }
    return (
        <div className="res-port-card" style={{background:`url(${img})`}}>
            <div className="title-container">
            <div className="res-portfolio-title">
                <h3>{title}</h3>
                <div className="eye" onClick={()=>pushToProtFolio(num)}>
                 <AiOutlineEye/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default PortfolioCard
