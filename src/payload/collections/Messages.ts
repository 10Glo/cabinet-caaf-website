// RATIONALE: Collection Messages = soumissions formulaire de contact public CAAF.
// Frontend: app/(frontend)/contact — formulaire POST /api/messages (create public)
// puis inbox admin Payload (tri par status + date). Pas de page publique listant Messages.
// - name text required → identité expéditeur, useAsTitle admin.
// - email text required → replyTo + validation format.
// - phone text → téléphone optionnel (qualification lead, lien tel:).
// - company text → entreprise / organisation optionnelle.
// - message textarea required → corps de la demande (texte long).
// - rgpd checkbox required → consentement RGPD (validation bloquante + mention légale).
// - status select {new,read,archived} default new → workflow back-office (sidebar).
// - access create () => true (formulaire public anonyme), read/update/delete admin only (role=admin).
// - hooks afterChange → placeholder envoi email (payload.sendEmail / Resend) sur create.
// SEED: { name:"John Doe", email:"john@exemple.com", phone:"+243 999 000 000", company:"Acme", message:"Bonjour, je souhaite...", rgpd:true, status:"new" }

import type { CollectionConfig } from 'payload'

export const Messages: CollectionConfig = {
  slug: 'messages',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'company', 'status', 'createdAt'],
    description: 'Messages — inbox formulaire de contact (public create, admin read)',
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'editor',
    update: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'editor',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation === 'create') {
          // TODO: envoi email notification — brancher Resend / payload.sendEmail
          // Ex: await payload.sendEmail({ to: process.env.CONTACT_TO, subject: `Nouveau message de ${doc.name}`, html: `<p>${doc.message}</p><p>${doc.email} — ${doc.phone ?? ''}</p>` })
          // Placeholder: log serveur (ne pas bloquer la requête)
          console.log(`[Messages] Nouveau message de ${doc.name} <${doc.email}> — status: ${doc.status}`)
        }
      },
    ],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: { description: 'Nom complet — useAsTitle, requis' },
    },
    {
      name: 'email',
      type: 'text',
      required: true,
      admin: { description: 'Email — requis, replyTo notification' },
    },
    {
      name: 'phone',
      type: 'text',
      admin: { description: 'Téléphone — optionnel (ex: +243...)' },
    },
    {
      name: 'company',
      type: 'text',
      admin: { description: 'Entreprise / organisation — optionnel' },
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      admin: { description: 'Message — corps de la demande, requis' },
    },
    {
      name: 'rgpd',
      type: 'checkbox',
      required: true,
      admin: { description: 'Consentement RGPD — requis (case à cocher)' },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'new',
      options: [
        { label: 'Nouveau', value: 'new' },
        { label: 'Lu', value: 'read' },
        { label: 'Archivé', value: 'archived' },
      ],
      admin: { description: 'Statut — workflow inbox', position: 'sidebar' },
    },
  ],
}
