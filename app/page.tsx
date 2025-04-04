"use client";
import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '80px', backgroundColor: '#ADD8E6', color: 'white' }}>BUILDING MANAGEMENT</h1>
      <br /><br />
      <h2 style={{ fontSize: '40px' }}>HOME PAGE</h2>
      <br /><br />
      <img src="pic.png" alt="Building Image" width={500} height={300} style={{ display: 'block', margin: '0 auto' }} />
      <br /><br />
      {loggedInUser && <h3 style={{ fontSize: '24px' }}>Logged in as: {loggedInUser}</h3>}
      <br /><br />
      <a href="/LogIn"  rel="noopener noreferrer" style={{ color: 'blue', fontSize: '24px', display: 'block', marginBottom: '10px' }}>
        LogIn
      </a>
      <br />
      <a href="/Payment"  rel="noopener noreferrer" style={{ color: 'blue', fontSize: '24px', display: 'block', marginBottom: '10px' }}>
        Check Payment
      </a>
      <br />
      <a href="/Staff"  rel="noopener noreferrer" style={{ color: 'blue', fontSize: '24px', display: 'block', marginBottom: '10px' }}>
        Meet Our Staff
      </a>
      <br />
      <a href="/about"  rel="noopener noreferrer" style={{ color: 'blue', fontSize: '24px', display: 'block', marginBottom: '10px' }}>
        About
      </a>
      <br />
    </div>
  );
};

export default Home;
