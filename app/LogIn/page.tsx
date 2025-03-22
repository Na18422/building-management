"use client";
import React, { useState } from 'react';

const LogIn: React.FC = () => {
  const [roomNumber, setRoomNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Room number:', roomNumber);
    console.log('Password:', password);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '80px'}}>BUILDING MANAGEMENT</h1>
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
        
        <input type="submit" value="LogIn" style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }} />
      </form>

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
