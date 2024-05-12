/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function StoreStats() {
  return (
    <section
      className="text-gray-600 body-font"
      data-component-id="store-stats"
    >
      <div className="py-10 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg space-y-4 h-full bg-red-100">
              <h2 className="title-font font-bold text-4xl text-gray-900">
                2.7K
              </h2>
              <p className="leading-relaxed text-gray-400">
                Total Items Inventory
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg space-y-4 h-full bg-orange-100">
              <h2 className="title-font font-bold text-4xl text-gray-900">
                2.7K
              </h2>
              <p className="leading-relaxed text-gray-400">Total Items Sold</p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg space-y-4 h-full bg-blue-100">
              <h2 className="title-font font-bold text-4xl text-gray-900">
                3.6
              </h2>
              <p className="leading-relaxed text-gray-400">Ratings</p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg space-y-4 h-full bg-purple-100">
              <h2 className="title-font font-bold text-4xl text-gray-900">
                $5.3K
              </h2>
              <p className="leading-relaxed text-gray-400">
                Cumulative Sales Earnings
              </p>
            </div>
          </div>
          <div className="p-4 md:w-2/3 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg space-y-4 h-full bg-gray-100 grid place-content-center">
              <div className="flex flex-wrap justify-center gap-2">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
                  <p className="whitespace-nowrap text-sm">Home Utilities</p>
                </span>

                <span className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700">
                  <p className="whitespace-nowrap text-sm">Furniture</p>
                </span>

                <span className="inline-flex items-center justify-center rounded-full bg-red-100 px-2.5 py-0.5 text-red-700">
                  <p className="whitespace-nowrap text-sm">Tech</p>
                </span>
              </div>
              <p className="leading-relaxed text-gray-400">
                Top Selling Categories
              </p>
            </div>
          </div>
          <div className="p-4 w-full">
            <section className="text-gray-600 body-font">
              <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-green-100 rounded flex p-4 h-full items-center">
                    <svg
                      className="w-6 h-6 text-green-800 mr-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="title-font font-medium">
                      Authentic Cliche Forage
                    </span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-red-100 rounded flex p-4 h-full items-center">
                    <svg
                      className="w-6 h-6 text-red-800 mr-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="title-font font-medium">
                      Kinfolk Chips Snackwave
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
