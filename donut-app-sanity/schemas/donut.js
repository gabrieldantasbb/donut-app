export default {
    title: 'Donuts',
    name: 'donuts',
    type: 'document',
    fields: [{
        title: 'Donut Name',
        name: 'donutName',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        title: 'A little description',
        name: 'donutDesc',
        type: 'text',
        options: {
          maxLength: 200,
        },
        validation: Rule => Rule.required()
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      {
        title: "Donut Image",
        name: "donutImage",
        type: "image",
        options: {
          hotspot: true,
        },
      }
    ]
  }