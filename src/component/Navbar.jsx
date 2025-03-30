import React from "react";

const Navbar = () => {
  return (
    <div style={{ background: "red" }}>
      <header className="flex items-center justify-between px-8 py-4 shadow">
        <div className="text-2xl font-bold text-blue-600">INTERNSHALA</div>
        <nav className="flex items-center gap-6">
          <span>Internships ▾</span>
          <span>
            Courses{" "}
            <span className="bg-yellow-400 text-white px-2 rounded">OFFER</span>
          </span>
          <span>Jobs ▾</span>
          <span>🔔</span>
          <span>💬</span>
          <span className="bg-gray-200 px-3 py-1 rounded-full">E</span>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
