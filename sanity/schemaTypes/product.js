// Schema (Product)
export const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "skuId",
      title: "SKU ID",
      type: "string",
    },
    {
      name: "rating",
      title: "User Rating",
      type: "array",
      of: [{ type: "number" }],
    },
    {
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "variations",
      title: "Variations",
      type: "array",
      of: [{ type: "productVariations" }],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "productMedia",
      title: "Product Media",
      type: "array",
      of: [{ type: "image" }, { type: "file" }],
      validation: (Rule) =>
        Rule.max(10).error("Maximum of 10 media items allowed."),
    },
    {
      name: "productStatus",
      title: "Product Status",
      type: "string",
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "Inactive", value: "inactive" },
        ],
      },
    },
    {
      name: "stockQuantity",
      title: "Stock Quantity",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    },
  ],
};
