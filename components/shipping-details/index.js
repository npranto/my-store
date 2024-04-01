import React from "react";

export default function ShippingDetails() {
  return (
    <div class="shipping-details w-full max-w-sm md:max-w-3xl xl:max-w-sm flex items-start flex-col gap-8 max-xl:mx-auto">
      <div class="w-full flex flex-col justify-center space-y-6           p-6 border border-gray-200 rounded-3xl group transition-all duration-500 hover:border-gray-400 ">
        <h3 class="font-manrope font-bold text-3xl leading-10 text-black pb-6 border-b border-gray-200 ">
          Shipping
        </h3>
        <div class="flex justify-between items-start w-full">
          <div class="flex justify-center items-center space-x-4">
            <div class="w-8 h-8">
              <img
                class="w-full h-full"
                alt="logo"
                src="https://i.ibb.co/L8KSdNQ/image-3.png"
              />
            </div>
            <div class="flex justify-center md:justify-start items-center md:items-start flex-col xl:mt-8">
              <p class="text-base font-bold text-black transition-all duration-500 group-hover:text-gray-700">
                Fast Delivery
              </p>
              <p class="font-normal text-sm text-gray-500 transition-all duration-500">
                Delivery within 24 hrs
              </p>
            </div>
          </div>
          <p class="text-lg font-semibold leading-6 dark:text-white text-gray-800">
            $8.00
          </p>
        </div>
        <div class="flex justify-center md:justify-start items-center md:items-start flex-col xl:mt-8">
          <p class="text-base font-bold text-black transition-all duration-500 group-hover:text-gray-700">
            Shipping Address
          </p>
          <p class="font-normal text-sm text-gray-500 transition-all duration-500">
            180 North King Street, Northhampton MA 1060
          </p>
        </div>
      </div>
    </div>
  );
}
