import React from "react";
// import { Button } from "@/components/ui/button";

const RegStudentTwo = () => {
  const interests = [
    "Sales",
    "Data Entry",
    "Digital Marketing",
    "Web Development",
    "Graphic Design",
    "Marketing",
    "Human Resources (HR)",
    "General Management",
    "Social Media Marketing",
    "Finance",
    "Software Development",
    "Telecalling",
    "Market/Business Research",
    "Content Writing",
    "Accounts",
    "Project Management",
    "Operations",
    "Client Servicing",
    "Programming",
    "Teaching",
    "Data Science",
    "Video Making/Editing",
    "Interior Design",
    "Python/Django Development",
    "UI/UX Design",
    "Software Testing",
  ];

  return (
    <div>
      <div className="mb-6">
        <label className="block mb-2 font-medium">Area(s) of interest</label>
        <input
          type="text"
          placeholder="Areas you want to work in or learn about"
          className="w-full p-3 border rounded-lg"
        />
      </div>
      {/* selections */}
      <div>
        <h1 className="text-red-500">here will be the selections</h1>
      </div>
      <div className="mb-6">
        <h1>Popular career interests</h1>
      </div>
      <div className="flex flex-wrap gap-3 mb-6">
        {interests.map((item, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-200 text-sm rounded-full cursor-pointer hover:bg-blue-200"
          >
            {item} +
          </span>
        ))}
      </div>
    </div>
  );
};

export default RegStudentTwo;
