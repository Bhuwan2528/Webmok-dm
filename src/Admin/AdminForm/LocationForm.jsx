import React, { useState, useEffect } from "react";
import "./AdminForm.css";
import { useParams, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const LocationForm = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [loading,setLoading] = useState(false);
  const [fetchLoading,setFetchLoading] = useState(false);

  const [formData,setFormData] = useState({
    seoTitle:"",
    metaDescription:"",
    metaKeywords:"",
    slug:"",
    content:"",
    status:"published",
    field:""   // ✅ NEW FIELD
  });


  const modules = {
    toolbar:[
      [{header:[1,2,3,false]}],
      ["bold","italic","underline","strike"],
      [{list:"ordered"},{list:"bullet"}],
      [{align:[]}],
      ["link","image"],
      ["clean"]
    ]
  };


  // ================================
  // FETCH EXISTING DATA
  // ================================

  useEffect(()=>{

    if(!id) return;

    const fetchPage = async()=>{

      try{

        setFetchLoading(true);

        const res = await fetch(
          `https://webmok-dm-backend.onrender.com/api/location/admin/${id}`,
          {
            headers:{
              Authorization:`Bearer ${token}`
            }
          }
        );

        const data = await res.json();

        setFormData({
          seoTitle:data.seoTitle || "",
          metaDescription:data.metaDescription || "",
          metaKeywords:data.metaKeywords || "",
          slug:data.slug || "",
          content:data.content || "",
          status:data.status || "published",
          field:data.field || ""   // ✅ SET FIELD
        });

      }catch(err){
        console.log(err);
      }

      setFetchLoading(false);

    };

    fetchPage();

  },[id,token]);


  // ================================
  // HANDLE CHANGE
  // ================================

  const handleChange = (e)=>{
    const {name,value} = e.target;

    setFormData({
      ...formData,
      [name]:value
    });
  };


  // ================================
  // SUBMIT
  // ================================

  const handleSubmit = async(e)=>{

    e.preventDefault();

    try{

      setLoading(true);

      const url = id
        ? `https://webmok-dm-backend.onrender.com/api/location/${id}`
        : `https://webmok-dm-backend.onrender.com/api/location`;

      const method = id ? "PUT" : "POST";

      const res = await fetch(url,{
        method,
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(formData)
      });

      const data = await res.json();

      if(res.ok){
        alert(id ? "Page Updated Successfully" : "Page Created Successfully");
        navigate("/admin-panel");
      }else{
        alert(data.message || "Something went wrong");
      }

    }catch(err){
      console.log(err);
    }

    setLoading(false);

  };


  if(fetchLoading){
    return(
      <div className="admin-container">
        <div className="admin-card">
          <h2>Loading Page Data...</h2>
        </div>
      </div>
    );
  }


  return (

    <div className="admin-container">

      <form className="admin-card" onSubmit={handleSubmit}>

        <h1 className="main-title">
          {id ? "Edit SEO Page" : "Create New SEO Page"}
        </h1>

        <br/><br/>

        {/* SEO */}

        <h2 className="section-title">SEO Information</h2>

        <div className="input-group">
          <label>SEO Title</label>
          <input
            type="text"
            name="seoTitle"
            value={formData.seoTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Meta Description</label>
          <textarea
            rows="3"
            name="metaDescription"
            value={formData.metaDescription}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Meta Keywords</label>
          <input
            type="text"
            name="metaKeywords"
            value={formData.metaKeywords}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Slug (URL)</label>
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            required
          />
        </div>


        {/* ✅ FIELD SELECT */}

        <div className="input-group">
          <label>Course Field</label>

          <select
            name="field"
            value={formData.field}
            onChange={handleChange}
            required
            className="select-input"
          >
            <option value="">Select Field</option>
            <option value="digital marketing">Digital Marketing</option>
            <option value="web development">Web Development</option>
            <option value="video editing">Video Editing</option>
            <option value="graphic designing">Graphic Designing</option>
            <option value="business development">Business Development</option>
          </select>
        </div>


        <br/><br/>

        {/* CONTENT */}

        <h2 className="section-title">Page Content</h2>

        <div className="input-group">
          <label>Page Content</label>

          <ReactQuill
            theme="snow"
            modules={modules}
            value={formData.content}
            onChange={(value)=>setFormData({...formData,content:value})}
          />
        </div>

        <br/>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Saving..." : "Save Page"}
        </button>

      </form>

    </div>
  );
};

export default LocationForm;