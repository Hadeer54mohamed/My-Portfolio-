export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "bg_img",
      title: "Background Image",
      type: "image",
      options: {
         hotspot: true 
        },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
     
    },
    {
      name: "btn_text",
      title: "Button Text",
      type: "string",
      
    },
    {
      name: "phones",
      title: "Phone Numbers",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      
    },
    {
      name: "footer_links",
      title: "Footer Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Section Title",
              type: "string",
             
            },
            {
              name: "links",
              title: "Links",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "name",
                      title: "Link Name",
                      type: "string",
                     
                    },
                    {
                      name: "link",
                      title: "URL",
                      type: "string",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "social_links",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "link",
              title: "URL",
              type: "url",
            },
           
            {
              name: "icon",
              title: "Icon Class (FontAwesome)",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};