import { defineField, defineType } from 'sanity';

export const treatmentType = defineType({
  name: 'treatment',
  title: 'Treatment',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'blockContent',
    }),
    defineField({
      name: 'heroImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'heroImage',
    },
  },
});
