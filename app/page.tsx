import React from "react";
import Image from "next/image";

const buildingData = [
  {
    floor: 1,
    rooms: [
      { roomNumber: 101, resident: { name: "John Doe", phone: "123-456-7890" } },
      { roomNumber: 102, resident: { name: "Jane Smith", phone: "987-654-3210" } },
      { roomNumber: 103, resident: { name: "Jim Brown", phone: "555-123-4567" } },
    ],
  },
  {
    floor: 2,
    rooms: [
      { roomNumber: 201, resident: { name: "Alice Green", phone: "111-222-3333" } },
      { roomNumber: 202, resident: { name: "Bob White", phone: "444-555-6666" } },
      { roomNumber: 203, resident: { name: "Charlie Black", phone: "777-888-9999" } },
    ],
  },
  {
    floor: 3,
    rooms: [
      { roomNumber: 301, resident: { name: "David Blue", phone: "888-999-0000" } },
      { roomNumber: 302, resident: { name: "Eva Red", phone: "555-666-7777" } },
      { roomNumber: 303, resident: { name: "Frank Yellow", phone: "123-234-5678" } },
    ],
  },
];

const BuildingManagement = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Building Management</h1>

      <div className="flex justify-center mb-8">
        <Image
          src="/pic.png"
          alt="Building Image"
          width={400}
          height={300}
        />
      </div>

      <div className="space-y-8">
        {buildingData.map((floor, floorIndex) => (
          <div key={floorIndex} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Floor {floor.floor}</h2>

            <div className="space-y-4">
              {floor.rooms.map((room, roomIndex) => (
                <div key={roomIndex} className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                  <div>
                    <p className="text-lg font-medium text-gray-800">Room {room.roomNumber}</p>
                    <p className="text-sm text-gray-600">Resident: {room.resident.name}</p>
                    <p className="text-sm text-gray-600">Phone: {room.resident.phone}</p>
                  </div>
                  <div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition duration-300">
                      Contact
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildingManagement;

