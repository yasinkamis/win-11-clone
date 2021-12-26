import React, { useState } from 'react'
import txtValue from "../data/txtValue.json"
import Center from "../assets/txt/center.png"
import Right from "../assets/txt/right.png"
import Left from "../assets/txt/left.png"
import Justify from "../assets/txt/justify.png"
import Alt from "../assets/files/alt.png"
import Close from "../assets/files/çık.png"
import {useDispatch} from "react-redux"
import * as actionTypes from "../redux/actions/actionTypes"


const TxtFile = () => {
    const [textAlign, setTextAlign] = useState("left")
    const dispatch = useDispatch()
    const handleOpen2 =  () => {
        dispatch({type: actionTypes.CLOSE_TXT})
    }
    return (
        <div className='container-fluid txt-file'>
            <div className='txt-file_upper'>
                <div className='txt-file_upper_alt'>
                    <img src={Alt} alt="_" />
                </div>
                <div className='txt-file_upper_close' onClick={()=> handleOpen2()}>
                    <img src={Close} alt="X" />
                </div>
            </div>
            <div className='txt-file_nav'>
                <div className={`txt-file_nav_control ${textAlign==="left" && "active"}`} onClick={() => { setTextAlign("left")}}>
                    <img src={Left} alt="control" />
                </div>
                <div className={`txt-file_nav_control ${textAlign==="justify" && "active"}`} onClick={() => { setTextAlign("justify")}}>
                    <img src={Justify} alt="control" />
                </div>
                <div className={`txt-file_nav_control ${textAlign==="center" && "active"}`} onClick={() => { setTextAlign("center")}}>
                    <img src={Center} alt="control" />
                </div>
                <div className={`txt-file_nav_control ${textAlign==="right" && "active"}`} onClick={() => { setTextAlign("right")}}>
                    <img src={Right} alt="control" />
                </div>
            </div>
            <div className='txt-file_content'>
                <textarea defaultValue={txtValue.txtValue} className={textAlign}></textarea>
            </div>
        </div>
    )
}

export default TxtFile
