import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.textColor.main,
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <AppBar className={classes.appBar} position='static'>
      <Toolbar>
        <Typography variant='h6'>Ani's Blog</Typography>
      </Toolbar>
    </AppBar>
  )
}
