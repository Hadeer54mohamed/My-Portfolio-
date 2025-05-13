export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
   name: 'image',
  title: 'Image',
  type: 'image', 
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
    },
    {
      name: 'isHidden',
      title: 'Hide Section',
      type: 'boolean',
      description: 'Check to hide this section from the website',
    }, 
  ]
}
