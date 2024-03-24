export const productVariation = {
  name: "productVariation",
  title: "Product Variation",
  type: "object",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "skuIds",
      title: "SKu IDs",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
