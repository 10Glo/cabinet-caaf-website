// RATIONALE: Link field réutilisable pour tous les CTA, navigation, expertise.cta.
// Correspond au frontend Link + <Link href> avec variant internal (Pages/Expertises/Articles) vs external URL vs asset.
// SEED: { label:"Planifier un échange", type:"internal", reference:{relationTo:"pages", value:contactId}, newTab:false }

import type { Field, GroupField } from 'payload'

type LinkOptions = {
  overrides?: Partial<GroupField>
  disableLabel?: boolean
  appearances?: false | ('default' | 'outline')[]
}

export const linkField = (options: LinkOptions = {}): Field => {
  const { overrides = {}, disableLabel = false, appearances = false } = options

  const field: GroupField = {
    name: 'link',
    type: 'group',
    admin: { hideGutter: true },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'type',
            type: 'radio',
            options: [
              { label: 'Interne', value: 'internal' },
              { label: 'Externe', value: 'external' },
            ],
            defaultValue: 'internal',
            admin: { layout: 'horizontal', width: '50%' },
          },
          {
            name: 'newTab',
            type: 'checkbox',
            label: 'Ouvrir dans un nouvel onglet',
            admin: { width: '50%', style: { alignSelf: 'flex-end' } as Record<string, string> },
          },
        ],
      },
      {
        name: 'reference',
        type: 'relationship',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        relationTo: ['pages', 'expertises', 'articles', 'publications'] as any,
        required: true,
        maxDepth: 1,
        admin: { condition: (_data, siblingData) => siblingData?.type === 'internal' },
      },
      {
        name: 'url',
        type: 'text',
        label: 'URL externe',
        required: true,
        admin: { condition: (_data, siblingData) => siblingData?.type === 'external' },
      },
    ],
  }

  if (!disableLabel) {
    ;(field.fields as Field[]).push({
      name: 'label',
      type: 'text',
      required: true,
      localized: true,
    })
  }

  if (appearances !== false) {
    ;(field.fields as Field[]).push({
      name: 'appearance',
      type: 'select',
      defaultValue: 'default',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Outline', value: 'outline' },
      ],
    })
  }

  // deep merge overrides (shallow for top level, merge fields if provided)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((overrides as any).name) (field as any).name = (overrides as any).name
  if (overrides.label) (field as Record<string, unknown>).label = overrides.label
  if (overrides.admin) field.admin = { ...field.admin, ...overrides.admin }
  if ((overrides as unknown as { fields: Field[] }).fields) {
    field.fields = [...field.fields, ...(overrides as unknown as { fields: Field[] }).fields]
  }

  return field
}

// Alias for blocks that need ctaPrimary / ctaSecondary naming
export const linkFieldWithName =
  (name: string, overrides: Partial<GroupField> = {}): Field =>
    linkField({ overrides: { ...overrides, name } as Partial<GroupField> })
