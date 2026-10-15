'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ComponentProps, ReactNode } from 'react'

type MotionRevealProps = {
  children: ReactNode
  delay?: number
  className?: string
} & Omit<ComponentProps<typeof motion.div>, 'children'>

export function MotionReveal({ children, delay = 0, className, ...props }: MotionRevealProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={`motion-reveal ${className ?? ''}`}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 0.65, delay: prefersReducedMotion ? 0 : delay, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function MotionTag({ children, className }: { children: ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.span
      className={`motion-tag inline-block ${className ?? ''}`}
      initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.span>
  )
}
