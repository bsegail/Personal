import styles from './Header.module.scss'
import React from 'react'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p className={styles.name}>Bailey Segail</p>
        <nav>
          <ul className={styles.list}>
            <li>
              <a href={'/documents/Bailey_Segail_20221126.pdf'} target={'_blank'} rel={'noreferrer'}>
                Download CV
              </a>
            </li>
            <li>
              <a href={'#contact'}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
