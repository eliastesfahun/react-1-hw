import React from "react";

const OurValues = () => {
  // TASK - React 1 week 1
  // Create the "Our Values" section
  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Our Values
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Integrity
          </h3>
          <p className="text-gray-600">
            We believe in honesty and strong moral principles, guiding all our
            actions and decisions.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-green-100 text-green-600 rounded-full p-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Innovation
          </h3>
          <p className="text-gray-600">
            Continuously seeking new and improved ways to solve problems and
            deliver value.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-purple-100 text-purple-600 rounded-full p-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16v4m-2-2h4m2 10v4m-2-2h4m-4 2a2 2 0 100-4 2 2 0 000 4zM12 9a2 2 0 100-4 2 2 0 000 4zM12 17a2 2 0 100-4 2 2 0 000 4zM12 12a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Collaboration
          </h3>
          <p className="text-gray-600">
            Working together, fostering a supportive environment to achieve
            common goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
