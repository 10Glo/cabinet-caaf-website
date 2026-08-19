'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

export type WebSocketStatus = 'idle' | 'connecting' | 'open' | 'closed' | 'error'

interface UseWebSocketProps {
  url: string
  onMessage: (data: unknown) => void
  /** Called with any connection or message-parsing failure. */
  onError?: (error: Error) => void
}

export const useWebSocket = ({ url, onMessage, onError }: UseWebSocketProps) => {
  const wsRef = useRef<WebSocket | null>(null)
  const [status, setStatus] = useState<WebSocketStatus>('idle')
  const [error, setError] = useState<Error | null>(null)

  const callbacksRef = useRef({ onMessage, onError })
  callbacksRef.current = { onMessage, onError }

  const reportError = useCallback((err: Error) => {
    console.error('[useWebSocket]', err)
    setError(err)
    setStatus('error')
    callbacksRef.current.onError?.(err)
  }, [])

  useEffect(() => {
    // Ensure code only runs on client
    if (typeof window === 'undefined') return

    let socket: WebSocket

    setStatus('connecting')
    setError(null)

    try {
      // Throws synchronously on a malformed or unsupported URL.
      socket = new WebSocket(url)
    } catch (err) {
      reportError(
        new Error(`Failed to open WebSocket connection to ${url}`, {
          cause: err,
        }),
      )
      return
    }

    wsRef.current = socket

    const handleOpen = () => setStatus('open')

    const handleMessage = (event: MessageEvent) => {
      let data: unknown
      try {
        data = JSON.parse(event.data)
      } catch (err) {
        reportError(
          new Error('Failed to parse WebSocket message payload', { cause: err }),
        )
        return
      }

      try {
        callbacksRef.current.onMessage(data)
      } catch (err) {
        reportError(
          new Error('WebSocket message handler threw', { cause: err }),
        )
      }
    }

    const handleError = () => {
      reportError(new Error(`WebSocket connection error for ${url}`))
    }

    const handleClose = (event: CloseEvent) => {
      // A clean close (code 1000) or a close triggered by unmount is expected;
      // anything else is surfaced to the caller.
      if (event.wasClean) {
        setStatus('closed')
        return
      }

      reportError(
        new Error(
          `WebSocket closed unexpectedly (code ${event.code}${
            event.reason ? `: ${event.reason}` : ''
          })`,
        ),
      )
    }

    socket.addEventListener('open', handleOpen)
    socket.addEventListener('message', handleMessage)
    socket.addEventListener('error', handleError)
    socket.addEventListener('close', handleClose)

    return () => {
      socket.removeEventListener('open', handleOpen)
      socket.removeEventListener('message', handleMessage)
      socket.removeEventListener('error', handleError)
      socket.removeEventListener('close', handleClose)
      socket.close()
      wsRef.current = null
    }
  }, [url, reportError])

  return { error, socketRef: wsRef, status }
}
