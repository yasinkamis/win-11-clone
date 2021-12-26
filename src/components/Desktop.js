import React, { useState } from 'react'
import Txt from "../assets/navbar/txt.png"
import Chrome from "../assets/navbar/chrome.png"
import ChromePage from './ChromePage'
import TxtFile from './TxtFile'
import PopUp from './PopUp'
import {useDispatch, useSelector} from "react-redux"
import * as actionTypes from "../redux/actions/actionTypes"

const Desktop = () => {
    const [tick, setTick] = useState(null)
    const [openPop, setOpenPop] = useState(false)
    const isChromeActive = useSelector(state => state.file.isChromeActive)
    const isTxtActive = useSelector(state => state.file.isTxtActive)
    const dispatch = useDispatch()
    const handleOpen =  () => {
        dispatch({type: actionTypes.OPEN_CHROME})
    }
    const handleOpen2 =  () => {
        dispatch({type: actionTypes.OPEN_TXT})
    }
    return (
        <div className='container-fluid desktop' >
            <div
                className={`desktop_icons ${(tick === "txt") && "active"}`}
                onClick={() => { setTick("txt") }}
                onDoubleClick={ ()=> handleOpen2()}
            >
                <img src={Txt} alt="icon" />
            </div>
            <div
                className={`desktop_icons ${(tick === "chrome") && "active"}`}
                onClick={() => { setTick("chrome") }}
                onDoubleClick={()=> handleOpen()}>
                <img src={Chrome} className='chrome' alt="icon" />
            </div>
            {
                isTxtActive
                &&
                <TxtFile/>
            }
            {
                isChromeActive
                &&
                <ChromePage/>
            }
            {
                ( !openPop && <button type='button' className='popUp-button' onClick={()=>{setOpenPop(true)}}>Bilgi</button>)
            }
            {
                (
                    openPop
                    &&
                    <PopUp/>
                )
            }
        </div>
    )
}

export default Desktop
