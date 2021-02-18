import Head from 'next/head'
import { indexQuery } from '../lib/queries'
import { getClient, overlayDrafts } from '../lib/sanity.server'

import Hero from '../components/Hero'
import PostsCard from '../components/posts-card'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import styles from '../styles/Home.module.css'

export default function Index({ allPosts, preview }) {
  return (
    <>
      <Head>
        <title>Development Blog - Getting started with Web Devlopment</title>
        <link rel='icon' href='/favicon/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <div className={styles.container}>
        <Hero />
        <main>
          <Container maxWidth='lg' className={styles.blogsContainer}>
            <Typography variant='h4' className={styles.blogTitle}>
              Articles
            </Typography>
            <Grid container spacing={3}>
              {allPosts.length > 0 &&
                allPosts.map((post, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={index}
                    className={styles.postGrid}
                  >
                    <PostsCard key={index} post={post} />
                  </Grid>
                ))}
            </Grid>
          </Container>
        </main>
      </div>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery))
  return {
    props: { allPosts, preview },
  }
}
