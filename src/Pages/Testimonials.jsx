// pages/Testimonials.jsx
const testimonials = [
    {
      id: 1,
      user: 'Alex M.',
      review: 'The booking process was smooth and fast. Love the customization!',
      avatar: '/images/avatar1.png',
    },
    {
      id: 2,
      user: 'Sophie W.',
      review: 'Got a great deal thanks to their finance options. 10/10 experience!',
      avatar: '/images/avatar2.png',
    },
    {
      id: 3,
      user: 'Jordan P.',
      review: 'The test drive booking and support team were incredibly helpful.',
      avatar: '/images/avatar3.png',
    },
  ];
  
  const Testimonials = () => {
    return (
      <div className="bg-white min-h-screen text-black py-20 px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gold mb-4">What Our Customers Say</h1>
          <p className="text-lg text-gray-700">
            Real feedback from real drivers. Your dream car is just the beginning of a luxury experience.
          </p>
        </div>
  
        {/* Testimonial Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-silver border border-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 relative"
            >
              {/* Gold Quote Mark */}
              <span className="absolute top-4 left-4 text-4xl text-gold font-serif">“</span>
  
              {/* Content */}
              <div className="pt-8">
                <p className="text-gray-800 italic leading-relaxed mb-6">{t.review}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.user}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gold"
                  />
                  <div>
                    <p className="font-semibold text-black">{t.user}</p>
                    <p className="text-sm text-gray-600">Verified Customer</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  