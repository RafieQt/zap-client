import React from "react";
import { Link } from "react-router";

const Forbidden = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-6xl font-extrabold text-red-500 mb-4">403</h1>
      <h2 className="text-2xl font-semibold mb-2">Access Denied</h2>
      <p className="text-gray-500 mb-6">
        You don't have permission to view this page.
      </p>

      <Link
        to="/"
        className="px-6 py-2 bg-primary text-white rounded-md hover:bg-secondary transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Forbidden;