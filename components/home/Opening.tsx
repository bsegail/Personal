import React, { useRef } from 'react'
import styles from './Opening.module.scss'
import Image from 'next/legacy/image'
import { ArrowDownCircle } from 'react-feather'
import rocketBackground from '../../public/images/illustrations/rocket-background.svg'
import rocket from '../../public/images/illustrations/rocket.svg'
import gravity from '../../public/images/illustrations/gravity.svg'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, -distance]);
}

const Opening: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll()
  const spaceY = useParallax(scrollYProgress, -100);
  const rocketY = useParallax(scrollYProgress, 1200);
  const rocketX = useParallax(scrollYProgress, -400);
  const gravityY = useParallax(scrollYProgress, 100);

  return (
    <div className={styles.opening}>
      <div className={styles.container}>
        <div>
          <p className={styles.openingText}>
            I build, launch and scale greenfield projects by leading teams and creating quality software.
          </p>
          <div className={styles.arrowButton}>
            <p>See projects</p>
            <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{ repeatType: 'loop', repeatDelay: 0, repeat: Infinity, delay: 0, duration: 2 }}
            >
              <ArrowDownCircle className={styles.icon} size={24} />
            </motion.div>
          </div>
        </div>
        <div />
        <div className={styles.openingImage} ref={ref}>
          <motion.div className={styles.superposition} style={{ y: spaceY }}>
            <Image
              alt={'Space background'}
              src={rocketBackground}
              priority={true}
              width={408}
              height={374}
              objectFit={'contain'}
            />
          </motion.div>
          <motion.div className={styles.superposition} style={{ y: rocketY, x: rocketX }}>
            <Image
              alt={'Rocket image'}
              src={rocket}
              priority={true}
              width={408}
              height={374}
              objectFit={'contain'}
            />
          </motion.div>
          <motion.div className={styles.superposition} style={{ y: gravityY }}>
            <Image
              alt={'Gravity'}
              src={gravity}
              priority={true}
              width={408}
              height={374}
              objectFit={'contain'}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Opening
