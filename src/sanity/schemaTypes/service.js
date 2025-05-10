export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
   name: 'image',
  title: 'Image',
  type: 'image',  // غيرت من array لـ image
  options: {
    hotspot: true,
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 90,
      }
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    }
  ]
}
