import styles from './Header.module.scss'
import React from 'react'
import Logo from './Logo'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <ul className={styles.list}>
          {/*<li>Resume</li>*/}
          <li><a href={'#contact'}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
