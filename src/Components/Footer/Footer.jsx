import React from 'react'
import './Footer.css'
import { FaTelegramPlane } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = ({ data }) => {

  const phone = data?.phone || "+91 8950329919";

  const branches = data?.branches || [
    {
      city: "Rohtak",
      address: "1st Floor, 129 L, near by CR Polytechnic Back Gate Power House, Model Town, Rohtak, Haryana 124001",
      phone: "+91 8950329919"
    },
    {
      city: "Hissar",
      address: "DSB -198, Red Square Market, near by Eminent Mall, Mehta Nagar, Hisar",
      phone: "+91 7800020055"
    },
    {
      city: "Delhi",
      address: "Office No: 44, Dwarka Mor Phase 1, Mohan Garden, Uttam Nagar, Delhi",
      phone: "+91 8684031003"
    },
    {
      city: "Gurgaon",
      address: "Sector 29, Gurgaon",
      phone: "+91 9876543213"
    },
    {
      city: "Noida",
      address: "Sector 18, Noida",
      phone: "+91 9876543214"
    },
    {
      city: "Dehradun",
      address: "Office No 46, Balliwala Chowk, Vijay Park Extension, Dehradun",
      phone: "+91 7206720663"
    }
  ];

  const copyright =
    data?.copyright ||
    "All Rights Are Reserved | WebMok";

  return (
    <>
      <div className='footer'>

        <div className="footer-container">

          <div className="talk">
            <h3>Let's Talk</h3>
            <h2>{phone}</h2>
          </div>

          <div className="footer-branches">

            <h2 className="branches-title">
              {data?.branchesTitle || "Our Branches"}
            </h2>

            <div className="branches-grid">

              {branches.map((branch, index) => (

                <div className="branch-col" key={index}>

                  <h3>{branch.city}</h3>

                  <p className="branch-info">
                    <FaMapMarkerAlt className="branch-icon" />

                    <span
                        dangerouslySetInnerHTML={{
                        __html: branch.address
                        }}
                    ></span>

                    </p>

                  <p className="branch-info">
                    <FaPhoneAlt className="branch-icon" />
                    {branch.phone}
                  </p>

                </div>

              ))}

            </div>

          </div>

          <div className="email-container">

            <h4>
              {data?.newsletterText ||
                "Get the latest inspiration & insights"}
            </h4>

            <div className="email-box">
              <input
                type="text"
                placeholder={
                  data?.emailPlaceholder || "Your Email Address"
                }
              />

              <span>
                <FaTelegramPlane />
              </span>

            </div>

          </div>

        </div>

      </div>

      <div className="copyright">
        <p>{copyright}</p> 
        <a href="/admin-panel">Admin Panel</a>
      </div>
    </>
  );
};

export default Footer;