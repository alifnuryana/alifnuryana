import { defineCollection, defineContentConfig } from '@nuxt/content'

/**
 * Default Schema Every Collections
 * https://content.nuxt.com/docs/collections/types#schema-overrides
 */
export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: '**/*.md',
    }),
  },
})
