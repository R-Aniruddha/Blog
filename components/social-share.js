import React from 'react'

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share'

import styles from '../styles/SocialShare.module.css'

const SocialShare = ({ url, title }) => {
  return (
    <div>
      <FacebookShareButton
        className={styles.socialIcon}
        url={url}
        quote={title}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton className={styles.socialIcon} url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton
        className={styles.socialIcon}
        url={url}
        title={title}
        separator=':: '
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton
        className={styles.socialIcon}
        title={title}
        source={url}
      >
        <LinkedinIcon size={'2rem'} round />
      </LinkedinShareButton>
      <RedditShareButton className={styles.socialIcon} url={url} title={title}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      {/*     */}
    </div>
  )
}

export default SocialShare
