// pages/AboutUs.jsx
const AboutUs = () => {
    return (
      <div className="bg-white min-h-screen text-black py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gold mb-6">About The Royal Oak Drives</h1>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            At <span className="text-black font-semibold">AutoLux</span>, we believe car ownership should be as thrilling as the drive itself. We’re more than a car
            platform — we’re a *luxury-first* experience tailored around your dreams and lifestyle.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            From browsing the finest selections to customizing every detail, booking test drives, and discovering
            exclusive offers, our platform is crafted for ease, performance, and style. We fuse technology and
            personalization to make your journey smooth from click to key.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're here to explore, test, or take home your next car — welcome to AutoLux. We're here to empower
            your drive with confidence, class, and care.
          </p>
        </div>
  
        {/* Optional: Add Team/Stats/Trust Section */}
        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-gold">500+</h3>
            <p className="text-gray-700 mt-2">Luxury Models Available</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gold">1,200+</h3>
            <p className="text-gray-700 mt-2">Test Drives Booked</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gold">24/7</h3>
            <p className="text-gray-700 mt-2">Support & Service</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  