import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom for routing
import { logo2 } from '../assets';

const Navbar = () => {
  return (
    <header className="w-1000 p-0 flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo2} alt="Logo" className="w-60 object-contain" />
      </Link>
      <nav>
        <ul className="flex items-center space-x-6">
          <li>
            <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md hover:bg-blue-700">Create</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
