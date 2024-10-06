import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
    }, 100); // Adjust the time for how fast you want the bar to fill

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div style={styles.container}>
       <div style={{ ...styles.progressBar, width: `${progress}%` }} />
    </div>
  );
};

const styles = {
  container: {
    width: '500px',
    height: '10px',
    backgroundColor: '#404040', // Grey background like Spotify
    borderRadius: '5px',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#1DB954', // Spotify green
    borderRadius: '5px',
    transition: 'width 0.1s linear', // Smooth transition
  },
};

export default ProgressBar;


// Log to console
console.log('Hello console')