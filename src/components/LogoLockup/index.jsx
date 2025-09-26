import classNames from 'classnames'
import { string } from 'prop-types'
import React from 'react'

import config from '~config'
import { ReactComponent as LogoSvg } from '~images/logo-lockup.svg'
import colors from '~styles/_colors.module.scss'

import styles from './LogoLockup.module.scss'

const COLORS = ['sea', 'land', 'sundown', 'sunglow']
const { name } = config

const LogoLockup = ({ className }) => (
  <LogoSvg
    className={classNames(styles.root, className)}
    title={name}
    style={COLORS.reduce(
      (styles, color) => ({
        ...styles,
        [`--colors-${color}`]: colors[color]
      }),
      {}
    )}
  />
)

LogoLockup.propTypes = {
  className: string
}

export default LogoLockup
export { LogoLockup }
