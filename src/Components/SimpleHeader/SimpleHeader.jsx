import { useEffect, useState } from 'react';
import './SimpleHeader.css'
import logo from '../../assets/logo.png';
import { SiWhatsapp } from "react-icons/si";
import { MdCall } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

import PopupForm from "../../Components/PopupForm/PopupForm";
import { useNavigate } from 'react-router-dom';


const SimpleHeader = ({ title, breadcrumb }) => {

    const [sticky, setSticky] = useState(false);
    const [showPopup,setShowPopup] = useState(false);

    const navigate = useNavigate();


    const openPopup = () =>{
        setShowPopup(true)
    }

    const closePopup = () =>{
        setShowPopup(false)
    }


    useEffect(() => {
        window.addEventListener('scroll', () => {
        setSticky(window.scrollY > 50);
        });
    }, []);



  return (
    <div className='header simple-header'>


        {/* POPUP */}

        {showPopup && <PopupForm closePopup={closePopup} />}



        {/* NAVBAR */}

        <div className={`navbar ${sticky ? 'sticky-nav' : ''}`}>
            <img onClick={()=>{navigate('/')}} src={logo} />

            <div className="side-elements">

                <button className='btn sh-btn' onClick={openPopup}>
                    Apply Now
                    <span className='btn-icon'>
                        <FaArrowRightLong />
                    </span>
                </button>

            </div>

        </div>



        {/* BANNER */}



        {/* FLOATING BUTTONS */}

        <a
            href="https://wa.me/918684031003" 
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className="bottom-left-element bottom-element">
                <SiWhatsapp />
            </span>
        </a>

        <a href="tel:+918684031003" >
            <span className="bottom-right-element bottom-element">
                <MdCall />
            </span>
        </a>

    </div>
  )
}

export default SimpleHeader