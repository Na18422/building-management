app.get('/api/payment/:paymentType', (req, res) => {
  const { paymentType } = req.params;

  if (paymentType === 'water') {
    return res.json({ amount: 50 });
  } else if (paymentType === 'electricity') {
    return res.json({ amount: 100 });
  } else if (paymentType === 'worker') {
    return res.json({ amount: 200 });
  } else {
    return res.status(400).json({ error: 'Invalid payment type' });
  }
});
