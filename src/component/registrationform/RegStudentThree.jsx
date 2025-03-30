import React from "react";

const RegStudentThree = () => {
  return (
    <div className="text-gray-800">
      <div>
        <div className="space-y-6">
          <div>
            <p className="font-semibold mb-2">Currently looking for</p>
            <div className="flex gap-4">
              <button className="border px-6 py-2 rounded-full">Jobs ➕</button>
              <button className="border px-6 py-2 rounded-full">
                Internships ➕
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-2">Work mode</p>
            <div className="flex gap-4">
              <button className="border px-6 py-2 rounded-full">
                In-office ➕
              </button>
              <button className="border px-6 py-2 rounded-full">
                Work from home ➕
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegStudentThree;
