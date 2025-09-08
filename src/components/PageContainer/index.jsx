import {
  Backdrop,
  PageContainer as ThemedPageContainer
} from '@newhighsco/chipset'
import { Meta } from '@newhighsco/press-start'
import Head from 'next/head'
import { node, object, string } from 'prop-types'
import React from 'react'

import Footer from '~components/Footer'
import Header from '~components/Header'
import backdropUrl from '~images/backdrop.svg'
import colors from '~styles/_colors.module.scss'

import styles from './PageContainer.module.scss'

const VARIANTS = {
  primary: colors.fadedSundown,
  secondary: colors.fadedSunglow,
  tertiary: colors.fadedLand
}

const PageContainer = ({ size = 'desktopLarge', variant, meta, children }) => {
  const themeColor = VARIANTS[variant]

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
      {themeColor && (
        <Head>
          <style>{`:root{--background:${themeColor}}`}</style>
          <meta name="theme-color" content={themeColor} />
        </Head>
      )}
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
  variant: string,
  meta: object,
  children: node
}

export default PageContainer
export { PageContainer }
