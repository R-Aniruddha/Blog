import cn from 'classnames'
import Link from 'next/link'
import { urlForImage } from '../lib/sanity'

export default function CoverImage({ title, slug, source }) {
  const image = source ? (
    <img
      width='90%'
      height='90%'
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      src={urlForImage(source).height(1000).width(2000).url()}
    />
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  )

  return (
    <div
      style={{ textAlign: 'center', paddingTop: '1rem', paddingBottom: '1rem' }}
    >
      {slug ? <a aria-label={title}>{image}</a> : image}
    </div>
  )
}
