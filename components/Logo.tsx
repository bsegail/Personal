import styles from './Logo.module.css'
import React from 'react'

const Logo: React.FC = () => {
  return <p className={styles.Logo} aria-label={'Logo for Bailey Segail'}>&lt;BS /&gt;</p>
}
export default Logo