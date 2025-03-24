import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const totalFloors = 5;
  const roomsPerFloor = 10;
  const totalRooms = totalFloors * roomsPerFloor;

  res.status(200).json({
    totalFloors,
    roomsPerFloor,
    totalRooms,
  });
}
