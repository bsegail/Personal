'use client'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import styles from './Contact.module.css'
import Field from '@/components/Field'
import Button from '@/components/Button'
import { Container } from '@/components/Container'

const schema = z.object({
  name: z.string({ required_error: 'Name is a required field.' }),
  email: z.string().email('Email is a required field.'),
  message: z.string({ required_error: 'Message is a required field'})
})

type Schema = z.infer<typeof schema>

export const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [formShown, setFormShown] = useState(true)
  const [formMessage, setFormMessage] = useState<string | null>(null)
  const {handleSubmit, register} = useForm<Schema>({
    resolver: zodResolver(schema),
  })

  const submit = useCallback(async ({name, email, message}: Schema) => {
    setLoading(true)
    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, message}),
    })
    setLoading(false)
    setFormShown(false)
    setFormMessage('Your message has been sent.')
  }, [])

  return (
    <div className={styles.container}>
    <Container id={'contact'} className={styles.contact}>
      <div className={styles.contactOpening}>
        <h2>Contact</h2>
        <p>
          Want to have a chat? Fill out the form below, or email me directly at{' '}
          <a href={'mailto:bailey@bsegail.com'}>bailey@besgail.com</a>.
        </p>
      </div>
      {formShown ? (
        <form onSubmit={handleSubmit(submit)}>
          <Field {...register('name')} label={'Name'}/>
          <Field {...register('email')} label={'Email'} type={'email'}/>
          <Field {...register('message')} label={'Message'} type={'textarea'}/>
          <Button type={'submit'} label={'Send'} isSubmitting={loading} className={styles.contactButton}/>
        </form>
      ) : null}

      {formMessage ? (
        <div className={styles.formMessage}>
          <p>{formMessage}</p>
        </div>
      ) : null}
    </Container>
    </div>
  )
}
