import React, { useEffect, useState } from "react";
import "./LocationTable.css";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LocationTable = () => {

  const [pages, setPages] = useState([]);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");


  // =========================
  // FETCH ALL PAGES
  // =========================

  const fetchPages = async () => {

    try {

      const res = await fetch(
        "http://localhost:5000/api/location",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await res.json();

      setPages(data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchPages();

  }, []);



  // =========================
  // DELETE PAGE
  // =========================

  const deletePage = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this page?"
    );

    if (!confirmDelete) return;

    try {

      await fetch(
        `http://localhost:5000/api/location/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      fetchPages();

    } catch (error) {

      console.log(error);

    }

  };


  return (

    <div className="location-table-wrapper">

      <div className="location-table-header">

        <div onClick={()=>{navigate('/admin/location/new')}} className="location-count add-listing">
          <span>+</span>New Listing
        </div>

        <div className="location-count">
          Total Listings: <span>{pages.length}</span>
        </div>

      </div>


      <div className="table-container">

        <table className="location-table">

          <thead>

            <tr>
              <th>Sno.</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {pages.map((page, index) => (

              <tr key={page._id}>

                <td>{index + 1}</td>

                <td>{page.seoTitle}</td>

                <td className="actions">

                  <FaEye
                    className="icon view"
                    onClick={() => window.open(`/${page.slug}`, "_blank")}
                  />

                  <FaEdit
                    className="icon edit"
                    onClick={() => navigate(`/admin/location/edit/${page._id}`)}
                  />

                  <FaTrash
                    className="icon delete"
                    onClick={() => deletePage(page._id)}
                  />

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default LocationTable;