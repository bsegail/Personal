import styles from './Listnr.module.css'
import { Container } from '@/components/Container'
import Image from 'next/image'

export const BigWMobile = () => {
  return (
    <Container>
      <div className={styles.Listnr}>
        <div className={styles.detail}>
          <h3>BIG&nbsp;W Mobile App</h3>
          <p className={styles.role}>Technical lead | Upgrowth</p>
          <p>I led the BIG W mobile app team and created an ecommerce app for one of Australia&apos;s largest
            retailers.</p>
        </div>
        <div className={styles.image} style={{background: '#b8d3ff'}}>
          <Image
            src={'/images/workTiles/bigw-mobile.png'}
            alt={'BIG W Mobile App'}
            width={545}
            height={370}
          />
        </div>
      </div>

    </Container>
  )
}
