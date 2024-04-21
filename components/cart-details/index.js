import React from "react";

export default function CartDetails() {
  return (
    <div className="cart-details w-full">
      <div className="grid grid-cols-1 gap-6">
        <div className="rounded-lg p-6 bg-gray-100 border border-gray-100 flex flex-col md:flex-row md:items-center gap-5 transition-all duration-500 hover:border-gray-400">
          <div className="img-box ">
            <img
              src="https://pagedone.io/asset/uploads/1701167635.png"
              alt="Denim Jacket image"
              className="w-full md:max-w-[75px]"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 md:gap-8">
            <div className="">
              <h2 className="font-medium text-base leading-4 text-black mb-2">
                Dark Denim Jacket
              </h2>
              <p className="font-normal text-sm leading-4 text-gray-500 ">
                By: Dust Studios
              </p>
            </div>
            <div className="flex items-center justify-between gap-8">
              <div className="flex items-center gap-3">
                <p className="font-medium text-base leading-7 text-black ">
                  Qty: <span className="text-gray-500">2</span>
                </p>
              </div>
              <h6 className="font-medium text-xl leading-8 text-black">
                $120.00
              </h6>
            </div>
          </div>
        </div>
        <div className="rounded-lg p-6 bg-gray-100 border border-gray-100 flex flex-col md:flex-row md:items-center gap-5 transition-all duration-500 hover:border-gray-400">
          <div className="img-box ">
            <img
              src="https://pagedone.io/asset/uploads/1701167635.png"
              alt="Denim Jacket image"
              className="w-full md:max-w-[75px]"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 md:gap-8">
            <div className="">
              <h2 className="font-medium text-base leading-4 text-black mb-2">
                Dark Denim Jacket
              </h2>
              <p className="font-normal text-sm leading-4 text-gray-500 ">
                By: Dust Studios
              </p>
            </div>
            <div className="flex items-center justify-between gap-8">
              <div className="flex items-center gap-3">
                <p className="font-medium text-base leading-7 text-black ">
                  Qty: <span className="text-gray-500">2</span>
                </p>
              </div>
              <h6 className="font-medium text-xl leading-8 text-black">
                $120.00
              </h6>
            </div>
          </div>
        </div>
        <div className="rounded-lg p-6 bg-gray-100 border border-gray-100 flex flex-col md:flex-row md:items-center gap-5 transition-all duration-500 hover:border-gray-400">
          <div className="img-box ">
            <img
              src="https://pagedone.io/asset/uploads/1701167635.png"
              alt="Denim Jacket image"
              className="w-full md:max-w-[75px]"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 md:gap-8">
            <div className="">
              <h2 className="font-medium text-base leading-4 text-black mb-2">
                Dark Denim Jacket
              </h2>
              <p className="font-normal text-sm leading-4 text-gray-500 ">
                By: Dust Studios
              </p>
            </div>
            <div className="flex items-center justify-between gap-8">
              <div className="flex items-center gap-3">
                <p className="font-medium text-base leading-7 text-black ">
                  Qty: <span className="text-gray-500">2</span>
                </p>
              </div>
              <h6 className="font-medium text-xl leading-8 text-black">
                $120.00
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
