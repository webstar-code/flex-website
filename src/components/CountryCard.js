import React from 'react'

const CountryCard = ({country, flag}) => {
    return (
        <div className="country-card">
            <img src={flag} />
            <h3 className="text-2xl font-black">{country}</h3>
        </div>
    )
}

export default CountryCard
