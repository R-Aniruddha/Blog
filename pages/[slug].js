import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { postQuery, postSlugsQuery } from '../lib/queries'
import { urlForImage, usePreviewSubscription } from '../lib/sanity'
import { sanityClient, getClient, overlayDrafts } from '../lib/sanity.server'
import BlockContent from '@sanity/block-content-to-react'
import CoverImage from '../components/cover-image'
import SocialShare from '../components/social-share'

import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { Divider } from '@material-ui/core'
import Container from '@material-ui/core/Container'

import Layout from '../components/layout'
import MorePosts from '../components/more-posts'
import styles from '../styles/Post.module.css'
import Categories from '../components/categories'

export default function Post({ data = {}, preview }) {
  const router = useRouter()

  const slug = data?.post?.slug
  const {
    data: { post, morePosts },
  } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  })

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title}</title>
                {post.mainImage && (
                  <meta
                    key='ogImage'
                    property='og:image'
                    content={urlForImage(post.mainImage)
                      .width(1200)
                      .height(627)
                      .fit('crop')
                      .url()}
                  />
                )}
              </Head>
              <div className={styles.postContainer}>
                <div>
                  <Typography variant='h1' className={styles.blogTitle}>
                    {post.title}
                  </Typography>
                </div>
                <div>
                  <div className={styles.author}>
                    <Avatar
                      alt='Author Image'
                      src={urlForImage(post.author.image).width(100).url()}
                      className={styles.authorImage}
                    >
                      A
                    </Avatar>
                    <div ml={3} className={styles.postInfo}>
                      <Typography variant='subtitle2' component='p'>
                        {post.author.name}
                      </Typography>
                      <Typography variant='subtitle2' component='p'>
                        {post.publishedAt.toString().substring(0, 10)}
                      </Typography>
                    </div>
                  </div>
                </div>
                <Categories categories={post.categories} />
                <Divider />
                <CoverImage
                  title={post.title}
                  source={post.mainImage.asset.url}
                  slug={slug}
                />
                <Divider />
                <div className={styles.content}>
                  <BlockContent
                    blocks={post.body}
                    projectId={sanityClient.clientConfig.projectId}
                    dataset={sanityClient.clientConfig.dataset}
                  />
                </div>
                <Divider />
                <SocialShare url={router.pathname} title={post.title} />
              </div>
            </article>
            {morePosts.length > 0 && <MorePosts posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  })

  return {
    props: {
      preview,
      data: {
        post,
        morePosts: overlayDrafts(morePosts),
      },
    },
  }
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}
