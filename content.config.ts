import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import path from 'path'

export default defineContentConfig({
  collections: {
    reports: defineCollection({
      // Load every file inside the `content` directory
      source: {
        cwd: path.resolve('app/content'),
        include: 'reports/*.mdx',
      },
      // Specify the type of content in this collection
      type: 'page',
      schema: z.object({
        title: z.string(),
        hidden: z.boolean(),
        image: z.string(),
        date: z.date(),
        align: z.string(),
      })
    }),
    groups: defineCollection({
      // Load every file inside the `content` directory
      source: {
        cwd: path.resolve('app/content'),
        include: 'groups/*.mdx',
      },
      // Specify the type of content in this collection
      type: 'page',
      schema: z.object({
        title: z.string(),
        hidden: z.boolean(),
        image: z.string(),
        external: z.string(),
        date: z.date(),
        align: z.string(),
        // excerpt: z.object({
        //   type: z.string(),
        //   children: z.any(),
        // }),
        rawbody: z.string(),
      })
    }),
  }
})
