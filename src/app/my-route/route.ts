import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async () => {
  try {
    await getPayload({
      config: configPromise,
    })

    return Response.json({
      message: 'This is an example of a custom route.',
    })
  } catch (error) {
    console.error('[GET /my-route] failed', error)

    return Response.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
