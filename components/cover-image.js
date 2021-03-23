import cn from 'classnames'
import Link from 'next/link'
import { urlForImage } from '../lib/sanity'

export default function CoverImage({ title, slug, source, alt }) {
  const image = source ? (
    <img width='90%' height='auto' alt={alt} src={urlForImage(source).url()} />
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  )

  return (
    <div
      style={{
        textAlign: 'center',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        margin: 'auto',
        width: '100%',
      }}
    >
      {image}
    </div>
  )
}
