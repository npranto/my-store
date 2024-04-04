import React from "react";

export default function ProductCard() {
  return (
    <a
      href="javascript:;"
      class="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500 p-4 rounded-md"
    >
      <div class="">
        <img
          src="https://pagedone.io/asset/uploads/1700726158.png"
          alt="face cream image"
          class="w-full aspect-square"
        />
      </div>
      <div class="mt-5">
        <div class="flex items-center justify-between">
          <h6 class="text-base leading-4 transition-all duration-500 text-gray-500">
            Face cream
          </h6>
        </div>
        <p class="mt-1 font-bold text-xl leading-8">$100</p>
      </div>
    </a>
  );
}
