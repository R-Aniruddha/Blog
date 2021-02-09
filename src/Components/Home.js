import React, { useEffect, useState } from 'react'
import sanityClient from '../client'
import Hero from './Hero'
import PostsCard from './PostsCard'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
//import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
}))

export default function Home() {
  const [postsList, setPostsList] = useState(null)

  const classes = useStyles()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
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
          }`
      )
      .then((data) => {
        setPostsList(data)
      })
      .catch(console.error)
  }, [])

  return (
    <div>
      <Hero />
      <Container maxWidth='lg' className={classes.blogsContainer}>
        <Typography variant='h4' className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          {postsList &&
            postsList.map((post, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <PostsCard key={index} post={post} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  )
}
