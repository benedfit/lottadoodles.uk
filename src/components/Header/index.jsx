import { HeaderContainer, SmartLink } from '@newhighsco/chipset'
import React from 'react'

import LogoLockup from '~components/LogoLockup'

import styles from './Header.module.scss'

const Header = () => (
  <HeaderContainer gutter theme={{ root: styles.root }}>
    <SmartLink href="/">
      <LogoLockup />
    </SmartLink>
  </HeaderContainer>
)

Header.propTypes = {}

export default Header
export { Header }
