import React, { useEffect, useState } from 'react';
import './progress-line.css';

const ProgressLine = () => {
  const [progressWidth, setProgressWidth] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress =  (scrollPosition / maxScrollHeight) * 100 ;
    setProgressWidth(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className ="progress-line-container">
    <div className="progress-line">
      <div className="progress" style={{ width: `${progressWidth}%` }}></div>
    </div>
    </div>
  );
};

export default ProgressLine;
