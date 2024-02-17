import styles from './page.module.css'
import { Hero } from '@/components/Hero'
import { Listnr } from '@/components/caseStudies/Listnr'
import { BigWMobile } from '@/components/caseStudies/BigWMobile'
import { BigWWeb } from '@/components/caseStudies/BigWWeb'
import { AboutMe } from '@/components/AboutMe'
import { Contact } from '@/components/Contact'
import Header from '@/components/Header'
import { Ditno } from '@/components/caseStudies/Ditno'

export default function Home() {
  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <Hero/>
        <div className={styles.caseStudies}>
          <Listnr/>
          <BigWMobile/>
          <BigWWeb/>
          <Ditno />
        </div>
        {/*<AboutMe/>*/}
        <Contact/>
      </main>
    </div>
  )
}
