'use client'

import { useEffect, useRef, useState } from 'react'
import ws from 'ws'

interface UseWebSocketProps {
  url: string
  onMessage: (data: any) => void
}

export const useWebSocket = ({ url, onMessage }: UseWebSocketProps) => {
  const wsRef = useRef<WebSocket | null>(null)

  useEffect(() => {
    // Ensure code only runs on client
    if (typeof window !== 'undefined') {
      const socket = new WebSocket(url)
      wsRef.current = socket

      socket.onopen = () => {
        console.log('Footer connected to WebSocket')
      }

      socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data)
          onMessage(data)
        } catch (err) {
          console.error('Failed to parse WS message', err)
        }
      }

      socket.onerror = (error) => {
        console.error('WebSocket error:', error)
      }

      return () => {
        socket.close()
      }
    }
  }, [url, onMessage])

  return wsRef
}