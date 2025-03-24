import { useState, useEffect } from "react";
import logo from '@/assets/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scrolling when the menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset'; // Clean up on unmount
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-80 backdrop-blur shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <a href="#" className="flex items-center space-x-2">
           <img src={logo} alt="Aitrix Labs Logo" className="w-auto h-10" />  {/* Replace the previous content */}
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-dark hover:text-primary transition-colors font-medium">About</a>
          <a href="#projects" className="text-dark hover:text-primary transition-colors font-medium">Projects</a>
          <a href="#services" className="text-dark hover:text-primary transition-colors font-medium">Services</a>
          <a href="#contact" className="text-dark hover:text-primary transition-colors font-medium">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-dark focus:outline-none"
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen} // Accessibility
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white shadow-md md:hidden transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } overflow-y-auto`}
      >
        <div className="container mx-auto px-4 py-6 flex justify-end"> {/* Add Close Button Here */}
          <button
            onClick={closeMenu}
            className="text-dark focus:outline-none"
            aria-label="Close mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="container mx-auto px-4 py-16 flex flex-col space-y-6 items-center">
          <a
            href="#about"
            onClick={closeMenu}
            className="text-2xl text-dark hover:text-primary py-2 transition-colors font-medium"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="text-2xl text-dark hover:text-primary py-2 transition-colors font-medium"
          >
            Projects
          </a>
          <a
            href="#services"
            onClick={closeMenu}
            className="text-2xl text-dark hover:text-primary py-2 transition-colors font-medium"
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="text-2xl text-dark hover:text-primary py-2 transition-colors font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;