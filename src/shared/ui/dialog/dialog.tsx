import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Portal } from '..'

type DialogProps = {
  children: ReactNode
  isOpen: boolean
  onClose?: () => void
}

export const Dialog = ({ children, isOpen, onClose }: DialogProps) => {
  return (
    <AnimatePresence initial={false} mode="wait">
      {isOpen && (
        <Portal>
          {/* DIALOG WRAPPER */}
          <div
            className="fixed top-0 right-0 bottom-0 left-0 z-20 flex"
            role="dialog"
          >
            {/* DIALOG BACKDROP */}
            <motion.div
              role="button"
              tabIndex={0}
              className="absolute top-0 right-0 bottom-0 left-0 cursor-pointer bg-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />

            {/* DIALOG CONTENT */}
            <motion.div
              className="relative z-2 flex flex-col w-full max-w-3xl h-[80vh] max-h-[95vh] mt-auto mx-auto p-4 rounded-t-2xl bg-white"
              initial={{ transform: 'translateY(100%)' }}
              animate={{
                transform: 'translateY(0)',
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              exit={{
                transform: 'translateY(100%)',
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
}
