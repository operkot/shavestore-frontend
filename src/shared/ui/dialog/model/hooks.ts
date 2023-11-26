import { useState } from 'react'

export function useDialog({ initialOpen = false } = {}) {
  const [isOpen, setIsOpen] = useState(initialOpen)

  function onOpen() {
    setIsOpen(true)
  }

  function onClose() {
    setIsOpen(false)
  }

  function onToggle() {
    setIsOpen(prev => !prev)
  }

  return { onOpen, onClose, isOpen, onToggle }
}
