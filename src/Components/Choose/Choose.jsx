import React, { useEffect } from 'react'
import './Choose.css'
import advance from '../../assets/Advanced.png'
import hands from '../../assets/blog.png'
import individual from '../../assets/indvidual.png'
import AOS from "aos";
import "aos/dist/aos.css";

/* fallback content */

const fallbackChoose = [
  {
    image: advance,
    title: "Advanced Curriculum",
    description:
      "Our courses are designed with an advanced curriculum that blends theory with real-world applications. Each module is crafted by industry professionals to ensure you learn the latest tools, strategies, and best practices. <br><br>  We focus on hands-on training, live projects, and case studies, giving you the skills and confidence to excel in today’s competitive job market.",
  },
  {
    image: hands,
    title: "Hands On Experience",
    description:
      "Gain practical knowledge through live projects, real-world case studies, and interactive sessions with industry experts.   <br>   We focus on applying concepts in real scenarios, helping you develop problem-solving skills and professional confidence. This approach ensures you’re job-ready, equipped with relevant experience, and prepared to handle workplace challenges with ease.",
  },
  {
    image: individual,
    title: "Individual Guidance and Support",
    description:
      "We provide personalized attention to every student, ensuring that learning needs and career goals are addressed effectively. Our mentors work closely with you, offering constructive feedback and guidance at every step. <br>    From solving subject-related doubts to giving career advice, we make sure you always have the right support. This one-on-one approach builds confidence, enhances skills, and prepares you to succeed in both academic and professional challenges.",
  }
];

const Choose = ({ data }) => {

  useEffect(() => {

    const isMobile = window.innerWidth <= 768;

    AOS.init({
      offset: isMobile ? 50 : 300,
      duration: 1000,
      once: false
    });

  }, []);

  /* agar server data nahi hai to fallback use hoga */

  const chooseData = data && data.length ? data : fallbackChoose;

  return (

    <div className='choose'>

      <h4>Why Choose Us</h4>

{chooseData.map((item, index) => (

  <div
    className="choose-card"
    key={index}
    data-aos="fade-up"
    data-aos-delay="200"
    data-aos-anchor-placement="top-bottom"
  >

    <div className="card-left">
      <img src={item.image || individual} alt={item.title || "choose"} />
    </div>

    <div className="card-right">
      <h3>{item.title || "Default Title"}</h3>

      <p
        dangerouslySetInnerHTML={{
          __html: item?.description || "Default description"
        }}
      ></p>

    </div>

  </div>

))}

    </div>
  )
}

export default Choose