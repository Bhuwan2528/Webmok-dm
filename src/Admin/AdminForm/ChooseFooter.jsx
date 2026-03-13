import React, { useState, useEffect } from "react";
import "./AdminForm.css";

const ChooseFooter = () => {

const [formData,setFormData]=useState({

/* CHOOSE SECTION */

choose1Image:"",
choose1Title:"",
choose1Desc1:"",
choose1Desc2:"",

choose2Image:"",
choose2Title:"",
choose2Desc1:"",
choose2Desc2:"",

choose3Image:"",
choose3Title:"",
choose3Desc1:"",
choose3Desc2:"",


/* FOOTER SECTION */

talkPhone:"",

branch1City:"",
branch1Address:"",
branch1Phone:"",

branch2City:"",
branch2Address:"",
branch2Phone:"",

branch3City:"",
branch3Address:"",
branch3Phone:"",

branch4City:"",
branch4Address:"",
branch4Phone:"",

branch5City:"",
branch5Address:"",
branch5Phone:"",

branch6City:"",
branch6Address:"",
branch6Phone:"",

newsletterTitle:"",

copyright:""

})

const [loading,setLoading]=useState(false)

const token = localStorage.getItem("token")



/* FETCH DATA */

useEffect(()=>{

const fetchData = async()=>{

try{

const res = await fetch("http://localhost:5000/api/entries")
const data = await res.json()


/* CHOOSE */

if(data?.choose){

setFormData(prev=>({

...prev,

choose1Image:data.choose[0]?.image || "",
choose1Title:data.choose[0]?.title || "",
choose1Desc1:data.choose[0]?.description || "",

choose2Image:data.choose[1]?.image || "",
choose2Title:data.choose[1]?.title || "",
choose2Desc1:data.choose[1]?.description || "",

choose3Image:data.choose[2]?.image || "",
choose3Title:data.choose[2]?.title || "",
choose3Desc1:data.choose[2]?.description || "",

}))

}


/* FOOTER */

if(data?.footer){

setFormData(prev=>({

...prev,

talkPhone:data.footer.talk?.phone || "",

branch1City:data.footer.branches?.[0]?.city || "",
branch1Address:data.footer.branches?.[0]?.address || "",
branch1Phone:data.footer.branches?.[0]?.phone || "",

branch2City:data.footer.branches?.[1]?.city || "",
branch2Address:data.footer.branches?.[1]?.address || "",
branch2Phone:data.footer.branches?.[1]?.phone || "",

branch3City:data.footer.branches?.[2]?.city || "",
branch3Address:data.footer.branches?.[2]?.address || "",
branch3Phone:data.footer.branches?.[2]?.phone || "",

branch4City:data.footer.branches?.[3]?.city || "",
branch4Address:data.footer.branches?.[3]?.address || "",
branch4Phone:data.footer.branches?.[3]?.phone || "",

branch5City:data.footer.branches?.[4]?.city || "",
branch5Address:data.footer.branches?.[4]?.address || "",
branch5Phone:data.footer.branches?.[4]?.phone || "",

branch6City:data.footer.branches?.[5]?.city || "",
branch6Address:data.footer.branches?.[5]?.address || "",
branch6Phone:data.footer.branches?.[5]?.phone || "",

newsletterTitle:data.footer.newsletter?.title || "",

copyright:data.footer.copyright || ""

}))

}

}catch(err){

console.log(err)

}

}

fetchData()

},[])



/* HANDLE INPUT */

const handleChange=(e)=>{

setFormData(prev=>({

...prev,
[e.target.name]:e.target.value

}))

}



/* SUBMIT */

const handleSubmit=async(e)=>{

e.preventDefault()

setLoading(true)

try{

const bodyData={

choose:[

{
image:formData.choose1Image,
title:formData.choose1Title,
description:formData.choose1Desc1,
},

{
image:formData.choose2Image,
title:formData.choose2Title,
description:formData.choose2Desc1,
},

{
image:formData.choose3Image,
title:formData.choose3Title,
description:formData.choose3Desc1,
}

],

footer:{

talk:{
phone:formData.talkPhone
},

branches:[

{
city:formData.branch1City,
address:formData.branch1Address,
phone:formData.branch1Phone
},

{
city:formData.branch2City,
address:formData.branch2Address,
phone:formData.branch2Phone
},

{
city:formData.branch3City,
address:formData.branch3Address,
phone:formData.branch3Phone
},

{
city:formData.branch4City,
address:formData.branch4Address,
phone:formData.branch4Phone
},

{
city:formData.branch5City,
address:formData.branch5Address,
phone:formData.branch5Phone
},

{
city:formData.branch6City,
address:formData.branch6Address,
phone:formData.branch6Phone
}

],

newsletter:{
title:formData.newsletterTitle
},

copyright:formData.copyright

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

if(res.ok){

alert("Content Saved Successfully")

}else{

alert("Save Failed")

}

}catch(err){

console.log(err)

}

setLoading(false)

}



return(

<div className="admin-container">

<form className="admin-card" onSubmit={handleSubmit}>



<h1 className="main-title">Choose Section</h1>



{/* CHOOSE CARDS */}

{[1,2,3].map((num)=>(

<div key={num}>

<h3 className="section-subtitle">Choose Card {num}</h3>

<div className="input-group">

<label>Image URL</label>

<input
type="text"
name={`choose${num}Image`}
value={formData[`choose${num}Image`]}
onChange={handleChange}
/>

</div>

<div className="input-group">

<label>Title</label>

<input
type="text"
name={`choose${num}Title`}
value={formData[`choose${num}Title`]}
onChange={handleChange}
/>

</div>

<div className="input-group">

<label>Description</label>

<textarea
rows="3"
name={`choose${num}Desc1`}
value={formData[`choose${num}Desc1`]}
onChange={handleChange}
/>

</div>

</div>

))}



<br/><br/>



<h1 className="main-title">Footer Section</h1>



<div className="input-group">

<label>Let's Talk Phone</label>

<input
type="text"
name="talkPhone"
value={formData.talkPhone}
onChange={handleChange}
/>

</div>



<h2 className="section-title">Branches</h2>



{[1,2,3,4,5,6].map((num)=>(

<div key={num} className="row">

<input
type="text"
placeholder="City"
name={`branch${num}City`}
value={formData[`branch${num}City`]}
onChange={handleChange}
/>

<input
type="text"
placeholder="Address"
name={`branch${num}Address`}
value={formData[`branch${num}Address`]}
onChange={handleChange}
/>

<input
type="text"
placeholder="Phone"
name={`branch${num}Phone`}
value={formData[`branch${num}Phone`]}
onChange={handleChange}
/>

</div>

))}







<button className="submit-btn" disabled={loading}>

{loading ? "Saving..." : "Save Content"}

</button>



</form>

</div>

)

}

export default ChooseFooter