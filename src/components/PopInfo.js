import React from 'react'
import People from "../assets/popup/people.png"

const PopInfo = () => {
    return (
        <div className='pop-info'>
            <p>Merhaba, projemde win 11 klonunu yapmaya karar verdim. Çalıştığım bir işim ve vakit sıkıntısından dolayı responsive kısmına vakit ayıramadım. Başka gözümden kaçan eksiklerimde olabilir. Umarım beğenirsiniz.</p>
            <img src={People} alt='deco'/>
        </div>
    )
}

export default PopInfo
