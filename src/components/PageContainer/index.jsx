import {
  Backdrop,
  PageContainer as ThemedPageContainer
} from '@newhighsco/chipset'
import { Meta } from '@newhighsco/press-start'
import { getImageProps } from 'next/image'
import { node, object } from 'prop-types'
import React from 'react'

import Footer from '~components/Footer'
import Header from '~components/Header'
import backdropUrl from '~images/backdrop.png'

import styles from './PageContainer.module.scss'

const PageContainer = ({ meta, children }) => {
  const {
    props: { src }
  } = getImageProps({ src: backdropUrl })

  return (
    <ThemedPageContainer
      gutter
      header={<Header />}
      footer={
        <>
          <Footer />
          <Backdrop
            className={styles.backdrop}
            style={{ backgroundImage: `url(${src})` }}
          />
        </>
      }
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
  meta: object,
  children: node
}

export default PageContainer
export { PageContainer }
