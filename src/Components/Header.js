import React from 'react'
import Link from 'next/link'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import styles from '../../styles/Header.module.css'

export default function Header() {
  return (
    <AppBar className={styles.appBar} position='static'>
      <Toolbar>
        <Link href={'/'}>
          <Typography variant='h6' className={styles.navbarBrand}>
            Aniruddha
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
