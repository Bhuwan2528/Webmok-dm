import React from "react";
import "./Trainners.css";

const Trainners = ({data}) => {

/* fallback trainers */

const defaultData = {

heading:"Meet Your Digital Marketing Training Captains",

description:"Teached 100+ Students And Help Them To Grow In There Careers",

topTrainers:[
{
image:"https://dm-2.vercel.app/assets/rahish-BX4cltPt.jpeg",
name:"Rahish Sangwan",
role:"Founder & Digital Marketing Specialist",
badge:"Founder & CEO"
},

{
image:"https://dm-2.vercel.app/assets/simran-BX0SJinZ.jpeg",
name:"Simran",
role:"Advanced Digital Marketing With AI Trainer"
}
],

team:[

{
image:"https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
name:"Bhuwan Suneja",
role:"AI & Web Development Trainer"
},

{
image:"https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
name:"Trainer Name",
role:"Role or Specialization"
},

{
image:"https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
name:"Trainer Name",
role:"Role or Specialization"
},

{
image:"https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
name:"Trainer Name",
role:"Role or Specialization"
},

{
image:"https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
name:"Trainer Name",
role:"Role or Specialization"
},

{
image:"https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
name:"Trainer Name",
role:"Role or Specialization"
}

]

}


const trainerData = {

  heading: data?.heading || defaultData.heading,

  description: data?.description || defaultData.description,

  topTrainers:
    data?.topTrainers && data.topTrainers.length > 0
      ? data.topTrainers
      : defaultData.topTrainers,

  team:
    data?.team && data.team.length > 0
      ? data.team
      : defaultData.team

}


return (

<div className="trainners">

<h2>{trainerData.heading}</h2>

<p>{trainerData.description}</p>



{/* TOP TRAINERS */}

<div className="top-trainers">

{trainerData.topTrainers?.map((trainer,index)=>(

<div
className={`top-card ${index===0 ? "founder" : ""}`}
key={index}
>

<div className="top-img">

{trainer.badge && (
<span className="badge">
{trainer.badge}
</span>
)}

<img src={trainer.image} alt="" />

</div>

<div className="top-content">

<h3>{trainer.name}</h3>

<p>{trainer.role}</p>

</div>

</div>

))}

</div>



{/* TEAM GRID */}

<div className="trainer-grid">

{trainerData.team?.map((trainer,index)=>(

<div className="trainer-card" key={index}>

<img src={trainer.image || "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg"} alt="" />

<h4>{trainer.name}</h4>

<p>{trainer.role}</p>

</div>

))}

</div>

</div>

)

}

export default Trainners