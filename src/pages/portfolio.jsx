import { Prose } from '@newhighsco/chipset'
import { object } from 'prop-types'
import React from 'react'
import urlJoin from 'url-join'

import PageContainer from '~components/PageContainer'
import config from '~config'

const { url } = config

const PortfolioPage = ({ meta }) => (
  <PageContainer meta={meta} variant="primary">
    <Prose align="center">
      <h1>Comissions</h1>
      <p>Coming soon</p>
    </Prose>
  </PageContainer>
)

export const getStaticProps = async () => ({
  props: { meta: { canonical: urlJoin(url, '/portfolio'), noindex: true } }
})

PortfolioPage.propTypes = {
  meta: object
}

export default PortfolioPage
