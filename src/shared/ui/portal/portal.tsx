import { ReactNode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useLockBodyScroll } from '@uidotdev/usehooks'

type PortalProps = {
  children: ReactNode
}

export function Portal({ children }: PortalProps) {
  const [container] = useState(() => document.createElement('div'))

  useLockBodyScroll()

  useEffect(() => {
    document.body.appendChild(container)

    return () => {
      document.body.removeChild(container)
    }
  }, [container])

  return ReactDOM.createPortal(children, container)
}
