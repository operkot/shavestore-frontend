import { ReactNode, useEffect, useState, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'

type PortalProps = {
  children: ReactNode
  shouldBodyLocked?: boolean
}

export function Portal({ children, shouldBodyLocked = false }: PortalProps) {
  const [container] = useState(() => document.createElement('div'))

  useLayoutEffect(() => {
    if (!shouldBodyLocked) return

    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [shouldBodyLocked])

  useEffect(() => {
    document.body.appendChild(container)

    return () => {
      document.body.removeChild(container)
    }
  }, [container])

  return ReactDOM.createPortal(children, container)
}
