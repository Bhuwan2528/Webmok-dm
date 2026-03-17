import React from 'react';
import './Placement.css';

// Importing 24 partner logos
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.webp';
import p3 from '../../assets/p3.png';
import p4 from '../../assets/p4.png';
import p5 from '../../assets/p5.png';
import p6 from '../../assets/p6.png';
import p7 from '../../assets/p7.png';
import p8 from '../../assets/p8.webp';
import p9 from '../../assets/p9.png';
import p10 from '../../assets/p10.png';
import p11 from '../../assets/p11.png';
import p12 from '../../assets/p12.jpg';
import p13 from '../../assets/p13.png';
import p14 from '../../assets/p14.png';
import p15 from '../../assets/p15.png';
import p16 from '../../assets/p16.svg';
import p17 from '../../assets/p17.png';
import p18 from '../../assets/p18.png';
import p19 from '../../assets/p19.png';
import p20 from '../../assets/p20.png';
import p21 from '../../assets/p21.jpeg';
import p22 from '../../assets/p22.webp';
import p23 from '../../assets/p23.png';
import p24 from '../../assets/p24.webp';

const slider1 = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];
const slider2 = [p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24];

export default function Placement() {
  return (
    <div className="placement-partners">

        <h2>Our Placement Partners</h2> 

      {/* First Slider */}
      <div className="slider slider-left-to-right">
        <div className="slide-track">
          {slider1.concat(slider1).map((img, index) => (
            <div className="slide" key={index}>
              <div className="img-box">
                <img src={img} alt={`partner-${index}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Slider */}
      <div className="slider slider-right-to-left">
        <div className="slide-track">
          {slider2.concat(slider2).map((img, index) => (
            <div className="slide" key={index}>
              <div className="img-box">
                <img src={img} alt={`partner-${index}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
