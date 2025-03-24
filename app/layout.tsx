import type { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default function handler(req: NextRequest) {
  const totalFloors = 5;
  const roomsPerFloor = 10;
  const totalRooms = totalFloors * roomsPerFloor;

  return new Response(
    JSON.stringify({
      totalFloors,
      roomsPerFloor,
      totalRooms,
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
