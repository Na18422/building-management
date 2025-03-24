// app/api/payment/route.ts

export async function GET(req: Request) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);

  const userId = searchParams.get('id');
  const paymentType = searchParams.get('paymentType');

  const userPayments: { [key: string]: { water: number; electricity: number; worker: number } } = {
    u1: { water: 50, electricity: 100, worker: 200 },
    u2: { water: 60, electricity: 110, worker: 210 },
    u3: { water: 70, electricity: 120, worker: 220 },
    u4: { water: 80, electricity: 130, worker: 230 },
    u5: { water: 90, electricity: 140, worker: 240 },
  };

  if (!userId || !paymentType) {
    return new Response(JSON.stringify({ error: 'User ID and payment type are required' }), { status: 400 });
  }

  const userPayment = userPayments[userId];

  if (!userPayment) {
    return new Response(JSON.stringify({ error: 'Invalid user ID' }), { status: 400 });
  }

  const amount = userPayment[paymentType];

  if (amount === undefined) {
    return new Response(JSON.stringify({ error: 'Invalid payment type' }), { status: 400 });
  }

  return new Response(JSON.stringify({ amount }), { status: 200 });
}
