import React, { useState, useEffect } from "react";
import "./AdminForm.css";

const CoursesTrainner = () => {

const [formData,setFormData]=useState({

course1Image:"",
course1Title:"",
course1Points:"",

course2Image:"",
course2Title:"",
course2Points:"",

course3Image:"",
course3Title:"",
course3Points:"",

trainerHeading:"",
trainerDescription:"",

topTrainer1Image:"",
topTrainer1Name:"",
topTrainer1Role:"",
topTrainer1Badge:"",

topTrainer2Image:"",
topTrainer2Name:"",
topTrainer2Role:"",

team1Image:"",
team1Name:"",
team1Role:"",

team2Image:"",
team2Name:"",
team2Role:"",

team3Image:"",
team3Name:"",
team3Role:"",

team4Image:"",
team4Name:"",
team4Role:"",

team5Image:"",
team5Name:"",
team5Role:"",

team6Image:"",
team6Name:"",
team6Role:"",

})

const [loading,setLoading]=useState(false)

const token = localStorage.getItem("token")



/* FETCH EXISTING DATA */

useEffect(()=>{

const fetchData = async () => {

  try {

    const res = await fetch("http://localhost:5000/api/entries")
    const data = await res.json()

    setFormData(prev => ({

      ...prev,

      /* COURSES */

      course1Image: data.courses?.[0]?.image || "",
      course1Title: data.courses?.[0]?.title || "",
      course1Points: data.courses?.[0]?.points?.join(", ") || "",

      course2Image: data.courses?.[1]?.image || "",
      course2Title: data.courses?.[1]?.title || "",
      course2Points: data.courses?.[1]?.points?.join(", ") || "",

      course3Image: data.courses?.[2]?.image || "",
      course3Title: data.courses?.[2]?.title || "",
      course3Points: data.courses?.[2]?.points?.join(", ") || "",



      /* TRAINERS */

      trainerHeading: data.trainers?.heading || "",
      trainerDescription: data.trainers?.description || "",

      topTrainer1Image: data.trainers?.topTrainers?.[0]?.image || "",
      topTrainer1Name: data.trainers?.topTrainers?.[0]?.name || "",
      topTrainer1Role: data.trainers?.topTrainers?.[0]?.role || "",
      topTrainer1Badge: data.trainers?.topTrainers?.[0]?.badge || "",

      topTrainer2Image: data.trainers?.topTrainers?.[1]?.image || "",
      topTrainer2Name: data.trainers?.topTrainers?.[1]?.name || "",
      topTrainer2Role: data.trainers?.topTrainers?.[1]?.role || "",



      /* TEAM */

      team1Image: data.trainers?.team?.[0]?.image || "",
      team1Name: data.trainers?.team?.[0]?.name || "",
      team1Role: data.trainers?.team?.[0]?.role || "",

      team2Image: data.trainers?.team?.[1]?.image || "",
      team2Name: data.trainers?.team?.[1]?.name || "",
      team2Role: data.trainers?.team?.[1]?.role || "",

      team3Image: data.trainers?.team?.[2]?.image || "",
      team3Name: data.trainers?.team?.[2]?.name || "",
      team3Role: data.trainers?.team?.[2]?.role || "",

      team4Image: data.trainers?.team?.[3]?.image || "",
      team4Name: data.trainers?.team?.[3]?.name || "",
      team4Role: data.trainers?.team?.[3]?.role || "",

      team5Image: data.trainers?.team?.[4]?.image || "",
      team5Name: data.trainers?.team?.[4]?.name || "",
      team5Role: data.trainers?.team?.[4]?.role || "",

      team6Image: data.trainers?.team?.[5]?.image || "",
      team6Name: data.trainers?.team?.[5]?.name || "",
      team6Role: data.trainers?.team?.[5]?.role || "",

    }))

  } catch(err) {

    console.log(err)

  }

}

fetchData()

},[])



/* HANDLE INPUT */

const handleChange=(e)=>{

setFormData({

...formData,
[e.target.name]:e.target.value

})

}



/* SUBMIT */

const handleSubmit = async(e)=>{

e.preventDefault()

setLoading(true)

try{

const bodyData={

courses:[

{
image:formData.course1Image,
title:formData.course1Title,
points:formData.course1Points
.split(",")
.map(p=>p.trim())
.filter(Boolean)
},

{
image:formData.course2Image,
title:formData.course2Title,
points:formData.course2Points
.split(",")
.map(p=>p.trim())
.filter(Boolean)
},

{
image:formData.course3Image,
title:formData.course3Title,
points:formData.course3Points
.split(",")
.map(p=>p.trim())
.filter(Boolean)
}

],

trainers:{

heading:formData.trainerHeading,

description:formData.trainerDescription,

topTrainers:[

{
image:formData.topTrainer1Image,
name:formData.topTrainer1Name,
role:formData.topTrainer1Role,
badge:formData.topTrainer1Badge
},

{
image:formData.topTrainer2Image,
name:formData.topTrainer2Name,
role:formData.topTrainer2Role
}

],

team:[

{
image:formData.team1Image,
name:formData.team1Name,
role:formData.team1Role
},

{
image:formData.team2Image,
name:formData.team2Name,
role:formData.team2Role
},

{
image:formData.team3Image,
name:formData.team3Name,
role:formData.team3Role
},

{
image:formData.team4Image,
name:formData.team4Name,
role:formData.team4Role
},

{
image:formData.team5Image,
name:formData.team5Name,
role:formData.team5Role
},

{
image:formData.team6Image,
name:formData.team6Name,
role:formData.team6Role
}

]

}

}

const res = await fetch("http://localhost:5000/api/entries",{

method:"POST",

headers:{
"Content-Type":"application/json",
Authorization:`Bearer ${token}`
},

body:JSON.stringify(bodyData)

})

const data = await res.json()

if(res.ok){
alert("Saved Successfully")
}else{
alert("Save Failed")
}

}catch(err){

console.log(err)

}

setLoading(false)

}



return (

<div className="admin-container">

<form className="admin-card" onSubmit={handleSubmit}>

<h1 className="main-title">Courses Section</h1>



{/* COURSE 1 */}

<h3 className="section-subtitle">Course Card 1</h3>

<div className="row">

<div className="input-group">

<label>Image URL</label>

<input
type="text"
name="course1Image"
value={formData.course1Image}
placeholder="Image URL"
onChange={handleChange}
/>

</div>


<div className="input-group">

<label>Course Name</label>

<input
type="text"
name="course1Title"
value={formData.course1Title}
placeholder="Course Title"
onChange={handleChange}
/>

</div>

</div>

<div className="input-group">

<label>Course Points</label>

<textarea
rows="3"
name="course1Points"
value={formData.course1Points}
placeholder="Point1, Point2, Point3"
onChange={handleChange}
/>

</div>



{/* COURSE 2 */}

<h3 className="section-subtitle">Course Card 2</h3>

<div className="row">

<div className="input-group">

<label>Image URL</label>

<input
type="text"
name="course2Image"
value={formData.course2Image}
placeholder="Image URL"
onChange={handleChange}
/>

</div>


<div className="input-group">

<label>Course Name</label>

<input
type="text"
name="course2Title"
value={formData.course2Title}
placeholder="Course Title"
onChange={handleChange}
/>

</div>

</div>

<div className="input-group">

<label>Course Points</label>

<textarea
rows="3"
name="course2Points"
value={formData.course2Points}
placeholder="Point1, Point2, Point3"
onChange={handleChange}
/>

</div>



{/* COURSE 3 */}

<h3 className="section-subtitle">Course Card 3</h3>

<div className="row">

<div className="input-group">

<label>Image URL</label>

<input
type="text"
name="course3Image"
value={formData.course3Image}
placeholder="Image URL"
onChange={handleChange}
/>

</div>


<div className="input-group">

<label>Course Name</label>

<input
type="text"
name="course3Title"
value={formData.course3Title}
placeholder="Course Title"
onChange={handleChange}
/>

</div>

</div>

<div className="input-group">

<label>Course Points</label>

<textarea
rows="3"
name="course3Points"
value={formData.course3Points}
placeholder="Point1, Point2, Point3"
onChange={handleChange}
/>

</div>


{/* Trainners Section */}


<div className="form-trainers">

<h2 className="section-title">Trainers Section</h2>

<div className="input-group">
<label>Heading</label>

<input
type="text"
name="trainerHeading"
value={formData.trainerHeading}
onChange={handleChange}
/>
</div>

<div className="input-group">
<label>Description</label>

<textarea
rows="3"
name="trainerDescription"
value={formData.trainerDescription}
onChange={handleChange}
/>
</div>



{/* TOP TRAINER 1 */}

<h3 className="section-subtitle">Top Trainer 1</h3>

<div className="row">

<input
type="text"
name="topTrainer1Image"
placeholder="Image URL"
value={formData.topTrainer1Image}
onChange={handleChange}
/>

<input
type="text"
name="topTrainer1Name"
placeholder="Trainer Name"
value={formData.topTrainer1Name}
onChange={handleChange}
/>

<input
type="text"
name="topTrainer1Role"
placeholder="Role"
value={formData.topTrainer1Role}
onChange={handleChange}
/>

<input
type="text"
name="topTrainer1Badge"
placeholder="Badge (Founder & CEO)"
value={formData.topTrainer1Badge}
onChange={handleChange}
/>

</div>



{/* TOP TRAINER 2 */}

<h3 className="section-subtitle">Top Trainer 2</h3>

<div className="row">

<input
type="text"
name="topTrainer2Image"
placeholder="Image URL"
value={formData.topTrainer2Image}
onChange={handleChange}
/>

<input
type="text"
name="topTrainer2Name"
placeholder="Trainer Name"
value={formData.topTrainer2Name}
onChange={handleChange}
/>

<input
type="text"
name="topTrainer2Role"
placeholder="Role"
value={formData.topTrainer2Role}
onChange={handleChange}
/>

</div>



{/* TEAM TRAINERS */}

<h3 className="section-subtitle">Team Trainers</h3>

{[1,2,3,4,5,6].map((num)=>(

<div className="row" key={num}>

<input
type="text"
name={`team${num}Image`}
placeholder="Image URL"
value={formData[`team${num}Image`]}
onChange={handleChange}
/>

<input
type="text"
name={`team${num}Name`}
placeholder="Trainer Name"
value={formData[`team${num}Name`]}
onChange={handleChange}
/>

<input
type="text"
name={`team${num}Role`}
placeholder="Role"
value={formData[`team${num}Role`]}
onChange={handleChange}
/>

</div>

))}

</div>




<button className="submit-btn" disabled={loading}>

{loading ? "Saving..." : "Save Courses"}

</button>

</form>

</div>

)

}

export default CoursesTrainner