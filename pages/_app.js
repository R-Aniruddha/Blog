import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../public/theme'
import '../styles/globals.css'

import Header from '../src/Components/Header'
import Footer from '../src/Components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Development Blog - Getting started with Web Devlopment</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ThemeProvider theme={theme}>
        <div>
          <Header />
          <div className='contentContainer'>
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
/*
{
  <Route component={Home} path={['/', '/home']} exact />
  <Route component={Post} path='/:slug' />
}
        */
