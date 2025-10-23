import { ContentContainer } from '@newhighsco/chipset'
import { node, string } from 'prop-types'
import React from 'react'

import styles from './Section.module.scss'

const Section = ({ size = 'desktopLarge', children }) => {
  if (!children) return null

  return (
    <ContentContainer
      size={size}
      theme={{ root: styles.root, content: styles.content }}
    >
      {children}
    </ContentContainer>
  )
}

Section.propTypes = { size: string, children: node }

export default Section
export { Section }
