// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to MediConnect
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        Find hospitals near you and book doctor appointments easily.
      </p>

      <div className="flex space-x-4">
        <Link
          to="/set-location"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
        <Link
          to="/nearby-hospitals"
          className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
        >
          View Hospitals
        </Link>
      </div>
    </div>
  );
}

