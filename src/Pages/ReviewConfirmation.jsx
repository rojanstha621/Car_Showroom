// pages/ReviewConfirmation.jsx
import { useNavigate } from 'react-router-dom';

const ReviewConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold text-gold mb-4">Offer Applied!</h1>
      <p className="mb-6">Your selected offer has been successfully applied to your account.</p>
      <button
        onClick={() => navigate('/dashboard')}
        className="bg-black text-white px-6 py-2 rounded hover:bg-gold hover:text-black"
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default ReviewConfirmation;
