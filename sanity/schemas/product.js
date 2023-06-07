export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "image2",
      title: "Image2",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "image3",
      title: "Image3",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
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
      name: "price",
      title: "Price buy",
      type: "number",
    },
    {
      name: "sell",
      title: "Price we sell",
      type: "number",
    },
    {
      name: "priceo",
      title: "Price buy original",
      type: "number",
    },
    {
      name: "sello",
      title: "Price we sell original",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
    {
      name: "provider",
      title: "Provider",
      type: "string",
    },
  ],
};
