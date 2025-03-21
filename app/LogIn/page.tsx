"use client";
import React, { useState } from 'react';

const LogIn: React.FC = () => {
  const [roomNumber, setRoomNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const loginData = {
      roomNumber: roomNumber,
      password: password
    };

    try {
      const response = await fetch('/api/login', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),  
      });

      if (response.ok) {
        const data = await response.json();
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Login failed');
      }
    } catch (error) {
      setError("Failed to send data to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '80px', backgroundColor: '#ADD8E6', color: 'white' }}>BUILDING MANAGEMENT</h1>
      <br /><br />
      <h2 style={{ fontSize: '40px' }}>LogIn</h2>
      <br /><br />

      <form onSubmit={handleSubmit}>
        <label htmlFor="rmnb" style={{ fontSize: '20px' }}>Room number:</label>
        <input
          type="text"
          id="rmnb"
          name="roomnumber"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          required
          style={{ padding: '10px', fontSize: '18px' }}
        /><br /><br />
        
        <label htmlFor="psw" style={{ fontSize: '20px' }}>Password:</label>
        <input
          type="password"
          id="psw"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: '10px', fontSize: '18px' }}
        /><br /><br />
        
        <input 
          type="submit" 
          value={loading ? 'Logging In...' : 'LogIn'} 
          style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }} 
          disabled={loading}
        />
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>} 

      <br /><br />

      <a
        href="https://building-management-l77j.vercel.app/"
        rel="noopener noreferrer"
        style={{
          color: 'blue',
          fontSize: '24px',
          display: 'block',
          marginBottom: '10px',
        }}
      >
        Back To Home
      </a>
    </div>
  );
};

export default LogIn;

