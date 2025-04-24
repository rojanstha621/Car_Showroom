// pages/Purchase.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dummyCars from './CarList';

const Purchase = () => {
  const { carId } = useParams();
  const navigate = useNavigate();
  const car = dummyCars.find(c => c.id === parseInt(carId));
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    financeOption: 'Full Payment',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#e5e5e5] flex items-center justify-center px-4 py-12">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-4xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-center text-[#121212] mb-6">Application for Purchase</h1>

          {car && (
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6 bg-[#f9f9f9] p-4 rounded-lg shadow">
              <img
                src={car.image}
                alt={car.name}
                className="w-full md:w-60 h-40 object-cover rounded-lg"
              />
              <div className="text-center md:text-left">
                <h2 className="text-xl font-semibold text-[#121212]">{car.name}</h2>
                <p className="text-lg text-[#d4af37] font-bold">{car.price}</p>
              </div>
            </div>
          )}
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[#121212] font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-[#121212] font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-[#121212] font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-[#121212] font-medium mb-1">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-[#121212] font-medium mb-1">Finance Option</label>
              <select
                name="financeOption"
                value={formData.financeOption}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
              >
                <option value="Full Payment">Full Payment</option>
                <option value="EMI Plan">EMI Plan</option>
                <option value="Lease">Lease</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#d4af37] text-[#121212] font-semibold py-3 rounded hover:bg-[#b9952c] transition"
            >
              Submit Application
            </button>
          </form>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-[#121212] mb-4">Application Submitted!</h2>
            <p className="text-[#333] mb-6">
              Thank you for your interest in the <span className="font-semibold">{car?.name}</span>. Our team will contact you shortly.
            </p>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-2 bg-[#594E4E] text-white rounded hover:bg-[#463a3a] transition"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Purchase;
