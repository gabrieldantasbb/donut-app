export default {
    title: 'Banners',
    name: 'banners',
    type: 'document',
    fields: [{
        title: 'Banner Name',
        name: 'bannerName',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        title: 'A little description',
        name: 'bannerDesc',
        type: 'text',
        options: {
          maxLength: 200,
        },
        validation: Rule => Rule.required()
      },
      {
        title: "Banner Image",
        name: "bannerImage",
        type: "image",
        options: {
          hotspot: true,
        },
      }
    ]
  }