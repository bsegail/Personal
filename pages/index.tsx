import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import WorkTile from '../components/WorkTile'
import Field from '../components/Field'
import Header from '../components/Header'
import Button from '../components/Button'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useAsyncFn from 'react-use/lib/useAsyncFn'
import { useState } from 'react'

const schema = yup
  .object({
    name: yup.string().required('Name is a required field'),
    email: yup.string().required('Email is a required field'),
    message: yup.string().required('Message is a required field'),
  })
  .required()

const Home: NextPage = () => {
  const [formShown, setFormShown] = useState(true)
  const [formMessage, setFormMessage] = useState<string | null>(null)
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<{ name: string; email: string; message: string }>({
    resolver: yupResolver(schema),
  })

  const [{ loading }, submit] = useAsyncFn(async ({ name, email, message }: any) => {
    await axios.post('/api/email', { name, email, message })
    setFormShown(false)
    setFormMessage('Your message has been sent')
  }, [])

  return (
    <div>
      <Head>
        <title>Bailey Segail | Senior Engineer</title>
        <meta
          name="description"
          content="I'm a senior engineer that leads teams to create intentional digital products"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Bailey Segail</h1>
        <p>Senior engineer that leads teams to create intentional digital products</p>

        <p>
          I’m a purpose driven, senior engineer that leads teams and aligns business goals, project outcomes, and user
          needs when creating digital products.
        </p>

        <h1>Work</h1>
        <div className={styles.grid}>
          <WorkTile
            overline={'Technical Lead'}
            label={'BIG W Mobile App'}
            description={`I lead the BIG W mobile app team and created an ecommerce app for one of Australia's largest retailers.`}
          />

          <WorkTile
            overline={'Technical Lead'}
            label={'Ditno'}
            description={
              'I lead multiple engagements of frontend work with a cyber security startup that services clients in law, finance and healthcare industries.'
            }
          />

          <WorkTile
            overline={'Technical Lead'}
            label={'Vocul'}
            description={`I lead one of Australia's hottest startups to create a recruitment platform that brings personality to job descriptions and brands.`}
          />

          <WorkTile
            overline={'Senior Engineer'}
            label={'BIG W Website'}
            description={`I worked in a senior position with the BIG W website team to create a storefront for one of Australia's largest ecommerce retailers.`}
          />
        </div>

        {/*<div id={'resume'}>*/}
        {/*  <p>Want to learn more?</p>*/}
        {/*  <Button label={'Download CV'} />*/}
        {/*</div>*/}

        <div id={'contact'}>
          <h1>Contact</h1>
          {formShown ? (
            <form onSubmit={handleSubmit(submit)}>
              <Field {...register('name')} label={'Name'} />
              <Field {...register('email')} label={'Email'} type={'email'} />
              <Field {...register('message')} label={'Message'} type={'textarea'} />
              <Button type={'submit'} label={'Send'} isSubmitting={loading} />
            </form>
          ) : null}

          {formMessage ? (
            <div>
              <p>{formMessage}</p>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  )
}

export default Home
