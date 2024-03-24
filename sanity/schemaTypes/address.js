export const address = {
  name: "address",
  title: "Address",
  type: "object",
  fields: [
    {
      name: "streetAddress",
      title: "Street Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "state",
      title: "State",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "zipCode",
      title: "Zip Code",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "country",
      title: "Country",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
