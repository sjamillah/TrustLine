import React, { useState, useEffect } from 'react';
import { BiGridAlt } from 'react-icons/bi'; // BiGrid icon for the hamburger menu
import { IoMdClose } from 'react-icons/io'; // Close icon for the cancel button
import { BsMoon, BsSun } from 'react-icons/bs'; // Icons for light/dark mode toggle

const Navbar = () => {
  const [isLearnOpen, setLearnOpen] = useState(false);
  const [isSupportOpen, setSupportOpen] = useState(false);
  const [isReportOpen, setReportOpen] = useState(false);
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (dropdown: string) => {
    if (dropdown === 'learn') setLearnOpen(!isLearnOpen);
    if (dropdown === 'support') setSupportOpen(!isSupportOpen);
    if (dropdown === 'report') setReportOpen(!isReportOpen);
    if (dropdown === 'about') setAboutOpen(!isAboutOpen);
  };

  const handleDoubleClick = (dropdown: string) => {
    if (dropdown === 'learn') setLearnOpen(true);
    if (dropdown === 'support') setSupportOpen(true);
    if (dropdown === 'report') setReportOpen(true);
    if (dropdown === 'about') setAboutOpen(true);
  };

  // Function to toggle light/dark mode
  const handleToggleMode = () => {
    setDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Check and apply dark mode preference on initial render
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav className="fixed top-0 w-full z-10 bg-transparent overflow-hidden">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-white font-bold text-xl" style={{ fontFamily: 'Ahsing', textShadow: '0 0 10px rgba(255, 255, 0, 0.7)' }}>
          <a href="/">TrustLine</a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {/* Learn Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('learn')}
              onDoubleClick={() => handleDoubleClick('learn')}
              className="text-white cursor-pointer hover:underline"
            >
              Learn
            </button>
            {isLearnOpen && (
              <div className="absolute mt-2 bg-white text-gray-800 rounded shadow-lg">
                <a href="#educational-resources" className="block px-4 py-2 hover:bg-gray-100">Educational Resources</a>
                <a href="#engaging-content" className="block px-4 py-2 hover:bg-gray-100">Fun & Engaging Content</a>
              </div>
            )}
          </div>

          {/* Support Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('support')}
              onDoubleClick={() => handleDoubleClick('support')}
              className="text-white cursor-pointer hover:underline"
            >
              Support
            </button>
            {isSupportOpen && (
              <div className="absolute mt-2 bg-white text-gray-800 rounded shadow-lg">
                <a href="#therapists" className="block px-4 py-2 hover:bg-gray-100">Therapists</a>
                <a href="#community" className="block px-4 py-2 hover:bg-gray-100">Community</a>
              </div>
            )}
          </div>

          {/* Report Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('report')}
              onDoubleClick={() => handleDoubleClick('report')}
              className="text-white cursor-pointer hover:underline"
            >
              Report
            </button>
            {isReportOpen && (
              <div className="absolute mt-2 bg-white text-gray-800 rounded shadow-lg">
                <a href="#reporting" className="block px-4 py-2 hover:bg-gray-100">Report Now</a>
              </div>
            )}
          </div>

          {/* About Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('about')}
              onDoubleClick={() => handleDoubleClick('about')}
              className="text-white cursor-pointer hover:underline"
            >
              About
            </button>
            {isAboutOpen && (
              <div className="absolute mt-2 bg-white text-gray-800 rounded shadow-lg">
                <a href="#about" className="block px-4 py-2 hover:bg-gray-100">Our Story</a>
                <a href="#contact" className="block px-4 py-2 hover:bg-gray-100">Connect</a>
              </div>
            )}
          </div>

          {/* Dark Mode Toggle Button */}
          <button onClick={handleToggleMode} className="text-white cursor-pointer p-2 rounded-full bg-gray-800 hover:bg-gray-700">
            {isDarkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
            {isMobileMenuOpen ? <IoMdClose size={24} /> : <BiGridAlt size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white px-6 py-4">
          <div className="space-y-4">
            <a href="#learn" onClick={() => toggleDropdown('learn')} className="block cursor-pointer hover:underline">Learn</a>
            {isLearnOpen && (
              <div className="ml-4 space-y-2">
                <a href="#educational-resources" className="block hover:underline">Educational Resources</a>
                <a href="#engaging-content" className="block hover:underline">Fun & Engaging Content</a>
              </div>
            )}
            <a href="#support" onClick={() => toggleDropdown('support')} className="block cursor-pointer hover:underline">Support</a>
            {isSupportOpen && (
              <div className="ml-4 space-y-2">
                <a href="#therapists" className="block hover:underline">Therapists</a>
                <a href="#community" className="block hover:underline">Community</a>
              </div>
            )}
            <a href="#report" onClick={() => toggleDropdown('report')} className="block cursor-pointer hover:underline">Report</a>
            {isReportOpen && (
              <div className="ml-4 space-y-2">
                <a href="#reporting" className="block hover:underline">Report Now</a>
              </div>
            )}
            <a href="#about" onClick={() => toggleDropdown('about')} className="block cursor-pointer hover:underline">About</a>
            {isAboutOpen && (
              <div className="ml-4 space-y-2">
                <a href="#about" className="block hover:underline">Our Story</a>
                <a href="#contact" className="block hover:underline">Connect</a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
