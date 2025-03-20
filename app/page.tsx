import React from "react";

const BuildingManagement = () => {
  const floors = [
    { floor: 1, rooms: [101, 102, 103] },
    { floor: 2, rooms: [201, 202, 203] },
    { floor: 3, rooms: [301, 302, 303] },
  ];

  return (
    <div>
      <h1>Building Management</h1>
      <div>
        {floors.map((floor, index) => (
          <div key={index}>
            <h2>Floor {floor.floor}</h2>
            <ul>
              {floor.rooms.map((room, roomIndex) => (
                <li key={roomIndex}>Room {room}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildingManagement;
