import { SITE_DOMAIN } from '@utils/constants'
import Head from 'next/head'

export default function SEO({
  title = '',
  description = '',
  url = SITE_DOMAIN,
  image = '',
  creator = '',
}) {
  return (
    <Head>
      <title key='title'>{title}</title>
      <link key='canonical' rel='canonical' href={url} />
      <meta name='description' content={description} />
      <meta name='image' content={image} />
      <meta name='creator' content={creator} />

      <meta name='og:type' property='og:type' content='website' />
      <meta name='og:url' property='og:url' content={url} />
      <meta name='og:description' property='og:description' content={description} />
      <meta name='og:image' property='og:image' content={image} />
    </Head>
  )
}
