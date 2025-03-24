// app/api/login/route.ts
import { NextResponse } from 'next/server';

const users = [
  { username: 'u1', password: 'p1' },
  { username: 'u2', password: 'p2' },
  { username: 'u3', password: 'p3' },
  { username: 'u4', password: 'p4' },
  { username: 'u5', password: 'p5' }
];

export async function POST(request: Request) {
  try {
    const { roomNumber, password } = await request.json();

    if (!roomNumber || !password) {
      return NextResponse.json({ error: 'Room number and password are required' }, { status: 400 });
    }

    const user = users.find(user => user.username === roomNumber && user.password === password);

    if (user) {
      return NextResponse.json({ message: 'Login successful' });
    } else {
      return NextResponse.json({ error: 'Invalid room number or password' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process login request' }, { status: 500 });
  }
}
