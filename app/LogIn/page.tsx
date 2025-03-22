import React from 'react';

const LogIn: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '40px' }}>BUILDING MANAGEMENT</h1>
      <h2 style={{ fontSize: '40px' }}>LogIn</h2>
      <br /><br />

{/*       <label>roomnumber：</label>
      <input type="text" id="rmnb" name="roomnumber" required><br><br>
       <label>password：</label>
      <input type="password" id="psw" name="password" required><br><br>
      <input type="submit" value="LogIn"> */}

      <br /><br />
      <a href="https://building-management-l77j.vercel.app/" rel="noopener noreferrer" style={{ color: 'blue', fontSize: '24px', display: 'block', marginBottom: '10px' }}>
          Back To Home
      </a>
    </div>
  );
};

export default Login;
