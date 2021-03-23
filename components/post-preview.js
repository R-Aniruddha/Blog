import React from 'react'
import Link from 'next/link'
import { sanityClient } from '../lib/sanity.server'
import { urlForImage } from '../lib/sanity'
import styles from '../styles/PostPreview.module.css'

//import div from '@material-ui/core/div'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
//import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export default function PostPreview({ post }) {
  return (
    <Grid item xs={6} sm={4} md={3}>
      {' '}
      <Card className={styles.card}>
        <div>
          <CardActionArea>
            <Link as={'/' + post.slug} href={'/' + post.slug}>
              <div>
                <figure className={styles.cardImageContainer}>
                  <CardMedia
                    className={styles.cardImage}
                    image={urlForImage(post.thumbnail.image).url()}
                    title={post.title}
                  />
                </figure>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {post.title}
                  </Typography>
                </CardContent>
              </div>
            </Link>
          </CardActionArea>
          {/* 
          <CardActions className={styles.cardActions}>
            <div className={styles.author}>
              <Typography
                variant='subtitle2'
                color='textSecondary'
                component='p'
              >
                {post.publishedAt.toString().substring(0, 10)}
              </Typography>
            </div>
        
          </CardActions>
          */}
        </div>
      </Card>
    </Grid>
  )
}
