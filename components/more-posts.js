import PostPreview from './post-preview'

export default function MorePosts({ posts }) {
  return (
    <section>
      <h2>More Articles</h2>
      <div>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
