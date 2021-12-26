import React, { useState } from 'react'
import Alt from "../assets/files/alt.png"
import Close from "../assets/files/çık.png"
import Instagram from './Instagram'
import Google from './GooglePage'
import {useDispatch} from "react-redux"
import * as actionTypes from "../redux/actions/actionTypes"

const ChromePage = () => {
    const dispatch = useDispatch()
    const handleOpen =  () => {
        dispatch({type: actionTypes.CLOSE_CHROME})
    }
    const linkInstagram = "www.instagram.com"
    const linkGoogle = "www.google.com"
    const [linkChange, setLinkChange] = useState("www.google.com")
    const [linkSearch, setLinkSearch] = useState("www.google.com")
    return (
        <div className='container-fluid chromePage p-0'>
            <div className='chromePage_upper'>
                <div className='chromePage_upper_alt'>
                    <img src={Alt} alt="_" />
                </div>
                <div className='chromePage_upper_close' onClick={()=> handleOpen()}>
                    <img src={Close} alt="X" />
                </div>
            </div>
            <div className='chromePage_url-box'>
                <input type="text" placeholder={"Bir URL yazın"} defaultValue={linkSearch} onChange={(e) => { setLinkChange(e.target.value) }} />
                <button type='button' onClick={() => { setLinkSearch(linkChange) }}>Ara</button>
            </div>
            <div className='chromePage_page-box p-0'>
                {

                    (linkSearch === linkInstagram)
                    &&
                    <Instagram />
                }
                {
                    (linkSearch === linkGoogle)
                    &&
                    <Google />
                }
            </div>
        </div>
    )
}

export default ChromePage
