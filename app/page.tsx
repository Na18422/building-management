import React, { useState } from 'react';

const App: React.FC = () => {
  const [selectedFloor, setSelectedFloor] = useState<number | null>(null);

  const floors = [1, 2, 3, 4, 5]; // Example of 5 floors
  const rooms = {
    1: ['101', '102', '103'],
    2: ['201', '202', '203'],
    3: ['301', '302', '303'],
    4: ['401', '402', '403'],
    5: ['501', '502', '503'],
  };
  const residents = {
    1: [
      { name: 'Alice', room: '101' },
      { name: 'Bob', room: '102' },
    ],
    2: [
      { name: 'Charlie', room: '201' },
      { name: 'Dave', room: '202' },
    ],
    3: [
      { name: 'Eve', room: '301' },
      { name: 'Frank', room: '302' },
    ],
    4: [
      { name: 'Grace', room: '401' },
      { name: 'Heidi', room: '402' },
    ],
    5: [
      { name: 'Ivy', room: '501' },
      { name: 'Jack', room: '502' },
    ],
  };

  const handleFloorSelect = (floorId: number) => {
    setSelectedFloor(floorId);
  };

  return (
    <div>
      <h1>Building Management</h1>
      <div>
        <h2>Floor List</h2>
        <ul>
          {floors.map((floor) => (
            <li key={floor} onClick={() => handleFloorSelect(floor)}>
              Floor {floor}
            </li>
          ))}
        </ul>
      </div>

      {selectedFloor !== null && (
        <>
          <div>
            <h2>Room List for Floor {selectedFloor}</h2>
            <ul>
              {rooms[selectedFloor].map((room) => (
                <li key={room}>{room}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Residents on Floor {selectedFloor}</h2>
            <ul>
              {residents[selectedFloor].map((resident) => (
                <li key={resident.room}>
                  {resident.name} - Room {resident.room}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
