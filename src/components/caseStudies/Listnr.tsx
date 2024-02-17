import styles from './Listnr.module.css'
import { Container } from '@/components/Container'
import Image from 'next/image'

export const Listnr = () => {
  return (
    <Container>
      <div className={styles.Listnr}>
        <div className={styles.detail}>
          <h3>LiSTNR</h3>
          <p className={styles.role}>Technical lead | Novon</p>
          <p>I spearheaded the re-platforming of Australia’s premier podcast and radio platform. My role was central to
            transitioning LiSTNR from native iOS and Android to React Native.</p>
        </div>
        <div className={styles.image} style={{background: '#81E4BD'}}>
          <Image
            src={'/images/workTiles/listnr.png'}
                 alt={'LiSTNR app'}
                 width={370}
            height={370}
                 objectFit={'contain'}
          />
        </div>
      </div>
    </Container>
  )
}
