import styles from './FeaturedWorkTile.module.scss'
import React from 'react'
import Image from 'next/image'
import { ExternalLink } from 'react-feather'

const FeaturedWorkTile: React.FC<{
  overline: string
  label: string
  description: string
  imagePath: string
}> = ({ overline, label, description, imagePath }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.overline}>{overline}</p>
        <h3 className={styles.label}>{label}</h3>
        <p className={styles.description}>{description}</p>

        <a href={'https://www.upgrowth.com.au/case-study/big-w/mobile'}>
          <div className={styles.caseStudy}>
            See case study
            <ExternalLink size={16} className={styles.externalLink}/>
          </div>
        </a>
      </div>
      <div className={styles.imageContainer}>
        <Image alt="" src={imagePath} layout={'fill'} objectFit={'cover'} />
      </div>
    </div>
  )
}

export default FeaturedWorkTile
