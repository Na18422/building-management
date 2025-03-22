import React from 'react';

const Staff: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '80px', backgroundColor: '#ADD8E6', color: 'white' }}>
        BUILDING MANAGEMENT
      </h1>
      <br /><br />
      <h2 style={{ fontSize: '40px' }}>Staff</h2>
      <br /><br />

      <table style={{ margin: '0 auto', border: '1px solid black', padding: '10px' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', fontSize: '18px' }}>Role</th>
            <th style={{ padding: '10px', fontSize: '18px' }}>Name</th>
            <th style={{ padding: '10px', fontSize: '18px' }}>Image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px' }}>Chairman</td>
            <td style={{ padding: '10px' }}>Mr.Lightning McQueen</td>
            <td style={{ padding: '10px' }}>
              <img
                src="staff1.png" 
                alt="Lightning McQueen"
                style={{ width: '100px', height: '100px', borderRadius: '50%' }}
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Committee Member</td>
            <td style={{ padding: '10px' }}>Mr.守角冠军</td>
            <td style={{ padding: '10px' }}>
              <img
                src="staff2.png"
                alt="守角冠军"
                style={{ width: '100px', height: '100px', borderRadius: '50%' }}
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Committee Member</td>
            <td style={{ padding: '10px' }}>Mr.CCB</td>
            <td style={{ padding: '10px' }}>
              <img
                src="staff3.png"
                alt="CCB"
                style={{ width: '100px', height: '100px', borderRadius: '50%' }}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <a href="https://building-management-l77j.vercel.app/" rel="noopener noreferrer" style={{ color: 'blue', fontSize: '24px', display: 'block', marginBottom: '10px' }}>
          Back To Home
      </a>
    </div>
  );
};

export default Staff;
