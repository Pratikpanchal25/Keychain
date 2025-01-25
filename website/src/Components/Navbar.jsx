import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Shop", link: "/shop" },
    { label: "Custom Designs", link: "/custom-designs" },
    { label: "Contact Us", link: "/contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"}>
          <div className="text-2xl font-bold text-amber-500">Keychain Co.</div>
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link to={item.link} onClick={handleLinkClick}>
                <a className="text-gray-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon (only when menu is closed) */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={"M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        )}
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={"M6 18L18 6M6 6l12 12"}
              />
            </svg>
          </button>
        )}
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-gray-800 w-full shadow-sm rounded-md shadow-black absolute"
        >
          <ul className="flex flex-col space-y-4 px-4 py-3">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link to={item.link} onClick={handleLinkClick}>
                  <a className="text-gray-300 hover:text-white transition-colors">
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
