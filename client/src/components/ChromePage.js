import React from 'react'
import Alt from "../assets/files/alt.png"
import Close from "../assets/files/çık.png"

const ChromePage = () => {
    return (
        <div className='container-fluid chromePage'>
            <div className='chromePage_upper'>
                <div className='chromePage_upper_alt'>
                    <img src={Alt} alt="_" />
                </div>
                <div className='chromePage_upper_close'>
                    <img src={Close} alt="X" />
                </div>
            </div>
           
        </div>
    )
}

export default ChromePage
