import React from "react";

const RegStudentOne = () => {
  const handleChange = (e) => {
    // Will be handled by Redux
    const { name, value } = e.target;
    console.log(`Field changed: ${name} = ${value}`);
  };

  const handleLanguageChange = (language) => {
    // Will be handled by Redux
    console.log(`Language toggled: ${language}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted - will be handled by Redux");
  };

  return (
    <div className="w-full mx-auto bg-white">
      <form onSubmit={handleSubmit}>
        {/* Name Section */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-1">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-1">
              Last name (Optional)
            </label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-blue-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="w-full px-3 py-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-blue-700 mb-1">
            Contact number
          </label>
          <div className="flex">
            <select className="px-3 py-2 border border-blue-300 rounded-l-md bg-blue-50 text-blue-700">
              <option>+233</option>
            </select>
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              placeholder="Mobile number"
              className="w-full px-3 py-2 border-t border-r border-b border-blue-300 rounded-r-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* Current City */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-blue-700 mb-1">
            Current city
          </label>
          <input
            type="text"
            name="city"
            onChange={handleChange}
            className="w-full px-3 py-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="text-xs text-blue-500 mt-1">
            To connect you with opportunities closer to you
          </p>
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-blue-700 mb-2">
            Gender
          </label>
          <div className="flex space-x-4">
            {["Female", "Male"].map((gender) => (
              <label key={gender} className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-blue-700">{gender}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-blue-700 mb-2">
            Languages you know
          </label>
          <div className="flex flex-wrap gap-2">
            {["English", "Twi", "Ewe", "Ga", "French"].map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => handleLanguageChange(lang)}
                className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100"
              >
                {lang} +
              </button>
            ))}
            <button
              type="button"
              className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100"
            >
              + Add more languages
            </button>
          </div>
        </div>

        {/* Type */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-blue-700 mb-2">
            Type
          </label>
          <select
            name="type"
            onChange={handleChange}
            className="w-full px-3 py-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select your type</option>
            <option value="College student">College student</option>
            <option value="Fresher">Fresher</option>
            <option value="Working professional">Working professional</option>
            <option value="School student">School student</option>
            <option value="Woman returning to work">
              Woman returning to work
            </option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Complete Profile
        </button>
      </form>
    </div>
  );
};

export default RegStudentOne;
