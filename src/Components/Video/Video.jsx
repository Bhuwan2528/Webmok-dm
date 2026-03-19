import React, { useState } from 'react'
import './Video.css'
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Video = ({ data }) => {

const [popupVideo,setPopupVideo] = useState(null)
const navigate = useNavigate();

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
"https://res.cloudinary.com/dyiqsf4ze/video/upload/v1773039858/video4_ddh3jo.mp4",
"https://res.cloudinary.com/dyiqsf4ze/video/upload/v1773651425/VID-20260316-WA0017_pnhoiw.mp4",
"https://res.cloudinary.com/dyiqsf4ze/video/upload/v1773651430/VID-20260316-WA0010_pqnyjb.mp4",
"https://res.cloudinary.com/dyiqsf4ze/video/upload/v1773651432/VID-20260316-WA0011_vyngfx.mp4",
"https://res.cloudinary.com/dyiqsf4ze/video/upload/v1773651434/VID-20260316-WA0009_rpq4kt.mp4"
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

{videoData.videoUrls.slice(0,8).map((video,index)=>(

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


    <div className="cta-buttons">
      <button onClick={()=>{navigate('/testimonials')}} className="width-auto sq-btn">View All Testimonials</button>

      <button 
        onClick={() => window.location.href = "tel:+918684031003"} 
        className="width-auto sq-btn"
      >
        Call Now
      </button>

      <button 
        onClick={() => window.open("https://wa.me/918684031003", "_blank")} 
        className="width-auto sq-btn"
      >
        Enquire Now
      </button>

    </div>


        

        </div>

{/* VIDEO POPUP */}

{popupVideo && (

<div className="video-popup" onClick={closeVideo}>

<div 
className="video-popup-box"
onClick={(e)=>e.stopPropagation()}
>

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