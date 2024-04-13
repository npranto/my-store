import CancelOrderBtn from "@/components/cancel-order-btn";
import PageHeader from "@/components/page-header";
import TrackYourOrderBtn from "@/components/track-your-order-btn";
import React from "react";

export default function OrderConfirmationPage() {
  return (
    <section className="relative">
      <div className="w-full">
        <PageHeader
          header="Order Confirmation"
          description="Thanks for making a purchase, we will be shipping your order soon!"
        />
        <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
            <div className="data">
              <p className="font-semibold text-base leading-7 text-black">
                Confirmation:{" "}
                <span className="text-gray-600 font-normal">#10234987</span>
              </p>
              <p className="font-semibold text-base leading-7 text-black">
                Payment Date:{" "}
                <span className="text-gray-600 font-normal">
                  {" "}
                  March 18, 2021
                </span>
              </p>
            </div>
            <TrackYourOrderBtn />
          </div>
          <div className="w-full px-3 min-[400px]:px-6">
            <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
              <div className="img-box max-lg:w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1701167607.png"
                  alt="Premium Watch image"
                  className="aspect-square w-full lg:max-w-[140px]"
                />
              </div>
              <div className="flex flex-row items-center w-full ">
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                  <div className="flex items-center">
                    <div className="">
                      <h2 className="font-semibold text-xl leading-8 text-black mb-3">
                        Premium Quality Dust Watch
                      </h2>
                      <p className="font-normal text-lg leading-8 text-gray-500 mb-3 ">
                        By: Dust Studios
                      </p>
                      <div className="flex items-center ">
                        <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                          Size: <span className="text-gray-500">100 ml</span>
                        </p>
                        <p className="font-medium text-base leading-7 text-black ">
                          Qty: <span className="text-gray-500">2</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-5">
                    <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                      <div className="flex gap-3 lg:block">
                        <p className="font-medium text-sm leading-7 text-black">
                          price
                        </p>
                        <p className="lg:mt-4 font-medium text-sm leading-7 text-black">
                          $100
                        </p>
                      </div>
                    </div>
                    <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                      <div className="flex gap-3 lg:block">
                        <p className="font-medium text-sm leading-7 text-black">
                          Status
                        </p>
                        <p className="font-medium text-xs leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                          Ready for Delivery
                        </p>
                      </div>
                    </div>
                    <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                      <div className="flex gap-3 lg:block">
                        <p className="font-medium text-sm whitespace-nowrap leading-6 text-black">
                          Expected Delivery Time
                        </p>
                        <p className="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-gray-500">
                          March 23, 2021
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center py-6 gap-6 w-full">
              <div className="img-box max-lg:w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1701167621.png"
                  alt="Diamond Watch image"
                  className="aspect-square w-full lg:max-w-[140px]"
                />
              </div>
              <div className="flex flex-row items-center w-full ">
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                  <div className="flex items-center">
                    <div className="">
                      <h2 className="font-semibold text-xl leading-8 text-black mb-3 ">
                        Diamond Platinum Watch
                      </h2>
                      <p className="font-normal text-lg leading-8 text-gray-500 mb-3">
                        Diamond Dials
                      </p>
                      <div className="flex items-center  ">
                        <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                          Size: <span className="text-gray-500">Regular</span>
                        </p>
                        <p className="font-medium text-base leading-7 text-black ">
                          Qty: <span className="text-gray-500">1</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-5">
                    <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                      <div className="flex gap-3 lg:block">
                        <p className="font-medium text-sm leading-7 text-black">
                          price
                        </p>
                        <p className="lg:mt-4 font-medium text-sm leading-7 text-black">
                          $100
                        </p>
                      </div>
                    </div>
                    <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                      <div className="flex gap-3 lg:block">
                        <p className="font-medium text-sm leading-7 text-black">
                          Status
                        </p>
                        <p className="font-medium text-xs leading-6 py-0.5 px-3 whitespace-nowrap rounded-full lg:mt-3 bg-indigo-50 text-indigo-600">
                          Dispatched
                        </p>
                      </div>
                    </div>
                    <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                      <div className="flex gap-3 lg:block">
                        <p className="font-medium text-sm whitespace-nowrap leading-6 text-black">
                          Expected Delivery Time
                        </p>
                        <p className="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-gray-500">
                          March 23, 2021
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
            <div className="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
              <CancelOrderBtn />
              <p className="font-medium text-lg text-gray-900 pl-6 py-3 max-lg:text-center">
                Paid using Credit Card{" "}
                <span className="text-gray-500">ending with 8822</span>
              </p>
            </div>
            <p className="font-semibold text-lg text-black py-6">
              Total Price: <span className="text-gray-600"> $200.00</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
