import React, { useEffect } from 'react';
import './App.css';

const Clock = () => {
  useEffect(() => {
    const loadingClock = () => {
      const sec = document.querySelector('.sec');
      const min = document.querySelector('.min');
      const hr = document.querySelector('.hr');
      const digitalClock = document.querySelector('.digital-clock');
      const deg = 6;
      const date = new Date();
      const ss = date.getSeconds() * deg;
      const mm = date.getMinutes() * deg;
      const hh = (date.getHours() % 12) * 30 + date.getMinutes() * 0.5;
      sec.style.transform = `translateX(-50%) rotateZ(${ss}deg)`;
      min.style.transform = `translateX(-50%) rotateZ(${mm}deg)`;
      hr.style.transform = `translateX(-50%) rotateZ(${hh}deg)`;
      digitalClock.textContent = date.toLocaleTimeString();
    };
    const intervalId = setInterval(loadingClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
  };

  return (
    <div style={containerStyle}>
        <div className="clock">
          <div className="sec"></div>
          <div className="min"></div>
          <div className="hr"></div>
          <div className="digital-clock"></div>
          <a href="https://github.com/StarKnightt/Analog-Clock-React.js-" className="github-link" target="_blank" rel="noopener noreferrer">
          StarKnightt
        </a>
        {/* YOu can add clock numbers here too */}
        {/* {[...Array(12).keys()].map((i) => (
          <div key={i} className="number" style={{ '--rotation': `${30 * i}deg` }}>
            {i === 0 ? 12 : i}
          </div>
        ))} */}
          {[...Array(60).keys()].map((i) => (
            <div key={i} className={`digit ${i % 5 === 0 ? 'long' : ''}`} style={{ '--i': i + 1 }}></div>
          ))}
        </div>
      </div>
  );
};

export default Clock;