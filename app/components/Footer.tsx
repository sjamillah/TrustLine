import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Mission Statement */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-xl font-bold text-white">TrustLine</h2>
          <p className="text-sm mt-2 max-w-sm">
            TrustLine is committed to empowering women in Uganda by providing
            education, support, and a community that prioritizes safety and
            well-being.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left mb-6 md:mb-0">
          <div className="md:mr-8 mb-4 md:mb-0">
            <h3 className="text-white font-bold">Quick Links</h3>
            <ul>
              <li><a href="#learn" className="hover:text-white">Learn</a></li>
              <li><a href="#engage" className="hover:text-white">Engage</a></li>
              <li><a href="#support" className="hover:text-white">Support</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center">
            <h3 className="text-white font-bold">Connect with Us</h3>
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-bold">Join Our Newsletter</h3>
          <p className="text-sm mt-2 max-w-xs">
            Stay updated with our latest news and initiatives to support women
            in Uganda.
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2 md:mt-0 md:ml-2">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} TrustLine. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
