import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../styles/Post.module.css'

import BlockContent from '@sanity/block-content-to-react'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { Divider } from '@material-ui/core'

import { sanityClient, getClient } from '../lib/sanity.server'
import { groq } from 'next-sanity'
import { urlForImage, usePreviewSubscription } from '../lib/sanity'

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    body,
    mainImage,
    "name": author->name,
    "authorImage": author->image,
    publishedAt,
    categories[]->{
      _id,
      title
    },
    "slug": slug.current
  }`

export default function Post({ data, preview }) {
  const router = useRouter()
  if (!router.isFallback && !data.post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const { data: post } = usePreviewSubscription(postQuery, {
    params: { slug: data.post.slug },
    initialData: data,
    enabled: preview,
  })

  return (
    <div>
      <Head>
        <title>{data.post.title}</title>
      </Head>

      <div className={styles.postContainer}>
        <div>
          <Typography variant='h1' className={styles.blogTitle}>
            {data.post.title}
          </Typography>
        </div>
        <div>
          <div className={styles.author}>
            <Avatar
              alt='Author Image'
              src={urlForImage(data.post.authorImage).width(100).url()}
            />
            <div ml={3} className={styles.postInfo}>
              <Typography variant='subtitle2' component='p'>
                {data.post.name}
              </Typography>
              <Typography variant='subtitle2' component='p'>
                {data.post.publishedAt.toString().substring(0, 10)}
              </Typography>
            </div>
          </div>
        </div>
        <Divider />
        <div className={styles.content}>
          <BlockContent
            blocks={data.post.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  })

  return {
    props: {
      preview,
      data: { post },
    },
  }
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}
