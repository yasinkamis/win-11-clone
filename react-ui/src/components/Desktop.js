import React, { useState } from 'react'
import Txt from "../assets/navbar/txt.png"
import Chrome from "../assets/navbar/chrome.png"
//import ChromePage from './ChromePage'
//import TxtFile from './TxtFile'

const Desktop = () => {
    const [tick, setTick] = useState(null)
    const [open, setOpen] = useState(null)
    return (
        <div className='container-fluid desktop' >
            <div
                className={`desktop_icons ${(tick === "txt") && "active"}`}
                onClick={() => { setTick("txt") }}
                onDoubleClick={() => { setOpen(true); alert(open) }}
            >
                <img src={Txt} alt="icon" />
            </div>
            <div
                className={`desktop_icons ${(tick === "chrome") && "active"}`}
                onClick={() => { setTick("chrome") }}
                onDoubleClick={() => { setOpen(true); alert(open) }}>
                <img src={Chrome} className='chrome' alt="icon" />
            </div>
            {/*<TxtFile/>*/}
            {/*<ChromePage/>*/}
        </div>
    )
}

export default Desktop
