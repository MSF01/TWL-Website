import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-base-100 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-iatauvFgwUEpsMfmE1gIURfiRzzxY7.png"
              alt="TechWizard Labs"
              className="h-12 w-12"
            />
            <span className="text-xl font-bold">TechWizard Labs</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`hover:text-primary transition-colors ${
                isActive("/") ? "text-primary font-medium" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-primary transition-colors ${
                isActive("/about") ? "text-primary font-medium" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              to="/apps"
              className={`hover:text-primary transition-colors ${
                isActive("/apps") ? "text-primary font-medium" : ""
              }`}
            >
              Apps
            </Link>
            <Link
              to="/contact"
              className={`hover:text-primary transition-colors ${
                isActive("/contact") ? "text-primary font-medium" : ""
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`hover:text-primary transition-colors ${
                  isActive("/") ? "text-primary font-medium" : ""
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`hover:text-primary transition-colors ${
                  isActive("/about") ? "text-primary font-medium" : ""
                }`}
                onClick={closeMenu}
              >
                About Us
              </Link>
              <Link
                to="/apps"
                className={`hover:text-primary transition-colors ${
                  isActive("/apps") ? "text-primary font-medium" : ""
                }`}
                onClick={closeMenu}
              >
                Apps
              </Link>
              <Link
                to="/contact"
                className={`hover:text-primary transition-colors ${
                  isActive("/contact") ? "text-primary font-medium" : ""
                }`}
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
