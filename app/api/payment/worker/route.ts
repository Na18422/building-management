// app/api/payment/worker/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { amount } = await request.json();

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Invalid amount for worker payment' }, { status: 400 });
    }

    return NextResponse.json({ message: `Worker payment of $${amount} processed successfully.` });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process worker payment' }, { status: 500 });
  }
}
