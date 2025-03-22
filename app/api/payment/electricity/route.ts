// app/api/payment/electricity/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { amount } = await request.json();

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Invalid amount for electricity payment' }, { status: 400 });
    }

    return NextResponse.json({ message: `Electricity payment of $${amount} processed successfully.` });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process electricity payment' }, { status: 500 });
  }
}
