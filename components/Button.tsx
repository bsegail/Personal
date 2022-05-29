import styles from './Button.module.scss'
import React from 'react'

const Button: React.FC<{
  label: string
  type?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>['type']
}> = ({ label, type = 'button' }) => {
  return <button type={type} className={styles.button}>{label}</button>
}

export default Button
