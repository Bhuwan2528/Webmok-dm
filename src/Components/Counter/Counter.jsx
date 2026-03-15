import React, { useState, useEffect } from "react";
import "./Counter.css";

const Countdown = ({openPopup}) => {
  // Create a fixed target date (only once)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 15); // 15 days from now

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <div className="countdown-text">
        <h2>New Batch Started Soon</h2>
        <p>Get a Chance to get learned from us and become a expert in Digital Marketing</p>
      </div>
      <div className="countdown-timer">
        <div className="time-box">
          <span>{timeLeft.days}</span>
          <p>Days</p>
        </div>
        <div className="time-box">
          <span>{timeLeft.hours}</span>
          <p>Hours</p>
        </div>
        <div className="time-box">
          <span>{timeLeft.minutes}</span>
          <p>Minutes</p>
        </div>
        <div className="time-box">
          <span>{timeLeft.seconds}</span>
          <p>Seconds</p>
        </div>
      </div>
      <button className="sq-btn" onClick={openPopup}>Register Now</button>
    </div>
  );
};

export default Countdown;
