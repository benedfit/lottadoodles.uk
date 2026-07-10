import '~styles/app'

import { AppPage } from '@newhighsco/press-start'
import React from 'react'

import config from '~config'
import { default as fonts } from '~styles/font-faces.module'
import theme from '~theme'

const App = props => (
  <AppPage {...props} theme={theme} config={config} fonts={fonts} />
)

export default App
