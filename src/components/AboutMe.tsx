import React from 'react'
import { Container } from '@/components/Container'
import styles from './AboutMe.module.css'

export const AboutMe: React.FC = () => {
  return (
    <Container className={styles.AboutMe}>
      <div>
        <p>
          Hi, I’m Bailey Segail.
        </p>
        <p>
          I’m a Tech Lead that’s delivered inspiring digital products for some of Australia’s largest brands.
        </p>
        <p>
          I’ve been hyper-fixated on technology since I was a kid, and have a knack for complex solving technical
          problems.
        </p>
        <p className={styles.callout}>
          When I’m not programming I can be found at the gym, rocking out to heavy metal or cooking up an elaborate
          meal.
        </p>
      </div>
    </Container>
  )
}
