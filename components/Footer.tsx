import styles from './Footer.module.scss'
import React from 'react'
import { Linkedin } from 'react-feather'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; Bailey Segail 2022</p>
      <nav>
        <ul className={styles.list}>
          <li>
            <a href={'https://www.linkedin.com/in/bailey-segail/'} aria-label={'Navigate to LinkedIn'}><Linkedin size={16} /></a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
