
  import dummyCars from './CarList';
  import { useNavigate } from 'react-router-dom'; 

  const FeaturedCars = () => {
    const featuredCars = dummyCars.slice(0, 2);
    const navigate = useNavigate();
    return (
      <div className="bg-white text-black min-h-screen">
        {/* Hero Section */}
        <section className="bg-black text-white py-16 px-6 text-center">
          <h1 className="text-4xl font-bold text-gold mb-4">Featured Cars</h1>
          <p className="text-lg text-silver max-w-2xl mx-auto">
            Discover hand-selected models built for power, style, and future-forward driving.
          </p>
        </section>
  
        {/* Cards */}
        <section className="py-12 px-4 sm:px-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredCars.map((car) => (
              <div
                key={car.id}
                className="bg-white border border-silver rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
              >
                {/* Car Image */}
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-60 object-contain"
                />
  
                {/* Car Info */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gold mb-1">{car.name}</h2>
                  <p className="text-black mb-4">{car.highlight}</p>
  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {car.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-black text-white text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
  
                  {/* Specs */}
                  <div className="text-sm text-black mb-4">
                    {Object.entries(car.specs).map(([label, value]) => (
                      <p key={label}>
                        <strong>{label}:</strong> {value}
                      </p>
                    ))}
                  </div>
  
                  {/* CTA */}
                  <button
                  className="mt-2 w-full bg-gold text-black font-semibold py-2 rounded hover:bg-white hover:text-black transition"
                  onClick={() => navigate(`/car/${car.id}`)}
                >
                  View Details
                </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };
  
  export default FeaturedCars;
  