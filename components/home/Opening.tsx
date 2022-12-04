import React from 'react'
import styles from './Opening.module.scss'
import Image from 'next/legacy/image'
import { ArrowDownCircle } from 'react-feather'
import rocketBackground from '../../public/images/illustrations/rocket-background.svg'
import rocket from '../../public/images/illustrations/rocket.svg'
import gravity from '../../public/images/illustrations/gravity.svg'

const Opening: React.FC = () => {
  return (
    <div className={styles.opening}>
      <div className={styles.container}>
        <div>
          <p className={styles.openingText}>
            I build, launch and scale greenfield projects by leading teams and creating quality software.
          </p>
          <div className={styles.arrowButton}>
            <p>See projects</p>
            <ArrowDownCircle className={styles.icon} size={24} />
          </div>
        </div>

        <div className={styles.openingImage}>
          <div className={styles.superposition}>
            <Image
              alt={'Space background'}
              src={rocketBackground}
              width={408}
              height={374}
              className={styles.superposition}
            />
          </div>
          <div className={styles.superposition}>
            <Image alt={'Rocket image'} src={rocket} width={408} height={374} className={styles.superposition} />
          </div>
          <div className={styles.superposition}>
            <Image alt={'Gravity'} src={gravity} width={408} height={374} className={styles.superposition} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Opening
