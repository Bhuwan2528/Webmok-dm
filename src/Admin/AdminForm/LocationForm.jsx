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
    status:"published"
  });


  // ================================
  // REACT QUILL TOOLBAR
  // ================================

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
  // FETCH EXISTING DATA (EDIT MODE)
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
          status:data.status || "published"
        });

      }catch(err){

        console.log(err);

      }

      setFetchLoading(false);

    };

    fetchPage();

  },[id,token]);


  // ================================
  // HANDLE INPUT CHANGE
  // ================================

  const handleChange = (e)=>{

    const {name,value} = e.target;

    setFormData({
      ...formData,
      [name]:value
    });

  };


  // ================================
  // HANDLE SUBMIT
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


  // ================================
  // LOADING STATE
  // ================================

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

        {/* SEO SECTION */}

        <h2 className="section-title">SEO Information</h2>

        <div className="input-group">
          <label>SEO Title</label>

          <input
            type="text"
            name="seoTitle"
            value={formData.seoTitle}
            placeholder="Best Video Editing Services in Delhi"
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
            placeholder="Professional video editing services in Delhi..."
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
                placeholder="video editing delhi, editing services, video editor delhi"
                onChange={handleChange}
            />
        s</div>


        <div className="input-group">
          <label>Slug (URL)</label>

          <input
            type="text"
            name="slug"
            value={formData.slug}
            placeholder="video-editing-in-delhi"
            onChange={handleChange}
            required
          />
        </div>


        <br/><br/>


        {/* CONTENT SECTION */}

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


        <button
          type="submit"
          className="submit-btn"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Page"}
        </button>


      </form>

    </div>

  );

};

export default LocationForm;