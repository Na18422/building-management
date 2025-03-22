"use client";
import React, { useState } from 'react';

const Payment: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handlePayment = async (paymentType: string, amount: number) => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await fetch(`/api/payment/${paymentType}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('Failed to process payment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '80px', backgroundColor: '#ADD8E6', color: 'white' }}>BUILDING MANAGEMENT</h1>
      <br /><br />
      <h2 style={{ fontSize: '40px' }}>Payment</h2>
      <br /><br />

      <button
        onClick={() => handlePayment('water', 50)}  
        style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Pay for Water'}
      </button>

      <br /><br />
      <button
        onClick={() => handlePayment('electricity', 100)}  
        style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Pay for Elec'}
      </button>

      <br /><br />
      <button
        onClick={() => handlePayment('worker', 200)}  
        style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Pay for Worker'}
      </button>

      <br /><br />
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <br /><br />
      <a href="https://building-management-l77j.vercel.app/" rel="noopener noreferrer" style={{ color: 'blue', fontSize: '24px', display: 'block', marginBottom: '10px' }}>
        Back To Home
      </a>
    </div>
  );
};

export default Payment;
