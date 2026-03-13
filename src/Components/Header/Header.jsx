import { useEffect, useState } from 'react';
import './Header.css'
import logo from '../../assets/logo.png';
import { SiWhatsapp } from "react-icons/si";
import { MdCall } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import Course from '../../Components/Course/Course'
import Stats from '../../Components/Stats/Stats'
import Join from '../../Components/Join/Join'
import Footer from '../../Components/Footer/Footer'
import Choose from '../../Components/Choose/Choose'
import Placement from '../Placement/Placement';
import Counter from '../Counter/Counter';
import Bottom from '../Bottom/Bottom';
import Trainners from '../Trainners/Trainners';
import Video from '../Video/Video';

import PopupForm from "../../Components/PopupForm/PopupForm";


const Header = () => {

    const [sticky, setSticky] = useState(false);
    const [pageData, setPageData] = useState(null);

    const [showPopup,setShowPopup] = useState(false);


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


    useEffect(() => {

    const fetchData = async () => {

        try {

        const res = await fetch("http://localhost:5000/api/entries");
        const data = await res.json();

        setPageData(data);

        } catch (err) {
        console.log(err);
        }

    };

    fetchData();

    }, []);



  return (
    <div className='header'>


        {/* POPUP */}

        {showPopup && <PopupForm closePopup={closePopup} />}



        {/* NAVBAR */}

        <div className={`navbar ${sticky ? 'sticky-nav' : ''}`}>
            <img src={logo} />

            <div className="side-elements">

                <button className='btn' onClick={openPopup}>
                    Apply Now
                    <span className='btn-icon'>
                        <FaArrowRightLong />
                    </span>
                </button>

            </div>

        </div>



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



        {/* CHILD COMPONENTS */}

        <Hero data={pageData?.hero} openPopup={openPopup} />

        <Bottom/>

        <Course openPopup={openPopup} data={pageData}/>

        <About openPopup={openPopup} data={pageData?.about}/>

        <Stats />

        <Counter openPopup={openPopup}/>

        <Placement/>

        <Trainners data={pageData?.trainers} openPopup={openPopup} />

        <Video data={pageData?.video}/>

        <Join/>

        <Choose data={pageData?.choose}/>

        <Footer data={pageData?.footer}/>

    </div>
  )
}

export default Header