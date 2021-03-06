import React from 'react'
import Link from 'next/link'
import { sanityClient } from '../lib/sanity.server'
import imageUrlBuilder from '@sanity/image-url'
import { urlForImage } from '../lib/sanity'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
//import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'

import styles from '../styles/PostsCard.module.css'

const PostsCard = ({ post }) => {
  return (
    <Card className={styles.card}>
      <CardActionArea>
        <Link as={`/blog/${post.slug}`} href={`/blog/${post.slug}`}>
          <div>
            <figure className={styles.cardImageContainer}>
              <CardMedia
                className={styles.cardImage}
                image={urlForImage(post.thumbnail?.image).url()}
                title={post.thumbnail?.alt}
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
      <CardActions className={styles.cardActions}>
        <div className={styles.author}>
          <Avatar
            alt='Image of Author'
            src={urlForImage(post.author.image).width(100).url()}
          />
          <div>
            <Typography variant='subtitle2' component='p'>
              {post.author.name}
            </Typography>
            <Typography variant='subtitle2' color='textSecondary' component='p'>
              {post?.publishedAt?.toString().substring(0, 10)}
            </Typography>
          </div>
        </div>
        {/* 
        <div>
          <BookmarkBorderIcon />
        </div>
        */}
      </CardActions>
    </Card>
  )
}

export default PostsCard
