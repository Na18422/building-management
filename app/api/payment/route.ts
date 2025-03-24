import { NextResponse } from 'next/server';

const express = require('express');
const app = express();
const port = 3000;
const users = {
  u1: { water: 50, electricity: 100, worker: 200 },
  u2: { water: 60, electricity: 110, worker: 220 },
  u3: { water: 55, electricity: 105, worker: 210 },
  u4: { water: 70, electricity: 120, worker: 230 },
  u5: { water: 65, electricity: 115, worker: 215 }
};

app.get('/api/payment/:paymentType/:userId', (req, res) => {
  const { paymentType, userId } = req.params;

  const user = users[userId];
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (paymentType !== 'water' && paymentType !== 'electricity' && paymentType !== 'worker') {
    return res.status(400).json({ error: 'Invalid payment type' });
  }

  return res.json({ amount: user[paymentType] });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
