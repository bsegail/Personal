import styles from './Button.module.css'
import React from 'react'
import Loading from './Loading'

const Button: React.FC<{
  label: string
  type?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>['type']
  isSubmitting?: boolean
  variant?: 'primary' | 'secondary'
  className?: string
}> = ({label, type = 'button', isSubmitting, variant = 'primary', className}) => {
  return (
    <button type={type} className={[styles.button, styles[variant], className].join(' ')}>
      {isSubmitting ? <div className={styles.buttonLoading}><Loading/></div> : null}
      {label}
    </button>
  )
}

export default Button
