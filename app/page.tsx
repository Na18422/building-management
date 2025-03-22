import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: 'center'}}>
      <h1 style={{ fontSize: '80px'  backgroundColor: 'blue' color: 'white' }}>BUILDING MANAGEMENT</h1>
      <h2 style={{ fontSize: '40px' }}>HOME PAGE</h2>
      <img src="pic.png" alt="Building Image" width={500} height={300} style={{ display: 'block', margin: '0 auto' }} />
      <br /><br />
      <a href="/about"  rel="noopener noreferrer" style={{ color: 'blue', fontSize: '24px', display: 'block', marginBottom: '10px' }}>
          click me to about
      </a>
      <br />
      <a href="/LogIn"  rel="noopener noreferrer" style={{ color: 'blue', fontSize: '24px', display: 'block', marginBottom: '10px' }}>
          LogIn
      </a>
    </div>
  );
};

export default Home;
