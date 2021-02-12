import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../client.js'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import { Divider } from '@material-ui/core'
import './Post.css'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const useStyles = makeStyles((theme) => ({
  postContainer: {
    backgroundColor: 'whitesmoke',
    padding: '1rem',
    width: '60%',
    margin: 'auto',
    marginTop: '1rem',
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  author: {
    display: 'flex',
    paddingBottom: '0.5rem',
  },
  content: {
    width: '80%',
  },
}))

export default function Post() {
  const classes = useStyles()

  const [postData, setPostData] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
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
            publishedAt
          }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error)
  }, [slug])

  let date

  if (slug === 'home') return null
  if (!postData) {
    return <div>Loading...</div>
  } else {
    if (postData) date = postData.publishedAt.toString().substring(0, 10)
  }
  return (
    <div className={classes.postContainer}>
      <div>
        <Typography variant='h4' className={classes.blogTitle}>
          {postData.title}
        </Typography>
      </div>
      <div>
        <Box className={classes.author}>
          <Avatar src={urlFor(postData.authorImage).width(100).url()} />
          <Box ml={2}>
            <Typography variant='subtitle2' component='p'>
              {postData.name}
            </Typography>
            <Typography variant='subtitle2' component='p'>
              {date}
            </Typography>
          </Box>
        </Box>
      </div>
      <Divider />
      <div className={classes.content}>
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </div>
    </div>
  )
}

/*
 <div className=''>
      <div className=''>
        <div className=''>
          <div className=''>
            <div className=''>
              <h2 className=''>{postData.title}</h2>
              <div className=''>
                <img
                  src={urlFor(postData.authorImage).width(100).url()}
                  className=''
                  alt='Author Image'
                />
                <h4 className=''>{postData.name}</h4>
              </div>
            </div>
          </div>
          <img
            className=''
            src={urlFor(postData.mainImage).url()}
            alt=''
            style={{ height: '400px' }}
          />
        </div>
        <div className=''>
          <BlockContent
            blocks={postData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </div>
      </div>
    </div>

    */
