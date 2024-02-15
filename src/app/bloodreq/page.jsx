"use client";
import React, { useState } from "react";

const Bloodreq = () => {
  const [formData, setformData] = useState({
    bloodType: "",
    quantity: "",
    urgency: "urgent",
    hospital: "",
    additionalInfo: "",
  });
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = () => {};

  return (<>
    <nav class="bg-red-500 p-4">
        <div class="container mx-auto flex justify-between items-center">
            <a href="#" class="text-white text-lg font-semibold">Blood Bank</a>
            <ul class="flex space-x-4">
                <li><a href="#" class="text-white">Home</a></li>
        
            </ul>
        </div>
    </nav>
    <div className="container mx-auto mt-12 px-4">
      <h1 className="text-3xl font-semibold mb-4">Request Blood</h1>
      <form
        className="bg-white p-12 m-12 rounded-lg shadow-2xl"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className ="shadow-lg">
            <label
              for="bloodType"
              className="block text-sm font-medium text-gray-700 "
            >
              Blood Type
            </label>
            <select
              id="bloodType"
              name="bloodType"
              value={formData.bloodType}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className ="shadow-lg">
            <label
              for="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity Needed (in units)
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              onChange={handleChange}
              value={formData.quantity}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"
            />
          </div>
        </div>
        <div className="mt-6 shadow-lg">
          <label
            for="urgency"
            className="block text-sm font-medium text-gray-700"
          >
            Urgency
          </label>
          <select
            id="urgency"
            name="urgency"
            onChange={handleChange}
            value={formData.urgency}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"
          >
            <option value="urgent">Urgent</option>
            <option value="normal">Normal</option>
          </select>
        </div>
        <div className="mt-6 shadow-md">
          <label
            for="hospital"
            className="block text-sm font-medium text-gray-700"
          >
            Hospital Name
          </label>
          <input
            type="text"
            id="hospital"
            name="hospital"
            onChange={handleChange}
            value={formData.hospital}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"
          />
        </div>
        <div className="mt-6 shadow-md">
          <label
            for="additionalInfo"
            className="block text-sm font-medium text-gray-700"
          >
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            onChange={handleChange}
            value={formData.additionalInfo}
            className="mt-1 block h-40 w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"
          ></textarea>
        </div>
        <div className="mt-6 shadow-mg">
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Bloodreq;
