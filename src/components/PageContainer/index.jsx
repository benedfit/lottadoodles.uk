import { PageContainer as ThemedPageContainer } from '@newhighsco/chipset'
import { Meta } from '@newhighsco/press-start'
import { node, object } from 'prop-types'
import React from 'react'

import Header from '~components/Header'

const PageContainer = ({ meta, children }) => (
  <ThemedPageContainer gutter header={<Header />}>
    <Meta {...meta} />
    {children}
  </ThemedPageContainer>
)

PageContainer.propTypes = {
  meta: object,
  children: node
}

export default PageContainer
export { PageContainer }
