import React from 'react'
import styles from './Header.module.css'
import { Container } from '@/components/Container'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <p className={styles.name}>B. Segail</p>
        <nav>
          <ul className={styles.list}>
            <li>
              <a href={'/documents/Bailey_Segail_20240306.pdf'} target={'_blank'} rel={'noreferrer'}>
                Download CV
              </a>
            </li>
            <li>
              <a href={'#contact'}>Contact</a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
