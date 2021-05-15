import PostPreview from './post-preview'
import Grid from '@material-ui/core/Grid'

export default function MorePosts({ posts }) {
  return (
    <section>
      <h2>More Articles</h2>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Grid>
    </section>
  )
}
