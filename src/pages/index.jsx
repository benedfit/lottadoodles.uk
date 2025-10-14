import React from 'react'
import urlJoin from 'url-join'

import config from '~config'
import Layout from '~layouts/Home'

const { title, url } = config
const meta = { canonical: urlJoin(url, '/'), customTitle: true, title }

const HomePage = () => <Layout meta={meta} />

export default HomePage
