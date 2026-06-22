import { classNames } from '@newhighsco/chipset'
import { oneOf, string } from 'prop-types'
import React from 'react'

import { cssVariables } from '~styles/colors'

import styles from './Decoration.module.scss'
import sprite from './sprite.svg'

const COLORS = 'space'
const DIMENSIONS = {
  star: { width: 45 },
  'star-end': { width: 45, height: 43 },
  diamond: { width: 28, height: 36 },
  'diamond-end': { width: 28, height: 35 },
  circle: { width: 15 }
}

const Decoration = ({ id = 'star', className }) => {
  const { width, height = width } = DIMENSIONS[id]

  return (
    <svg
      aria-hidden
      className={classNames(styles.root, className)}
      style={{ ...cssVariables(COLORS), width, height }}
    >
      <use xlinkHref={`${sprite}#${id}`} />
    </svg>
  )
}

Decoration.propTypes = { id: oneOf(Object.keys(DIMENSIONS)), className: string }

export default Decoration
