export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'logoText',
      title: 'Logo Text',
      type: 'string',
      description: 'The text for the logo in the header'
    },
    {
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [{
        type: 'object'
        , fields: [
          {
            name: 'label',
            title: 'label',
            type: 'string',
            description: 'Text displayed for the menu item'
          },
          
          {
              name: 'url',
              title: 'URL',
              type: 'url',
              description: 'Link the menu item points to'
            }
        ]
      }],
      description: 'List of menu items in the header'
    },

  ]
};
