import React, { useState, useEffect } from "react";
import "./AdminForm.css";

const HeroAboutVideo = () => {

const [formData,setFormData]=useState({

  startingPackage:"",
  heroText:"",
  typewriterWords:"",
  placementText:"",

  aboutHeading:"",
  aboutDescription:"",
  aboutBtnText:"",
  aboutBtnLink:"",

  videoHeading:"",
  videoDescription:"",
  videoUrls:""

})

  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");


  // Fetch existing data
  useEffect(() => {

    const fetchData = async () => {

      try {

        const res = await fetch("http://localhost:5000/api/entries");
        const data = await res.json();

if (data?.hero) {
  setFormData(prev => ({
    ...prev,
    startingPackage: data.hero.startingPackage || "",
    heroText: data.hero.heroText || "",
    typewriterWords: data.hero.typewriterWords?.join(", ") || "",
    placementText: data.hero.placementText || ""
  }));
}

if (data?.about) {
  setFormData(prev => ({
    ...prev,
    aboutHeading: data.about.heading || "",
    aboutDescription: data.about.description || "",
    aboutBtnText: data.about.buttonText || "",
    aboutBtnLink: data.about.buttonLink || ""
  }));
}

if(data?.video){

  setFormData(prev=>({

    ...prev,

    videoHeading:data.video.heading || "",

    videoDescription:data.video.description || "",

    videoUrls:data.video.videoUrls?.join(", ") || ""

  }))

}

      } catch (err) {
        console.log(err);
      }

    };

    fetchData();

  }, []);



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


const handleSubmit = async (e) => {

  e.preventDefault();

  setLoading(true);

  try {

    const bodyData = {
      hero: {
        startingPackage: formData.startingPackage,
        heroText: formData.heroText,
        typewriterWords: formData.typewriterWords
          .split(",")
          .map(word => word.trim()),
        placementText: formData.placementText
      },

      about: {
        heading: formData.aboutHeading,
        description: formData.aboutDescription,
        buttonText: formData.aboutBtnText,
        buttonLink: formData.aboutBtnLink
      },

      video:{
        heading:formData.videoHeading,
        description:formData.videoDescription,
        videoUrls:formData.videoUrls
          .split(",")
          .map(url=>url.trim())
      }
    };

    const res = await fetch("http://localhost:5000/api/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(bodyData)
    });

    const data = await res.json();

    if(res.ok){
      alert("Content Saved Successfully");
    }else{
      alert("Failed to save content");
    }

    console.log(data);

  } catch (error) {

    console.log(error);

  }

  setLoading(false);
};


  return (
    <div className="admin-container">

      <form className="admin-card" onSubmit={handleSubmit}>

        <h1 className="main-title">
          Fill the Form to Submit Website Content
        </h1>
        <br /><br />

        <h2 className="section-title">Hero Section</h2>

        <div className="input-group">
          <label>Starting Package</label>
          <input
            type="text"
            name="startingPackage"
            value={formData.startingPackage}
            placeholder='Starting Package : <span>5 Lacs - 6 Lacs</span>'
            onChange={handleChange}
          />
        </div>

        <div className="row">

          <div className="input-group">
            <label>Hero Text</label>
            <input
              type="text"
              name="heroText"
              value={formData.heroText}
              placeholder="Main hero heading text"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Typewriter Words</label>
            <input
              type="text"
              name="typewriterWords"
              value={formData.typewriterWords}
              placeholder="Digital Marketer, Business Coach, Video Editor"
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="input-group">
          <label>Placement Text (HTML Allowed)</label>

          <textarea
            rows="4"
            name="placementText"
            value={formData.placementText}
            placeholder='कोर्स पूरा होने के बाद <span>15 दिनों</span> के अंदर कंपनी द्वारा <span> प्लेसमेंट</span> – वरना <span class="fees">100% फीस वापसी!</span>'
            onChange={handleChange}
          />
        </div>

        <br /><br />


        <div className="form-about">
          <h2 className="section-title">About Section</h2>

          <div className="input-group">
            <label>Main Heading</label>

            <input
              type="text"
              name="aboutHeading"
              value={formData.aboutHeading}
              placeholder='Our comprehensive and advanced curriculum helps you to get <span>placed in Big Companies</span>'
              onChange={handleChange}
            />
          </div>


          <div className="input-group">
            <label>About Description</label>

            <textarea
              rows="4"
              name="aboutDescription"
              value={formData.aboutDescription}
              placeholder="About Description (HTML Allowed)"
              onChange={handleChange}
            />
          </div>


          <div className="row">

            <div className="input-group">
              <label>Button Content</label>

              <input
                type="text"
                name="aboutBtnText"
                value={formData.aboutBtnText}
                placeholder="Button Text"
                onChange={handleChange}
              />
            </div>


            <div className="input-group">
              <label>Button Link</label>

              <input
                type="text"
                name="aboutBtnLink"
                value={formData.aboutBtnLink}
                placeholder="/about"
                onChange={handleChange}
              />
            </div>

          </div>
        </div>

        <br /><br />

        <div className="form-video">
          <h2 className="section-title">Video Section</h2>


          <div className="input-group">
          <label>Main Heading</label>

          <input
          type="text"
          name="videoHeading"
          value={formData.videoHeading}
          placeholder="Video Section Heading"
          onChange={handleChange}
          />

          </div>


          <div className="input-group">
          <label>Description</label>

          <textarea
          rows="4"
          name="videoDescription"
          value={formData.videoDescription}
          placeholder="Video Description (HTML Allowed)"
          onChange={handleChange}
          />

          </div>


          <div className="input-group">
          <label>Video URLs</label>

          <textarea
          rows="3"
          name="videoUrls"
          value={formData.videoUrls}
          placeholder="https://site.com/video1.mp4, https://site.com/video2.mp4"
          onChange={handleChange}
          />

          </div>
        </div>

        <button className="submit-btn" disabled={loading}>
          {loading ? "Saving..." : "Save Content"}
        </button>

      </form>

    </div>
  );
};

export default HeroAboutVideo;