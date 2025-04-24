import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookTestDrive = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    license: '',
    route: '',
    date: '',
    time: '',
    location: '',
    comments: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required.';
    if (!form.license.trim()) newErrors.license = 'License number is required.';
    if (!form.route.trim()) newErrors.route = 'Route is required.';
    if (!form.date) newErrors.date = 'Date is required.';
    if (!form.time) newErrors.time = 'Time is required.';
    if (!form.location.trim()) newErrors.location = 'Location is required.';
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(`/schedule-confirmation/${id}`);
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-5 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-yellow-500 mb-6">Book Your Test Drive</h1>
      <p className="text-center text-gray-700 mb-8">Booking for <strong>Car ID: {id}</strong></p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: 'fullName', label: 'Full Name', type: 'text' },
          { name: 'email', label: 'Email Address', type: 'email' },
          { name: 'phone', label: 'Phone Number', type: 'tel' },
          { name: 'license', label: 'License Number', type: 'text' },
          { name: 'route', label: 'Preferred Route', type: 'text' },
          { name: 'location', label: 'Test Drive Location', type: 'text' },
          { name: 'date', label: 'Preferred Date', type: 'date' },
          { name: 'time', label: 'Preferred Time', type: 'time' },
        ].map(({ name, label, type }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input
              type={type}
              name={name}
              value={form[name]}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            {errors[name] && <p className="text-sm text-red-500 mt-1">{errors[name]}</p>}
          </div>
        ))}
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Additional Comments (optional)</label>
        <textarea
          name="comments"
          rows="4"
          value={form.comments}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400 focus:outline-none"
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`mt-8 w-full py-3 rounded text-lg font-semibold transition ${
          loading
            ? 'bg-gray-400 text-white cursor-not-allowed'
            : 'bg-black text-white hover:bg-yellow-500 hover:text-black'
        }`}
      >
        {loading ? 'Booking...' : 'Confirm Test Drive'}
      </button>
    </div>
  );
};

export default BookTestDrive;
