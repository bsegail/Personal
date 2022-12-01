import styles from './FeaturedWorkTile.module.scss'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { ExternalLink } from 'react-feather'

const FeaturedWorkTile: React.FC<{
  overline: string
  label: string
  description: string
  image: StaticImageData
}> = ({ overline, label, description, image }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.overline}>{overline}</p>
        <h3 className={styles.label}>{label}</h3>
        <p className={styles.description}>{description}</p>

        <a href={'https://www.upgrowth.com.au/case-study/big-w/mobile'} target={'_blank'} rel={'noreferrer'}>
          <div className={styles.caseStudy}>
            See case study
            <ExternalLink size={16} className={styles.externalLink} />
          </div>
        </a>
      </div>
      <div className={styles.imageContainer}>
        <Image alt="" src={image} layout={'fill'} objectFit={'cover'} placeholder={'blur'} />
      </div>
    </div>
  )
}

export default FeaturedWorkTile
