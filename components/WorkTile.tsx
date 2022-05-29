import styles from './WorkTile.module.css'
import React from 'react'

const WorkTile: React.FC<{
  overline: string
  label: string
  description: string
}> = ({ overline, label, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.overline}>{overline}</p>
        <h3 className={styles.label}>{label}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      {/*<div className={styles.imageContainer}>*/}
      {/*  <Image alt="" src={'/bigw-mobile.png'} width={422} height={300} />*/}
      {/*</div>*/}
    </div>
  )
}

export default WorkTile
