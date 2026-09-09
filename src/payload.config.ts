// RATIONALE: Config Payload v3 — génère depuis frontend existant. Localization fr (default) + en (H1).
// SEED: payload-types.ts généré via `pnpm generate:types`.

import { postgresAdapter } from '@payloadcms/db-postgres'
import {
  BoldFeature,
  ItalicFeature,
  HeadingFeature,
  LinkFeature,
  OrderedListFeature,
  UnorderedListFeature,
  BlockquoteFeature,
  UploadFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Collections
import { Users } from './payload/collections/Users'
import { Media } from './payload/collections/Media'
import { Pages } from './payload/collections/Pages'
import { Expertises } from './payload/collections/Expertises'
import { Articles } from './payload/collections/Articles'
import { ArticleCategories } from './payload/collections/ArticleCategories'
import { Authors } from './payload/collections/Authors'
import { Tags } from './payload/collections/Tags'
import { Sectors } from './payload/collections/Sectors'
import { Clients } from './payload/collections/Clients'
import { Certifications } from './payload/collections/Certifications'
import { Publications } from './payload/collections/Publications'
import { PublicationCategories } from './payload/collections/PublicationCategories'
import { Jobs } from './payload/collections/Jobs'
import { Roles } from './payload/collections/Roles'
import { Offices } from './payload/collections/Offices'
import { Faqs } from './payload/collections/Faqs'
import { Testimonials } from './payload/collections/Testimonials'
import { Milestones } from './payload/collections/Milestones'
import { Redirects } from './payload/collections/Redirects'
import { Messages } from './payload/collections/Messages'

// Globals
import { SiteSettings } from './payload/globals/SiteSettings'
import { Header } from './payload/globals/Header'
import { Footer } from './payload/globals/Footer'
import { SeoDefaults } from './payload/globals/SeoDefaults'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Pages,
    Expertises,
    Articles,
    ArticleCategories,
    Authors,
    Tags,
    Sectors,
    Clients,
    Certifications,
    Publications,
    PublicationCategories,
    Jobs,
    Roles,
    Offices,
    Faqs,
    Testimonials,
    Milestones,
    Redirects,
    Messages,
  ],
  globals: [SiteSettings, Header, Footer, SeoDefaults],
  localization: {
    locales: [
      { label: 'Français', code: 'fr' },
      { label: 'English', code: 'en' },
    ],
    defaultLocale: 'fr',
    fallback: true,
  },
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
      BoldFeature(),
      ItalicFeature(),
      OrderedListFeature(),
      UnorderedListFeature(),
      BlockquoteFeature(),
      LinkFeature({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        enabledCollections: ['pages', 'expertises', 'articles', 'publications'] as any,
      }),
      UploadFeature({
        collections: {
          media: {
            fields: [
              {
                name: 'caption',
                type: 'text',
              },
            ],
          },
        },
      }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})
