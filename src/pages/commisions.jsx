import { Prose } from '@newhighsco/chipset'
import { object } from 'prop-types'
import React from 'react'
import urlJoin from 'url-join'

import PageContainer from '~components/PageContainer'
import config from '~config'

const { url } = config

const CommisionsPage = ({ meta }) => (
  <PageContainer meta={meta} variant="tertiary">
    <Prose align="center">
      <h1>Comissions</h1>
      <p>Coming soon</p>
    </Prose>
  </PageContainer>
)

export const getStaticProps = async () => ({
  props: {
    meta: { canonical: urlJoin(url, '/commisions') }
  }
})

CommisionsPage.propTypes = {
  meta: object
}

export default CommisionsPage
