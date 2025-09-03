import {
  FooterContainer,
  Icon,
  Navigation,
  SmartLink
} from '@newhighsco/chipset'
import { string } from 'prop-types'
import React from 'react'

import config from '~config'
import { ReactComponent as BlueskyIcon } from '~images/icons/bluesky.svg'
import { ReactComponent as InstagramIcon } from '~images/icons/instagram.svg'
import { ReactComponent as TikTokIcon } from '~images/icons/tiktok.svg'
import { ReactComponent as YouTubeIcon } from '~images/icons/youtube.svg'

import styles from './Footer.module.scss'

const { shortName, socialLinks } = config
const links = {
  Instagram: { icon: InstagramIcon },
  Bluesky: { icon: BlueskyIcon },
  YouTube: { icon: YouTubeIcon, prefix: 'Subscribe to' },
  TikTok: { icon: TikTokIcon }
}

const Footer = ({ size }) => (
  <FooterContainer gutter size={size} theme={{ root: styles.root }}>
    <Navigation
      inline
      links={Object.values(links)}
      renderLink={({ icon: IconSvg, prefix = 'Follow' }, index) => {
        const key = Object.keys(socialLinks)[index]

        return (
          <SmartLink href={socialLinks[key]} target="_blank">
            <Icon
              theme={{ root: styles.icon }}
              alt={[prefix, shortName, 'on', key].join(' ')}
            >
              <IconSvg />
            </Icon>
          </SmartLink>
        )
      }}
      theme={{ item: styles.link }}
    />
  </FooterContainer>
)

Footer.propTypes = {
  size: string
}

export default Footer
export { Footer }
