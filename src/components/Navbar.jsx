// components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-black text-white shadow-md  pr-20 pl-20">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo} 
            alt="Logo"
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li><Link to="/cars" className="hover:text-gold transition">Models</Link></li>
          <li><Link to="/offers" className="hover:text-gold transition">Offers</Link></li>
          <li><Link to="/featured" className="hover:text-gold transition">Featured</Link></li>
          <li><Link to="/testimonials" className="hover:text-gold transition">Testimonials</Link></li>
          <li><Link to="/about" className="hover:text-gold transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-gold transition">Contact</Link></li>
        </ul>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-gold text-2xl" onClick={toggleMenu}>
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4">
          <ul className="space-y-2 text-sm">
            <li><Link to="/cars" onClick={toggleMenu}>Models</Link></li>
            <li><Link to="/offers" onClick={toggleMenu}>Offers</Link></li>
            <li><Link to="/featured" onClick={toggleMenu}>Featured</Link></li>
            <li><Link to="/testimonials" onClick={toggleMenu}>Testimonials</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
