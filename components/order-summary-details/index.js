import React from "react";

export default function OrderSummaryDetails() {
  return (
    <div className="order-summary-details w-full flex items-start flex-col gap-8 max-xl:mx-auto">
      <div className="p-6 border border-gray-200 rounded-lg w-full group transition-all duration-500 hover:border-gray-400 ">
        <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-6 border-b border-gray-200 ">
          Final Totals
        </h2>
        <div className="data py-6 border-b border-gray-200">
          <div className="flex items-center justify-between gap-4 mb-2">
            <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">
              Subtotal
            </p>
            <p className="font-medium text-lg leading-8 text-gray-900">
              $360.00
            </p>
          </div>
          <div className="flex items-center justify-between gap-4 mb-2">
            <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">
              Shipping
            </p>
            <p className="font-medium text-lg leading-8 text-gray-600">
              $40.00
            </p>
          </div>
          <div className="flex items-center justify-between gap-4 mb-2">
            <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">
              Taxes
            </p>
            <p className="font-medium text-lg leading-8 text-gray-600">$10</p>
          </div>
          <div className="flex items-center justify-between gap-4 ">
            <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700 ">
              Coupon Discount
            </p>
            <p className="font-medium text-lg leading-8 text-emerald-500">
              -$5.00
            </p>
          </div>
        </div>
        <div className="total flex items-center justify-between pt-6">
          <p className="font-normal text-xl leading-8 text-black ">Total</p>
          <h5 className="font-manrope font-bold text-2xl leading-9 text-black">
            $405.00
          </h5>
        </div>
      </div>
    </div>
  );
}
