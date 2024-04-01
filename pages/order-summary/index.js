import CartDetails from "@/components/cart-details";
import OrderSummaryDetails from "@/components/order-summary-details";
import PaymentDetails from "@/components/payment-details";
import PlaceOrderBtn from "@/components/place-order-btn";
import ShippingDetails from "@/components/shipping-details";
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
            <CartDetails />

            {/* shipping-details */}
            <ShippingDetails />

            {/* payment-details */}
            <PaymentDetails />
          </div>
          <div className="flex flex-col w-full gap-4">
            {/* order-summary-details */}
            <OrderSummaryDetails />
            <PlaceOrderBtn />
          </div>
        </div>
      </div>
    </section>
  );
}
