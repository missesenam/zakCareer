import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 gap-6 p-4">
      <Link to="/studentsignup" className="w-full max-w-xs md:max-w-sm">
        <button className="w-full px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
          Student Sign Up
        </button>
      </Link>
      <Link to="/studentform" className="w-full max-w-xs md:max-w-sm">
        <button className="w-full px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Student Form
        </button>
      </Link>
    </div>
  );
};

export default Home;
