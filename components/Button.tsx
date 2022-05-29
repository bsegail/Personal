import styles from './Button.module.scss'
import React from 'react'

const Button: React.FC<{
  label: string
  type?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>['type']
  isSubmitting?: boolean
}> = ({ label, type = 'button', isSubmitting }) => {
  return (
    <button type={type} className={styles.button}>
      {label}
    </button>
  )
}

export default Button
