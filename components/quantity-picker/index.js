import React from "react";

export default function QuantityPicker() {
  return (
    <div className="flex sm:items-center w-full">
      <button className="group py-2 px-4 border border-gray-400 rounded-l-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
        <svg
          className="stroke-gray-900 group-hover:stroke-black"
          width="16"
          height="16"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 11H5.5"
            stroke=""
            stroke-width="1.6"
            stroke-linecap="round"
          />
          <path
            d="M16.5 11H5.5"
            stroke=""
            stroke-opacity="0.2"
            stroke-width="1.6"
            stroke-linecap="round"
          />
          <path
            d="M16.5 11H5.5"
            stroke=""
            stroke-opacity="0.2"
            stroke-width="1.6"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <input
        type="text"
        className="flex-grow font-semibold text-gray-900 cursor-pointer text-lg p-2 w-full sm:max-w-[100px] outline-0 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50"
        placeholder="1"
      />
      <button className="group py-2 px-4 border border-gray-400 rounded-r-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
        <svg
          className="stroke-gray-900 group-hover:stroke-black"
          width="16"
          height="16"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 5.5V16.5M16.5 11H5.5"
            stroke="#9CA3AF"
            stroke-width="1.6"
            stroke-linecap="round"
          />
          <path
            d="M11 5.5V16.5M16.5 11H5.5"
            stroke="black"
            stroke-opacity="0.2"
            stroke-width="1.6"
            stroke-linecap="round"
          />
          <path
            d="M11 5.5V16.5M16.5 11H5.5"
            stroke="black"
            stroke-opacity="0.2"
            stroke-width="1.6"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
