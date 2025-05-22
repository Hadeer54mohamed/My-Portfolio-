import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'
import { documentInternationalization } from '@sanity/document-internationalization'

import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
    documentInternationalization({
      languages: [
        { id: 'en', title: 'English' },
        { id: 'ar', title: 'العربية' },
      ],
      referenceBehavior: 'strong',
      schemaTypes: ['header', 'about', 'blog', 'contact', 'footer', 'hero', 'service'],
    }),
  ],
})
