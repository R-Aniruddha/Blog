import React from 'react'
import styles from '../../styles/Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Development Blog</h1>
        <h2>Kickstart your journey as a Developer!</h2>
      </div>
    </div>
  )
}
