import React from 'react'
import Chip from '@material-ui/core/Chip'
import styles from '../styles/Categories.module.css'

export default function Categories({ categories }) {
  if (categories && categories.length > 0) {
    return (
      <div className={styles.categoriesContainer}>
        {categories.map((category) => (
          <Chip
            variant='outlined'
            key={category}
            label={category}
            className={styles.categoryChip}
          />
        ))}
      </div>
    )
  }
}
