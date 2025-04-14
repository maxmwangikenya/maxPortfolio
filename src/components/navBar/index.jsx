import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { HiX, HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import './styles.css';

const data = [
  { label: "HOME", to: "/" },
  { label: "ABOUT ME", to: "/about" },
  { label: "SKILLS", to: "/skills" },
  { label: "RESUME", to: "/resume" },
  { label: "CONTACT", to: "/contact" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="logo">
          <FaReact size={30} />
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          {data.map((item) => (
            <Link key={item.label} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Toggle Button */}
        <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mobile-nav">
            {data.map((item) => (
              <Link 
                key={item.label} 
                to={item.to}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
