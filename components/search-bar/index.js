import React, { useState } from "react";

export default function SearchBar({ className = "" }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for store or product:", searchTerm);
    setSearchTerm("");
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form
      className={`w-auto py-4 sm:py-6 flex flex-col sm:flex-row flex-nowrap justify-center items-end gap-2 ${className}`}
      onSubmit={handleSearch}
    >
      <div className="w-full sm:w-72">
        <input
          type="text"
          placeholder="store, product..."
          id="search-input"
          name="search-input"
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-gray-200 focus:border-gray-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-center"
      >
        Search
      </button>
    </form>
  );
}
