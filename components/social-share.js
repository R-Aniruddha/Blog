import React from 'react'

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
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
      <RedditShareButton className={styles.socialIcon} url={url} title={title}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <EmailShareButton url={url} subject={title} className={styles.socialIcon}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  )
}

export default SocialShare
