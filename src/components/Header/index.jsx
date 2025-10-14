import { HeaderContainer, SmartLink } from '@newhighsco/chipset'
import { string } from 'prop-types'
import React from 'react'

import LogoLockup from '~components/LogoLockup'

import styles from './Header.module.scss'

const Header = ({ size }) => (
  <HeaderContainer
    size={size}
    theme={{ root: styles.root, content: styles.content }}
  >
    <SmartLink href="/">
      <LogoLockup />
    </SmartLink>
  </HeaderContainer>
)

Header.propTypes = {
  size: string
}

export default Header
export { Header }
