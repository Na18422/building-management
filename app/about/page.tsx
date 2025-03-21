import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '40px' }}>BUILDING MANAGEMENT</h1>
      <h2 style={{ fontSize: '40px' }}>AboutE</h2>
      <br /><br />

      <button  style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>
        Get More Information About Building
      </button>
      
      <a href="/page" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', fontSize: '24px', display: 'block', marginBottom: '10px' }}>
          Back To Home
      </a>
    </div>
  );
};

export default About;
