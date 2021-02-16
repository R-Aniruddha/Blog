import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), 
    url('https://res.cloudinary.com/ani10/image/upload/v1613170178/Covers/code-background_me4bhf.webp')`,
    height: '45vh',
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
        <h1>Development Blog</h1>
        <h2>Kickstart your journey as a Web Developer!</h2>
      </Box>
    </Box>
  )
}
