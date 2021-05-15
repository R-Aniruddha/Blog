import React, { useEffect, useState } from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'fixed',
    bottom: '50px',
    right: '30px',
    cursor: 'pointer',
  },
}))

export default function ScrollToTop() {
  const classes = useStyles()

  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className={classes.container}>
      {isVisible && (
        <Paper
          variant='outlined'
          style={{ width: 'fit-content' }}
          onClick={scrollToTop}
        >
          <ExpandLessIcon color='primary' fontSize='large' />
        </Paper>
      )}
    </div>
  )
}
