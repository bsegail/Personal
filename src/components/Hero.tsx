import React from 'react'
import styles from './Hero.module.css'
import { Rocket } from '@/components/Rocket'
import { Arrow } from '@/components/Arrow'
import { Container } from '@/components/Container'

export const Hero = () => {
  return (
    <Container className={styles.Hero}>
      <div className={styles.text}>
        <h1>I build, launch and scale greenfield projects by leading teams and creating quality software.</h1>
        <div className={styles.arrow}>
          <p>See projects</p>
          <Arrow />
        </div>
      </div>
      <Rocket />
    </Container>
  )
}
