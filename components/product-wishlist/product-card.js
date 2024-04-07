import React from "react";

export default function ProductCard() {
  return (
    <a
      href="#/"
      className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500 p-4 rounded-md"
    >
      <div className="">
        <img
          src="https://pagedone.io/asset/uploads/1700726158.png"
          alt="face cream image"
          className="w-full aspect-square"
        />
      </div>
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h6 className="text-base leading-4 transition-all duration-500 text-gray-500">
            Face cream
          </h6>
        </div>
        <p className="mt-1 font-bold text-xl leading-8">$100</p>
      </div>
    </a>
  );
}
