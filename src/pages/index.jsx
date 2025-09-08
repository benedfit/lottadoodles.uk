import React from 'react'
import urlJoin from 'url-join'

import config from '~config'
import HomeLayout from '~layouts/HomeLayout'

const { title, url } = config

const HomePage = props => <HomeLayout {...props} />

export const getStaticProps = async () => ({
  props: { meta: { canonical: urlJoin(url, '/'), customTitle: true, title } }
})

export default HomePage
