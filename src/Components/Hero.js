import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
    url('https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
    height: '50vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.textColor.main,
    fontSize: '1.6rem',
    [theme.breakpoints.down('sm')]: {
      height: 300,
      fontSize: '1.2rem',
    },
  },
}))

export default function Hero() {
  const classes = useStyles()

  return (
    <Box className={classes.hero}>
      <Box>
        {' '}
        <h1>Tech Blog</h1>
        <h2>Kickstart your journey as a Web Developer!</h2>
      </Box>
    </Box>
  )
}
