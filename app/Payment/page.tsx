import React from 'react';

const Payment: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '80px', backgroundColor: '#ADD8E6', color: 'white'}}>BUILDING MANAGEMENT</h1>
      <br /><br />
      <h2 style={{ fontSize: '40px' }}>Payment</h2>
      <br /><br />
       <button  style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>
        Pay for Water
      </button>

       <br /><br />
       <button  style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>
        Pay for Elec
      </button>


       <br /><br />
       <button  style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>
        Pay for Worker
      </button>



      <br /><br />
      <a href="https://building-management-l77j.vercel.app/" rel="noopener noreferrer" style={{ color: 'blue', fontSize: '24px', display: 'block', marginBottom: '10px' }}>
          Back To Home
      </a>
    </div>
  );
};

export default Payment;
