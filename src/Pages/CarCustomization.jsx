import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dummyCars from './CarList';

const CarCustomization = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [exterior, setExterior] = useState('');
  const [interior, setInterior] = useState('');
  const [wheels, setWheels] = useState('');
  const [addons, setAddons] = useState([]);

  useEffect(() => {
    const selected = dummyCars.find(c => c.id.toString() === id);
    setCar(selected);
  }, [id]);

  const toggleAddon = (addon) => {
    setAddons(prev => prev.includes(addon) ? prev.filter(a => a !== addon) : [...prev, addon]);
  };

  const handleContinueToBooking = () => {
    // Ideally, pass configuration data via state or context
    navigate(`/purchase/${car.id}`);
  };

  const backgroundByExterior = {
    Red: 'bg-red-50',
    Black: 'bg-gray-900 text-white',
    White: 'bg-white',
    Blue: 'bg-blue-50',
    Silver: 'bg-gray-100',
  };

  const colorStyles = {
    Red: 'bg-red-600 text-white border-red-600',
    Black: 'bg-[#121212] text-white border-[#121212]',
    White: 'bg-white text-black border-gray-300',
    Blue: 'bg-blue-600 text-white border-blue-600',
    Silver: 'bg-[#e5e5e5] text-[#121212] border-[#e5e5e5]',
  };

  const carImageByColor = {
    Red: car?.imageRed || car?.image,
    Black: car?.imageBlack || car?.image,
    White: car?.imageWhite || car?.image,
    Blue: car?.imageBlue || car?.image,
    Silver: car?.imageSilver || car?.image,
  };

  if (!car) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className={`min-h-screen px-4 md:px-20 py-10 font-body transition ${backgroundByExterior[exterior] || 'bg-[#f8f8f8]'}`}>
      <h1 className="text-3xl font-bold text-center mb-10">Customize Your {car.name}</h1>

      {/* Car Image */}
      <div className="bg-white p-4 rounded-xl shadow mb-10">
        <img
          src={carImageByColor[exterior] || car.image}
          alt={car.name}
          className="w-full h-[400px] object-contain mx-auto rounded"
        />
      </div>

      {/* Exterior */}
      <section className="mb-10 bg-[#fdf8f0] p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-[#594E4E]">1. Choose Exterior Color</h2>
        <div className="flex gap-4 flex-wrap">
          {Object.keys(colorStyles).map(color => (
            <button
              key={color}
              className={`px-5 py-2 rounded-full border-2 transition-all duration-300 ${exterior === color ? colorStyles[color] : 'bg-white text-[#121212] border-gray-300 hover:border-[#d4af37]'}`}
              onClick={() => setExterior(color)}
            >
              {color}
            </button>
          ))}
        </div>
      </section>

      {/* Interior */}
      <section className="mb-10 bg-[#f0f9ff] p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-[#594E4E]">2. Choose Interior Material</h2>
        <div className="flex gap-4 flex-wrap">
          {['Leather', 'Suede', 'Alcantara'].map(material => (
            <button
              key={material}
              className={`px-5 py-2 rounded-full border-2 transition-all duration-300 ${
                interior === material
                  ? 'bg-[#d4af37] text-white border-[#d4af37]'
                  : 'bg-white text-[#121212] border-gray-300 hover:border-[#d4af37]'
              }`}
              onClick={() => setInterior(material)}
            >
              {material}
            </button>
          ))}
        </div>
      </section>

      {/* Wheels */}
      <section className="mb-10 bg-[#fef9f3] p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-[#594E4E]">3. Choose Wheel Design</h2>
        <div className="flex gap-4 flex-wrap">
          {['18” Sport Wheels', '19” Black Alloy', '20” Chrome'].map(option => (
            <button
              key={option}
              className={`px-5 py-2 rounded-full border-2 transition-all duration-300 ${
                wheels === option
                  ? 'bg-[#d4af37] text-white border-[#d4af37]'
                  : 'bg-white text-[#121212] border-gray-300 hover:border-[#d4af37]'
              }`}
              onClick={() => setWheels(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="mb-10 bg-[#f0f0f0] p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-[#594E4E]">4. Select Add-ons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Sport Package', 'Panoramic Roof', 'Premium Sound', 'Driver Assist', 'Carbon Fiber Trim'].map(addon => (
            <label
              key={addon}
              className="flex items-center gap-3 p-3 bg-white border rounded-lg shadow-sm hover:shadow transition"
            >
              <input
                type="checkbox"
                checked={addons.includes(addon)}
                onChange={() => toggleAddon(addon)}
              />
              <span>{addon}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Summary + Booking Button */}
      <section className="bg-white p-6 rounded-xl shadow mt-10">
        <h2 className="text-xl font-semibold mb-4 text-[#594E4E]">Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <p><strong>Model:</strong> {car.name}</p>
          <p><strong>Exterior:</strong> {exterior || 'Not selected'}</p>
          <p><strong>Interior:</strong> {interior || 'Not selected'}</p>
          <p><strong>Wheels:</strong> {wheels || 'Not selected'}</p>
          <p><strong>Add-ons:</strong> {addons.length > 0 ? addons.join(', ') : 'None selected'}</p>
        </div>
        <div className="text-center">
          <button
            onClick={handleContinueToBooking}
            className={`px-8 py-3 rounded-xl text-white font-semibold transition ${
              exterior && colorStyles[exterior]
                ? colorStyles[exterior]
                : 'bg-[#594E4E]'
            } hover:opacity-90`}
          >
            Continue to Booking
          </button>
        </div>
      </section>
    </div>
  );
};

export default CarCustomization;
