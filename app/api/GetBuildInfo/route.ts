// app/api/GetBuildInfo/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://building.com/api/building-address', {
      method: 'GET',
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json({ address: data.address });
    } else {
      return NextResponse.json({ error: `HTTP error! status: ${response.status}` }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch building address" }, { status: 500 });
  }
}
