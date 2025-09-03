import {
  Backdrop,
  PageContainer as ThemedPageContainer
} from '@newhighsco/chipset'
import { Meta } from '@newhighsco/press-start'
import { node, object, string } from 'prop-types'
import React from 'react'

import Footer from '~components/Footer'
import Header from '~components/Header'
import backdropUrl from '~images/backdrop.svg'

import styles from './PageContainer.module.scss'

const PageContainer = ({ size = 'desktopLarge', meta, children }) => {
  return (
    <ThemedPageContainer
      header={<Header size={size} />}
      footer={
        <>
          <Footer size={size} />
          <Backdrop
            className={styles.backdrop}
            style={{ backgroundImage: `url(${backdropUrl})` }}
          />
        </>
      }
      size={size}
      gutter
    >
      <Meta
        {...meta}
        additionalLinkTags={[
          ...[{ path: 'cera-round-pro' }].map(
            ({ path, weight = 'regular', extension = 'woff' }) => ({
              rel: 'preload',
              href: `/fonts/${path}/${weight}.${extension}`,
              as: 'font',
              type: `font/${extension}`,
              crossOrigin: 'anonymous'
            })
          )
        ]}
      />
      {children}
    </ThemedPageContainer>
  )
}

PageContainer.propTypes = {
  size: string,
  meta: object,
  children: node
}

export default PageContainer
export { PageContainer }
