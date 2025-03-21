import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: 'blue', fontSize: '40px' }}>HOME PAGE</h1>
      <img src="pic.png" alt="Building Image" width={500} height={300} style={{ display: 'block', margin: '0 auto' }} />
    </div>
  );
};

export default Home;
