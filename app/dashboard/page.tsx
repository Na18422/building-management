"use client";

import React, { useState } from "react";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 使用 fetch 发送 POST 请求
    try {
      const response = await fetch("/api/submitUserData", {
        method: "POST", // 使用 POST 请求
        headers: {
          "Content-Type": "application/json", // 数据格式是 JSON
        },
        body: JSON.stringify(formData), // 将表单数据转为 JSON 格式发送
      });

      const result = await response.json(); // 处理响应
      setSubmittedData(result); // 将服务器返回的数据存储在状态中
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Sign in</h1>
      <p className="text-lg text-center text-gray-600 mb-8">Welcome to the Signin!</p>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {submittedData && (
        <div className="mt-8 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Submitted Information</h2>
          <p className="text-lg text-gray-600">Name: {submittedData.name}</p>
          <p className="text-lg text-gray-600">Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
