export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main title for the hero section',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Subtitle text for the hero section',
    },
    {
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
      description: 'Text for the Call to Action button',
    },
    {
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'url',
      description: 'URL for the Call to Action button',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
     {
      name: 'isHidden',
      title: 'Hide Section',
      type: 'boolean',
      description: 'Check to hide this section from the website',
    }, 
  ],
};
