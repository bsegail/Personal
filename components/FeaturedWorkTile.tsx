import styles from './FeaturedWorkTile.module.scss'
import React from 'react'
import Image, { StaticImageData } from "next/legacy/image";
import { ExternalLink } from 'react-feather'
import classNames from 'classnames'

const FeaturedWorkTile: React.FC<{
  underline: string
  label: string
  description: string
  image: StaticImageData
  href: string
  className?: string
}> = ({ underline, label, description, image, href, className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.textContainer}>
        <h3 className={styles.label}>{label}</h3>
        <p className={styles.underline}>{underline}</p>
        <p className={styles.description}>{description}</p>

        <a href={href} target={'_blank'} rel={'noreferrer'}>
          <div className={styles.caseStudy}>
            See case study
            <ExternalLink size={16} className={styles.externalLink} />
          </div>
        </a>
      </div>
      <div className={styles.imageContainer}>
        <Image alt="" src={image} layout={'fill'} objectFit={'cover'} />
      </div>
    </div>
  )
}

export default FeaturedWorkTile
