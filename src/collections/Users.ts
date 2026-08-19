import type { Access, CollectionConfig } from 'payload'

const authenticated: Access = ({ req: { user } }) => Boolean(user)

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    tokenExpiration: 60 * 60 * 2,
    maxLoginAttempts: 5,
    lockTime: 10 * 60 * 1000,
  },
  access: {
    admin: ({ req: { user } }) => Boolean(user),
    create: authenticated,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
    unlock: authenticated,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
