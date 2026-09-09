// RATIONALE: RichText Lexical centralisé pour Article.content, FAQ.answer, Page blocks RichText.
// Frontend actuel: markdown string[] + PortableText. Migration vers Lexical avec H2/H3/H4, Bold, Italic, Link, UL, OL, Quote, Upload, Relationship.
// SEED: Lexical JSON généré depuis markdown existant (article-content.ts).

import type { RichTextField } from 'payload'
import {
  BoldFeature,
  ItalicFeature,
  HeadingFeature,
  InlineToolbarFeature,
  FixedToolbarFeature,
  LinkFeature,
  OrderedListFeature,
  UnorderedListFeature,
  BlockquoteFeature,
  UploadFeature,
} from '@payloadcms/richtext-lexical'

export const richTextField = (overrides: Partial<RichTextField> = {}): RichTextField => ({
  name: 'content',
  type: 'richText',
  localized: true,
  editor: {
    // lexicalEditor configuré globalement dans payload.config, ici override per-field si besoin
  } as unknown as RichTextField['editor'],
  ...overrides,
})

export const lexicalFeatures = {
  // Factory pour payload.config editor global
  defaultFeatures: () => [
    HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
    BoldFeature(),
    ItalicFeature(),
    OrderedListFeature(),
    UnorderedListFeature(),
    BlockquoteFeature(),
    LinkFeature({
      enabledCollections: ['pages', 'expertises', 'articles', 'publications'],
    }),
    UploadFeature({ collections: { media: { fields: [] } } }),
    FixedToolbarFeature(),
    InlineToolbarFeature(),
  ],
}
