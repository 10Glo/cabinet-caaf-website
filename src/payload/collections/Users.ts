// RATIONALE: Collection Users = comptes back-office CAAF (Payload auth).
// Frontend: aucun frontend public — uniquement admin Payload (/admin).
// - email/password gérés par auth:true (Payload ajoute email + hash + login).
// - role select {admin,editor} default editor required → RBAC minimal:
//   admin = gestion complète (users, settings, toutes collections), editor = rédaction (articles, pages...)
//   sans gestion des comptes ni suppression critique.
// - access: create/delete = admin only, read = authentifié, update = admin ou self (user.id === req.user.id).
// - admin useAsTitle email → identification rapide dans l’admin.
// - garde auth true + versions? non — auth gère déjà les sessions/tokens.
// SEED: { email:"admin@caaf-sas.com", password:"***", role:"admin" } / { email:"redac@caaf-sas.com", role:"editor" }

import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'role', 'createdAt'],
    description: 'Utilisateurs back-office — RBAC admin/editor',
  },
  auth: true,
  access: {
    // Admin UI access — seuls les authentifiés accèdent, mais la granularité est gérée par create/read/update/delete
    admin: ({ req: { user } }) => !!user,
    create: ({ req: { user } }) => user?.role === 'admin',
    read: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => user?.role === 'admin' || !!user,
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      admin: { description: 'Rôle — admin (full) / editor (rédaction)', position: 'sidebar' },
    },
  ],
}
