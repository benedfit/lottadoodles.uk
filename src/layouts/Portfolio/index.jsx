import { Prose } from '@newhighsco/chipset'
import { object } from 'prop-types'
import React from 'react'

import PageContainer from '~components/PageContainer'

const PortfolioLayout = ({ meta }) => (
  <PageContainer meta={meta} variant="primary">
    <Prose align="center">
      <h1>Portfolio</h1>
      <p>Coming soon</p>
    </Prose>
  </PageContainer>
)

PortfolioLayout.propTypes = { meta: object }

export default PortfolioLayout
