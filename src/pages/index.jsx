import React from 'react'
import urlJoin from 'url-join'

import config from '~config'
import Layout from '~layouts/Home'

const { title, url } = config

const HomePage = props => <Layout {...props} />

export const getStaticProps = async () => ({
  props: { meta: { canonical: urlJoin(url, '/'), customTitle: true, title } }
})

export default HomePage
