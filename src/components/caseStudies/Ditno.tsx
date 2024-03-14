import styles from './Listnr.module.css'
import { Container } from '@/components/Container'
import Image from 'next/image'

export const Ditno = () => {
  return (
    <Container>
      <div className={`${styles.Listnr} ${styles.reverse}`}>
        <div className={styles.image} style={{background: '#cee3ec'}}>
          <Image
            src={'/images/workTiles/ditno.png'}
            alt={'Ditno website'}
            width={545}
            height={370}
            objectFit={'contain'}
          />
        </div>
        <div className={styles.detail}>
          <h3>Ditno</h3>
          <p className={styles.role}>Technical lead | Upgrowth</p>
          <p>I led multiple engagements of frontend work with a cyber security startup that services clients in law,
            finance and healthcare industries.</p>
        </div>
      </div>
    </Container>
  )
}
