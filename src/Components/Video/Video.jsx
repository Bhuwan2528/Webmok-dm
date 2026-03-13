import React, { useState } from 'react'
import './Video.css'
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Video = ({ data }) => {

const [popupVideo,setPopupVideo] = useState(null)

const openVideo = (video)=>{
setPopupVideo(video)
}

const closeVideo = ()=>{
setPopupVideo(null)
}


/* fallback content (agar server band ho) */

const defaultVideo = {

heading:"Explore Our Learner’s Journey",

description:`Join a prestigious group of SkillCircle alumni that includes strategists
from the world's biggest brands and agencies, creative business owners,
and powerful digital marketing leaders.`,

videoUrls:[
"https://res.cloudinary.com/dyiqsf4ze/video/upload/v1773039811/video1_hktex6.mp4",
"https://res.cloudinary.com/dyiqsf4ze/video/upload/v1773039813/video2_um2bq5.mp4",
"https://res.cloudinary.com/dyiqsf4ze/video/upload/v1773039812/video3_eqf8nf.mp4",
"https://res.cloudinary.com/dyiqsf4ze/video/upload/v1773039858/video4_ddh3jo.mp4"
]

}


const videoData = data || defaultVideo


  return (
    <div className='videoes'>

        <h2>{videoData.heading}</h2>

        <p
        dangerouslySetInnerHTML={{__html:videoData.description}}
        />

        <div className="videoes-container">

{/* DYNAMIC VIDEOS */}

{videoData.videoUrls.map((video,index)=>(

<div
key={index}
className="video"
onClick={()=>openVideo(video)}
>

<video
src={video}
preload="metadata"
muted
playsInline
/>

<FaPlay className="play-icon"/>

</div>

))}

        </div>

{/* VIDEO POPUP */}

{popupVideo && (

<div className="video-popup">

<div className="video-popup-box">

<IoClose
className="close-video"
onClick={closeVideo}
/>

<video
src={popupVideo}
controls
autoPlay
/>

</div>

</div>

)}

    </div>
  )
}

export default Video