// pages/CarsListing.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dummyCars from './CarList';

const CarsListing = () => {
  const navigate = useNavigate();
  const [selectedCar, setSelectedCar] = useState(dummyCars[0]);

  const handlePurchase = () => {
    navigate(`/purchase/${selectedCar.id}`);
  };

  const handleTestDrive = () => {
    navigate(`/book-test-drive/${selectedCar.id}`);
  };

  const handleCustomize = () => {
    navigate(`/customize/${selectedCar.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-body px-4 md:px-12 py-10 text-[#2c2c2c]">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Car List */}
        <div className="md:w-1/4 space-y-4">
          {dummyCars.map((car) => (
            <div
              key={car.id}
              onClick={() => setSelectedCar(car)}
              className={`p-4 cursor-pointer rounded-lg border shadow-sm hover:shadow-md transition ${
                selectedCar.id === car.id ? 'bg-[#594E4E] text-white' : 'bg-white text-gray-800'
              }`}
              role="button"
            >
              <h2 className="text-lg font-semibold">{car.name}</h2>
              <p className="text-sm">{car.year} • {car.fuel}</p>
            </div>
          ))}
        </div>

        {/* Right: Car Details */}
        <div className="md:w-3/4 bg-white p-6 rounded-xl shadow relative">
          <div className="rounded overflow-hidden shadow mb-6">
            <img
              src={selectedCar.image}
              alt={selectedCar.name}
              className="w-full h-96 object-contain rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <h3 className="text-sm text-gray-500">Price</h3>
              <p className="text-lg font-bold">{selectedCar.price}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <h3 className="text-sm text-gray-500">Mileage</h3>
              <p className="text-lg font-bold">{selectedCar.mileage}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <h3 className="text-sm text-gray-500">Fuel Type</h3>
              <p className="text-lg font-bold">{selectedCar.fuel}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleTestDrive}
              className="bg-[#594E4E] text-white px-6 py-2 rounded hover:bg-[#463a3a] transition"
            >
              Book For Test
            </button>

            <button
              onClick={handleCustomize}
              className="bg-[#d4af37] text-black px-6 py-2 rounded hover:bg-yellow-600 transition"
            >
              Customize
            </button>

            <button
              onClick={handlePurchase}
              className="border border-[#594E4E] text-[#594E4E] px-6 py-2 rounded hover:bg-[#594E4E] hover:text-white transition"
            >
              Apply to Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsListing;
