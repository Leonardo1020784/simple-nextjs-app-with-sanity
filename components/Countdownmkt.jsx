import React, { useState, useEffect } from 'react';
import './styles/Countdownmkt.css';

function Countdownmkt() {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const calculateCountdown = () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1); // Set the date to tomorrow
      tomorrow.setHours(0, 0, 0, 0); // Set the time to midnight

      const now = new Date();
      const difference = tomorrow - now;

      // Calculate hours, minutes, and seconds
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setCountdown({ hours, minutes, seconds });
    };

    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container">
      {countdown && (
        <div className="countdown-content">
          <p className="countdown-timer">
            <span className="countdown-unit countdown-unit-hours">{countdown.hours}h</span>
            <span className="countdown-unit countdown-unit-minutes">{countdown.minutes}m</span>
            <span className="countdown-unit countdown-unit-seconds">{countdown.seconds}s</span>
          </p>
          <p className="countdown-message"><b>EXPIRAN</b> DESCUENTOS EN TODA LA TIENDA</p>
        </div>
      )}
    </div>
  );
  
}

export default Countdownmkt;
