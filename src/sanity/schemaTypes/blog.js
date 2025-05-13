export default {
  name: 'blog',
  title: 'Blog',
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
      name: 'cta',
      title: 'Call To Action',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'CTA Text',
          type: 'string',
        },
        {
          name: 'url',
          title: 'CTA URL',
          type: 'url',
        }
      ]
    },
     {
      name: 'isHidden',
      title: 'Hide Section',
      type: 'boolean',
      description: 'Check to hide this section from the website',
    },

  ]
}
