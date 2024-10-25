import styles from './Listnr.module.css'
import {Container} from '@/components/Container'
import Image from 'next/image'

export const Vudoo = () => {
    return (
        <Container>
            <div className={`${styles.Listnr} ${styles.reverse}`}>
                <div className={styles.image} style={{background: '#cee3ec'}}>
                    <Image
                        src={'/images/workTiles/ditno.png'}
                        alt={'Ditno website'}
                        width={545}
                        height={370}
                        style={{objectFit: 'contain'}}
                    />
                </div>
                <div className={styles.detail}>
                    <h3>Vudoo</h3>
                    <p className={styles.role}>Frontend</p>
                    <p>I championed Next.js as the future tech stack for Vudoo’s ad campaign management platform,
                        enabling
                        shoppable ads for brands like Kmart and Priceline. I also led the development of a unified
                        design system to elevate user experience, emphasising usability and accessibility standards.</p>
                </div>
            </div>
        </Container>
    )
}
