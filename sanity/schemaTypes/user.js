// Schema (User)
export const user = {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
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
    {
      name: "orders",
      title: "Orders",
      type: "array",
      of: [{ type: "reference", to: [{ type: "order" }] }],
    },
  ],
};
