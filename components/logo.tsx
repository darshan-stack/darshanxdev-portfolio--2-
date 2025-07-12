"use client"

import { motion } from "framer-motion"
import { Bot } from "lucide-react"
import { useTheme } from "next-themes"

export function Logo() {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 left-6 z-[5001] flex items-center space-x-2"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
      >
        <Bot className="w-6 h-6 text-white" />
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="font-bold text-xl sm:text-2xl font-['Zeyada'] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg"
        style={{
          fontFamily: '"Zeyada", cursive',
          fontWeight: 400,
          fontStyle: 'normal'
        }}
      >
        DarshanXDev
      </motion.span>
    </motion.div>
  )
}
