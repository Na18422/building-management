"use client";
import React, { useState } from 'react';

const Payment: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [feeAmount, setFeeAmount] = useState<number | null>(null);

  const handlePayment = async (paymentType: string) => {
    setError(null);
    setMessage(null);
    setFeeAmount(null);

    try {
      const response = await fetch(`/api/payment/${paymentType}`);
      const data = await response.json();
      if (response.ok) {
        setFeeAmount(data.amount);
        setMessage(`Amount to pay for ${paymentType}: $${data.amount}`);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('Failed to fetch payment amount');
    }
  };

  const makePayment = async (paymentType: string) => {
    if (!feeAmount) return;

    setError(null);
    setMessage(null);

    try {
      const response = await fetch(`/api/payment/${paymentType}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(`Payment of $${feeAmount} for ${paymentType} successful`);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('Failed to process payment');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '80px', backgroundColor: '#ADD8E6', color: 'white' }}>BUILDING MANAGEMENT</h1>
      <br /><br />
      <h2 style={{ fontSize: '40px' }}>Check Payment</h2>
      <br /><br />

      <button
        onClick={() => handlePayment('water')}
        style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Check Water Payment
      </button>

      <br /><br />
      <button
        onClick={() => handlePayment('electricity')}
        style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Check Electricity Payment
      </button>

      <br /><br />
      <button
        onClick={() => handlePayment('worker')}
        style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Check Worker Payment
      </button>

      <br /><br />
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {feeAmount && (
        <div>
          <br />
          <button
            onClick={() => makePayment('water')}
            style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}
          >
            Pay for Water ($${feeAmount})
          </button>

          <br /><br />
          <button
            onClick={() => makePayment('electricity')}
            style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}
          >
            Pay for Electricity ($${feeAmount})
          </button>

          <br /><br />
          <button
            onClick={() => makePayment('worker')}
            style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}
          >
            Pay for Worker ($${feeAmount})
          </button>
        </div>
      )}

      <br /><br />
      <a href="https://building-management-l77j.vercel.app/" rel="noopener noreferrer" style={{ color: 'blue', fontSize: '24px', display: 'block', marginBottom: '10px' }}>
        Back To Home
      </a>
    </div>
  );
};

export default Payment;
