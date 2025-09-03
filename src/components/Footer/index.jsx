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
import { ReactComponent as EmailIcon } from '~images/icons/email.svg'
import { ReactComponent as InstagramIcon } from '~images/icons/instagram.svg'
import { ReactComponent as TikTokIcon } from '~images/icons/tiktok.svg'
import { ReactComponent as YouTubeIcon } from '~images/icons/youtube.svg'

import styles from './Footer.module.scss'

const { shortName, socialLinks } = config
const links = {
  email: {
    href: 'mailto:charlotte@lottadoodles.uk',
    icon: EmailIcon,
    verb: 'Contact',
    preposition: 'via'
  },
  Instagram: { icon: InstagramIcon },
  Bluesky: { icon: BlueskyIcon },
  YouTube: { icon: YouTubeIcon, verb: 'Subscribe to' },
  TikTok: { icon: TikTokIcon }
}

const Footer = ({ size }) => (
  <FooterContainer gutter size={size} theme={{ root: styles.root }}>
    <Navigation
      inline
      links={Object.values(links)}
      renderLink={(
        { href, icon: IconSvg, verb = 'Follow', preposition = 'on' },
        index
      ) => {
        const key = Object.keys(links).at(index)

        return (
          <SmartLink href={href ?? socialLinks[key]} target="_blank">
            <Icon
              theme={{ root: styles.icon }}
              alt={[verb, shortName, preposition, key].join(' ')}
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
