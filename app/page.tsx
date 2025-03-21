import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: 'blue', fontSize: '40px' }}>BUILDING MANAGEMENT</h1>
      <h2 style={{ color: 'blue', fontSize: '40px' }}>HOME PAGE</h2>
      <img src="pic.png" alt="Building Image" width={500} height={300} style={{ display: 'block', margin: '0 auto' }} />

      <a href="/about" target="_blank" rel="noopener noreferrer">
          About
      </a>
    </div>
  );
};

export default Home;
