import {
  Backdrop,
  PageContainer as ThemedPageContainer
} from '@newhighsco/chipset'
import { Meta } from '@newhighsco/press-start'
import Head from 'next/head'
import { node, object, string } from 'prop-types'
import React from 'react'

import Decoration from '~components/Decoration'
import Footer from '~components/Footer'
import Header from '~components/Header'
import backdropUrl from '~images/backdrop.svg'
import colors from '~styles/_colors.module.scss'

import styles from './PageContainer.module.scss'

const VARIANTS = {
  primary: { background: colors.fadedSundown, color: colors.sundown },
  secondary: { background: colors.fadedSunglow, color: colors.sunglow },
  tertiary: { background: colors.fadedLand, color: colors.land }
}

const PageContainer = ({ size = 'desktopLarge', variant, meta, children }) => {
  const theme = VARIANTS[variant]

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
      {theme && (
        <Head>
          <style>{`:root{--background:${theme.background};--color:${theme.color}}`}</style>
          <meta name="theme-color" content={theme.background} />
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
      <Decoration id="star" className={styles.star} />
      <Decoration id="diamond" className={styles.diamond} />
      <Decoration id="circle" className={styles.circle} />
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
