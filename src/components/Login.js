import React, { useEffect, useState } from 'react'
import Background from "../assets/login/background.png"
import Profile from "../assets/login/profile.png"

const Login = () => {
    const password = "851239";
    const [login, setLogin] = useState(null)
    const inputControl = (e) => {
        setLogin(e.target.value);
    }
    (login === password) && localStorage.setItem("login", true);
    return (
        <div className={`container-fluid login ${(localStorage.getItem('login')) && "close"}`}>
            <img src={Background} alt="background" className='background' />
            <div className='login_form-box'>
                <img src={Profile} alt="user" />
                <h5>Hoş geldin Baran Kaynak</h5>
                <input type="password" maxLength={6} placeholder='******' onChange={(event) => { inputControl(event) }} />
                <p>6 Haneli kodu giriniz.</p>
                <p>{`"${password}"`}</p>
            </div>
        </div>
    )
}

export default Login
