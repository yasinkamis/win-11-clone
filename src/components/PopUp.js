import React, { useState } from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import PopContact from './PopContact';
import PopInfo from './PopInfo';
import PopWelcome from './PopWelcome';
import Close from "../assets/popup/close.png"

const PopUp = () => {
    const [select, setSelect] = useState("one")
    const [close, setClose] = useState(false)
    return (
        <div className={`backdrop container-fluid ${close && "notActive"}`}>
            <div className='backdrop_pop-up'>
                <img src={Close} alt="close" className='close-button-pop-up' onClick={()=>{setClose(!close)}}/>
                <div className='backdrop_pop-up_breadcrumb'>
                <h3>
                    <span className={`${(select==="one" ||select==="two" ||select==="three") && "select"}`} onClick={()=>{setSelect("one")}}>Hoş Geldin <IoMdArrowDropright/></span>
                    <span className={`${(select==="two" ||select==="three") && "select"}`} onClick={()=>{setSelect("two")}}>Detaylar <IoMdArrowDropright/></span>
                    <span className={`${(select==="three") && "select"}`} onClick={()=>{setSelect("three")}}>İletişim</span>
                </h3>
                </div>
                <div className='backdrop_pop-up_content'>
                    {
                        (select==="one"&&<PopWelcome/>)
                    }
                    {
                        (select==="two"&&<PopInfo/>)
                    }
                    {
                        (select==="three"&&<PopContact/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default PopUp
