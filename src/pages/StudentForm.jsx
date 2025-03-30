import React, { useState } from "react";
import RegStudentOne from "../component/registrationform/RegStudentOne";
import RegStudentTwo from "../component/registrationform/RegStudentTwo";
import RegStudentThree from "../component/registrationform/RegStudentThree";

const StudentForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleSubmit = (e) => {
    // Only submit if we're on the final step
    if (currentStep === totalSteps) {
      e.preventDefault();
      alert("Form submitted!");
    }
  };

  const handleNext = (e) => {
    e.preventDefault(); // Prevent form submission on "Next"
    if (currentStep < totalSteps) {
      setCurrentStep((p) => p + 1);
    }
  };

  // Title content for each step
  const stepTitles = {
    1: {
      subtitle: "Hi there",
      title: "Let's get started",
    },
    2: {
      subtitle: "Your preferences",
      title: "Help us match you with the best career opportunities",
    },
    3: {
      subtitle: "Almost done",
      title: "Just a few more details",
    },
  };

  return (
    <div className="p-6 container mx-auto w-full md:max-w-[55%]">
      <form onSubmit={handleSubmit}>
        {/* Progress Bar */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1">
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-500"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Dynamic Title */}
        <div className="mb-8">
          <p className="text-lg text-gray-600">
            {stepTitles[currentStep].subtitle}
          </p>
          <h1 className="text-3xl font-bold text-gray-800">
            {stepTitles[currentStep].title}
          </h1>
        </div>

        {/* Step Content */}
        <div className="space-y-4 p-8 rounded-xl shadow-md">
          {currentStep === 1 && <RegStudentOne />}

          {currentStep === 2 && <RegStudentTwo />}

          {currentStep === 3 && <RegStudentThree />}
        </div>

        {/* Next/Finish Button */}
        <div className="flex justify-end mt-8">
          <button
            onClick={currentStep === totalSteps ? null : handleNext}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            type={currentStep === totalSteps ? "submit" : "button"}
          >
            {currentStep === totalSteps ? " Find me opportunities" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
