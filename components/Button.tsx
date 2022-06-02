import styles from './Button.module.scss'
import React from 'react'

const Button: React.FC<{
  label: string
  type?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>['type']
  isSubmitting?: boolean
  variant?: 'primary' | 'secondary'
}> = ({ label, type = 'button', isSubmitting, variant = 'primary' }) => {
  return (
    <button type={type} className={styles.button}>
      {label}
    </button>
  )
}

export default Button
