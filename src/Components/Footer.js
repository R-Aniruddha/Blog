import React from 'react'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import Fade from '@material-ui/core/Fade'
import styles from '../../styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <Grid container>
        <Grid item xs={10} sm={6} lg={4} className={styles.iconsContainer}>
          <Grid container>
            <Grid item xs={2} sm={1} lg={1} className={styles.socialIcon}>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                interactive
                arrow
                placement='top'
                title='LinkedIn'
              >
                <a
                  href='https://www.linkedin.com/in/aniruddha-ramakrishnan/'
                  rel='noopener noreferrer'
                >
                  <img
                    src='https://res.cloudinary.com/ani10/image/upload/v1612818121/Icons/linkedin-icon_wq6rol.svg'
                    alt='LinkedIn icon'
                  />
                </a>
              </Tooltip>
            </Grid>
            <Grid item xs={2} sm={1} lg={1} className={styles.socialIcon}>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                interactive
                arrow
                placement='top'
                title='GitHub'
              >
                <a
                  href='https://github.com/R-Aniruddha'
                  rel='noopener noreferrer'
                >
                  <img
                    src='https://res.cloudinary.com/ani10/image/upload/v1612818307/Icons/github-icon-2_jfpuxc.svg'
                    alt='GitHub icon'
                  />
                </a>
              </Tooltip>
            </Grid>
            <Grid item xs={2} sm={1} lg={1} className={styles.socialIcon}>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                interactive
                arrow
                placement='top'
                title='CodePen'
              >
                <a
                  href='https://codepen.io/R-Aniruddha'
                  rel='noopener noreferrer'
                >
                  <img
                    src='https://res.cloudinary.com/ani10/image/upload/v1612863010/Icons/codepen-icon-5_muyaaw.svg'
                    alt='Codepen icon'
                  />
                </a>
              </Tooltip>
            </Grid>
            <Grid item xs={2} sm={1} lg={1} className={styles.socialIcon}>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                interactive
                arrow
                placement='top'
                title='Email'
              >
                <a href='mailto:contact@r-aniruddha.com'>
                  <img
                    src='https://res.cloudinary.com/ani10/image/upload/v1612817942/Icons/email-icon_ayoxnm.svg'
                    alt='Email icon'
                  />
                </a>
              </Tooltip>
            </Grid>
            <Grid item xs={2} sm={1} lg={1} className={styles.socialIcon}>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                interactive
                arrow
                placement='top'
                title='Personal Website'
              >
                <a href='https://r-aniruddha.com' rel='noopener noreferrer'>
                  <img
                    src='https://res.cloudinary.com/ani10/image/upload/v1612817667/Icons/webpage-icon_bflupl.svg'
                    alt='Personal Website icon'
                  />
                </a>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <p className={styles.text}>
        {' '}
        Copyright {new Date().getFullYear()} ©Aniruddha
      </p>
    </div>
  )
}
