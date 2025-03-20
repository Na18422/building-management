"use client"; 
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // 导入Link组件，用于页面跳转


interface Resident {
  name: string;
  phone: string;
}

interface Room {
  roomNumber: number;
  resident: Resident;
}

interface Floor {
  floor: number;
  rooms: Room[];
}

const buildingData: Floor[] = [
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
  const [message, setMessage] = useState<string>('');
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleCallMaintenance = async (roomNumber: number, residentName: string, issue: string) => {
    try {
      const res = await fetch(`/api/callMaintenanceWorker?roomNumber=${roomNumber}&residentName=${residentName}&issue=${issue}`);
      const data = await res.json();
      setMessage(data.message);
      setShowPopup(true); 
    } catch (error) {
      setMessage('Error calling maintenance worker');
      setShowPopup(true);  
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setMessage(''); 
  };

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
                    <button 
                      onClick={() => handleCallMaintenance(room.roomNumber, room.resident.name, 'Leaky Pipe')}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition duration-300 mt-2"
                    >
                      Call Maintenance
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold text-center mb-4">Success</h2>
            <p className="text-center text-gray-600">{message}</p>
            <div className="mt-4 text-center">
              <button 
                onClick={closePopup}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href="/dashboard" className="text-blue-600 mx-4">Dashboard</Link>
        <Link href="/notifications" className="text-blue-600 mx-4">Notifications</Link>
        <Link href="/settings" className="text-blue-600 mx-4">Settings</Link>
        <Link href="/about" className="text-blue-600 mx-4">About</Link>
      </div>
    </div>
  );
};

export default BuildingManagement;
