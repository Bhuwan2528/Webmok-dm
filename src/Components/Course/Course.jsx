import React, { useEffect, useRef, useState } from "react";
import "./Course.css";
import brochure from "../../assets/webmok-brochure.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa6";

const Course = ({ data, openPopup }) => {

const containerRef = useRef(null)

const [showPopup,setShowPopup] = useState(false)
const [name,setName] = useState("")
const [mobile,setMobile] = useState("")
const [city,setCity] = useState("")

useEffect(()=>{
AOS.init({
duration:1000,
once:false
})
AOS.refresh()
},[])


/* FALLBACK COURSES */

const defaultCourses = [

{
image:"https://dm-2.vercel.app/assets/digital-COzj8Waf.webp",
title:"Advanced Digital Marketing Course",
points:[
"Social Media Marketing",
"Pay Per Click",
"Analytical Tools",
"Search Engine Optimization",
"Content Marketing"
]
},

{
image:"https://dm-2.vercel.app/assets/graphic-XEemZhzw.png",
title:"Business & Personality Development",
points:[
"Communication Skills",
"Leadership Qualities",
"Time Management",
"Problem-Solving Skills",
"Confidence Building"
]
},

{
image:"https://dm-2.vercel.app/assets/video-Cjx-c4Vz.jpeg",
title:"Video & Graphic Designing",
points:[
"Canva",
"Adobe Photoshop",
"Adobe Illustrator",
"Adobe Premiere Pro",
"CapCut"
]
}

]


const courseData = data?.courses || defaultCourses



/* BROCHURE POPUP */

const openDownloadPopup = ()=>{
setShowPopup(true)
}


const handleDownload = ()=>{

if(name==="" || mobile==="" || city===""){
alert("Please fill all details first")
return
}

const message =

`New Brochure Enquiry:
Name: ${name}
Mobile: ${mobile}
City: ${city}`


const whatsappURL =
`https://wa.me/919650539195?text=${encodeURIComponent(message)}`


window.open(whatsappURL,"_blank")


const link = document.createElement("a")
link.href = brochure
link.download = "webmok-brochure.pdf"
document.body.appendChild(link)
link.click()
document.body.removeChild(link)

setShowPopup(false)

}



return (

<div className="courses">

<h2
data-aos="fade-up"
data-aos-delay="300"
data-aos-anchor-placement="top-bottom"
>
Our Courses
</h2>



<div className="course-container" ref={containerRef}>



{/* DYNAMIC COURSES */}

{courseData.map((course,index)=>(
  
<div className="course" key={index}>

<span><p>{index+1}</p></span>

<img src={course.image} alt="" />

<h3>{course.title}</h3>

<ul>

{course.points.map((point,i)=>(
<li key={i}>
<FaArrowRight/> {point}
</li>
))}

</ul>


<div className="button-container">

<button className="btn course-btn" onClick={openPopup}>
Apply Now
</button>

<button className="btn course-btn" onClick={openDownloadPopup}>
Download Brochure
</button>

</div>

</div>

))}



</div>



{/* BROCHURE POPUP */}

{showPopup && (

<div className="brochure-popup">

<div className="popup-box">

<h3>Download Brochure</h3>

<input
type="text"
placeholder="Your Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="tel"
placeholder="Mobile Number"
value={mobile}
onChange={(e)=>setMobile(e.target.value)}
/>

<input
type="text"
placeholder="City"
value={city}
onChange={(e)=>setCity(e.target.value)}
/>

<button
className="btn course-btn"
onClick={handleDownload}
>
Download Brochure
</button>

</div>

</div>

)}

</div>

)

}

export default Course