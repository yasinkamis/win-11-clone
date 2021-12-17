import React,{useState} from 'react'
import ClockLoader from "react-spinners/ClockLoader";
import PulseLoader from "react-spinners/PulseLoader";

const Loader = () => {
    const [loading,setLoading]= useState(false);
    setTimeout(()=>{
        setLoading(true)
    },4000)
    return (
        <div className={`container-fluid loader ${loading && "finish"}`}>
            <ClockLoader color={"white"} size={70}/>
            <h5>YÜKLENİYOR<span><PulseLoader color={"white"} size={5}/></span></h5>
            <h6>F11 Tuşuna tıklayarak tam ekrana alınız</h6>
        </div>
    )
}

export default Loader
