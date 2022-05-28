import styles from './Field.module.css'
import React from 'react'

const Input: React.FC<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = ({ ...props }) => {
  return <input {...props} />
}

const TextArea: React.FC<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>> = ({ ...props }) => {
  return <textarea {...props} />
}


const Field: React.FC<{
  label: string
  name: string
  type?: string
}> = ({ label, name, type = 'text' }) => {
  const Component = type === 'textarea' ? TextArea : Input
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <Component name={name} id={name} type={type} placeholder={label} />
    </div>
  )
}

export default Field
