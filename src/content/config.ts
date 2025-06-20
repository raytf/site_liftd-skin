import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

const treatmentsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    treatmentId: z.string(),
    url: z.string(),
    title: z.string(),
    description: z.string(),
    heroImage: z.object({
      src: z.string(),
      alt: z.string(),
      objectPosition: z.string().optional(),
    }),
    treatmentAreas: z.array(
      z.object({
        title: z.string(),
        icon: z.string(),
      })
    ),
    treatmentAreasImage: z.object({
      src: z.string(),
      alt: z.string(),
      objectPosition: z.string().optional(),
    }),
    beforeAfterImages: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
      })
    ),
    faqs: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    benefits: z.array(z.string()).optional(),
    order: z.number().optional(),
    isDark: z.boolean().optional(),
  }),
});

export const collections = {
  post: postCollection,
  treatments: treatmentsCollection,
};
