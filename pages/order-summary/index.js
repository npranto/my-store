import React from "react";

export default function OrderSummaryPage() {
  return (
    <section class="w-full relative">
      <div class="w-full px-4 lg-6 mx-auto">
        <h2 class="font-manrope font-bold text-2xl text-black mb-8 text-left">
          Review
        </h2>
        <div class="flex items-start flex-col lg:flex-row gap-4">
          <div className="flex flex-col w-full gap-4">
            {/* cart-details */}
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
                      <h6 class="font-medium text-xl leading-8 text-black">
                        $120.00
                      </h6>
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
                      <h6 class="font-medium text-xl leading-8 text-black">
                        $120.00
                      </h6>
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
                      <h6 class="font-medium text-xl leading-8 text-black">
                        $120.00
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* shipping-details */}
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

            {/* payment-details */}
            <div class="shipping-details w-full max-w-sm md:max-w-3xl xl:max-w-sm flex items-start flex-col gap-8 max-xl:mx-auto">
              <div class="w-full flex flex-col justify-center space-y-6           p-6 border border-gray-200 rounded-3xl group transition-all duration-500 hover:border-gray-400 ">
                <h3 class="font-manrope font-bold text-3xl leading-10 text-black pb-6 border-b border-gray-200 ">
                  Payment
                </h3>
                <div class="flex justify-between items-start w-full">
                  <div class="flex justify-center items-center space-x-4">
                    <div class="flex flex-col justify-start items-center">
                      <p class="text-base font-bold text-black transition-all duration-500 group-hover:text-gray-700">
                        Credit Card
                        <br />
                        <span class="font-normal text-sm text-gray-500 transition-all duration-500">
                          Ending with 4242 | Expires 2/25/28
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex justify-center md:justify-start items-center md:items-start flex-col xl:mt-8">
                  <p class="text-base font-bold text-black transition-all duration-500 group-hover:text-gray-700">
                    Billing Address
                  </p>
                  <p class="font-normal text-sm text-gray-500 transition-all duration-500">
                    180 North King Street, Northhampton MA 1060
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* order-summary-details */}
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
                  <p class="font-medium text-lg leading-8 text-gray-900">
                    $360.00
                  </p>
                </div>
                <div class="flex items-center justify-between gap-4 mb-2">
                  <p class="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">
                    Shipping
                  </p>
                  <p class="font-medium text-lg leading-8 text-gray-600">
                    $40.00
                  </p>
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
                  <p class="font-medium text-lg leading-8 text-emerald-500">
                    -$5.00
                  </p>
                </div>
              </div>
              <div class="total flex items-center justify-between pt-6">
                <p class="font-normal text-xl leading-8 text-black ">Total</p>
                <h5 class="font-manrope font-bold text-2xl leading-9 text-black">
                  $405.00
                </h5>
              </div>
            </div>
            <div className="w-full">
              <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
