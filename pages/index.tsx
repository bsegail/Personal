import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import WorkTile from '../components/WorkTile'
import Field from '../components/Field'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
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
          I’m a technical lead that understands aligning business goals, project outcomes, and user needs with digital
          products.
        </p>

        <h1>Work</h1>
        <div className={styles.grid}>
          <WorkTile
            overline={'Technical Lead'}
            label={'BIG W Mobile App'}
            description={
              'Discover how I lead the BIG W mobile app team. Here’s some more copy discussing how great I am without sounding to up myself.'
            }
          />

          <WorkTile
            overline={'Technical Lead'}
            label={'Ditno'}
            description={
              'Discover how I lead the BIG W mobile app team. Here’s some more copy discussing how great I am without sounding to up myself.'
            }
          />

          <WorkTile
            overline={'Technical Lead'}
            label={'Vocul'}
            description={
              'Discover how I lead the BIG W mobile app team. Here’s some more copy discussing how great I am without sounding to up myself.'
            }
          />

          <WorkTile
            overline={'Senior Engineer'}
            label={'BIG W Website'}
            description={
              'Discover how I lead the BIG W mobile app team. Here’s some more copy discussing how great I am without sounding to up myself.'
            }
          />
        </div>

        <div id={'contact'}>
          <h1>Contact</h1>
          <form>
            <Field name={'name'} label={'Name'} />
            <Field name={'email'} label={'Email'} type={'email'} />
            <Field name={'message'} label={'Message'} type={'textarea'} />
            <button type={'submit'}>Send</button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Home
