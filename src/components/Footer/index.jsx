import {
  FooterContainer,
  Icon,
  Navigation,
  SmartLink
} from '@newhighsco/chipset'
import { string } from 'prop-types'
import React from 'react'

import Decoration from '~components/Decoration'
import config from '~config'

import styles from './Footer.module.scss'

const { shortName, socialLinks } = config
const links = {
  email: {
    href: 'mailto:charlotte@lottadoodles.uk',
    icon: 'material-symbols:mail',
    verb: 'Contact',
    preposition: 'via'
  },
  TikTok: { icon: 'simple-icons:tiktok' },
  Instagram: { icon: 'simple-icons:instagram' },
  YouTube: { icon: 'simple-icons:youtube', verb: 'Subscribe to' }
}

const Footer = ({ size }) => (
  <FooterContainer
    size={size}
    theme={{ root: styles.root, content: styles.content }}
  >
    <Navigation
      inline
      links={Object.values(links)}
      renderLink={(
        { href, icon, verb = 'Follow', preposition = 'on' },
        index
      ) => {
        const key = Object.keys(links).at(index)

        return (
          <SmartLink href={href ?? socialLinks[key]} target="_blank">
            <Icon
              name={icon}
              theme={{ root: styles.icon }}
              alt={[verb, shortName, preposition, key].join(' ')}
            />
          </SmartLink>
        )
      }}
      theme={{ item: styles.link }}
    />
    <Decoration id="star-end" className={styles.star} />
    <Decoration id="diamond-end" className={styles.diamond} />
    <Decoration id="circle" className={styles.circle} />
  </FooterContainer>
)

Footer.propTypes = { size: string }

export default Footer
export { Footer }
