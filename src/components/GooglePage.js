import React from 'react'
import GoogleLogo from "../assets/chrome/googlelogo.png"

const GooglePage = () => {
    return (
        <div className='google'>
            <img src={GoogleLogo} alt="google"/>
            <input type="text" disabled value="Yukarıdaki URL kısmına 'www.instagram.com' linkini giriniz."/>
        </div>
    )
}

export default GooglePage
