export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'footerText',
      title: 'Footer Text',
      type: 'string',
      description: 'The text displayed in the footer (e.g., copyright information)',
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'platform',
            title: 'Platform Name',
            type: 'string',
          },
          {
            name: 'url',
            title: 'URL',
            type: 'url',
          },
          {
            name: 'iconUrl',
            title: 'Icon URL',
            type: 'url', 
          },
        ],
      }],
    },
  ],
};
