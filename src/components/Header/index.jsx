import { HeaderContainer, SmartLink } from '@newhighsco/chipset'
import Link from 'next/link'
import React from 'react'

import LogoLockup from '~components/LogoLockup'

import styles from './Header.module.scss'

const Header = () => (
  <HeaderContainer gutter theme={{ root: styles.root }}>
    <Link href="/" passHref legacyBehavior>
      <SmartLink>
        <LogoLockup />
      </SmartLink>
    </Link>
  </HeaderContainer>
)

Header.propTypes = {}

export default Header
export { Header }
