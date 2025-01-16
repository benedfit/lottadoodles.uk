import { PageContainer as ThemedPageContainer } from '@newhighsco/chipset'
import { Meta } from '@newhighsco/press-start'
import { node, object } from 'prop-types'
import React from 'react'

import Footer from '~components/Footer'
import Header from '~components/Header'

const PageContainer = ({ meta, children }) => (
  <ThemedPageContainer gutter header={<Header />} footer={<Footer />}>
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

PageContainer.propTypes = {
  meta: object,
  children: node
}

export default PageContainer
export { PageContainer }
