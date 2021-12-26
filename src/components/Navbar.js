import React,{useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import * as actionTypes from "../redux/actions/actionTypes"
import Win from "../assets/navbar/windows.png"
import Search from "../assets/navbar/find.png"
import File from "../assets/navbar/folder.png"
import Mail from "../assets/navbar/email.png"
import Spotify from "../assets/navbar/spotify.png"
import Chrome from "../assets/navbar/chrome.png"
import Office from "../assets/navbar/office.png"
import Txt from "../assets/navbar/txt.png"
import Arrow from "../assets/navbar/arrow-up.png"
import Wifi from "../assets/navbar/wifi.png"
import Sound from "../assets/navbar/volume.png"
import Battery from "../assets/navbar/battery.png"

const Navbar = () => {
    const [isTime, setIsTime] = useState(null);
    const [isDate, setIsDate] = useState(null);
    const isChromeActive = useSelector(state => state.file.isChromeActive)
    const isTxtActive = useSelector(state => state.file.isTxtActive)
    const dispatch = useDispatch()
    const handleOpen =  () => {
        dispatch({type: actionTypes.OPEN_CHROME})
        dispatch({type: actionTypes.CLOSE_TXT})
    }
    const handleOpen2 =  () => {
        dispatch({type: actionTypes.OPEN_TXT})
        dispatch({type: actionTypes.CLOSE_CHROME})
    }
    const timeControl = () =>{
        let time = new Date().toLocaleTimeString().slice(0,5)
        setIsTime(time)
        let date = new Date().toLocaleDateString()
        setIsDate(date)
    }
    setInterval(()=>{timeControl()},1000)
    return (
        <div className='container-fluid navbar'>
            <div className='navbar_icons'>
                <img src={Win} alt="icon"/>
            </div>
            <div className='navbar_icons'>
                <img src={Search} alt="icon"/>
            </div>
            <div className='navbar_icons'>
                <img src={File} alt="icon"/>
            </div>
            <div className='navbar_icons'>
                <img src={Mail} alt="icon"/>
            </div>
            <div className='navbar_icons'>
                <img src={Office} alt="icon"/>
            </div>
            <div className='navbar_icons'>
                <img src={Spotify} alt="icon"/>
            </div>
            <div className={`navbar_icons ${isTxtActive && "active"}`} onClick={()=>{handleOpen2()}}>
                <img src={Txt} alt="icon"/>
            </div>
            <div className={`navbar_icons ${isChromeActive && "active"}`} onClick={()=>{handleOpen()}}>
                <img src={Chrome} alt="icon"/>
            </div>
            <div className='navbar_miniIcons'>
                <div className='navbar_miniIcons_arrow'>
                    <img src={Arrow} alt="icon"/>
                </div>
                <div className='navbar_miniIcons_control'>
                    <img src={Wifi} alt="icon"/>
                    <img src={Sound} alt="icon"/>
                    <img src={Battery} alt="icon"/>
                </div>
                <div className='navbar_miniIcons_time'>
                    <p>{isTime}</p>
                    <p>{isDate}</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
