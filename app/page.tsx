import React from 'react';
import Image from 'next/image';


const Home: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: 'blue', fontSize: '40px' }}>BUILDING MANAGEMENT</h1>
    </div>

     <div style={{ textAlign: 'center' }}>
      <Image
        src="pic.png"  
        alt="Building Image" 
        width={500}           
        height={300}         
      />
  </div>

  );
};

export default Home;
