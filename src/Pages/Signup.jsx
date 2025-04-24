import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const user = { email, password };
    localStorage.setItem('royalUser', JSON.stringify(user));
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-royal-black flex items-center justify-center px-4">
      <form
        onSubmit={handleSignup}
        className="bg-royal-white text-royal-black p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-royal-gold">Sign Up</h2>

        {error && <p className="text-red-600 mb-4 text-sm text-center">{error}</p>}

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-royal-gold"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-royal-gold"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-royal-gold text-royal-black w-full py-2 rounded-full font-semibold hover:scale-105 transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
