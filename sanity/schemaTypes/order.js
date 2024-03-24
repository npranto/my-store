// Schema (Order)
export const order = {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "orderNumber",
      title: "Order Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "customer",
      title: "Customer",
      type: "reference",
      to: [{ type: "user" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "orderedAt",
      title: "Order Date and Time",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [{ type: "orderItem" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "totalAmount",
      title: "Total Amount",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Processing", value: "processing" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "shippingAddress",
      title: "Shipping Address",
      type: "address",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "billingAddress",
      title: "Billing Address",
      type: "address",
      validation: (Rule) => Rule.required(),
    },
  ],
};
