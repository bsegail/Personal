'use client'
import styles from '@/components/Rocket.module.css'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import rocketBackground from '../../public/images/illustrations/rocket-background.svg'
import rocket from '../../public/images/illustrations/rocket.svg'
import gravity from '../../public/images/illustrations/gravity.svg'
import React, { useRef } from 'react'

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, -distance])
}

const width = 408
const height = 374

const base = 50


export const Rocket = () => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll()
  const spaceY = useParallax(scrollYProgress, -base * 7)
  const rocketY = useParallax(scrollYProgress, base * 3 * 7)
  const rocketX = useParallax(scrollYProgress, -base * 7)
  const gravityY = useParallax(scrollYProgress, base * 7)

  return (
    <div ref={ref} style={{width, height}} className={styles.rocket}>
      <motion.div
        className={styles.superposition}
                  style={{y: spaceY}}
      >
        <Image
          alt={'Space background'}
          src={rocketBackground}
          priority={true}
        />
      </motion.div>
      <motion.div className={styles.superposition}
        style={{y: rocketY, x: rocketX}}
      >
        <Image
          alt={'Rocket image'}
          src={rocket}
          priority={true}
        />
      </motion.div>
      <motion.div className={styles.superposition}
        style={{y: gravityY}}
      >
        <Image
          alt={'Gravity'}
          src={gravity}
          priority={true}
        />
      </motion.div>
    </div>
  )
}
