import React from 'react'

const CountryCard = ({country, flag}) => {
    return (
        <div className="country-card">
            <img src={flag} />
            <h3>{country}</h3>
        </div>
    )
}

export default CountryCard
