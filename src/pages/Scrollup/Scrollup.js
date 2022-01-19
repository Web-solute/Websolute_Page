import React, { useState, useEffect } from 'react';
import './style.css'

const Scrollup = () => {
  const [scrollY, setScrollY] = useState(0);
  const [buttonStatus, setButtonStatus] = useState(false);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 100) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setScrollY(0);
    setButtonStatus(false);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow);
    };
  });

  return (
    <div>
      {buttonStatus ? (
        <a
          onClick={handleTop}
          className="scroll_a"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 15l7-7 7 7"></path>
          </svg>
        </a>
      ) : null}
    </div>
  );
};

export default Scrollup;
