import styles from './Listnr.module.css'
import { Container } from '@/components/Container'
import Image from 'next/image'

export const BigWWeb = () => {
  return (
    <Container>
      <div className={styles.Listnr}>
        <div className={styles.detail}>
          <h3>BIG&nbsp;W Website</h3>
          <p className={styles.role}>Senior engineer | Upgrowth</p>
          <p>I worked in a senior position with the BIG W website team to create a storefront for one of
            Australia&apos;s
            largest ecommerce retailers.</p>
        </div>
        <div className={styles.image} style={{background: '#e9e0ff'}}>
          <Image
            src={'/images/workTiles/bigw-web.png'}
            alt={'BIG W Website'}
            width={545}
            height={370}
          />
        </div>
      </div>

    </Container>
  )
}
