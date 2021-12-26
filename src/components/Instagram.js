import React, { useState } from 'react'
import Nav1 from "../assets/instagram/nav1_1.png"
import Nav2 from "../assets/instagram/nav2_1.png"
import Nav3 from "../assets/instagram/nav3_1.png"
import Begen from "../assets/instagram/begen.png"
import Yorum from "../assets/instagram/yorum_1.png"
import Kaydet from "../assets/instagram/kaydet_1.png"
import Gonder from "../assets/instagram/gönder_1.png"
import Logo from "../assets/instagram/instagramLogo.png"
import NavResim from "../assets/instagram/nav-resim.png"
import PostUser from "../data/postData"
import StoryUser from "../data/storyData"

const Instagram = () => {
    const [selectPhoto, setSelectPhoto] = useState(null)
    return (
        <div className='instagramPage p-0'>
            <nav className='container-fluid d-flex justify-content-around align-item-center'>
                <div className='logo-box'>
                    <img src={Logo} alt="instagram" />
                </div>
                <div className='input-box'>
                    <input type="text" placeholder="Ara" />
                </div>
                <div className='input-nav'>
                    <img src={Nav1} alt="nav" />
                    <img src={Nav2} alt="nav" />
                    <img src={Nav3} alt="nav" />
                    <img src={NavResim} className='resim' alt="nav" />
                </div>
            </nav>
            <div className='i-container row px-0'>
                <div className='col-7 px-0'>
                    <div className='story-box'>
                        {
                            StoryUser.map((item, index) => (
                                <div className='story-content'>
                                    <img src={item.img} alt='photo' />
                                    <p>{item.name}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='post-box'>
                        {
                            PostUser.map((item, index) => (
                                <div className='post-card' key={index}>
                                    <div className="user-info">
                                        <img src={item.img} alt='photo' />
                                        <h6>{item.name}</h6>
                                    </div>
                                    <div className='post-img-box'>
                                        <img src={item.img} alt='ph' onClick={() => { setSelectPhoto(item.id+1) }} />
                                    </div>
                                    <div className='post-img-nav'>
                                        <div>
                                            <img src={Begen} alt='ph' />
                                            <img src={Yorum} alt='ph' />
                                            <img src={Gonder} alt='ph' />
                                        </div>
                                        <img src={Kaydet} alt='ph' />
                                    </div>
                                    <div className='like-box'>
                                        <h6>{item.like} kişi beğendi</h6>
                                    </div>
                                    <div className='commit-box'>
                                        <h6>{item.name}<span>{item.commit}</span></h6>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {
                    selectPhoto
                    &&
                    (
                        <div className='big-card' onClick={()=>{setSelectPhoto(null)}}>
                            <img src={PostUser[selectPhoto-1].img} alt='photo' />
                        </div>
                    )
                }
                <div className='col-5 px-0'>
                    <div className='user'>
                        <div>
                            <img src={NavResim} alt='photo' />
                        </div>
                        <div>
                            <p className='m-0 mx-3 bold'>yasin.kamis</p>
                            <p className='m-0 mx-3'>Yasin Kamış</p>
                        </div>
                        <div>
                            <p className='text-primary m-0 cursor'>Geçiş yap</p>
                        </div>
                    </div>
                    <h6 className='h6-col'>Sizin için öneriler</h6>
                    <div className='user my-2'>
                        <div>
                            <img src={NavResim} alt='photo' />
                        </div>
                        <div>
                            <p className='m-0 mx-3 bold'>yasin.kamis</p>
                            <p className='m-0 mx-3'>Yasin Kamış</p>
                        </div>
                        <div>
                            <p className='text-primary m-0 cursor'>Takip et</p>
                        </div>
                    </div>
                    <div className='user my-2'>
                        <div>
                            <img src={NavResim} alt='photo' />
                        </div>
                        <div>
                            <p className='m-0 mx-3 bold'>yasin.kamis</p>
                            <p className='m-0 mx-3'>Yasin Kamış</p>
                        </div>
                        <div>
                            <p className='text-primary m-0 cursor'>Takip et</p>
                        </div>
                    </div>
                    <div className='user my-2'>
                        <div>
                            <img src={NavResim} alt='photo' />
                        </div>
                        <div>
                            <p className='m-0 mx-3 bold'>yasin.kamis</p>
                            <p className='m-0 mx-3'>Yasin Kamış</p>
                        </div>
                        <div>
                            <p className='text-primary m-0 cursor'>Takip et</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instagram
