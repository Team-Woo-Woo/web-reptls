import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      // Load every file inside the `content` directory
      source: 'articles/*.mdx',
      // Specify the type of content in this collection
      type: 'page',
      schema: z.object({
        title: z.string(),
        hidden: z.boolean(),
        public: z.boolean(),
        image: z.string(),
        date: z.date(),
      })
    })
  }
})
