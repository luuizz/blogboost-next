import React from 'react'
import { styles } from '../Home/SectionArtigos/style.css'

export default function TopSection({ titulo }) {
  return (
    <div className={styles.top}>
      <h2 className={styles.h2}>{titulo}</h2>
      <p className={styles.p}>Lorem ipsum dolor sit amet 🚀</p>
    </div>
  )
}
