import styles from './WorkTile.module.css'
import React from 'react'

const WorkTile: React.FC<{
  overline: string
  label: string
  description: string
}> = ({ overline, label, description }) => {
  return (
    <div className={styles.container}>
      <p className={styles.overline}>{overline}</p>
      <h3 className={styles.label}>{label}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default WorkTile
