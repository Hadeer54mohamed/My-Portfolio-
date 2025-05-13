export default {
  name: 'contact',
  title: 'Contact ',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email ',
      type: 'string',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
    },
    {
      name: 'github',
      title: 'GitHub',
      type: 'url',
    },
    {
      name: 'isHidden',
      title: 'Hide Section',
      type: 'boolean',
      description: 'Check to hide this section from the website',
    }, 
  ],
};

