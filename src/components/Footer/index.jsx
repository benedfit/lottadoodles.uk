import {
  FooterContainer,
  Grid,
  Icon,
  Navigation,
  SmartLink
} from '@newhighsco/chipset'
import React from 'react'

import config from '~config'
import { ReactComponent as BlueskyIcon } from '~images/icons/bluesky.svg'
import { ReactComponent as InstagramIcon } from '~images/icons/instagram.svg'

import styles from './Footer.module.scss'

const { shortName, socialLinks } = config
const iconLinks = [
  {
    href: socialLinks.instagram,
    text: `Follow ${shortName} on Instagram`,
    icon: InstagramIcon,
    target: '_blank'
  },
  {
    href: socialLinks.bluesky,
    text: `Follow ${shortName} on Bluesky`,
    icon: BlueskyIcon,
    target: '_blank'
  }
]

const Footer = () => (
  <FooterContainer gutter theme={{ root: styles.root }}>
    <Grid valign="middle">
      <Grid.Item align="right">
        <Navigation
          inline
          links={iconLinks}
          renderLink={({ text, icon: IconSvg, ...rest }) => (
            <SmartLink {...rest}>
              <Icon theme={{ root: styles.icon }} alt={text}>
                {IconSvg && <IconSvg />}
              </Icon>
            </SmartLink>
          )}
          theme={{ item: styles.link }}
        />
      </Grid.Item>
    </Grid>
  </FooterContainer>
)

export default Footer
export { Footer }
