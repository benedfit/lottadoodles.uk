import classNames from 'classnames'
import { string } from 'prop-types'
import React from 'react'

import config from '~config'
import { ReactComponent as LogoSvg } from '~images/logo-lockup.svg'
import { cssVariables } from '~styles/colors'

import styles from './LogoLockup.module.scss'

const { name } = config

const LogoLockup = ({ className }) => (
  <LogoSvg
    className={classNames(styles.root, className)}
    title={name}
    style={cssVariables}
  />
)

LogoLockup.propTypes = {
  className: string
}

export default LogoLockup
export { LogoLockup }
