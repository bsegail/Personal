import styles from './WorkTile.module.css'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { ExternalLink } from 'react-feather'

const WorkTile: React.FC<{
  overline: string
  label: string
  description: string
  image: StaticImageData
  caseStudyLink?: string
}> = ({ overline, label, description, image, caseStudyLink }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image alt="" src={image} width={526} height={290} />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.overline}>{overline}</p>
        <h3 className={styles.label}>{label}</h3>
        <p className={styles.description}>{description}</p>
        {caseStudyLink ? (
          <a href={caseStudyLink} target={'_blank'} rel={'noreferrer'}>
            <div className={styles.caseStudy}>
              See case study
              <ExternalLink size={16} className={styles.externalLink} />
            </div>
          </a>
        ) : null}
      </div>
    </div>
  )
}

export default WorkTile
