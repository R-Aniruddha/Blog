import React from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client.js'
import imageUrlBuilder from '@sanity/image-url'
import { makeStyles } from '@material-ui/core/styles'
import './PostsCard.css'

import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
//import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: '100%',
  },
  cardActions: {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'space-between',
  },
  author: {
    display: 'flex',
  },
}))
const PostsCard = ({ post }) => {
  const classes = useStyles()

  const date = post.publishedAt.toString().substring(0, 10)

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link to={'/' + post.slug.current} key={post.slug.current}>
          <figure>
            <CardMedia
              className='cardImage'
              image={post.mainImage.asset.url}
              title={post.title}
            />
          </figure>
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {post.title}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Box className={classes.author}>
          <Avatar src={urlFor(post.authorImage).width(100).url()} />
          <Box ml={2}>
            <Typography variant='subtitle2' component='p'>
              {post.name}
            </Typography>
            <Typography variant='subtitle2' color='textSecondary' component='p'>
              {date}
            </Typography>
          </Box>
        </Box>
        {/* 
        <Box>
          <BookmarkBorderIcon />
        </Box>
        */}
      </CardActions>
    </Card>
  )
}

export default PostsCard
