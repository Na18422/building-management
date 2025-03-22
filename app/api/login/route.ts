// app/api/login/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { roomNumber, password } = await request.json();
    
    if (!roomNumber || !password) {
      return NextResponse.json({ error: 'Room number and password are required' }, { status: 400 });
    }

    if (roomNumber === '123' && password === 'password') {
      return NextResponse.json({ message: 'Login successful' });
    } else {
      return NextResponse.json({ error: 'Invalid room number or password' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process login request' }, { status: 500 });
  }
}
