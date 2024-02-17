'use client'
import { motion } from 'framer-motion'
import { ArrowDownCircle } from 'react-feather'
import React from 'react'

export const Arrow = () => {
  return (
    <motion.div
      animate={{
        y: [0, 5, 0],
      }}
      transition={{repeatType: 'loop', repeatDelay: 0, repeat: Infinity, delay: 0, duration: 2}}
    >
      <ArrowDownCircle size={24}/>
    </motion.div>
  )
}
