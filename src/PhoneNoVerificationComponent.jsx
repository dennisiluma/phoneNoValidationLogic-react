import React, { useState } from 'react'

const PhoneNoVerificationComponent = () => {
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');

    const noRegex = /^[+]?[0-9]*(?:[0-9]*)$/; //Regular Expression to check if inpute is a number
    let internationalNoFormat;

/**run when user type in inpute to the phone number field */
    function handlePhoneNoInputeField(phoneNoInpute) {
        if (noRegex.test(phoneNoInpute)) {
            setPhoneNo(phoneNoInpute); //if it is valid, save it to the phoneNo variable defined using setState hook
        }
    }
    /**handles when the submit button is clicked */
    function handleSubmit(e){
        e.preventDefault();
        if(phoneNo.startsWith('+') && phoneNo.length === 14){
            internationalNoFormat = phoneNo;

        }else if(phoneNo.startsWith('0') && phoneNo.length === 11){
            internationalNoFormat = `+234${phoneNo.substring(1)}`
        } else if(!phoneNo.startsWith('0') && phoneNo.length === 10){
            internationalNoFormat = `+234${phoneNo}`;
        }else{
            alert("Invalid Phone No");
        }
        if(internationalNoFormat.length > 0){
            alert(internationalNoFormat);
        }
    }

    return (
        <div className='container'>
            <h1>Phone Number Verification Demo</h1>
            <form action="">
                <input type="text" value={name} placeholder='Enter Name' />
                <input maxLength={'15'} onChange={e => handlePhoneNoInputeField(e.target.value)} value={phoneNo} type="tel" placeholder='Enter Phone No' />
                <input onClick={e=>handleSubmit(e)} type="button" value="Submit" />
            </form>
        </div>
    )
}

export default PhoneNoVerificationComponent