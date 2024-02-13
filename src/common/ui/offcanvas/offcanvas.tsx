import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Portal } from '..'

type OffcanvasProps = {
  children: ReactNode
  isOpen: boolean
  onClose?: () => void
}

export const Offcanvas = ({ children, isOpen, onClose }: OffcanvasProps) => (
  <AnimatePresence initial={false} mode="wait">
    {isOpen && (
      <Portal shouldBodyLocked>
        <div className="fixed inset-0 z-20 flex">
          {/* BACKDROP */}
          <motion.div
            role="button"
            tabIndex={0}
            className="absolute inset-0 cursor-pointer bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* PANEL */}
          <motion.div
            className="relative z-2 flex flex-col max-w-sm w-full p-4 bg-white"
            initial={{ transform: 'translateX(-100%)' }}
            animate={{
              transform: 'translateX(0)',
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
            exit={{
              transform: 'translateX(-100%)',
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
          >
            {children}
          </motion.div>
        </div>
      </Portal>
    )}
  </AnimatePresence>
)
