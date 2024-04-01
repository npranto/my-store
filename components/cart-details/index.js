import React from "react";

export default function CartDetails() {
  return (
    <div class="cart-details w-full max-w-sm md:max-w-3xl max-xl:mx-auto">
      <div class="grid grid-cols-1 gap-6">
        <div class="rounded-3xl p-6 bg-gray-100 border border-gray-100 flex flex-col md:flex-row md:items-center gap-5 transition-all duration-500 hover:border-gray-400">
          <div class="img-box ">
            <img
              src="https://pagedone.io/asset/uploads/1701167635.png"
              alt="Denim Jacket image"
              class="w-full md:max-w-[75px]"
            />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-3 md:gap-8">
            <div class="">
              <h2 class="font-medium text-base leading-4 text-black mb-2">
                Dark Denim Jacket
              </h2>
              <p class="font-normal text-sm leading-4 text-gray-500 ">
                By: Dust Studios
              </p>
            </div>
            <div class="flex items-center justify-between gap-8">
              <div class="flex items-center gap-3">
                <p class="font-medium text-base leading-7 text-black ">
                  Qty: <span class="text-gray-500">2</span>
                </p>
              </div>
              <h6 class="font-medium text-xl leading-8 text-black">$120.00</h6>
            </div>
          </div>
        </div>
        <div class="rounded-3xl p-6 bg-gray-100 border border-gray-100 flex flex-col md:flex-row md:items-center gap-5 transition-all duration-500 hover:border-gray-400">
          <div class="img-box ">
            <img
              src="https://pagedone.io/asset/uploads/1701167635.png"
              alt="Denim Jacket image"
              class="w-full md:max-w-[75px]"
            />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-3 md:gap-8">
            <div class="">
              <h2 class="font-medium text-base leading-4 text-black mb-2">
                Dark Denim Jacket
              </h2>
              <p class="font-normal text-sm leading-4 text-gray-500 ">
                By: Dust Studios
              </p>
            </div>
            <div class="flex items-center justify-between gap-8">
              <div class="flex items-center gap-3">
                <p class="font-medium text-base leading-7 text-black ">
                  Qty: <span class="text-gray-500">2</span>
                </p>
              </div>
              <h6 class="font-medium text-xl leading-8 text-black">$120.00</h6>
            </div>
          </div>
        </div>
        <div class="rounded-3xl p-6 bg-gray-100 border border-gray-100 flex flex-col md:flex-row md:items-center gap-5 transition-all duration-500 hover:border-gray-400">
          <div class="img-box ">
            <img
              src="https://pagedone.io/asset/uploads/1701167635.png"
              alt="Denim Jacket image"
              class="w-full md:max-w-[75px]"
            />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-3 md:gap-8">
            <div class="">
              <h2 class="font-medium text-base leading-4 text-black mb-2">
                Dark Denim Jacket
              </h2>
              <p class="font-normal text-sm leading-4 text-gray-500 ">
                By: Dust Studios
              </p>
            </div>
            <div class="flex items-center justify-between gap-8">
              <div class="flex items-center gap-3">
                <p class="font-medium text-base leading-7 text-black ">
                  Qty: <span class="text-gray-500">2</span>
                </p>
              </div>
              <h6 class="font-medium text-xl leading-8 text-black">$120.00</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
