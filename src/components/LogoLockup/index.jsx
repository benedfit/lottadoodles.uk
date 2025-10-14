import { classNames } from '@newhighsco/chipset'
import { string } from 'prop-types'
import React from 'react'

import config from '~config'
import { ReactComponent as LogoSvg } from '~images/logo-lockup.svg'
import { cssVariables } from '~styles/colors'

import styles from './LogoLockup.module.scss'

const COLORS = ['sea', 'land', 'sundown', 'sunglow']
const { name } = config

const LogoLockup = ({ className }) => (
  <LogoSvg
    className={classNames(styles.root, className)}
    title={name}
    style={cssVariables(COLORS)}
  />
)

LogoLockup.propTypes = {
  className: string
}

export default LogoLockup
export { LogoLockup }
