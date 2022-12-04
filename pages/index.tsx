import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Field from '../components/Field'
import Header from '../components/Header'
import Button from '../components/Button'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useAsyncFn from 'react-use/lib/useAsyncFn'
import { useState } from 'react'
import FeaturedWorkTile from '../components/FeaturedWorkTile'
import DownloadApp from '../components/DownloadApp'
import Footer from '../components/Footer'

import bigwWebsite from '../public/images/work-tiles/bigw-website.jpeg'
import bigwMobile from '../public/images/work-tiles/bigw-mobile.jpeg'
import ditno from '../public/images/work-tiles/ditno.jpeg'
import Opening from '../components/home/Opening'
import { ArrowRightCircle } from 'react-feather'

const schema = yup
  .object({
    name: yup.string().required('Name is a required field.'),
    email: yup.string().required('Email is a required field.'),
    message: yup.string().required('Message is a required field.'),
  })
  .required()

const Home: NextPage = () => {
  const [formShown, setFormShown] = useState(true)
  const [formMessage, setFormMessage] = useState<string | null>(null)
  const { handleSubmit, register } = useForm<{ name: string; email: string; message: string }>({
    resolver: yupResolver(schema),
  })

  const [{ loading }, submit] = useAsyncFn(async ({ name, email, message }: any) => {
    await axios.post('/api/email', { name, email, message })
    setFormShown(false)
    setFormMessage('Your message has been sent.')
  }, [])

  return (
    <div>
      <Header />
      <Head>
        <title>Bailey Segail | Technical Lead</title>
        <meta
          name="description"
          content="I’m a purpose driven, senior engineer that leads teams and aligns business goals, project outcomes, and user
          needs when creating digital products."
        />
      </Head>

      <main className={styles.main}>
        <Opening />

        <FeaturedWorkTile
          underline={'Technical Lead'}
          label={'BIG W Mobile App'}
          description={`I led the BIG W mobile app team and created an ecommerce app for one of Australia's largest retailers.`}
          image={bigwMobile}
          href={'https://www.upgrowth.com.au/case-study/big-w/mobile'}
        />
        <DownloadApp />

        <FeaturedWorkTile
          underline={'Technical Lead'}
          label={'Ditno'}
          description={
            'I led multiple engagements of frontend work with a cyber security startup that services clients in law, finance and healthcare industries.'
          }
          image={ditno}
          href={'https://www.upgrowth.com.au/case-study/ditno-2-0'}
          className={styles.tile}
        />
        <FeaturedWorkTile
          underline={'Senior Engineer'}
          label={'BIG W Website'}
          description={`I worked in a senior position with the BIG W website team to create a storefront for one of Australia's largest ecommerce retailers.`}
          image={bigwWebsite}
          href={'https://www.upgrowth.com.au/case-study/big-w/website'}
        />

        <a href={'/documents/Bailey_Segail_20221126.pdf'} target={'_blank'} rel="noreferrer">
          <p>Download my CV</p>
          <ArrowRightCircle />
        </a>

        <div id={'contact'} className={styles.contact}>
          <div className={styles.contactOpening}>
            <h2>Contact</h2>
            <p>Want to have a chat? Fill out the form below.</p>
          </div>
          {formShown ? (
            <form onSubmit={handleSubmit(submit)}>
              <Field {...register('name')} label={'Name'} />
              <Field {...register('email')} label={'Email'} type={'email'} />
              <Field {...register('message')} label={'Message'} type={'textarea'} />
              <Button type={'submit'} label={'Send'} isSubmitting={loading} className={styles.contactButton} />
            </form>
          ) : null}

          {formMessage ? (
            <div className={styles.formMessage}>
              <p>{formMessage}</p>
            </div>
          ) : null}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
