import styles from './Field.module.css'
import React from 'react'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(function BaseInput({ ...props }, ref) {
  return <input {...props} ref={ref} />
})

type TextAreaProps = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(function BaseTextArea({ ...props }, ref) {
  return <textarea {...props} ref={ref} />
})

type RefTypes = HTMLInputElement | HTMLTextAreaElement

type FieldProps = {
  label: string
  name: string
  type?: string
}

const Field = React.forwardRef<RefTypes, FieldProps>(function BaseField({ label, name, type = 'text', ...props }, ref) {
  const Component = type === 'textarea' ? TextArea : Input
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <Component name={name} id={name} type={type} placeholder={label} ref={ref as any} {...props} />
    </div>
  )
})

export default Field
