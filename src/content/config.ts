import { defineCollection, type ImageFunction, z } from 'astro:content';

const statusSchema = z
  .enum(['draft', 'published', 'archived'])
  .default('draft');

const colorPaletteSchema = z.enum([
  'primary',
  'secondary',
  'highlight',
  'neutral',
]);

const sectionBgColorSchema = z.enum(['white', 'yellow', 'pink', 'blue']);

const createSchemas = (image: ImageFunction) => {
  const buttonSchema = z.object({
    variant: z.string(),
    size: z.string(),
    href: z.string(),
    text: z.string(),
  });

  const cardSchema = z.object({
    title: z.string(),
    content: z.string().optional(),
    image: image().optional(),
    button: buttonSchema.optional(),
    color: colorPaletteSchema.optional(),
  });

  return { buttonSchema, cardSchema };
};

const pagesCollection = defineCollection({
  type: 'data',
  schema: ({ image }) => {
    const { buttonSchema, cardSchema } = createSchemas(image);

    const SectionCommonSchema = z.object({
      background: z
        .object({
          bgColor: sectionBgColorSchema.optional(),
          bgType: z.string().optional(),
        })
        .optional(),
    });

    const featureItemSchema = z.object({
      title: z.string(),
      description: z.string().optional(),
    });

    const sectionsSchema = z.discriminatedUnion('type', [
      SectionCommonSchema.extend({
        type: z.literal('feature'),
        title: z.string(),
        titleSize: z
          .union([
            z.literal(1),
            z.literal(2),
            z.literal(3),
            z.literal(4),
            z.literal(5),
            z.literal(6),
          ])
          .optional()
          .default(2),
        body: z.string().optional(),
        bodySize: z.enum(['normal', 'large']).optional().default('normal'),
        illustration: image().optional(),
        illustrationPosition: z
          .enum(['top', 'bottom', 'left', 'right'])
          .optional()
          .default('top'),
        items: z.array(featureItemSchema).optional(),
      }),
      SectionCommonSchema.extend({
        type: z.literal('richText'),
        content: z.string(),
        withTOC: z.boolean().optional().default(false),
      }),
      SectionCommonSchema.extend({
        type: z.literal('button'),
        title: z.string().optional(),
        buttons: z.array(buttonSchema).optional(),
      }),
      SectionCommonSchema.extend({
        type: z.literal('card'),
        title: z.string(),
        description: z.string().optional(),
        cards: z.array(cardSchema).optional(),
        buttons: z.array(buttonSchema).optional(),
      }),
    ]);

    const flexiSectionSchema = SectionCommonSchema.extend({
      type: z.literal('flexi'),
      title: z.string(),
      description: z.string().optional(),
      sections: z.array(sectionsSchema),
    });

    return z.object({
      title: z.string(),
      description: z.string().optional(),
      heroImage: image().optional(),
      permalink: z.string().optional(),
      status: statusSchema,
      sections: z
        .union([...sectionsSchema.options, flexiSectionSchema])
        .array()
        .optional(),
    });
  },
});

const siteCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      url: z.string().url(),
      favicon: z.string().default('/favicon.svg'),
      defaultOgImage: image().optional(),
      defaultLogoLight: image().optional(),
      defaultLogoDark: image().optional(),
      defaultLogoSquare: image().optional(),
      social: z
        .object({
          bluesky: z.string().optional(),
          github: z.string().optional(),
          mastodon: z.string().optional(),
          linkedin: z.string().optional(),
          x: z.string().optional(),
          facebook: z.string().optional(),
          instagram: z.string().optional(),
          youtube: z.string().optional(),
        })
        .optional(),
      footer: z.object({
        description: z.string().optional(),
        bottom: z.string(),
      }),
      archivedBanner: z
        .object({
          message: z.string(),
          color: colorPaletteSchema,
        })
        .optional(),
      cookieConsent: z
        .object({
          message: z.string(),
          googleAnalyticsId: z.string().optional(),
        })
        .optional(),
    }),
});

const flexibleLinkSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('internal'),
    pageRef: z.string(),
  }),
  z.object({
    type: z.literal('external'),
    url: z.string().url(),
  }),
]);

const navItemLinkSchema = z.object({
  type: z.literal('link'),
  label: z.string(),
  link: flexibleLinkSchema,
  description: z.string().optional(),
});

const navItemDropdownSchema = z.object({
  type: z.literal('dropdown'),
  label: z.string(),
  children: z.array(
    z.object({
      label: z.string(),
      link: flexibleLinkSchema,
      description: z.string().optional(),
    })
  ),
});

const navigationItemSchema = z.discriminatedUnion('type', [
  navItemLinkSchema,
  navItemDropdownSchema,
]);

const navigationCollection = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    items: z.array(navigationItemSchema),
  }),
});

const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    permalink: z.string(),
    title: z.string(),
    chapter: z.string(),
    chapterOrder: z.number(),
    order: z.number(),
    status: statusSchema,
    description: z.string().optional(),
  }),
});

export const collections = {
  pages: pagesCollection,
  docs: docsCollection,
  site: siteCollection,
  navigation: navigationCollection,
};
