import React from "react";

export default function OrderSummaryDetails() {
  return (
    <div class="order-summary-details w-full max-w-sm md:max-w-3xl xl:max-w-sm flex items-start flex-col gap-8 max-xl:mx-auto">
      <div class="p-6 border border-gray-200 rounded-3xl w-full group transition-all duration-500 hover:border-gray-400 ">
        <h2 class="font-manrope font-bold text-3xl leading-10 text-black pb-6 border-b border-gray-200 ">
          Order Summary
        </h2>
        <div class="data py-6 border-b border-gray-200">
          <div class="flex items-center justify-between gap-4 mb-2">
            <p class="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">
              Subtotal
            </p>
            <p class="font-medium text-lg leading-8 text-gray-900">$360.00</p>
          </div>
          <div class="flex items-center justify-between gap-4 mb-2">
            <p class="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">
              Shipping
            </p>
            <p class="font-medium text-lg leading-8 text-gray-600">$40.00</p>
          </div>
          <div class="flex items-center justify-between gap-4 mb-2">
            <p class="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">
              Taxes
            </p>
            <p class="font-medium text-lg leading-8 text-gray-600">$10</p>
          </div>
          <div class="flex items-center justify-between gap-4 ">
            <p class="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700 ">
              Coupon Discount
            </p>
            <p class="font-medium text-lg leading-8 text-emerald-500">-$5.00</p>
          </div>
        </div>
        <div class="total flex items-center justify-between pt-6">
          <p class="font-normal text-xl leading-8 text-black ">Total</p>
          <h5 class="font-manrope font-bold text-2xl leading-9 text-black">
            $405.00
          </h5>
        </div>
      </div>
    </div>
  );
}
