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
import Image from 'next/image'
import FeaturedWorkTile from '../components/FeaturedWorkTile'
import DownloadApp from '../components/DownloadApp'

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
  const { handleSubmit, register } = useForm<{ name: string; email: string; message: string }>({
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
        <title>Bailey Segail | Technical Lead</title>
        <meta
          name="description"
          content="I’m a purpose driven, senior engineer that leads teams and aligns business goals, project outcomes, and user
          needs when creating digital products."
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.opening}>
          <div className={styles.openingText}>
            <h1 className={styles.title}>Bailey Segail</h1>
            <p>
              I’m a purpose driven, senior engineer that leads teams and aligns business goals, project outcomes, and
              user needs when creating digital products.
            </p>
            <p>
              I love building and scaling MVPs, and have a track record of delivering web and mobile projects for
              startups, enterprises and non-profits.
            </p>
            <a href={'#contact'}>
              <Button label={'Contact'} variant={'secondary'} />
            </a>
          </div>
          <div className={styles.openingImage}>
            <Image alt="Developer image" src={'/images/illustrations/developer.svg'} width={408} height={348} />
          </div>
        </div>
        <h2 className={styles.work}>Projects</h2>

        <FeaturedWorkTile
          overline={'Technical Lead'}
          label={'BIG W Mobile App'}
          description={`I led the BIG W mobile app team and created an ecommerce app for one of Australia's largest retailers.`}
          imagePath={'/images/work-tiles/bigw-mobile.jpeg'}
        />
        <DownloadApp />

        <div className={styles.grid}>
          <WorkTile
            overline={'Technical Lead'}
            label={'Ditno'}
            description={
              'I led multiple engagements of frontend work with a cyber security startup that services clients in law, finance and healthcare industries.'
            }
            imagePath={'/images/work-tiles/ditno.jpeg'}
            caseStudyLink={'https://www.upgrowth.com.au/case-study/ditno-2-0'}
          />

          {/*<WorkTile*/}
          {/*  overline={'Technical Lead'}*/}
          {/*  label={'Vocul'}*/}
          {/*  description={`I led one of Australia's hottest startups to create a recruitment platform that brings personality to job descriptions and brands.`}*/}
          {/*  imagePath={'/images/work-tiles/vocul.jpeg'}*/}
          {/*/>*/}

          <WorkTile
            overline={'Senior Engineer'}
            label={'BIG W Website'}
            description={`I worked in a senior position with the BIG W website team to create a storefront for one of Australia's largest ecommerce retailers.`}
            imagePath={'/images/work-tiles/bigw-website.jpeg'}
            caseStudyLink={'https://www.upgrowth.com.au/case-study/big-w/website'}
          />
        </div>

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
