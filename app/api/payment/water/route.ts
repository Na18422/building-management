// app/api/payment/water/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { amount } = await request.json();

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Invalid amount for water payment' }, { status: 400 });
    }

    return NextResponse.json({ message: `Water payment of $${amount} processed successfully.` });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process water payment' }, { status: 500 });
  }
}
