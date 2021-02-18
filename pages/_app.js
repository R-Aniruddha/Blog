import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../public/theme'
import '../styles/globals.css'

import Header from '../components/header'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <div className='contentContainer'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
