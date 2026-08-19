import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// During `next build` the config is imported to collect routes and generate the
// import map, which does not require a database or a real secret.
const isBuildPhase = process.env.NEXT_PHASE === 'phase-production-build'

const requiredEnv = (name: string): string => {
  const value = process.env[name]
  if (value) return value

  const message = `Missing required environment variable ${name}. Copy .env.example to .env and set it before starting the app.`
  if (isBuildPhase) {
    console.warn(`[payload.config] ${message}`)
    return ''
  }

  throw new Error(message)
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: requiredEnv('PAYLOAD_SECRET'),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: requiredEnv('DATABASE_URL'),
    },
  }),
  sharp,
  plugins: [],
})
