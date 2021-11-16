import React from 'react';
import '../styles/phoneNumberInput.css'

import PhoneInput from 'react-phone-input-2';




const PhoneNumberInput = ({ value, setValue, setPhoneCount, containerStyle, disabled }) => {
    return (
        <PhoneInput
            countryCodeEditable={false}
            country={"in"}
            value={value}
            onChange={(value) => {
                { setValue && setValue(value) }
            }}
            isValid={function (value, info) {
                let count = info.format.split(".").length - 1;
                { setPhoneCount && setPhoneCount(count) };
            }}
            containerStyle={containerStyle ? containerStyle : null}
            inputStyle={{backgroundColor: "#222222", outline: 'none'}}
            dropdownStyle={{backgroundColor: '#1a1a1a', color: 'white'}}
            disabled={disabled && disabled}
            specialLabel={""}
        />

    )
}

export default PhoneNumberInput;