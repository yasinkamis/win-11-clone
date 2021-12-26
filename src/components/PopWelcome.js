import React from 'react'
import Hello from "../assets/popup/hello.png"

const PopWelcome = () => {
    return (
        <div className='welcome'>
            <img src={Hello} alt="hello"/>
            <h2>Window 11 Klonuna Hoş Geldin</h2>
            <h4>Şuan belli uygulamaların klonu olsa da zaman içinde artacak. Takipte kal !!!</h4>
            <h6>"BU POP UP I TEKRAR GÖRMEK İÇİN F5 TUŞUNA TIKLAMAN GEREK"</h6>
            <h6>"Giriş yapma kısmı için localstorage'da ki logini silmelisiniz"</h6>
        </div>
    )
}

export default PopWelcome
