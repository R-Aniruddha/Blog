//import Link from 'next/link'
import { getClient, overlayDrafts } from '../lib/sanity.server'

import Hero from '../src/Components/Hero'
import PostsCard from '../src/Components/PostsCard'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import styles from '../styles/Home.module.css'

export default function Home({ allPosts }) {
  const postsList = allPosts

  return (
    <div className={styles.container}>
      <Hero />
      <main>
        <Container maxWidth='lg' className={styles.blogsContainer}>
          <Typography variant='h4' className={styles.blogTitle}>
            Articles
          </Typography>
          <Grid container spacing={3}>
            {postsList &&
              postsList.map((post, index) => (
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
            {/*  */}
          </Grid>
        </Container>
      </main>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(
    await getClient(preview)
      .fetch(`*[_type == "post"] | order(date desc, _updatedAt desc) {
        _id,
        title,
        slug,
        coverImage,
        mainImage{ 
          asset->{
            _id,
            url
          }
        },
        body,
        "name": author->name,
        "authorImage": author->image,
        publishedAt,
      }`)
  )
  return {
    props: { allPosts, preview },
  }
}
