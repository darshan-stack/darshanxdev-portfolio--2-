"use client"

import type React from "react"
import { useScroll, useTransform, motion } from "framer-motion"

/**
 * Parallax / fade wrapper that no longer depends on its own ref.
 * By omitting the `target` option, useScroll listens to the viewport,
 * so there’s never a chance of calling `.addEventListener` on `null`.
 */
export const ContainerScroll = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  // Track the overall window scroll instead of a potentially-null element
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  )
}
