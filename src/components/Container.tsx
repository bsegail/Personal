import React from 'react'
import styles from './Container.module.css'
export const Container: React.FC<{ children: React.ReactNode, className?: string, id?: string }> = ({ children, className, id }) => {
  return (
    <div className={[styles.Container, className].join(' ')} id={id}>
      {children}
    </div>
  )
}
