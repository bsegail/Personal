import React from 'react'
import { Container } from '@/components/Container'
import styles from './AboutMe.module.css'
import Image from 'next/image'

export const AboutMe: React.FC = () => {
  return (
    <Container>
      <div className={styles.AboutMe}>
        <div>
          <Image
            src={'/images/illustrations/portrait.jpg'}
            alt={'Bailey Segail line drawing'}
            width={866}
            height={866}
            objectFit={'contain'}
          />
        </div>
        <div>
          <p>
            Hi, I’m Bailey Segail.
          </p>
          <p>
            I’m a tech lead that’s delivered digital products for some of Australia’s largest brands.
          </p>
          <p>
            I’ve been hyper-fixated on technology since I was a kid, and have a knack for solving complex technical
            problems.
          </p>
          <p className={styles.callout}>
            When I’m not programming I can be found at the gym, rocking out to heavy metal or cooking up an elaborate
            meal.
          </p>
        </div>
      </div>
    </Container>
  )
}
