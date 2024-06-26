import React from "react";

export default function PaymentDetails() {
  return (
    <div
      className="shipping-details w-full flex items-start flex-col gap-8 max-xl:mx-auto"
      data-component-id="payment-details"
    >
      <div className="w-full flex flex-col justify-center space-y-6           p-6 border border-gray-200 rounded-lg group transition-all duration-500 hover:border-gray-400 ">
        <h3 className="font-manrope font-bold text-3xl leading-10 text-black pb-6 border-b border-gray-200 ">
          Payment
        </h3>
        <div className="flex justify-between items-start w-full">
          <div className="flex justify-center items-center space-x-4">
            <div className="flex flex-col justify-start items-center">
              <p className="text-base font-bold text-black transition-all duration-500 group-hover:text-gray-700">
                Credit Card
                <br />
                <span className="font-normal text-sm text-gray-500 transition-all duration-500">
                  Ending with 4242 | Expires 2/25/28
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-start items-center md:items-start flex-col xl:mt-8">
          <p className="text-base font-bold text-black transition-all duration-500 group-hover:text-gray-700">
            Billing Address
          </p>
          <p className="font-normal text-sm text-gray-500 transition-all duration-500">
            180 North King Street, Northhampton MA 1060
          </p>
        </div>
      </div>
    </div>
  );
}
