export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options:{
        hotspot:true
      }
    },
    {
      name: 'isHidden',
      title: 'Hide Section',
      type: 'boolean',
      description: 'Check to hide this section from the website',
    }, 
   
  ]
}
