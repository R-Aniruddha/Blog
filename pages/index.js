import Head from 'next/head'
import { indexQuery } from '../lib/queries'
import { getClient } from '../lib/sanity.server'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Hero from '../components/hero'
import PostsCard from '../components/posts-card'
import styles from '../styles/Home.module.css'

export default function Index({ allPosts, preview }) {
  return (
    <>
      <Head>
        <title>Development Blog - Getting started with Web Devlopment</title>
        <link rel='icon' href='/favicon/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='Description'
          content='Development blog for amateur developers that are starting out'
        />
      </Head>

      <div className={styles.container}>
        <Hero />
        <main>
          <Container maxWidth='lg' className={styles.blogsContainer}>
            <Typography variant='h4' className={styles.blogTitle}>
              Portfolio Homepage
            </Typography>
          </Container>
        </main>
      </div>
    </>
  )
}
