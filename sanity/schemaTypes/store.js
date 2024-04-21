// Schema (Store)
export const store = {
  name: "store",
  title: "Store",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 20,
      },
    },
    {
      name: "tagline",
      title: "Tag Line",
      type: "string",
    },
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    },
    {
      name: "seller",
      title: "Seller",
      type: "object",
      fields: [
        {
          name: "firstName",
          title: "First Name",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "lastName",
          title: "Last Name",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "email",
          title: "Email",
          type: "email",
          validation: (Rule) => Rule.required().email(),
        },
        {
          name: "phoneNumber",
          title: "Phone Number",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
};
