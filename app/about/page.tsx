"use client";
import React, { useState } from "react";

const About: React.FC = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleButtonClick = async () => {
    setError(null);

    try {
      const response = await fetch("/api/GetBuildInfo");

      if (response.ok) {
        const data = await response.json();
        setAddress(data.address);
        alert(`Building Address: ${data.address}`);
      } else {
        const errorData = await response.json();
        setError(errorData.error);
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      setError("Failed to fetch building address");
      alert("Failed to fetch building address");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "80px", backgroundColor: "#ADD8E6", color: "white" }}>
        BUILDING MANAGEMENT
      </h1>
      <br />
      <br />
      <h2 style={{ fontSize: "40px" }}>About</h2>
      <br />
      <br />

      <button
        onClick={handleButtonClick}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Get More Information About Building
      </button>

      <br />
      <br />
      <a
        href="https://building-management-l77j.vercel.app/"
        rel="noopener noreferrer"
        style={{
          color: "blue",
          fontSize: "24px",
          display: "block",
          marginBottom: "10px",
        }}
      >
        Back To Home
      </a>
    </div>
  );
};

export default About;
