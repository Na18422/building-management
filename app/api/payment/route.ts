// app/api/payment/[paymentType]/route.ts
export async function GET(req: Request, { params }: { params: { paymentType: string } }) {
  const { paymentType } = params;

  const users = {
    u1: { water: 50, electricity: 100, worker: 200 },
    u2: { water: 60, electricity: 110, worker: 220 },
    u3: { water: 55, electricity: 105, worker: 210 },
    u4: { water: 70, electricity: 120, worker: 230 },
    u5: { water: 65, electricity: 115, worker: 215 }
  };

  const userId = req.headers.get('user-id'); // 假设你从请求头中获得用户ID

  if (!userId || !users[userId]) {
    return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
  }

  const paymentAmount = users[userId][paymentType];

  if (paymentAmount === undefined) {
    return new Response(JSON.stringify({ error: 'Invalid payment type' }), { status: 400 });
  }

  return new Response(JSON.stringify({ amount: paymentAmount }), { status: 200 });
}
