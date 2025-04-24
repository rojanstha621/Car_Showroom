// components/Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 py-10 mt-12 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        
        {/* About Section */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">About The Royal Oak Drives</h4>
          <p>
            AutoLux is your trusted platform for finding premium cars, scheduling test drives,
            and getting expert support. We’re committed to quality, transparency, and trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/cars" className="hover:text-white">Browse Cars</a></li>
            <li><a href="/book" className="hover:text-white">Book Test Drive</a></li>
            <li><a href="/support" className="hover:text-white">Support</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Contact</h4>
          <p>Email: support@autolux.com</p>
          <p>Phone: +1 (800) 555-7890</p>
          <p>Location: Kathmandu, Nepal</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="mailto:support@autolux.com" className="hover:text-white"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
        &copy; {new Date().getFullYear()} AutoLux. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
